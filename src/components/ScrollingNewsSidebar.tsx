
import { newsData } from '../data/newsData';
import { announcementData } from '../data/announcementData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ScrollingNewsSidebar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => prev - 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleNewsClick = (index: number) => {
    navigate(`/news/${index}`);
  };

  const handleAnnouncementClick = () => {
    navigate('/news');
  };

  return (
    <div className="h-full bg-black/30 backdrop-blur-sm border-l border-white/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none z-10" />
      
      <div 
        className="flex flex-col space-y-4 p-4 animate-scroll-up"
        style={{
          transform: `translateY(${scrollPosition}px)`,
          animation: 'scroll-up 60s linear infinite'
        }}
      >
        {/* News Section */}
        <div className="mb-6">
          <h3 className="text-yellow-400 font-bold text-sm mb-3 text-center border-b border-yellow-400/30 pb-2">
            📰 BREAKING NEWS
          </h3>
          {newsData.map((news, index) => (
            <div
              key={`news-${index}`}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-3 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/10"
              onClick={() => handleNewsClick(index)}
            >
              <div className="flex items-start gap-2">
                <img 
                  src={news.imageUrl} 
                  alt={news.title}
                  className="w-8 h-8 object-cover rounded flex-shrink-0"
                />
                <div className="flex-1">
                  <span className={`text-xs px-2 py-1 rounded-full mb-1 inline-block ${
                    news.newsType === 'Breaking News' ? 'bg-red-600 text-white' :
                    news.newsType === 'Achievement' ? 'bg-green-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {news.newsType}
                  </span>
                  <h4 className="text-white text-xs font-medium leading-tight line-clamp-2 mb-1">
                    {news.title}
                  </h4>
                  <p className="text-gray-300 text-xs opacity-75">
                    {news.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Announcements Section */}
        <div className="mb-6">
          <h3 className="text-orange-400 font-bold text-sm mb-3 text-center border-b border-orange-400/30 pb-2">
            📢 ANNOUNCEMENTS
          </h3>
          {announcementData.map((announcement, index) => (
            <div
              key={`announcement-${index}`}
              className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-lg p-3 mb-3 cursor-pointer hover:from-orange-500/30 hover:to-yellow-500/30 transition-all duration-300 border border-orange-400/20"
              onClick={handleAnnouncementClick}
            >
              <div className="text-orange-300 text-xs mb-1">{announcement.date}</div>
              <h4 className="text-white text-xs font-medium leading-tight line-clamp-3">
                {announcement.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Emergency Helpline */}
        <div className="bg-red-600/20 backdrop-blur-sm rounded-lg p-3 border border-red-400/30">
          <h4 className="text-red-300 font-bold text-xs mb-2">🚨 EMERGENCY</h4>
          <p className="text-white text-xs mb-2">Drug Crime Helpline</p>
          <div className="text-red-300 font-bold text-lg">1908</div>
        </div>

        {/* Repeat content for continuous scroll */}
        {newsData.map((news, index) => (
          <div
            key={`news-repeat-${index}`}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-3 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/10"
            onClick={() => handleNewsClick(index)}
          >
            <div className="flex items-start gap-2">
              <img 
                src={news.imageUrl} 
                alt={news.title}
                className="w-8 h-8 object-cover rounded flex-shrink-0"
              />
              <div className="flex-1">
                <span className={`text-xs px-2 py-1 rounded-full mb-1 inline-block ${
                  news.newsType === 'Breaking News' ? 'bg-red-600 text-white' :
                  news.newsType === 'Achievement' ? 'bg-green-600 text-white' :
                  'bg-blue-600 text-white'
                }`}>
                  {news.newsType}
                </span>
                <h4 className="text-white text-xs font-medium leading-tight line-clamp-2 mb-1">
                  {news.title}
                </h4>
                <p className="text-gray-300 text-xs opacity-75">
                  {news.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-scroll-up {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingNewsSidebar;
