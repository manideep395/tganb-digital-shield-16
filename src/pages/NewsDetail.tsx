
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useContentData } from '@/hooks/useContentData';

const NewsDetail = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const { newsData, isLoading } = useContentData();
  
  // Find news by title or ID
  const newsItem = React.useMemo(() => {
    if (!newsData.length || !newsId) return null;
    
    const decodedId = decodeURIComponent(newsId);
    
    // Try to find by title first
    let item = newsData.find(news => news.title === decodedId);
    
    // If not found by title, try by index
    if (!item) {
      const index = parseInt(decodedId);
      if (!isNaN(index) && index >= 0 && index < newsData.length) {
        item = newsData[index];
      }
    }
    
    // If still not found, try partial title match
    if (!item) {
      item = newsData.find(news => 
        news.title.toLowerCase().includes(decodedId.toLowerCase()) ||
        decodedId.toLowerCase().includes(news.title.toLowerCase())
      );
    }
    
    return item;
  }, [newsData, newsId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-64 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
        <Header />
        <main className="py-8 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
              News Article Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
              The requested news article could not be found or may have been moved.
            </p>
            <Button 
              onClick={() => navigate('/news')} 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            onClick={() => navigate('/news')} 
            variant="ghost" 
            className="mb-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>

          <article className="bg-white dark:bg-gray-800 rounded-lg md:rounded-2xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="relative">
              <img 
                src={newsItem.image_url} 
                alt={newsItem.title}
                className="w-full h-48 md:h-64 lg:h-80 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/uploads/image.png';
                }}
              />
              <div className="absolute top-2 md:top-4 left-2 md:left-4">
                <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getNewsTypeColor(newsItem.news_type)}`}>
                  {newsItem.news_type}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-4 md:p-6 lg:p-8">
              {/* Meta Information */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 md:mb-6 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {newsItem.date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{newsItem.date}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3 md:w-4 md:h-4" />
                  <span>TGANB Official</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight">
                {newsItem.title}
              </h1>

              {/* Subtitle */}
              {newsItem.subtitle && (
                <h2 className="text-base md:text-lg lg:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 md:mb-6">
                  {newsItem.subtitle}
                </h2>
              )}

              {/* Article Body */}
              <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                  {newsItem.description}
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Report Drug-Related Activities
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  If you have information about drug-related crimes, report immediately on our helpline.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <a 
                    href="tel:1908" 
                    className="bg-red-600 text-white px-3 md:px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-colors text-center text-sm md:text-base"
                  >
                    Emergency: 1908
                  </a>
                  <a 
                    href="tel:8712671111" 
                    className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center text-sm md:text-base"
                  >
                    Contact: 8712671111
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
