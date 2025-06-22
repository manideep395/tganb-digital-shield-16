
import { Button } from '@/components/ui/button';
import { newsData } from '../data/newsData';
import { announcementData } from '../data/announcementData';

const NewsEvents = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 to-gray-100 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Latest News & Announcements</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Latest News Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              📰 Latest News
            </h3>
            <div className="space-y-4">
              {newsData.slice(0, 1).map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden p-4 h-64"
                >
                  <div className="flex items-start gap-4 h-full">
                    <img 
                      src={news.imageUrl} 
                      alt={news.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {news.date}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                          Breaking News
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                      {news.subtitle && (
                        <p className="text-xs text-blue-600 font-semibold mb-2 line-clamp-1">{news.subtitle}</p>
                      )}
                      <div className="mt-auto">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-blue-600 hover:text-blue-700 p-0 text-xs"
                        >
                          Read Full Article →
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Announcements Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              📢 Latest Announcements
            </h3>
            <div className="space-y-4">
              {announcementData.slice(0, 1).map((announcement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300 h-64 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {announcement.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2">
                    {announcement.name}
                  </h4>
                  <div className="mt-auto">
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className="bg-yellow-600 hover:bg-yellow-700 rounded-full text-xs"
                      >
                        Learn More
                      </Button>
                      {announcement.attachmentLink && (
                        <Button 
                          size="sm"
                          variant="outline"
                          className="rounded-full text-xs"
                          onClick={() => window.open(announcement.attachmentLink, '_blank')}
                        >
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-800 mb-2 text-sm">🚨 Emergency Helpline</h4>
              <p className="text-sm text-gray-700 mb-2">
                Report drug-related crimes immediately on our 24/7 helpline
              </p>
              <div className="text-2xl font-bold text-red-600">1908</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
