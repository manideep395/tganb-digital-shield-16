
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface NewsItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image_url: string;
  date?: string;
  news_type: 'Breaking News' | 'Shocking News' | 'Important Update' | 'Achievement' | 'Alert' | 'Event';
  link?: string;
}

export interface AnnouncementItem {
  id: string;
  name: string;
  date: string;
  attachment_link?: string;
  description?: string;
}

export interface ScrollingContentItem {
  id: string;
  language: string;
  text: string;
  is_active: boolean;
}

export interface TrainingItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  instructor?: string;
  capacity?: number;
  image_url?: string;
  registration_link?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url?: string;
  category?: string;
}

export interface CelebrityVideoItem {
  id: string;
  name: string;
  designation: string;
  video_url: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const useContentData = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [announcementData, setAnnouncementData] = useState<AnnouncementItem[]>([]);
  const [scrollingData, setScrollingData] = useState<ScrollingContentItem[]>([]);
  const [trainingData, setTrainingData] = useState<TrainingItem[]>([]);
  const [achievementsData, setAchievementsData] = useState<AchievementItem[]>([]);
  const [celebrityVideos, setCelebrityVideos] = useState<CelebrityVideoItem[]>([]);
  const [faqsData, setFaqsData] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllData = async () => {
    try {
      setIsLoading(true);
      
      const [
        newsResponse,
        announcementsResponse,
        scrollingResponse,
        trainingsResponse,
        achievementsResponse,
        videosResponse,
        faqsResponse
      ] = await Promise.all([
        supabase.from('news_articles').select('*').order('created_at', { ascending: false }),
        supabase.from('announcements').select('*').order('created_at', { ascending: false }),
        supabase.from('scrolling_content').select('*').eq('is_active', true).order('created_at', { ascending: false }),
        supabase.from('training_sessions').select('*').order('created_at', { ascending: false }),
        supabase.from('achievements').select('*').order('created_at', { ascending: false }),
        supabase.from('celebrity_videos').select('*').order('created_at', { ascending: false }),
        supabase.from('faqs').select('*').order('category', { ascending: true })
      ]);

      if (newsResponse.data) {
        const validNewsTypes = ['Breaking News', 'Shocking News', 'Important Update', 'Achievement', 'Alert', 'Event'];
        setNewsData(newsResponse.data.map(item => ({
          id: item.id,
          title: item.title,
          subtitle: item.subtitle || undefined,
          description: item.description,
          image_url: item.image_url,
          date: item.date || undefined,
          news_type: validNewsTypes.includes(item.news_type) 
            ? item.news_type as NewsItem['news_type']
            : 'Important Update',
          link: item.link || undefined
        })));
      }

      if (announcementsResponse.data) {
        setAnnouncementData(announcementsResponse.data.map(item => ({
          id: item.id,
          name: item.name,
          date: item.date,
          attachment_link: item.attachment_link || undefined,
          description: item.description || undefined
        })));
      }

      if (scrollingResponse.data) {
        setScrollingData(scrollingResponse.data);
      }

      if (trainingsResponse.data) {
        setTrainingData(trainingsResponse.data);
      }

      if (achievementsResponse.data) {
        setAchievementsData(achievementsResponse.data);
      }

      if (videosResponse.data) {
        setCelebrityVideos(videosResponse.data);
      }

      if (faqsResponse.data) {
        setFaqsData(faqsResponse.data);
      }

    } catch (error) {
      console.error('Error fetching content data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return {
    newsData,
    announcementData,
    scrollingData,
    trainingData,
    achievementsData,
    celebrityVideos,
    faqsData,
    isLoading,
    refetchData: fetchAllData
  };
};
