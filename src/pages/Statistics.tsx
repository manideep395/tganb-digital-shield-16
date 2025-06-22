
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Statistics = () => {
  const substanceData = [
    { substance: 'Cannabis/Ganja/Charas', indiaPopulation: '3.1', telanganaPopulation: '2.4', rank: '28th' },
    { substance: 'Opioid', indiaPopulation: '2.26', telanganaPopulation: '7.6', rank: '23rd' },
    { substance: 'Sedatives', indiaPopulation: '1.5', telanganaPopulation: '4.5', rank: '19th' },
    { substance: 'Inhalants', indiaPopulation: '1', telanganaPopulation: '2.8', rank: '22nd' },
    { substance: 'Cocaine', indiaPopulation: '14.2', telanganaPopulation: '30,400 (in thousands)', rank: '10th' },
    { substance: 'People Who Inject Drugs (PWID)', indiaPopulation: '8.5 (lakhs)', telanganaPopulation: '64,000 (in thousands)', rank: '5th' },
    { substance: 'Hallucinogens', indiaPopulation: '17 (lakhs)', telanganaPopulation: '2.4', rank: '3rd' }
  ];

  const telanganaRankData = [
    { substance: 'Hallucinogens', rank: '3rd', population: '2.4 lakhs people' },
    { substance: 'People Who Inject Drugs', rank: '5th', population: '64,000 people' },
    { substance: 'Cocaine', rank: '10th', population: '30,400 people' },
    { substance: 'Alcohol Consumption', rank: '15th', population: '63.8 lakhs people' },
    { substance: 'Sedatives', rank: '19th', population: '4.5 lakhs people' },
    { substance: 'Inhalants', rank: '22nd', population: '2.8 lakhs people' },
    { substance: 'Opioids/opium', rank: '23rd', population: '7.6 lakhs people' },
    { substance: 'Cannabis/Ganja', rank: '28th', population: '2.4 lakhs people' }
  ];

  const deportationData = [
    { slNo: 1, name: 'Kone Moussa S/o Kone', nation: 'Ivory Coast' },
    { slNo: 2, name: 'Asseu William Decostaire S/o Johnson Asseu', nation: 'Ivory Coast' },
    { slNo: 3, name: 'Ugwu Antony Sunday S/o Jenet Ugwu', nation: 'Nigeria' },
    { slNo: 4, name: 'Obiora Peter Chukwuemeka S/o Late Obiora', nation: 'Nigeria' },
    { slNo: 5, name: 'Umeojira Chukwudalu Kinsley S/o Umeojiora Kalu', nation: 'Nigeria' },
    { slNo: 6, name: 'Felix Awunyo S/o John Awunyo', nation: 'Ghana' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600">Statistics</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Data-driven insights into substance use and anti-narcotics operations in Telangana
            </p>
          </div>

          {/* Ministry of Social Justice Statistics */}
          <Card className="mb-8 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                Ministry of Social Justice - Magnitude of Substance Use 2019
              </CardTitle>
              <p className="text-center text-gray-600 dark:text-gray-300">
                (Reports as per Ministry of Social Justice and Empowerment)
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Type of Substance</TableHead>
                      <TableHead className="font-bold">Consumption of Population in India (in Crores)</TableHead>
                      <TableHead className="font-bold">Consumption of Population in Telangana (in Lakhs)</TableHead>
                      <TableHead className="font-bold">Telangana's Rank</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {substanceData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.substance}</TableCell>
                        <TableCell>{item.indiaPopulation}</TableCell>
                        <TableCell>{item.telanganaPopulation}</TableCell>
                        <TableCell>{item.rank}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Telangana State Rankings */}
          <Card className="mb-8 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                Telangana State Drug Usage Rankings
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                As per the Magazine on Magnitude of Substance use in India - 2019 by Ministry of Social Justice and Empowerment, Govt. of India
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {telanganaRankData.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-blue-800 dark:text-blue-300">{item.substance}</h3>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{item.rank}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">out of 36 states and UTs</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">({item.population})</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Foreigners Deportation */}
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                Foreigners Deportation
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                The following foreign nationals have been deported to their native country
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Sl. No.</TableHead>
                      <TableHead className="font-bold">Name</TableHead>
                      <TableHead className="font-bold">Nation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {deportationData.map((item) => (
                      <TableRow key={item.slNo}>
                        <TableCell className="font-medium">{item.slNo}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.nation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Statistics;
