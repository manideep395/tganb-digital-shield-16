
import { Button } from '@/components/ui/button';

const AwarenessPrograms = () => {
  const programs = [
    {
      title: "School Outreach Programs",
      description: "Interactive sessions with students about drug awareness",
      image: "🏫",
      participants: "15,000+ Students",
      color: "from-green-500 to-green-600"
    },
    {
      title: "College Awareness Drives",
      description: "Comprehensive awareness campaigns in higher education institutions",
      image: "🎓",
      participants: "25,000+ Students",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Community Rallies",
      description: "Public awareness rallies in various districts",
      image: "👥",
      participants: "50,000+ Citizens",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Digital Campaigns",
      description: "Social media and digital awareness initiatives",
      image: "📱",
      participants: "2M+ Reach",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Awareness Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive awareness initiatives reaching every corner of Telangana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`h-4 bg-gradient-to-r ${program.color}`}></div>
              <div className="p-8">
                <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {program.image}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className={`text-center text-white py-2 px-4 rounded-full text-sm font-bold bg-gradient-to-r ${program.color}`}>
                  {program.participants}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-full px-8"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AwarenessPrograms;
