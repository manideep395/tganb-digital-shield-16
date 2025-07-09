
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useContentData } from '@/hooks/useContentData';
import { Link } from 'react-router-dom';

const HeroNewsSection = () => {
  const { newsData, announcementData, isLoading } = useContentData();

  if (isLoading) {
    return (
      <div className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 md:h-8 bg-gray-200 rounded w-48 md:w-64 mx-auto mb-6 md:mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="h-24 md:h-32 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 md:h-20 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const latestNews = newsData.slice(0, 2);
  const latestAnnouncements = announcementData.slice(0, 3);

  return (
    <div className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Latest Updates
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Stay informed with our recent news and important announcements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Latest News */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
              <span className="w-1 h-6 md:h-8 bg-blue-600 mr-2 md:mr-3"></span>
              Breaking News
            </h3>
            <div className="space-y-4 md:space-y-6">
              {latestNews.map((news, index) => (
                <div key={news.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold self-start ${
                      news.news_type === 'Breaking News' ? 'bg-red-100 text-red-800' :
                      news.news_type === 'Achievement' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {news.news_type}
                    </span>
                    {news.date && (
                      <div className="flex items-center text-gray-500 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {news.date}
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 leading-tight">
                    {news.title}
                  </h4>
                  {news.subtitle && (
                    <p className="text-blue-600 font-medium mb-2 text-sm md:text-base line-clamp-1">{news.subtitle}</p>
                  )}
                  <p className="text-gray-600 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base leading-relaxed">
                    {news.description}
                  </p>
                  <Link 
                    to={`/news/${encodeURIComponent(news.title)}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group text-sm md:text-base"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <Link 
                to="/news"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base"
              >
                View All News
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Latest Announcements */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
              <span className="w-1 h-6 md:h-8 bg-orange-600 mr-2 md:mr-3"></span>
              Announcements
            </h3>
            <div className="space-y-3 md:space-y-4">
              {latestAnnouncements.map((announcement, index) => (
                <div key={announcement.id} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <span className="text-xs md:text-sm text-gray-500 bg-white px-2 md:px-3 py-1 rounded-full self-start">
                      {announcement.date}
                    </span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 leading-tight">
                    {announcement.name}
                  </h4>
                  {announcement.description && (
                    <p className="text-gray-600 mb-3 text-xs md:text-sm line-clamp-2 leading-relaxed">
                      {announcement.description}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <button className="text-orange-600 hover:text-orange-800 font-medium text-xs md:text-sm text-left">
                      Learn More
                    </button>
                    {announcement.attachment_link && (
                      <a 
                        href={announcement.attachment_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm"
                      >
                        Download
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <Link 
                to="/news"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base"
              >
                View All Announcements
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNewsSection;
