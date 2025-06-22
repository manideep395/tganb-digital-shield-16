
import { Button } from '@/components/ui/button';

const NewsEvents = () => {
  const newsItems = [
    {
      date: "Dec 20, 2024",
      title: "Major Drug Bust in Hyderabad",
      description: "TG ANB seizes drugs worth ₹5 crores in joint operation",
      category: "Operation"
    },
    {
      date: "Dec 18, 2024",
      title: "Anti-Drug Awareness Week Launched",
      description: "State-wide campaign targeting educational institutions",
      category: "Awareness"
    },
    {
      date: "Dec 15, 2024",
      title: "Celebrity Campaign Launch",
      description: "Film stars join hands with TG ANB for awareness drive",
      category: "Campaign"
    }
  ];

  const announcements = [
    "Registration open for Anti-Drug Awareness Certificate Program",
    "New helpline numbers activated for drug crime reporting",
    "Training workshops scheduled for educational institutions"
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 to-gray-100 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">News & Announcements</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* News Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              📰 Latest News
            </h3>
            <div className="space-y-4">
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {news.date}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      news.category === 'Operation' ? 'bg-red-100 text-red-600' :
                      news.category === 'Awareness' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {news.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-2">
                    {news.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 p-0 text-xs"
                  >
                    Read More →
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              📢 Announcements
            </h3>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-sm text-gray-700 mb-2">
                    {announcement}
                  </p>
                  <Button 
                    size="sm"
                    className="bg-yellow-600 hover:bg-yellow-700 rounded-full text-xs"
                  >
                    Learn More
                  </Button>
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
