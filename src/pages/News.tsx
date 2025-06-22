
import { Newspaper, Calendar, Users, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Latest <span className="text-blue-600">News</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Stay updated with the latest news and developments from Telangana Anti-Narcotics Bureau
            </p>
          </div>

          {/* News Articles */}
          <div className="space-y-8">
            {newsData.map((news, index) => (
              <article key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={news.imageUrl} 
                      alt={news.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    {news.date && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {news.date}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Newspaper className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Breaking News
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-poppins">{news.title}</h2>
                    
                    {news.subtitle && (
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">{news.subtitle}</h3>
                    )}
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{news.description}</p>
                    
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Load More News
            </button>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl mt-16">
            <div className="text-center">
              <Users className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Stay Informed</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Follow our latest news and updates to stay informed about our ongoing efforts 
                in creating a drug-free Telangana. Your awareness is our strength.
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-400 font-semibold">
                <Newspaper className="w-6 h-6" />
                <span>Subscribe to Updates</span>
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
