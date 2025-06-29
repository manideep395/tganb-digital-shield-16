
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';
import {
  NewsItem,
  AnnouncementItem,
  ScrollingContentItem,
  TrainingItem,
  AchievementItem,
  CelebrityVideoItem,
  FAQItem,
  useContentData
} from '@/hooks/useContentData';

interface DatabaseAdminContextType {
  // Data from database
  newsData: NewsItem[];
  announcementData: AnnouncementItem[];
  scrollingData: ScrollingContentItem[];
  trainingData: TrainingItem[];
  achievementsData: AchievementItem[];
  celebrityVideos: CelebrityVideoItem[];
  faqsData: FAQItem[];
  drugReports: any[];
  isLoading: boolean;
  
  // Admin functions
  refetchData: () => void;
  
  // News management
  addNews: (news: Omit<NewsItem, 'id'>) => Promise<void>;
  updateNews: (id: string, news: Partial<NewsItem>) => Promise<void>;
  deleteNews: (id: string) => Promise<void>;
  
  // Announcements management
  addAnnouncement: (announcement: Omit<AnnouncementItem, 'id'>) => Promise<void>;
  updateAnnouncement: (id: string, announcement: Partial<AnnouncementItem>) => Promise<void>;
  deleteAnnouncement: (id: string) => Promise<void>;
  
  // Scrolling content management
  addScrollingContent: (content: Omit<ScrollingContentItem, 'id'>) => Promise<void>;
  updateScrollingContent: (id: string, content: Partial<ScrollingContentItem>) => Promise<void>;
  deleteScrollingContent: (id: string) => Promise<void>;
  
  // Training management
  addTraining: (training: Omit<TrainingItem, 'id'>) => Promise<void>;
  updateTraining: (id: string, training: Partial<TrainingItem>) => Promise<void>;
  deleteTraining: (id: string) => Promise<void>;
  
  // Achievement management
  addAchievement: (achievement: Omit<AchievementItem, 'id'>) => Promise<void>;
  updateAchievement: (id: string, achievement: Partial<AchievementItem>) => Promise<void>;
  deleteAchievement: (id: string) => Promise<void>;
  
  // Celebrity videos management
  addCelebrityVideo: (video: Omit<CelebrityVideoItem, 'id'>) => Promise<void>;
  updateCelebrityVideo: (id: string, video: Partial<CelebrityVideoItem>) => Promise<void>;
  deleteCelebrityVideo: (id: string) => Promise<void>;
  
  // FAQ management
  addFAQ: (faq: Omit<FAQItem, 'id'>) => Promise<void>;
  updateFAQ: (id: string, faq: Partial<FAQItem>) => Promise<void>;
  deleteFAQ: (id: string) => Promise<void>;
}

const DatabaseAdminContext = createContext<DatabaseAdminContextType | undefined>(undefined);

export const useDatabaseAdmin = () => {
  const context = useContext(DatabaseAdminContext);
  if (!context) {
    throw new Error('useDatabaseAdmin must be used within a DatabaseAdminProvider');
  }
  return context;
};

export const DatabaseAdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin } = useAuth();
  const {
    newsData,
    announcementData,
    scrollingData,
    trainingData,
    achievementsData,
    celebrityVideos,
    faqsData,
    isLoading,
    refetchData
  } = useContentData();
  
  const [drugReports, setDrugReports] = useState<any[]>([]);

  // Fetch drug reports
  useEffect(() => {
    const fetchDrugReports = async () => {
      const { data } = await supabase
        .from('drug_reports')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) {
        setDrugReports(data);
      }
    };

    if (isAdmin) {
      fetchDrugReports();
    }
  }, [isAdmin]);

  // News management functions
  const addNews = async (news: Omit<NewsItem, 'id'>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('news_articles')
      .insert({
        title: news.title,
        subtitle: news.subtitle,
        description: news.description,
        image_url: news.image_url,
        date: news.date,
        news_type: news.news_type,
        link: news.link
      });
    
    if (error) throw error;
    await refetchData();
  };

  const updateNews = async (id: string, news: Partial<NewsItem>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const updateData: any = {};
    if (news.title) updateData.title = news.title;
    if (news.subtitle) updateData.subtitle = news.subtitle;
    if (news.description) updateData.description = news.description;
    if (news.image_url) updateData.image_url = news.image_url;
    if (news.date) updateData.date = news.date;
    if (news.news_type) updateData.news_type = news.news_type;
    if (news.link) updateData.link = news.link;
    
    const { error } = await supabase
      .from('news_articles')
      .update(updateData)
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const deleteNews = async (id: string) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('news_articles')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  // Announcement management functions
  const addAnnouncement = async (announcement: Omit<AnnouncementItem, 'id'>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('announcements')
      .insert({
        name: announcement.name,
        date: announcement.date,
        attachment_link: announcement.attachment_link,
        description: announcement.description
      });
    
    if (error) throw error;
    await refetchData();
  };

  const updateAnnouncement = async (id: string, announcement: Partial<AnnouncementItem>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const updateData: any = {};
    if (announcement.name) updateData.name = announcement.name;
    if (announcement.date) updateData.date = announcement.date;
    if (announcement.attachment_link !== undefined) updateData.attachment_link = announcement.attachment_link;
    if (announcement.description !== undefined) updateData.description = announcement.description;
    
    const { error } = await supabase
      .from('announcements')
      .update(updateData)
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const deleteAnnouncement = async (id: string) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  // Scrolling content management functions
  const addScrollingContent = async (content: Omit<ScrollingContentItem, 'id'>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('scrolling_content')
      .insert({
        language: content.language,
        text: content.text,
        is_active: content.is_active
      });
    
    if (error) throw error;
    await refetchData();
  };

  const updateScrollingContent = async (id: string, content: Partial<ScrollingContentItem>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const updateData: any = {};
    if (content.language) updateData.language = content.language;
    if (content.text) updateData.text = content.text;
    if (content.is_active !== undefined) updateData.is_active = content.is_active;
    
    const { error } = await supabase
      .from('scrolling_content')
      .update(updateData)
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const deleteScrollingContent = async (id: string) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('scrolling_content')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  // Training management functions
  const addTraining = async (training: Omit<TrainingItem, 'id'>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('training_sessions')
      .insert(training);
    
    if (error) throw error;
    await refetchData();
  };

  const updateTraining = async (id: string, training: Partial<TrainingItem>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('training_sessions')
      .update(training)
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const deleteTraining = async (id: string) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('training_sessions')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  // Achievement management functions
  const addAchievement = async (achievement: Omit<AchievementItem, 'id'>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('achievements')
      .insert(achievement);
    
    if (error) throw error;
    await refetchData();
  };

  const updateAchievement = async (id: string, achievement: Partial<AchievementItem>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('achievements')
      .update(achievement)
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const deleteAchievement = async (id: string) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('achievements')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  // Celebrity video management functions
  const addCelebrityVideo = async (video: Omit<CelebrityVideoItem, 'id'>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('celebrity_videos')
      .insert({
        name: video.name,
        designation: video.designation,
        video_url: video.video_url
      });
    
    if (error) throw error;
    await refetchData();
  };

  const updateCelebrityVideo = async (id: string, video: Partial<CelebrityVideoItem>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const updateData: any = {};
    if (video.name) updateData.name = video.name;
    if (video.designation) updateData.designation = video.designation;
    if (video.video_url) updateData.video_url = video.video_url;
    
    const { error } = await supabase
      .from('celebrity_videos')
      .update(updateData)
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const deleteCelebrityVideo = async (id: string) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('celebrity_videos')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  // FAQ management functions
  const addFAQ = async (faq: Omit<FAQItem, 'id'>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('faqs')
      .insert(faq);
    
    if (error) throw error;
    await refetchData();
  };

  const updateFAQ = async (id: string, faq: Partial<FAQItem>) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('faqs')
      .update(faq)
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const deleteFAQ = async (id: string) => {
    if (!isAdmin) throw new Error('Admin access required');
    
    const { error } = await supabase
      .from('faqs')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await refetchData();
  };

  const value = {
    newsData,
    announcementData,
    scrollingData,
    trainingData,
    achievementsData,
    celebrityVideos,
    faqsData,
    drugReports,
    isLoading,
    refetchData,
    addNews,
    updateNews,
    deleteNews,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    addScrollingContent,
    updateScrollingContent,
    deleteScrollingContent,
    addTraining,
    updateTraining,
    deleteTraining,
    addAchievement,
    updateAchievement,
    deleteAchievement,
    addCelebrityVideo,
    updateCelebrityVideo,
    deleteCelebrityVideo,
    addFAQ,
    updateFAQ,
    deleteFAQ
  };

  return (
    <DatabaseAdminContext.Provider value={value}>
      {children}
    </DatabaseAdminContext.Provider>
  );
};
