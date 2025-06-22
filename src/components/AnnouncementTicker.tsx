
import { useEffect, useState } from 'react';
import { announcementData } from '../data/announcementData';

const AnnouncementTicker = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 overflow-hidden">
      <div className="relative">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-4 text-xs md:text-sm font-medium">
            {announcementData.map((announcement, index) => (
              <span key={index} className="mr-16">
                {announcement.text}
              </span>
            ))}
            {/* Repeat for continuous scroll */}
            {announcementData.map((announcement, index) => (
              <span key={`repeat-${index}`} className="mr-16">
                {announcement.text}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
