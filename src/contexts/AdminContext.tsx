
import React, { createContext, useContext, useState, useEffect } from 'react';
import { newsData as initialNewsData, NewsItem } from '../data/newsData';
import { announcementData as initialAnnouncementData, AnnouncementItem } from '../data/announcementData';
import { trainingData as initialTrainingData, TrainingSession } from '../data/trainingData';
import { achievementsData as initialAchievementsData, Achievement } from '../data/achievementsData';
import { celebrityVideos as initialCelebrityVideos } from '../data/celebrityVideos';

interface CelebrityVideo {
  name: string;
  designation: string;
  videoUrl: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  newsData: NewsItem[];
  announcementData: AnnouncementItem[];
  trainingData: TrainingSession[];
  achievementsData: Achievement[];
  celebrityVideos: CelebrityVideo[];
  faqsData: FAQItem[];
  scrollingData: any[];
  totalReports: number;
  // News management
  addNews: (news: NewsItem) => void;
  updateNews: (index: number, news: NewsItem) => void;
  deleteNews: (index: number) => void;
  // Announcement management
  addAnnouncement: (announcement: AnnouncementItem) => void;
  updateAnnouncement: (index: number, announcement: AnnouncementItem) => void;
  deleteAnnouncement: (index: number) => void;
  // Training management
  addTraining: (training: TrainingSession) => void;
  updateTraining: (index: number, training: TrainingSession) => void;
  deleteTraining: (index: number) => void;
  // Achievement management
  addAchievement: (achievement: Achievement) => void;
  updateAchievement: (index: number, achievement: Achievement) => void;
  deleteAchievement: (index: number) => void;
  // Celebrity video management
  addCelebrityVideo: (video: CelebrityVideo) => void;
  updateCelebrityVideo: (index: number, video: CelebrityVideo) => void;
  deleteCelebrityVideo: (index: number) => void;
  // FAQ management
  addFAQ: (faq: FAQItem) => void;
  updateFAQ: (index: number, faq: FAQItem) => void;
  deleteFAQ: (index: number) => void;
  // Scrolling data management
  updateScrollingData: (data: any[]) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newsData, setNewsData] = useState<NewsItem[]>(initialNewsData);
  const [announcementData, setAnnouncementData] = useState<AnnouncementItem[]>(initialAnnouncementData);
  const [trainingData, setTrainingData] = useState<TrainingSession[]>(initialTrainingData);
  const [achievementsData, setAchievementsData] = useState<Achievement[]>(initialAchievementsData);
  const [celebrityVideos, setCelebrityVideos] = useState<CelebrityVideo[]>(initialCelebrityVideos);
  const [faqsData, setFaqsData] = useState<FAQItem[]>([]);
  const [scrollingData, setScrollingData] = useState<any[]>([]);
  const [totalReports, setTotalReports] = useState(0);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('admin-auth');
    const storedNews = localStorage.getItem('admin-news');
    const storedAnnouncements = localStorage.getItem('admin-announcements');
    const storedTrainings = localStorage.getItem('admin-trainings');
    const storedAchievements = localStorage.getItem('admin-achievements');
    const storedCelebrityVideos = localStorage.getItem('admin-celebrity-videos');
    const storedFAQs = localStorage.getItem('admin-faqs');
    const storedReports = localStorage.getItem('admin-reports');

    if (storedAuth) setIsAuthenticated(JSON.parse(storedAuth));
    if (storedNews) setNewsData(JSON.parse(storedNews));
    if (storedAnnouncements) setAnnouncementData(JSON.parse(storedAnnouncements));
    if (storedTrainings) setTrainingData(JSON.parse(storedTrainings));
    if (storedAchievements) setAchievementsData(JSON.parse(storedAchievements));
    if (storedCelebrityVideos) setCelebrityVideos(JSON.parse(storedCelebrityVideos));
    if (storedFAQs) setFaqsData(JSON.parse(storedFAQs));
    if (storedReports) setTotalReports(JSON.parse(storedReports));
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'tganb@2024') {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-auth');
  };

  // News management functions
  const addNews = (news: NewsItem) => {
    const updatedNews = [...newsData, news];
    setNewsData(updatedNews);
    localStorage.setItem('admin-news', JSON.stringify(updatedNews));
  };

  const updateNews = (index: number, news: NewsItem) => {
    const updatedNews = [...newsData];
    updatedNews[index] = news;
    setNewsData(updatedNews);
    localStorage.setItem('admin-news', JSON.stringify(updatedNews));
  };

  const deleteNews = (index: number) => {
    const updatedNews = newsData.filter((_, i) => i !== index);
    setNewsData(updatedNews);
    localStorage.setItem('admin-news', JSON.stringify(updatedNews));
  };

  // Announcement management functions
  const addAnnouncement = (announcement: AnnouncementItem) => {
    const updatedAnnouncements = [...announcementData, announcement];
    setAnnouncementData(updatedAnnouncements);
    localStorage.setItem('admin-announcements', JSON.stringify(updatedAnnouncements));
  };

  const updateAnnouncement = (index: number, announcement: AnnouncementItem) => {
    const updatedAnnouncements = [...announcementData];
    updatedAnnouncements[index] = announcement;
    setAnnouncementData(updatedAnnouncements);
    localStorage.setItem('admin-announcements', JSON.stringify(updatedAnnouncements));
  };

  const deleteAnnouncement = (index: number) => {
    const updatedAnnouncements = announcementData.filter((_, i) => i !== index);
    setAnnouncementData(updatedAnnouncements);
    localStorage.setItem('admin-announcements', JSON.stringify(updatedAnnouncements));
  };

  // Training management functions
  const addTraining = (training: TrainingSession) => {
    const updatedTrainings = [...trainingData, { ...training, id: Date.now() }];
    setTrainingData(updatedTrainings);
    localStorage.setItem('admin-trainings', JSON.stringify(updatedTrainings));
  };

  const updateTraining = (index: number, training: TrainingSession) => {
    const updatedTrainings = [...trainingData];
    updatedTrainings[index] = training;
    setTrainingData(updatedTrainings);
    localStorage.setItem('admin-trainings', JSON.stringify(updatedTrainings));
  };

  const deleteTraining = (index: number) => {
    const updatedTrainings = trainingData.filter((_, i) => i !== index);
    setTrainingData(updatedTrainings);
    localStorage.setItem('admin-trainings', JSON.stringify(updatedTrainings));
  };

  // Achievement management functions
  const addAchievement = (achievement: Achievement) => {
    const updatedAchievements = [...achievementsData, achievement];
    setAchievementsData(updatedAchievements);
    localStorage.setItem('admin-achievements', JSON.stringify(updatedAchievements));
  };

  const updateAchievement = (index: number, achievement: Achievement) => {
    const updatedAchievements = [...achievementsData];
    updatedAchievements[index] = achievement;
    setAchievementsData(updatedAchievements);
    localStorage.setItem('admin-achievements', JSON.stringify(updatedAchievements));
  };

  const deleteAchievement = (index: number) => {
    const updatedAchievements = achievementsData.filter((_, i) => i !== index);
    setAchievementsData(updatedAchievements);
    localStorage.setItem('admin-achievements', JSON.stringify(updatedAchievements));
  };

  // Celebrity video management functions
  const addCelebrityVideo = (video: CelebrityVideo) => {
    const updatedVideos = [...celebrityVideos, video];
    setCelebrityVideos(updatedVideos);
    localStorage.setItem('admin-celebrity-videos', JSON.stringify(updatedVideos));
  };

  const updateCelebrityVideo = (index: number, video: CelebrityVideo) => {
    const updatedVideos = [...celebrityVideos];
    updatedVideos[index] = video;
    setCelebrityVideos(updatedVideos);
    localStorage.setItem('admin-celebrity-videos', JSON.stringify(updatedVideos));
  };

  const deleteCelebrityVideo = (index: number) => {
    const updatedVideos = celebrityVideos.filter((_, i) => i !== index);
    setCelebrityVideos(updatedVideos);
    localStorage.setItem('admin-celebrity-videos', JSON.stringify(updatedVideos));
  };

  // FAQ management functions
  const addFAQ = (faq: FAQItem) => {
    const updatedFAQs = [...faqsData, faq];
    setFaqsData(updatedFAQs);
    localStorage.setItem('admin-faqs', JSON.stringify(updatedFAQs));
  };

  const updateFAQ = (index: number, faq: FAQItem) => {
    const updatedFAQs = [...faqsData];
    updatedFAQs[index] = faq;
    setFaqsData(updatedFAQs);
    localStorage.setItem('admin-faqs', JSON.stringify(updatedFAQs));
  };

  const deleteFAQ = (index: number) => {
    const updatedFAQs = faqsData.filter((_, i) => i !== index);
    setFaqsData(updatedFAQs);
    localStorage.setItem('admin-faqs', JSON.stringify(updatedFAQs));
  };

  const updateScrollingData = (data: any[]) => {
    setScrollingData(data);
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    newsData,
    announcementData,
    trainingData,
    achievementsData,
    celebrityVideos,
    faqsData,
    scrollingData,
    totalReports,
    addNews,
    updateNews,
    deleteNews,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
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
    deleteFAQ,
    updateScrollingData
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
