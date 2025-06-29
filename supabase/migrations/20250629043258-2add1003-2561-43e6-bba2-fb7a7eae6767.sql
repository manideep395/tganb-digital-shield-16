
-- Create tables for all admin-managed content
CREATE TABLE public.news_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  date TEXT,
  news_type TEXT NOT NULL CHECK (news_type IN ('Breaking News', 'Shocking News', 'Important Update', 'Achievement', 'Alert', 'Event')),
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  date TEXT NOT NULL,
  attachment_link TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.scrolling_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  language TEXT NOT NULL,
  text TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.training_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT,
  location TEXT,
  instructor TEXT,
  capacity INTEGER,
  image_url TEXT,
  registration_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.celebrity_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  video_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert initial data from your existing files
INSERT INTO public.news_articles (title, subtitle, description, image_url, date, news_type, link) VALUES
('Anti-drug awareness week launched in Telangana!', 'Campaign with 2,000 student; outreach to continue till June 26', 'HYDERABAD: Telangana Anti-Narcotics Bureau (TGANB) on Saturday launched a week-long Anti-Drug Awareness campaign involving students. At an event held at Integrated Command and Control Centre (I-CCC), Banjara Hills, 2,000 students from 15 schools attended, where in TGANB officials showcased a series of testimonies and short films. A ''pledge wall'' was installed for participants. DGP Jitender, who was the chief guest, addressed the gathering, calling students the ''soldiers'' of the state''s anti-drug efforts. The campaign would continue until June 26, with events scheduled at venues, including I-CCC, Banjara Hills and Jala Vihar on Necklace Road. Officials and partner organisations would also visit schools and colleges for outreach activities.', '/uploads/f8dc5c1c-f04c-4da0-914e-58f74d4e9436.png', 'June 2024', 'Breaking News', '/news-detail/1'),
('Major drug bust in Hyderabad - 50kg cocaine seized', 'International drug cartel dismantled by TGANB', 'In a major operation, TGANB officials seized 50kg of cocaine worth ₹200 crores and arrested 8 members of an international drug cartel operating in Hyderabad.', '/uploads/f8dc5c1c-f04c-4da0-914e-58f74d4e9436.png', 'Dec 2024', 'Shocking News', '/news-detail/2');

INSERT INTO public.announcements (name, date, attachment_link, description) VALUES
('Registration open for Anti-Drug Awareness Certificate Program', 'Dec 20, 2024', 'https://drive.google.com/file/d/example1/view', 'Join our comprehensive certificate program to become an anti-drug awareness ambassador'),
('New helpline numbers activated for drug crime reporting', 'Dec 18, 2024', NULL, 'Enhanced 24/7 support system now available for anonymous reporting'),
('Training workshops scheduled for educational institutions', 'Dec 15, 2024', 'https://drive.google.com/file/d/example2/view', 'Specialized training sessions for teachers and counselors');

INSERT INTO public.scrolling_content (language, text) VALUES
('Multilingual', 'If you have any information related to drugs, please call our toll-free number 1908 or submit it through the anonymous report section. Your personal details will never be disclosed. · మీకు మాదకద్రవ్యాల గురించి ఏవైనా సమాచారాలు తెలిస్తే, దయచేసి మా టోల్ ఫ్రీ నంబర్‌కు కాల్ చేయండి లేదా అనామకంగా నివేదిక సెక్షన్ ద్వారా తెలియజేయండి. మీ వ్యక్తిగత వివరాలు ఎవరికి తెలియవు. · यदि आपको नशीली दवाओं से जुड़ी कोई जानकारी है, तो कृपया हमारे टोल-फ्री नंबर पर कॉल करें या गुमनाम रिपोर्ट अनुभाग के माध्यम से जानकारी साझा करें। आपकी व्यक्तिगत जानकारी किसी के साथ साझा नहीं की जाएगी। · اگر آپ کے پاس منشیات سے متعلق کوئی معلومات ہیں تو براہ کرم ہمارے ٹول فری نمبر پر کال کریں یا گمنام رپورٹ سیکشن کے ذریعے ہمیں آگاہ کریں۔ آپ کی ذاتی معلومات کو ظاہر نہیں کیا جائے گا۔');

INSERT INTO public.celebrity_videos (name, designation, video_url) VALUES
('Prabhas', 'Film Actor', 'https://youtu.be/B6-IjofKL_w?feature=shared'),
('Dr. Manchu Mohan Babu', 'Film Actor', 'https://youtu.be/Vt8X1k8Gyhw?feature=shared'),
('Manchu Vishnu', 'Film Actor', 'https://youtu.be/unioc54vmRI?feature=shared');

-- Enable Row Level Security for admin-only access
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scrolling_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.celebrity_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access and admin write access
CREATE POLICY "Public read access for news" ON public.news_articles FOR SELECT USING (true);
CREATE POLICY "Public read access for announcements" ON public.announcements FOR SELECT USING (true);
CREATE POLICY "Public read access for scrolling content" ON public.scrolling_content FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access for trainings" ON public.training_sessions FOR SELECT USING (true);
CREATE POLICY "Public read access for achievements" ON public.achievements FOR SELECT USING (true);
CREATE POLICY "Public read access for celebrity videos" ON public.celebrity_videos FOR SELECT USING (true);
CREATE POLICY "Public read access for faqs" ON public.faqs FOR SELECT USING (true);

-- Admin policies (will be updated once proper admin authentication is implemented)
CREATE POLICY "Admin full access news" ON public.news_articles FOR ALL USING (true);
CREATE POLICY "Admin full access announcements" ON public.announcements FOR ALL USING (true);
CREATE POLICY "Admin full access scrolling" ON public.scrolling_content FOR ALL USING (true);
CREATE POLICY "Admin full access trainings" ON public.training_sessions FOR ALL USING (true);
CREATE POLICY "Admin full access achievements" ON public.achievements FOR ALL USING (true);
CREATE POLICY "Admin full access videos" ON public.celebrity_videos FOR ALL USING (true);
CREATE POLICY "Admin full access faqs" ON public.faqs FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX idx_news_articles_date ON public.news_articles(date);
CREATE INDEX idx_announcements_date ON public.announcements(date);
CREATE INDEX idx_scrolling_active ON public.scrolling_content(is_active);
