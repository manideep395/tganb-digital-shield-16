
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Users, Shield, Search, FileText, Cog, Zap } from 'lucide-react';

const TganbStructure = () => {
  const headquartersComponents = [
    {
      title: 'Investigation Support, Prosecution, Court Monitoring and Legal Wing',
      icon: <FileText className="w-6 h-6" />,
      description: 'The wing shall help in conducting fair and systematic investigations of narcotics related cases registered in other Police Stations of the Commissionerate or the District. The wing shall render and advise on legal assistance to the investigating officers to file cases in the courts of law, closely monitor the prosecution of the cases all over the state, including trials and other proceedings and take appropriate action in the interests of the state till the conclusion of the case.',
      color: 'blue'
    },
    {
      title: 'Documentation, Training and Awareness Wing',
      icon: <Users className="w-6 h-6" />,
      description: 'The wing shall conduct screening tests, induction training for all the personnel inducted in the organization in matters related to drug trafficking and its prevention and also conduct the annual refreshing courses and other specialized trainings for all narcotics staff. The wing shall be responsible for conducting and coordinating demand mitigation measures like public awareness and education programs, victim assistance and rehabilitation programs and any other measures on the directions of the Headquarters, Hyderabad and the respective Police Commissioners/District Superintendents of Police.',
      color: 'green'
    },
    {
      title: 'Administrative and Logistic Wing',
      icon: <Cog className="w-6 h-6" />,
      description: 'This wing shall render administrative and logistical support, managing the issues of pay, allowances, procurement, maintenance of accounts, housekeeping, transportation and other duties assigned by the head of TSNAB. It will also be responsible for the supervision of narcotics maalkhanas.',
      color: 'purple'
    },
    {
      title: 'Technical Wing',
      icon: <Shield className="w-6 h-6" />,
      description: 'This wing shall provide technical support to all the other wings and work in close coordination with the technical wing of the Headquarters, Hyderabad. This wing will perform Data Analysis, Finance Analysis, Digital Forensics, Social Media, Dark-net and offenders monitoring and other technical matters.',
      color: 'orange'
    },
    {
      title: 'State Task Force Wing',
      icon: <Zap className="w-6 h-6" />,
      description: 'This wing shall work as a special unit to generate operational intelligence and conduct operations either independently or jointly with the auxiliary units within their jurisdiction.',
      color: 'red'
    }
  ];

  const policeStationComponents = [
    {
      title: 'Investigation, Prosecution and Monitoring',
      icon: <Search className="w-6 h-6" />,
      description: 'It shall conduct fair and systematic investigations of narcotics related cases registered in Police Stations of the Commissionerate and closely monitor the prosecution of the cases including trials and other proceedings and take appropriate action in the interests of the state till the conclusion of the case.',
      color: 'blue'
    },
    {
      title: 'Awareness',
      icon: <Users className="w-6 h-6" />,
      description: 'The wing shall be responsible for conducting and coordinating demand mitigation measures like public awareness and education programs, victim assistance and rehabilitation programs and any other measures on the directions of the Headquarters, Hyderabad and the respective Police Commissioners/District Superintendents of Police.',
      color: 'green'
    },
    {
      title: 'Technical Wing',
      icon: <Shield className="w-6 h-6" />,
      description: 'The wing shall provide technical support to all the other wings and work in close coordination with the technical wing of the Headquarters, Hyderabad. This wing will perform Data Analysis, Finance Analysis, Digital Forensics, Social Media, Dark-net and offenders monitoring and other technical matters.',
      color: 'orange'
    },
    {
      title: 'Operations',
      icon: <Zap className="w-6 h-6" />,
      description: 'This shall work to generate operational intelligence and conduct operations either independently or jointly with the auxiliary units within their jurisdiction, register cases and carry out investigations.',
      color: 'red'
    }
  ];

  const enforcementComponents = [
    {
      title: 'Intelligence and Operations',
      icon: <Search className="w-6 h-6" />,
      description: 'This shall work to generate operational intelligence and conduct operations either independently or jointly with the auxiliary units within their jurisdiction, register cases and carry out investigations.',
      color: 'red'
    },
    {
      title: 'Investigation support and Prosecution Monitoring',
      icon: <FileText className="w-6 h-6" />,
      description: 'It shall help in conducting fair and systematic investigations of narcotics related cases registered in their respective Police Stations of the Commissionerates or Districts and also monitor trails and prosecution.',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-500 text-blue-700',
      green: 'bg-green-50 border-green-500 text-green-700',
      purple: 'bg-purple-50 border-purple-500 text-purple-700',
      orange: 'bg-orange-50 border-orange-500 text-orange-700',
      red: 'bg-red-50 border-red-500 text-red-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const ComponentCard = ({ component, index }: { component: any, index: number }) => (
    <div key={index} className={`rounded-xl p-6 border-l-4 ${getColorClasses(component.color)} transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${component.color === 'blue' ? 'bg-blue-100' : 
          component.color === 'green' ? 'bg-green-100' :
          component.color === 'purple' ? 'bg-purple-100' :
          component.color === 'orange' ? 'bg-orange-100' : 'bg-red-100'}`}>
          {component.icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-3">{component.title}</h4>
          <p className="text-sm text-gray-700 leading-relaxed">{component.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              <span className="text-blue-600">TGANB Structure</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Organizational structure and functional components of Telangana Anti-Narcotics Bureau
            </p>
          </div>

          {/* TSNAB Head Quarters */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Functional Components of TSNAB Head Quarters
              </h2>
            </div>

            <div className="grid gap-8">
              {headquartersComponents.map((component, index) => (
                <ComponentCard key={index} component={component} index={index} />
              ))}
            </div>
          </div>

          {/* Narcotics Police Stations */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Functional Components of Narcotics Police Stations
              </h2>
            </div>

            <div className="grid gap-8">
              {policeStationComponents.map((component, index) => (
                <ComponentCard key={index} component={component} index={index} />
              ))}
            </div>
          </div>

          {/* Narcotics Enforcement Wings */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Functional Components of Narcotics Enforcement Wings
              </h2>
            </div>

            <div className="grid gap-8">
              {enforcementComponents.map((component, index) => (
                <ComponentCard key={index} component={component} index={index} />
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Comprehensive Structure</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              The TGANB structure is designed to provide comprehensive coverage of anti-narcotics operations 
              through specialized wings that handle investigation, prosecution, training, awareness, and enforcement 
              activities across Telangana state.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TganbStructure;
