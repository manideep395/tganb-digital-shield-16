
import React, { createContext, useState, useContext } from 'react';
import { NewsItem, newsData as initialNewsData } from '../data/newsData';
import { Achievement } from '../data/achievementsData';
import { TrainingSession, trainingData as initialTrainingData } from '../data/trainingData';
import { drugReportsData, DrugReport } from '../data/drugReportsData';
import { faqsData as initialFaqsData } from '../data/faqsData';
import { announcementData as initialAnnouncementData, AnnouncementItem } from '../data/announcementData';
import { announcementData as initialScrollingData } from '../data/scrollingData';

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
  addNews: (news: NewsItem) => void;
  updateNews: (index: number, news: NewsItem) => void;
  deleteNews: (index: number) => void;
  announcementData: AnnouncementItem[];
  addAnnouncement: (announcement: AnnouncementItem) => void;
  updateAnnouncement: (index: number, announcement: AnnouncementItem) => void;
  deleteAnnouncement: (index: number) => void;
  trainingData: TrainingSession[];
  addTraining: (training: TrainingSession) => void;
  updateTraining: (index: number, training: TrainingSession) => void;
  deleteTraining: (index: number) => void;
  achievementsData: Achievement[];
  addAchievement: (achievement: Achievement) => void;
  updateAchievement: (index: number, achievement: Achievement) => void;
  deleteAchievement: (index: number) => void;
  celebrityVideos: CelebrityVideo[];
  addCelebrityVideo: (video: CelebrityVideo) => void;
  updateCelebrityVideo: (index: number, video: CelebrityVideo) => void;
  deleteCelebrityVideo: (index: number) => void;
  faqsData: FAQItem[];
  addFAQ: (faq: FAQItem) => void;
  updateFAQ: (index: number, faq: FAQItem) => void;
  deleteFAQ: (index: number) => void;
  scrollingData: any[];
  updateScrollingData: (data: any[]) => void;
  totalReports: number;
  drugReports: DrugReport[];
  addDrugReport: (report: Omit<DrugReport, 'id' | 'submittedAt' | 'evidenceFileName'>) => void;
  updateDrugReportStatus: (id: string, status: DrugReport['status']) => void;
  deleteDrugReport: (id: string) => void;
}

const AdminContext = createContext<AdminContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
  newsData: [],
  addNews: () => {},
  updateNews: () => {},
  deleteNews: () => {},
  announcementData: [],
  addAnnouncement: () => {},
  updateAnnouncement: () => {},
  deleteAnnouncement: () => {},
  trainingData: [],
  addTraining: () => {},
  updateTraining: () => {},
  deleteTraining: () => {},
  achievementsData: [],
  addAchievement: () => {},
  updateAchievement: () => {},
  deleteAchievement: () => {},
  celebrityVideos: [],
  addCelebrityVideo: () => {},
  updateCelebrityVideo: () => {},
  deleteCelebrityVideo: () => {},
  faqsData: [],
  addFAQ: () => {},
  updateFAQ: () => {},
  deleteFAQ: () => {},
  scrollingData: [],
  updateScrollingData: () => {},
  totalReports: 100,
  drugReports: [],
  addDrugReport: () => {},
  updateDrugReportStatus: () => {},
  deleteDrugReport: () => {},
});

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Initialize with actual data from data files
  const [newsData, setNewsData] = useState<NewsItem[]>(initialNewsData);
  const [announcementData, setAnnouncementData] = useState<AnnouncementItem[]>(initialAnnouncementData);
  const [trainingData, setTrainingData] = useState<TrainingSession[]>(initialTrainingData);
  const [achievementsData, setAchievementsData] = useState<Achievement[]>([]);
  const [celebrityVideos, setCelebrityVideos] = useState<CelebrityVideo[]>([]);
  const [faqsData, setFaqsData] = useState<FAQItem[]>(initialFaqsData.map(faq => ({
    question: faq.question,
    answer: faq.answer,
    category: 'General'
  })));
  const [scrollingData, setScrollingData] = useState<any[]>(initialScrollingData);
  const [totalReports, setTotalReports] = useState(100);
  const [drugReports, setDrugReports] = useState<DrugReport[]>(drugReportsData);

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const addNews = (news: NewsItem) => {
    setNewsData(prev => [news, ...prev]);
  };

  const updateNews = (index: number, news: NewsItem) => {
    setNewsData(prev => {
      const newData = [...prev];
      newData[index] = news;
      return newData;
    });
  };

  const deleteNews = (index: number) => {
    setNewsData(prev => prev.filter((_, i) => i !== index));
  };

  const addAnnouncement = (announcement: AnnouncementItem) => {
    setAnnouncementData(prev => [announcement, ...prev]);
  };

  const updateAnnouncement = (index: number, announcement: AnnouncementItem) => {
    setAnnouncementData(prev => {
      const newData = [...prev];
      newData[index] = announcement;
      return newData;
    });
  };

  const deleteAnnouncement = (index: number) => {
    setAnnouncementData(prev => prev.filter((_, i) => i !== index));
  };

  const addTraining = (training: TrainingSession) => {
    setTrainingData(prev => [training, ...prev]);
  };

  const updateTraining = (index: number, training: TrainingSession) => {
    setTrainingData(prev => {
      const newData = [...prev];
      newData[index] = training;
      return newData;
    });
  };

  const deleteTraining = (index: number) => {
    setTrainingData(prev => prev.filter((_, i) => i !== index));
  };

  const addAchievement = (achievement: Achievement) => {
    setAchievementsData(prev => [achievement, ...prev]);
  };

  const updateAchievement = (index: number, achievement: Achievement) => {
    setAchievementsData(prev => {
      const newData = [...prev];
      newData[index] = achievement;
      return newData;
    });
  };

  const deleteAchievement = (index: number) => {
    setAchievementsData(prev => prev.filter((_, i) => i !== index));
  };

  const addCelebrityVideo = (video: CelebrityVideo) => {
    setCelebrityVideos(prev => [video, ...prev]);
  };

  const updateCelebrityVideo = (index: number, video: CelebrityVideo) => {
    setCelebrityVideos(prev => {
      const newData = [...prev];
      newData[index] = video;
      return newData;
    });
  };

  const deleteCelebrityVideo = (index: number) => {
    setCelebrityVideos(prev => prev.filter((_, i) => i !== index));
  };

  const addFAQ = (faq: FAQItem) => {
    setFaqsData(prev => [faq, ...prev]);
  };

  const updateFAQ = (index: number, faq: FAQItem) => {
    setFaqsData(prev => {
      const newData = [...prev];
      newData[index] = faq;
      return newData;
    });
  };

  const deleteFAQ = (index: number) => {
    setFaqsData(prev => prev.filter((_, i) => i !== index));
  };

  const updateScrollingData = (data: any[]) => {
    setScrollingData(data);
  };

  const addDrugReport = (report: Omit<DrugReport, 'id' | 'submittedAt' | 'evidenceFileName'>) => {
    const newReport: DrugReport = {
      ...report,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString()
    };
    setDrugReports(prev => [newReport, ...prev]);
  };

  const updateDrugReportStatus = (id: string, status: DrugReport['status']) => {
    setDrugReports(prev => prev.map(report => 
      report.id === id ? { ...report, status } : report
    ));
  };

  const deleteDrugReport = (id: string) => {
    setDrugReports(prev => prev.filter(report => report.id !== id));
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    newsData,
    addNews,
    updateNews,
    deleteNews,
    announcementData,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    trainingData,
    addTraining,
    updateTraining,
    deleteTraining,
    achievementsData,
    addAchievement,
    updateAchievement,
    deleteAchievement,
    celebrityVideos,
    addCelebrityVideo,
    updateCelebrityVideo,
    deleteCelebrityVideo,
    faqsData,
    addFAQ,
    updateFAQ,
    deleteFAQ,
    scrollingData,
    updateScrollingData,
    totalReports,
    drugReports,
    addDrugReport,
    updateDrugReportStatus,
    deleteDrugReport,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
