
import { useEffect, useState } from 'react';
import { announcementData } from '../data/announcementData';

const AnnouncementTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcementData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-4 flex-shrink-0">
            📢 NOTICE
          </div>
          <div className="flex-1 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {announcementData.map((announcement, index) => (
                  <div
                    key={index}
                    className="min-w-full px-4 text-sm md:text-base leading-relaxed"
                  >
                    {announcement.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-1 ml-4">
            {announcementData.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
