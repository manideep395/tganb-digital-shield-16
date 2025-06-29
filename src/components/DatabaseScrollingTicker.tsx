
import React, { useEffect, useState } from 'react';
import { useContentData } from '@/hooks/useContentData';

const DatabaseScrollingTicker = () => {
  const { scrollingData, isLoading } = useContentData();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (scrollingData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scrollingData.length);
    }, 8000); // 8 seconds per message

    return () => clearInterval(interval);
  }, [scrollingData.length]);

  if (isLoading || scrollingData.length === 0) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-2 z-40 shadow-lg">
        <div className="flex items-center">
          <div className="bg-red-800 px-4 py-2 font-bold text-sm whitespace-nowrap">
            IMPORTANT
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap py-2 px-4">
              <span className="text-sm font-medium">
                If you have any information related to drugs, please call our toll-free number 1908 or submit through anonymous report section. Your details will be kept confidential.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentContent = scrollingData[currentIndex];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-2 z-40 shadow-lg">
      <div className="flex items-center">
        <div className="bg-red-800 px-4 py-2 font-bold text-sm whitespace-nowrap">
          {currentContent?.language || 'IMPORTANT'}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-2 px-4">
            <span className="text-sm font-medium">
              {currentContent?.text || 'Loading...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseScrollingTicker;
