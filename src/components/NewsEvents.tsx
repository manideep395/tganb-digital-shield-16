
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const NewsEvents = () => {
  const { newsData } = useAdmin();
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const visibleNews = newsData.slice(0, visibleCount);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our ongoing efforts, achievements, and important developments in the fight against drug abuse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleNews.map((news, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {news.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    news.newsType === 'Breaking News' ? 'bg-red-100 text-red-800' :
                    news.newsType === 'Achievement' ? 'bg-green-100 text-green-800' :
                    news.newsType === 'Event' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {news.newsType}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.description}
                </p>
                <div className="flex items-center justify-between">
                  {news.link && (
                    <a 
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  <Link 
                    to={`/news/${encodeURIComponent(news.title)}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < newsData.length && (
          <div className="text-center">
            <button 
              onClick={loadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Load More News
            </button>
          </div>
        )}

        <div className="text-center mt-8">
          <Link 
            to="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
          >
            View All News & Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
