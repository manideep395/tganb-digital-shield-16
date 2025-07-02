
import { Trophy, Users, Shield, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContentData } from '../hooks/useContentData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Achievements = () => {
  const { achievementsData, isLoading } = useContentData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading achievements...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Our <span className="text-blue-600">Achievements</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Major operations and successful drug busts by Telangana Anti-Narcotics Bureau
            </p>
          </div>

          {/* Achievements List */}
          <div className="space-y-8">
            {achievementsData.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600">No achievements available at the moment.</p>
              </div>
            ) : (
              achievementsData.map((achievement, index) => (
                <div key={achievement.id} className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300 scroll-smooth">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-poppins">{achievement.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {achievement.category && (
                          <div className="bg-blue-50 rounded-lg px-3 py-1">
                            <p className="text-sm font-medium text-blue-800">{achievement.category}</p>
                          </div>
                        )}
                        <div className="bg-green-50 rounded-lg px-3 py-1">
                          <p className="text-sm font-medium text-green-800">{achievement.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{achievement.description}</p>
                  </div>
                  
                  {achievement.offenders && achievement.offenders.length > 0 && (
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <Users className="w-6 h-6 text-red-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">Offenders Apprehended</h3>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-20">S.No.</TableHead>
                              <TableHead>Name of the Offender</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {achievement.offenders.map((offender) => (
                              <TableRow key={offender.id}>
                                <TableCell className="font-medium">{offender.serial_number}</TableCell>
                                <TableCell>{offender.name}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                  
                  {achievement.image_url && (
                    <div className="mt-6">
                      <img 
                        src={achievement.image_url} 
                        alt={achievement.title}
                        className="w-full h-64 object-cover rounded-xl"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl mt-16">
            <div className="text-center">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Committed to Excellence</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Our achievements reflect our unwavering commitment to creating a drug-free Telangana. 
                Together, we continue to fight against narcotics and protect our communities.
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-400 font-semibold">
                <CheckCircle className="w-6 h-6" />
                <span>Making Telangana Drug-Free</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Achievements;
