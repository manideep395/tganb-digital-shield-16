
import { Button } from '@/components/ui/button';

const NewsEvents = () => {
  const newsItems = [
    {
      date: "Dec 20, 2024",
      title: "Major Drug Bust in Hyderabad",
      description: "TG ANB seizes drugs worth ₹5 crores in joint operation",
      category: "Operation",
      urgent: true
    },
    {
      date: "Dec 18, 2024",
      title: "Anti-Drug Awareness Week Launched",
      description: "State-wide campaign targeting educational institutions",
      category: "Awareness",
      urgent: false
    },
    {
      date: "Dec 15, 2024",
      title: "Celebrity Campaign Launch",
      description: "Film stars join hands with TG ANB for awareness drive",
      category: "Campaign",
      urgent: false
    },
    {
      date: "Dec 12, 2024",
      title: "International Cooperation Strengthened",
      description: "MoU signed with neighboring states for better coordination",
      category: "Policy",
      urgent: false
    }
  ];

  const events = [
    {
      date: "Dec 25, 2024",
      title: "Drug Awareness Marathon",
      location: "Hyderabad",
      time: "06:00 AM"
    },
    {
      date: "Dec 28, 2024",
      title: "Training Workshop for Teachers",
      location: "Warangal",
      time: "10:00 AM"
    },
    {
      date: "Jan 02, 2025",
      title: "Community Outreach Program",
      location: "Nizamabad",
      time: "02:00 PM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest activities and upcoming events
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              📰 Latest News
            </h3>
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {news.date}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          news.category === 'Operation' ? 'bg-red-100 text-red-600' :
                          news.category === 'Awareness' ? 'bg-blue-100 text-blue-600' :
                          news.category === 'Campaign' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {news.category}
                        </span>
                      </div>
                      {news.urgent && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          URGENT
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {news.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="mt-4 text-blue-600 hover:text-blue-700 p-0"
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              📅 Upcoming Events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {event.title}
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <span className="w-4 text-blue-600">📍</span>
                          <span className="ml-2">{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-4 text-blue-600">⏰</span>
                          <span className="ml-2">{event.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                        {event.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl border-l-4 border-yellow-500">
              <h4 className="font-bold text-gray-800 mb-2">📢 Announcements</h4>
              <p className="text-sm text-gray-700 mb-3">
                Registration open for Anti-Drug Awareness Certificate Program. Join us in building a drug-free society.
              </p>
              <Button 
                size="sm"
                className="bg-yellow-600 hover:bg-yellow-700 rounded-full"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8"
          >
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
