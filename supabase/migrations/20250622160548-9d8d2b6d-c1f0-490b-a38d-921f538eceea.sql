
-- Create a table for drug reports
CREATE TABLE public.drug_reports (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  report_type TEXT NOT NULL,
  location_incident TEXT NOT NULL,
  incident_date_time TIMESTAMP WITH TIME ZONE,
  date_unknown BOOLEAN DEFAULT false,
  detailed_description TEXT NOT NULL,
  is_anonymous BOOLEAN NOT NULL DEFAULT true,
  reporter_name TEXT,
  reporter_email TEXT,
  reporter_phone TEXT,
  evidence_file_url TEXT,
  evidence_file_name TEXT,
  evidence_file_size INTEGER,
  ip_address TEXT,
  user_agent TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'resolved', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  reviewed_by TEXT,
  reviewer_notes TEXT,
  
  -- Validation constraints
  CONSTRAINT check_description_length CHECK (char_length(detailed_description) >= 100),
  CONSTRAINT check_required_fields_anonymous CHECK (
    (is_anonymous = true) OR 
    (is_anonymous = false AND reporter_name IS NOT NULL AND reporter_email IS NOT NULL)
  )
);

-- Add Row Level Security (RLS) to protect sensitive data
ALTER TABLE public.drug_reports ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can submit reports)
CREATE POLICY "Anyone can submit drug reports" 
  ON public.drug_reports 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for admin access only (future implementation)
CREATE POLICY "Only admins can view drug reports" 
  ON public.drug_reports 
  FOR SELECT 
  USING (false); -- Will be updated when admin auth is implemented

-- Create policy for admin updates only (future implementation)
CREATE POLICY "Only admins can update drug reports" 
  ON public.drug_reports 
  FOR UPDATE 
  USING (false); -- Will be updated when admin auth is implemented

-- Create storage bucket for evidence files
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'drug-report-evidence',
  'drug-report-evidence',
  false,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/webm', 'application/pdf']
);

-- Create storage policy for evidence uploads
CREATE POLICY "Anyone can upload evidence files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'drug-report-evidence');

-- Create storage policy for admin access to evidence files
CREATE POLICY "Only admins can access evidence files"
ON storage.objects FOR SELECT
USING (bucket_id = 'drug-report-evidence' AND false); -- Will be updated when admin auth is implemented
