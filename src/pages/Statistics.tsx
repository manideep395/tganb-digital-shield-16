
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
  const arrestData = [
    { year: '2020', arrests: 1250, cases: 980 },
    { year: '2021', arrests: 1420, cases: 1120 },
    { year: '2022', arrests: 1680, cases: 1340 },
    { year: '2023', arrests: 1890, cases: 1520 },
    { year: '2024', arrests: 2150, cases: 1780 }
  ];

  const drugTypeData = [
    { name: 'Ganja', value: 45, color: '#8B5CF6' },
    { name: 'Cocaine', value: 25, color: '#EF4444' },
    { name: 'Heroin', value: 20, color: '#F59E0B' },
    { name: 'Other', value: 10, color: '#10B981' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              <span className="text-blue-600">Crime Statistics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Data-driven insights into anti-narcotics operations in Telangana
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Yearly Arrests & Cases</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={arrestData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="arrests" fill="#3B82F6" />
                  <Bar dataKey="cases" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Drug Types Seized</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={drugTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {drugTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Total Arrests</h3>
              <p className="text-3xl font-bold">8,390</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Cases Solved</h3>
              <p className="text-3xl font-bold">6,740</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Drugs Seized</h3>
              <p className="text-3xl font-bold">2.5T</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Value Recovered</h3>
              <p className="text-3xl font-bold">₹500Cr</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Statistics;
