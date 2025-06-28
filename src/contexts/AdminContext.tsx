import React, { createContext, useState, useContext } from 'react';

interface NewsItem {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  date: string;
  newsType: string;
}

interface Announcement {
  name: string;
  date: string;
}

interface Training {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

interface Achievement {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

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

import { drugReportsData, DrugReport } from '../data/drugReportsData';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  newsData: NewsItem[];
  addNews: (news: NewsItem) => void;
  updateNews: (index: number, news: NewsItem) => void;
  deleteNews: (index: number) => void;
  announcementData: Announcement[];
  addAnnouncement: (announcement: Announcement) => void;
  updateAnnouncement: (index: number, announcement: Announcement) => void;
  deleteAnnouncement: (index: number) => void;
  trainingData: Training[];
  addTraining: (training: Training) => void;
  updateTraining: (index: number, training: Training) => void;
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
  scrollingData: { news: NewsItem[]; announcements: Announcement[] };
  updateScrollingData: (data: { news: NewsItem[]; announcements: Announcement[] }) => void;
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
  scrollingData: { news: [], announcements: [] },
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
  const [newsData, setNewsData] = useState<NewsItem[]>([
    {
      title: 'TGANB Conducts Raids on Illegal Drug Dens',
      subtitle: 'Several arrests made in Hyderabad',
      description: 'The Telangana Anti-Narcotics Bureau (TGANB) conducted a series of raids on illegal drug dens in Hyderabad, resulting in the arrest of several individuals involved in drug trafficking and consumption.',
      imageUrl: '/uploads/naga-vamsi-yeduguru-N2tjpn9eqOc-unsplash.jpg',
      date: '2024-01-20',
      newsType: 'Breaking News',
    },
    {
      title: 'Awareness Campaign Launched in Schools',
      description: 'TGANB has launched an awareness campaign in schools across Telangana to educate students about the dangers of drug abuse and promote a healthy lifestyle.',
      imageUrl: '/uploads/pexels-pixabay-267885.jpg',
      date: '2024-01-18',
      newsType: 'Important Update',
    },
    {
      title: 'TGANB Receives National Award for Excellence',
      description: 'The Telangana Anti-Narcotics Bureau (TGANB) has been awarded the National Award for Excellence in combating drug trafficking and substance abuse.',
      imageUrl: '/uploads/pexels-rodnae-productions-7368244.jpg',
      date: '2024-01-15',
      newsType: 'Achievement',
    },
  ]);
  const [announcementData, setAnnouncementData] = useState<Announcement[]>([
    { name: 'New Toll-Free Helpline Launched', date: '2024-01-22' },
    { name: 'Upcoming Anti-Drug Awareness Event', date: '2024-01-25' },
  ]);
  const [trainingData, setTrainingData] = useState<Training[]>([
    {
      title: 'Advanced Drug Interdiction Techniques',
      description: 'A comprehensive training program for law enforcement officers on advanced drug interdiction techniques.',
      imageUrl: '/uploads/pexels-august-de-richelieu-4262415.jpg',
      date: '2024-02-01',
    },
  ]);
  const [achievementsData, setAchievementsData] = useState<Achievement[]>([
    {
      title: 'Record Seizure of Cocaine',
      description: 'TGANB seizes a record amount of cocaine in a single operation, disrupting a major drug trafficking network.',
      imageUrl: '/uploads/pexels-pixabay-164693.jpg',
      date: '2024-01-28',
    },
  ]);
  const [celebrityVideos, setCelebrityVideos] = useState<CelebrityVideo[]>([
    {
      name: 'Samantha Akkineni',
      designation: 'Actor',
      videoUrl: 'https://www.youtube.com/watch?v=Y3qj5n69Ghk',
    },
  ]);
  const [faqsData, setFaqsData] = useState<FAQItem[]>([
    {
      question: 'What is the role of TGANB?',
      answer: 'The Telangana Anti-Narcotics Bureau (TGANB) is responsible for combating drug trafficking and substance abuse in Telangana.',
      category: 'General',
    },
  ]);
  const [scrollingData, setScrollingData] = useState<{ news: NewsItem[]; announcements: Announcement[] }>({
    news: newsData,
    announcements: announcementData,
  });
  const [totalReports, setTotalReports] = useState(100);
  const [drugReports, setDrugReports] = useState<DrugReport[]>(drugReportsData);

  const login = (password: string) => {
    if (password === 'admin123') {
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

  const addAnnouncement = (announcement: Announcement) => {
    setAnnouncementData(prev => [announcement, ...prev]);
  };

  const updateAnnouncement = (index: number, announcement: Announcement) => {
    setAnnouncementData(prev => {
      const newData = [...prev];
      newData[index] = announcement;
      return newData;
    });
  };

  const deleteAnnouncement = (index: number) => {
    setAnnouncementData(prev => prev.filter((_, i) => i !== index));
  };

  const addTraining = (training: Training) => {
    setTrainingData(prev => [training, ...prev]);
  };

  const updateTraining = (index: number, training: Training) => {
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

  const updateScrollingData = (data: { news: NewsItem[]; announcements: Announcement[] }) => {
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
