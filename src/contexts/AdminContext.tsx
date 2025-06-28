import React, { createContext, useState, useContext, useEffect } from 'react';
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
  addDrugReport: (report: Omit<DrugReport, 'id' | 'submittedAt'>) => void;
  updateDrugReportStatus: (id: string, status: DrugReport['status']) => void;
  deleteDrugReport: (id: string) => void;
  syncDataToStorage: () => void;
}

// Create global data store
const STORAGE_KEY = 'tganb_admin_data';

const getStoredData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const setStoredData = (data: any) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to store data:', error);
  }
};

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
  syncDataToStorage: () => {},
});

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Initialize with stored data or fallback to file data
  const initializeData = () => {
    const storedData = getStoredData();
    return {
      newsData: storedData?.newsData || initialNewsData,
      announcementData: storedData?.announcementData || initialAnnouncementData,
      trainingData: storedData?.trainingData || initialTrainingData,
      achievementsData: storedData?.achievementsData || [],
      celebrityVideos: storedData?.celebrityVideos || [],
      faqsData: storedData?.faqsData || initialFaqsData.map(faq => ({
        question: faq.question,
        answer: faq.answer,
        category: 'General'
      })),
      scrollingData: storedData?.scrollingData || initialScrollingData,
      drugReports: storedData?.drugReports || drugReportsData,
    };
  };

  const initialState = initializeData();
  
  const [newsData, setNewsData] = useState<NewsItem[]>(initialState.newsData);
  const [announcementData, setAnnouncementData] = useState<AnnouncementItem[]>(initialState.announcementData);
  const [trainingData, setTrainingData] = useState<TrainingSession[]>(initialState.trainingData);
  const [achievementsData, setAchievementsData] = useState<Achievement[]>(initialState.achievementsData);
  const [celebrityVideos, setCelebrityVideos] = useState<CelebrityVideo[]>(initialState.celebrityVideos);
  const [faqsData, setFaqsData] = useState<FAQItem[]>(initialState.faqsData);
  const [scrollingData, setScrollingData] = useState<any[]>(initialState.scrollingData);
  const [drugReports, setDrugReports] = useState<DrugReport[]>(initialState.drugReports);
  const [totalReports, setTotalReports] = useState(100);

  // Sync data to localStorage whenever state changes
  const syncDataToStorage = () => {
    const dataToStore = {
      newsData,
      announcementData,
      trainingData,
      achievementsData,
      celebrityVideos,
      faqsData,
      scrollingData,
      drugReports,
    };
    setStoredData(dataToStore);
    console.log('Data synced to storage');
  };

  // Auto-sync when data changes
  useEffect(() => {
    syncDataToStorage();
  }, [newsData, announcementData, trainingData, achievementsData, celebrityVideos, faqsData, scrollingData, drugReports]);

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

  // News management
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

  // Announcement management
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

  // Training management
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

  // Achievement management
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

  // Celebrity video management
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

  // FAQ management
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

  // Scrolling data management
  const updateScrollingData = (data: any[]) => {
    setScrollingData(data);
  };

  // Drug report management with proper data persistence
  const addDrugReport = (report: Omit<DrugReport, 'id' | 'submittedAt'>) => {
    const newReport: DrugReport = {
      ...report,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString()
    };
    setDrugReports(prev => [newReport, ...prev]);
    console.log('New drug report added:', newReport);
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
    syncDataToStorage,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
