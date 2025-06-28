
-- Create admin users table with secure authentication
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE,
  failed_login_attempts INTEGER DEFAULT 0,
  locked_until TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true
);

-- Create drug reports table for secure server-side storage
CREATE TABLE public.drug_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_type TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT false,
  reporter_name TEXT,
  reporter_email TEXT,
  reporter_phone TEXT,
  location_incident TEXT NOT NULL,
  incident_date_time TIMESTAMP WITH TIME ZONE,
  date_unknown BOOLEAN DEFAULT false,
  detailed_description TEXT NOT NULL,
  evidence_file_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Create audit log table for tracking all actions
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  action TEXT NOT NULL,
  table_name TEXT,
  record_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create rate limiting table
CREATE TABLE public.rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address INET NOT NULL,
  action TEXT NOT NULL,
  attempts INTEGER DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  blocked_until TIMESTAMP WITH TIME ZONE,
  UNIQUE(ip_address, action)
);

-- Create Anti-Drug Soldier enrollment table
CREATE TABLE public.anti_drug_soldiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  parent_guardian_name TEXT NOT NULL,
  gender TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  district TEXT NOT NULL,
  institution_name TEXT NOT NULL,
  institution_type TEXT NOT NULL,
  class_course_designation TEXT NOT NULL,
  photo_url TEXT,
  remarks TEXT,
  certificate_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create certificate verification table
CREATE TABLE public.certificate_verification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_id TEXT UNIQUE NOT NULL,
  student_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for secure file uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('evidence-files', 'evidence-files', false);
INSERT INTO storage.buckets (id, name, public) VALUES ('soldier-photos', 'soldier-photos', false);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.drug_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anti_drug_soldiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_verification ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for admin users (only admins can access)
CREATE POLICY "Admin users can manage admin accounts" ON public.admin_users
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- Create RLS policies for drug reports (public can insert, admins can view all)
CREATE POLICY "Anyone can submit drug reports" ON public.drug_reports
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all drug reports" ON public.drug_reports
  FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update drug reports" ON public.drug_reports
  FOR UPDATE USING (auth.jwt() ->> 'role' = 'admin');

-- Create RLS policies for audit logs (only admins can view)
CREATE POLICY "Admins can view audit logs" ON public.audit_logs
  FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');

-- Create RLS policies for rate limits (system use only)
CREATE POLICY "System can manage rate limits" ON public.rate_limits
  FOR ALL USING (true);

-- Create RLS policies for anti-drug soldiers (public can insert, public can verify)
CREATE POLICY "Anyone can enroll as anti-drug soldier" ON public.anti_drug_soldiers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view anti-drug soldiers for verification" ON public.anti_drug_soldiers
  FOR SELECT USING (true);

-- Create RLS policies for certificate verification (public access)
CREATE POLICY "Anyone can verify certificates" ON public.certificate_verification
  FOR SELECT USING (true);

CREATE POLICY "System can insert certificate verification" ON public.certificate_verification
  FOR INSERT WITH CHECK (true);

-- Create storage policies for secure file access
CREATE POLICY "Admins can view evidence files" ON storage.objects
  FOR SELECT USING (bucket_id = 'evidence-files' AND auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Anyone can upload evidence files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'evidence-files');

CREATE POLICY "Anyone can upload soldier photos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'soldier-photos');

CREATE POLICY "Anyone can view soldier photos" ON storage.objects
  FOR SELECT USING (bucket_id = 'soldier-photos');

-- Create function to hash passwords
CREATE OR REPLACE FUNCTION public.hash_password(password TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN crypt(password, gen_salt('bf', 10));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to verify passwords
CREATE OR REPLACE FUNCTION public.verify_password(password TEXT, hash TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN crypt(password, hash) = hash;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function for audit logging
CREATE OR REPLACE FUNCTION public.log_audit_event(
  p_user_id UUID,
  p_action TEXT,
  p_table_name TEXT,
  p_record_id UUID,
  p_old_values JSONB,
  p_new_values JSONB,
  p_ip_address INET,
  p_user_agent TEXT
)
RETURNS UUID AS $$
DECLARE
  log_id UUID;
BEGIN
  INSERT INTO public.audit_logs (
    user_id, action, table_name, record_id, old_values, new_values, ip_address, user_agent
  ) VALUES (
    p_user_id, p_action, p_table_name, p_record_id, p_old_values, p_new_values, p_ip_address, p_user_agent
  ) RETURNING id INTO log_id;
  
  RETURN log_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function for rate limiting
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip_address INET,
  p_action TEXT,
  p_max_attempts INTEGER DEFAULT 5,
  p_window_minutes INTEGER DEFAULT 15
)
RETURNS BOOLEAN AS $$
DECLARE
  current_attempts INTEGER;
  window_start TIMESTAMP WITH TIME ZONE;
BEGIN
  -- Clean up old entries
  DELETE FROM public.rate_limits 
  WHERE window_start < NOW() - INTERVAL '1 hour';
  
  -- Check current attempts
  SELECT attempts, rate_limits.window_start 
  INTO current_attempts, window_start
  FROM public.rate_limits 
  WHERE ip_address = p_ip_address AND action = p_action;
  
  IF current_attempts IS NULL THEN
    -- First attempt
    INSERT INTO public.rate_limits (ip_address, action, attempts, window_start)
    VALUES (p_ip_address, p_action, 1, NOW());
    RETURN true;
  END IF;
  
  -- Check if window has expired
  IF window_start < NOW() - (p_window_minutes || ' minutes')::INTERVAL THEN
    -- Reset counter
    UPDATE public.rate_limits 
    SET attempts = 1, window_start = NOW(), blocked_until = NULL
    WHERE ip_address = p_ip_address AND action = p_action;
    RETURN true;
  END IF;
  
  -- Check if blocked
  IF current_attempts >= p_max_attempts THEN
    UPDATE public.rate_limits 
    SET blocked_until = NOW() + INTERVAL '1 hour'
    WHERE ip_address = p_ip_address AND action = p_action;
    RETURN false;
  END IF;
  
  -- Increment attempts
  UPDATE public.rate_limits 
  SET attempts = attempts + 1
  WHERE ip_address = p_ip_address AND action = p_action;
  
  RETURN true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert default admin user (password: SecureAdmin2024!)
INSERT INTO public.admin_users (email, password_hash, role) 
VALUES ('admin@tganb.gov.in', public.hash_password('SecureAdmin2024!'), 'admin');

-- Create indexes for performance
CREATE INDEX idx_drug_reports_status ON public.drug_reports(status);
CREATE INDEX idx_drug_reports_created_at ON public.drug_reports(created_at);
CREATE INDEX idx_audit_logs_created_at ON public.audit_logs(created_at);
CREATE INDEX idx_rate_limits_ip_action ON public.rate_limits(ip_address, action);
CREATE INDEX idx_certificate_verification_cert_id ON public.certificate_verification(certificate_id);
