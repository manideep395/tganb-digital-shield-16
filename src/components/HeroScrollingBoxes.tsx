
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Megaphone, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContentData } from '@/hooks/useContentData';

const HeroScrollingBoxes = () => {
  const navigate = useNavigate();
  const { newsData, announcementData, isLoading } = useContentData();
  const [newsIndex, setNewsIndex] = useState(0);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  // Auto-scroll news every 6 seconds
  useEffect(() => {
    if (newsData.length === 0) return;
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % newsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [newsData.length]);

  // Auto-scroll announcements every 7 seconds
  useEffect(() => {
    if (announcementData.length === 0) return;
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcementData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [announcementData.length]);

  const handleNewsClick = () => {
    navigate('/news');
  };

  const handleAnnouncementClick = () => {
    navigate('/news');
  };

  const handleNewsNavigation = (direction: 'prev' | 'next') => {
    if (newsData.length === 0) return;
    if (direction === 'prev') {
      setNewsIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
    } else {
      setNewsIndex((prev) => (prev + 1) % newsData.length);
    }
  };

  const handleAnnouncementNavigation = (direction: 'prev' | 'next') => {
    if (announcementData.length === 0) return;
    if (direction === 'prev') {
      setAnnouncementIndex((prev) => (prev - 1 + announcementData.length) % announcementData.length);
    } else {
      setAnnouncementIndex((prev) => (prev + 1) % announcementData.length);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full p-2 md:p-4 space-y-4">
        <div className="h-40 md:h-44 lg:h-48 bg-blue-100/50 rounded-xl animate-pulse"></div>
        <div className="h-40 md:h-44 lg:h-48 bg-orange-100/50 rounded-xl animate-pulse"></div>
      </div>
    );
  }

  const currentNews = newsData[newsIndex];
  const currentAnnouncement = announcementData[announcementIndex];

  return (
    <div className="w-full h-full p-2 md:p-4 space-y-4 flex flex-col">
      {/* News Box - Consistent styling across all screen sizes */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 text-white relative overflow-hidden group shadow-lg flex-1 min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col">
        <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
          <ArrowUp className="w-4 h-4 animate-bounce" />
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-blue-200" />
            <span className="text-sm font-bold uppercase tracking-wide">News Updates</span>
          </div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => handleNewsNavigation('prev')}
              className="w-6 h-6 rounded-full bg-blue-800/50 hover:bg-blue-800 transition-colors flex items-center justify-center"
              disabled={newsData.length <= 1}
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button 
              onClick={() => handleNewsNavigation('next')}
              className="w-6 h-6 rounded-full bg-blue-800/50 hover:bg-blue-800 transition-colors flex items-center justify-center"
              disabled={newsData.length <= 1}
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
        
        <div 
          onClick={handleNewsClick}
          className="cursor-pointer hover:bg-blue-600/20 rounded-lg p-2 transition-colors flex-1 flex flex-col"
        >
          {currentNews ? (
            <div className="space-y-3 flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-800/50 px-2 py-1 rounded-full">
                  {currentNews.news_type}
                </span>
                {currentNews.date && (
                  <span className="text-xs opacity-80">{currentNews.date}</span>
                )}
              </div>
              <h4 className="text-sm font-bold line-clamp-2 leading-tight">
                {currentNews.title}
              </h4>
              <p className="text-xs opacity-90 line-clamp-3 leading-relaxed flex-1">
                {currentNews.description}
              </p>
            </div>
          ) : (
            <div className="text-center py-4 flex-1 flex items-center justify-center">
              <p className="text-sm opacity-80">No news available</p>
            </div>
          )}

          <div className="absolute bottom-3 right-3 text-xs opacity-60">
            {newsData.length > 0 && `${newsIndex + 1}/${newsData.length}`}
          </div>
        </div>
      </div>

      {/* Announcements Box - Consistent styling across all screen sizes */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-4 text-white relative overflow-hidden group shadow-lg flex-1 min-h-[180px] md:min-h-[200px] lg:min-h-[220px] flex flex-col">
        <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
          <ArrowUp className="w-4 h-4 animate-bounce" />
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Megaphone className="w-4 h-4 mr-2 text-orange-200" />
            <span className="text-sm font-bold uppercase tracking-wide">Announcements</span>
          </div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => handleAnnouncementNavigation('prev')}
              className="w-6 h-6 rounded-full bg-orange-800/50 hover:bg-orange-800 transition-colors flex items-center justify-center"
              disabled={announcementData.length <= 1}
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button 
              onClick={() => handleAnnouncementNavigation('next')}
              className="w-6 h-6 rounded-full bg-orange-800/50 hover:bg-orange-800 transition-colors flex items-center justify-center"
              disabled={announcementData.length <= 1}
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
        
        <div 
          onClick={handleAnnouncementClick}
          className="cursor-pointer hover:bg-orange-600/20 rounded-lg p-2 transition-colors flex-1 flex flex-col"
        >
          {currentAnnouncement ? (
            <div className="space-y-3 flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs bg-orange-800/50 px-2 py-1 rounded-full">
                  Official
                </span>
                <span className="text-xs opacity-80">{currentAnnouncement.date}</span>
              </div>
              <h4 className="text-sm font-bold line-clamp-2 leading-tight">
                {currentAnnouncement.name}
              </h4>
              {currentAnnouncement.description && (
                <p className="text-xs opacity-90 line-clamp-3 leading-relaxed flex-1">
                  {currentAnnouncement.description}
                </p>
              )}
            </div>
          ) : (
            <div className="text-center py-4 flex-1 flex items-center justify-center">
              <p className="text-sm opacity-80">No announcements available</p>
            </div>
          )}

          <div className="absolute bottom-3 right-3 text-xs opacity-60">
            {announcementData.length > 0 && `${announcementIndex + 1}/${announcementData.length}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScrollingBoxes;
