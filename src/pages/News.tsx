
import { Newspaper, Calendar, Users, ArrowRight, Download, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';
import { announcementData } from '../data/announcementData';
import { Button } from '@/components/ui/button';

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              <span className="text-blue-600">News & Announcements</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Stay updated with the latest news and important announcements from Telangana Anti-Narcotics Bureau
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* News Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Newspaper className="w-8 h-8 text-blue-600 mr-3" />
                Latest News
              </h2>
              
              <div className="space-y-6">
                {newsData.map((news, index) => (
                  <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={news.imageUrl} 
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
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Breaking News
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{news.title}</h3>
                      
                      {news.subtitle && (
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">{news.subtitle}</h4>
                      )}
                      
                      <Button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group" variant="ghost">
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="w-8 h-8 text-yellow-600 mr-3" />
                Announcements
              </h2>
              
              <div className="space-y-6">
                {announcementData.map((announcement, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                        {announcement.date}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">
                      {announcement.name}
                    </h3>
                    
                    <div className="flex gap-3">
                      <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                      {announcement.attachmentLink && (
                        <Button 
                          variant="outline"
                          onClick={() => window.open(announcement.attachmentLink, '_blank')}
                          className="border-yellow-600 text-yellow-700 hover:bg-yellow-50"
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
              <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                  🚨 Emergency Helpline
                </h3>
                <p className="text-gray-700 mb-3">
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
