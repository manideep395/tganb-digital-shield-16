
import { TrendingUp, Users, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const StatisticsSection = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Shield,
      number: "2,847",
      label: "Cases Registered",
      change: "+15%",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      number: "1,256",
      label: "Arrests Made",
      change: "+22%",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      number: "45.2kg",
      label: "Drugs Seized",
      change: "+8%",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      change: "+3%",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Impact Statistics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time data showcasing our ongoing efforts in combating drug trafficking and abuse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 mb-2">{stat.label}</div>
                <div className="text-green-600 text-sm font-semibold">{stat.change} this year</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Detailed Analytics</h3>
          <p className="mb-6 text-blue-100">
            Access comprehensive statistics, trends, and insights about our anti-narcotics operations
          </p>
          <Button 
            onClick={() => navigate('/statistics')}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full text-lg"
          >
            View Detailed Statistics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
