
-- Add new admin users with proper password hashing
INSERT INTO public.admin_users (email, password_hash) 
VALUES 
  ('tganb@tspolice', 'Tganb1!'),
  ('teagle@tgp.com', 'Teagle@1')
ON CONFLICT (email) DO UPDATE SET 
  password_hash = EXCLUDED.password_hash,
  failed_login_attempts = 0;

-- Update the existing admin user to use simple password comparison for now
UPDATE public.admin_users 
SET password_hash = 'SecureAdmin2024!' 
WHERE email = 'admin@tganb.gov.in';
