
import { useEffect, useState } from 'react';
import { Car, DollarSign, GraduationCap, TrendingUp, Clock, MapPin, Users, Zap } from 'lucide-react';

const AnimatedMetrics = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    { icon: Car, value: '1,450+', label: 'Drug Cases Solved', description: 'Successfully investigated and resolved', color: 'from-blue-500 to-blue-600' },
    { icon: DollarSign, value: '₹94.38 Cr', label: 'Seized in 2023', description: 'Total value of drugs and assets seized', color: 'from-green-500 to-green-600' },
    { icon: GraduationCap, value: '500+', label: 'Awareness Programs', description: 'Educational sessions conducted', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate', description: 'Case resolution percentage', color: 'from-orange-500 to-orange-600' },
    { icon: Clock, value: '24/7', label: 'Operations', description: 'Round-the-clock vigilance', color: 'from-red-500 to-red-600' },
    { icon: MapPin, value: '50+', label: 'Districts', description: 'Coverage across Telangana', color: 'from-teal-500 to-teal-600' },
    { icon: Users, value: '100K+', label: 'Lives Impacted', description: 'Through awareness campaigns', color: 'from-indigo-500 to-indigo-600' },
    { icon: Zap, value: '2M+', label: 'Media Reach', description: 'People reached through campaigns', color: 'from-yellow-500 to-yellow-600' }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-3">
            Impact So Far
          </h2>
          <p className="text-sm md:text-base text-blue-200 font-poppins">
            Our commitment to a drug-free Telangana
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20"
            >
              <div className={`mx-auto w-10 h-10 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center mb-3`}>
                <metric.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-lg md:text-xl font-bold font-poppins mb-1 text-white">
                {animated ? metric.value : '0'}
              </div>
              <div className="text-xs font-medium text-blue-200 font-poppins mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-blue-300 font-poppins">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedMetrics;
