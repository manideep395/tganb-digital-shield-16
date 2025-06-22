
-- Create Anti Drug Soldier enrollment table
CREATE TABLE public.anti_drug_soldiers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  parent_guardian_name TEXT NOT NULL,
  gender TEXT NOT NULL CHECK (gender IN ('Male', 'Female', 'Others')),
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  district TEXT NOT NULL,
  institution_name TEXT NOT NULL,
  institution_type TEXT NOT NULL CHECK (institution_type IN ('School', 'College', 'Office')),
  class_course_designation TEXT,
  photo_url TEXT,
  remarks TEXT,
  certificate_id TEXT NOT NULL UNIQUE,
  enrollment_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create certificate verification table
CREATE TABLE public.certificate_verification (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  certificate_id TEXT NOT NULL UNIQUE,
  student_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security
ALTER TABLE public.anti_drug_soldiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_verification ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public service)
CREATE POLICY "Allow public insert on anti_drug_soldiers" 
  ON public.anti_drug_soldiers 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public select on anti_drug_soldiers" 
  ON public.anti_drug_soldiers 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public select on certificate_verification" 
  ON public.certificate_verification 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public insert on certificate_verification" 
  ON public.certificate_verification 
  FOR INSERT 
  WITH CHECK (true);

-- Create storage bucket for photos
INSERT INTO storage.buckets (id, name, public) VALUES ('soldier-photos', 'soldier-photos', true);

-- Create storage policy for public access
CREATE POLICY "Public can upload soldier photos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'soldier-photos');

CREATE POLICY "Public can view soldier photos" ON storage.objects
  FOR SELECT USING (bucket_id = 'soldier-photos');
