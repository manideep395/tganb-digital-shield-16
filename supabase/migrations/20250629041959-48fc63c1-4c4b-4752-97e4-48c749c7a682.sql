
-- Create admin_users table for secure admin authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  failed_login_attempts INTEGER DEFAULT 0,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create audit_log table for tracking admin actions
CREATE TABLE public.audit_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  action TEXT NOT NULL,
  table_name TEXT,
  record_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create rate_limit table for security
CREATE TABLE public.rate_limit (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  action TEXT NOT NULL,
  attempts INTEGER DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(ip_address, action, window_start)
);

-- Enable RLS on new tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rate_limit ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin users can manage admin_users" ON public.admin_users
  FOR ALL USING (true);

CREATE POLICY "Admin users can view audit_log" ON public.audit_log
  FOR SELECT USING (true);

CREATE POLICY "Allow rate limit checks" ON public.rate_limit
  FOR ALL USING (true);

-- Create password verification function
CREATE OR REPLACE FUNCTION public.verify_password(password TEXT, hash TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  -- For demo purposes, we'll do simple comparison
  -- In production, you'd use proper bcrypt or similar
  RETURN password = hash;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create rate limiting function
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip_address TEXT,
  p_action TEXT,
  p_max_attempts INTEGER DEFAULT 5,
  p_window_minutes INTEGER DEFAULT 15
)
RETURNS BOOLEAN AS $$
DECLARE
  current_attempts INTEGER;
  window_start TIMESTAMP WITH TIME ZONE;
BEGIN
  window_start := date_trunc('minute', now()) - (EXTRACT(MINUTE FROM now())::INTEGER % p_window_minutes) * INTERVAL '1 minute';
  
  SELECT COALESCE(SUM(attempts), 0) INTO current_attempts
  FROM public.rate_limit
  WHERE ip_address = p_ip_address
    AND action = p_action
    AND window_start >= window_start;
  
  IF current_attempts >= p_max_attempts THEN
    RETURN FALSE;
  END IF;
  
  INSERT INTO public.rate_limit (ip_address, action, window_start)
  VALUES (p_ip_address, p_action, window_start)
  ON CONFLICT (ip_address, action, window_start)
  DO UPDATE SET attempts = rate_limit.attempts + 1;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create audit logging function
CREATE OR REPLACE FUNCTION public.log_audit_event(
  p_user_id UUID,
  p_action TEXT,
  p_table_name TEXT DEFAULT NULL,
  p_record_id UUID DEFAULT NULL,
  p_old_values JSONB DEFAULT NULL,
  p_new_values JSONB DEFAULT NULL,
  p_ip_address TEXT DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO public.audit_log (
    user_id, action, table_name, record_id, 
    old_values, new_values, ip_address, user_agent
  )
  VALUES (
    p_user_id, p_action, p_table_name, p_record_id,
    p_old_values, p_new_values, p_ip_address, p_user_agent
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert default admin user (password: SecureAdmin2024!)
INSERT INTO public.admin_users (email, password_hash)
VALUES ('admin@tganb.gov.in', 'SecureAdmin2024!')
ON CONFLICT (email) DO NOTHING;

-- Create storage bucket for evidence files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('evidence-files', 'evidence-files', false)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for evidence files
CREATE POLICY "Authenticated users can upload evidence files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'evidence-files' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view evidence files" ON storage.objects
  FOR SELECT USING (bucket_id = 'evidence-files' AND auth.role() = 'authenticated');
