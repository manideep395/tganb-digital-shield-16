
import { useAdmin } from '../contexts/AdminContext';

const AnnouncementTicker = () => {
  const { announcementData } = useAdmin();
  
  // Create ticker text from announcements
  const tickerText = announcementData
    .map(announcement => `${announcement.name} (${announcement.date})`)
    .join(' • ');

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 overflow-hidden">
      <div className="relative">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-4 text-xs md:text-sm font-medium">
            {tickerText && (
              <>
                <span className="mr-16">{tickerText}</span>
                {/* Repeat for continuous scroll */}
                <span className="mr-16">{tickerText}</span>
              </>
            )}
            {!tickerText && (
              <span className="mr-16">
                If you have any information related to drugs, please call our toll-free number 1908 or submit through anonymous report section. Your details will be kept confidential.
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
