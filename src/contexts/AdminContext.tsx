
import React, { createContext, useContext, useState, useEffect } from 'react';
import { newsData as initialNewsData, NewsItem } from '../data/newsData';
import { announcementData as initialAnnouncementData, AnnouncementItem } from '../data/announcementData';
import { trainingData as initialTrainingData, TrainingSession } from '../data/trainingData';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  newsData: NewsItem[];
  announcementData: AnnouncementItem[];
  trainingData: TrainingSession[];
  scrollingData: any[];
  totalReports: number;
  addNews: (news: NewsItem) => void;
  updateNews: (index: number, news: NewsItem) => void;
  deleteNews: (index: number) => void;
  addAnnouncement: (announcement: AnnouncementItem) => void;
  updateAnnouncement: (index: number, announcement: AnnouncementItem) => void;
  deleteAnnouncement: (index: number) => void;
  addTraining: (training: TrainingSession) => void;
  updateTraining: (index: number, training: TrainingSession) => void;
  deleteTraining: (index: number) => void;
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
  const [scrollingData, setScrollingData] = useState<any[]>([]);
  const [totalReports, setTotalReports] = useState(0);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('admin-auth');
    const storedNews = localStorage.getItem('admin-news');
    const storedAnnouncements = localStorage.getItem('admin-announcements');
    const storedTrainings = localStorage.getItem('admin-trainings');
    const storedReports = localStorage.getItem('admin-reports');

    if (storedAuth) setIsAuthenticated(JSON.parse(storedAuth));
    if (storedNews) setNewsData(JSON.parse(storedNews));
    if (storedAnnouncements) setAnnouncementData(JSON.parse(storedAnnouncements));
    if (storedTrainings) setTrainingData(JSON.parse(storedTrainings));
    if (storedReports) setTotalReports(JSON.parse(storedReports));
  }, []);

  const login = (username: string, password: string): boolean => {
    // Simple authentication - in production, use proper authentication
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
    updateScrollingData
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
