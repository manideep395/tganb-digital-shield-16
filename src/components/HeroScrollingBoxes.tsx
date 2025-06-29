
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Megaphone, ArrowUp } from 'lucide-react';
import { useContentData } from '@/hooks/useContentData';

const HeroScrollingBoxes = () => {
  const navigate = useNavigate();
  const { newsData, announcementData, isLoading } = useContentData();
  const [newsIndex, setNewsIndex] = useState(0);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  // Auto-scroll news every 4 seconds
  useEffect(() => {
    if (newsData.length === 0) return;
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % newsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsData.length]);

  // Auto-scroll announcements every 5 seconds
  useEffect(() => {
    if (announcementData.length === 0) return;
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcementData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcementData.length]);

  const handleNewsClick = () => {
    navigate('/news');
  };

  const handleAnnouncementClick = () => {
    navigate('/news');
  };

  if (isLoading) {
    return (
      <div className="w-1/4 space-y-4 p-4">
        <div className="h-32 bg-blue-100/50 rounded-xl animate-pulse"></div>
        <div className="h-32 bg-orange-100/50 rounded-xl animate-pulse"></div>
      </div>
    );
  }

  const currentNews = newsData[newsIndex];
  const currentAnnouncement = announcementData[announcementIndex];

  return (
    <div className="w-1/4 space-y-4 p-4">
      {/* News Box */}
      <div 
        onClick={handleNewsClick}
        className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-white relative overflow-hidden group"
      >
        <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowUp className="w-4 h-4 animate-bounce" />
        </div>
        
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-2 text-blue-200" />
          <span className="text-sm font-bold uppercase tracking-wide">Breaking News</span>
        </div>
        
        {currentNews ? (
          <div className="space-y-2">
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
            <p className="text-xs opacity-90 line-clamp-2">
              {currentNews.description}
            </p>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-sm opacity-80">No news available</p>
          </div>
        )}

        <div className="absolute bottom-2 right-2 text-xs opacity-60">
          {newsData.length > 0 && `${newsIndex + 1}/${newsData.length}`}
        </div>
      </div>

      {/* Announcements Box */}
      <div 
        onClick={handleAnnouncementClick}
        className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-white relative overflow-hidden group"
      >
        <div className="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowUp className="w-4 h-4 animate-bounce" />
        </div>
        
        <div className="flex items-center mb-2">
          <Megaphone className="w-5 h-5 mr-2 text-orange-200" />
          <span className="text-sm font-bold uppercase tracking-wide">Announcements</span>
        </div>
        
        {currentAnnouncement ? (
          <div className="space-y-2">
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
              <p className="text-xs opacity-90 line-clamp-2">
                {currentAnnouncement.description}
              </p>
            )}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-sm opacity-80">No announcements available</p>
          </div>
        )}

        <div className="absolute bottom-2 right-2 text-xs opacity-60">
          {announcementData.length > 0 && `${announcementIndex + 1}/${announcementData.length}`}
        </div>
      </div>
    </div>
  );
};

export default HeroScrollingBoxes;
