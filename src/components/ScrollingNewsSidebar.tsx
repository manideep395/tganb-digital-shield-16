
import { useEffect, useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';

const ScrollingNewsSidebar = () => {
  const { scrollingData } = useAdmin();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (scrollingData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scrollingData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollingData.length]);

  if (scrollingData.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-2 z-40 shadow-lg">
      <div className="flex items-center">
        <div className="bg-red-800 px-4 py-2 font-bold text-sm">
          BREAKING NEWS
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-2 px-4">
            <span className="text-sm font-medium">
              {scrollingData[currentIndex]?.language}: {scrollingData[currentIndex]?.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingNewsSidebar;
