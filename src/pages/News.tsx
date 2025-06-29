
import { Newspaper, Calendar, Users, ArrowRight, Download, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useContentData } from '@/hooks/useContentData';

const News = () => {
  const navigate = useNavigate();
  const { newsData, announcementData, isLoading } = useContentData();

  const getNewsTypeColor = (newsType: string) => {
    switch (newsType) {
      case 'Breaking News':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Shocking News':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'Important Update':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Achievement':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Alert':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }
  };

  const handleReadMore = (title: string) => {
    navigate(`/news/${encodeURIComponent(title)}`);
  };

  const handleLearnMore = () => {
    navigate('/announcements');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
        <Header />
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-16 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600 dark:text-blue-400">News & Announcements</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Stay updated with the latest news and important announcements from Telangana Anti-Narcotics Bureau
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* News Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Newspaper className="w-8 h-8 text-blue-600 mr-3" />
                Latest News
              </h2>
              
              <div className="space-y-6">
                {newsData.map((news, index) => (
                  <article key={news.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-blue-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={news.image_url} 
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                      {news.date && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {news.date}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getNewsTypeColor(news.news_type)}`}>
                          {news.news_type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{news.title}</h3>
                      
                      {news.subtitle && (
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">{news.subtitle}</h4>
                      )}
                      
                      <Button 
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold group" 
                        variant="ghost"
                        onClick={() => handleReadMore(news.title)}
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Announcements Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Users className="w-8 h-8 text-yellow-600 mr-3" />
                Announcements
              </h2>
              
              <div className="space-y-6">
                {announcementData.map((announcement, index) => (
                  <div key={announcement.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-3 py-1 rounded-full">
                        {announcement.date}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {announcement.name}
                    </h3>
                    
                    {announcement.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                        {announcement.description}
                      </p>
                    )}
                    
                    <div className="flex gap-3">
                      <Button 
                        className="bg-yellow-600 hover:bg-yellow-700 text-white"
                        onClick={handleLearnMore}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                      {announcement.attachment_link && (
                        <Button 
                          variant="outline"
                          onClick={() => window.open(announcement.attachment_link, '_blank')}
                          className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 dark:border-yellow-400 dark:text-yellow-400"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg flex items-center">
                  🚨 Emergency Helpline
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Report drug-related crimes immediately on our 24/7 helpline
                </p>
                <div className="text-3xl font-bold text-red-600">1908</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
