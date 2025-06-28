
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const NewsDetail = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const { newsData } = useAdmin();
  
  const newsItem = newsData.find((_, index) => index.toString() === newsId);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">News Article Not Found</h1>
            <Button onClick={() => navigate('/news')} className="bg-blue-600 hover:bg-blue-700">
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
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            onClick={() => navigate('/news')} 
            variant="ghost" 
            className="mb-6 text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>

          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="relative">
              <img 
                src={newsItem.imageUrl} 
                alt={newsItem.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getNewsTypeColor(newsItem.newsType)}`}>
                  {newsItem.newsType}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Meta Information */}
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{newsItem.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>TGANB Official</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {newsItem.title}
              </h1>

              {/* Subtitle */}
              {newsItem.subtitle && (
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                  {newsItem.subtitle}
                </h2>
              )}

              {/* Article Body */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {newsItem.description}
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Report Drug-Related Activities
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have information about drug-related crimes, report immediately on our helpline.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="tel:1908" 
                    className="bg-red-600 text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-colors"
                  >
                    Emergency: 1908
                  </a>
                  <a 
                    href="tel:8712671111" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
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
