
import { AlertTriangle, Skull, Brain, Heart, Eye, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DrugTypes = () => {
  const drugTypes = [
    {
      title: "Narcotic Drugs (Opioids)",
      color: "from-red-500 to-red-600",
      icon: Skull,
      description: "Narcotics or opioids are pain-relieving substances that act on the central nervous system. While some are used medically (like morphine), illegal use leads to addiction and fatal consequences.",
      commonDrugs: ["Heroin (Smack/Brown Sugar)", "Morphine", "Codeine", "Opium", "Fentanyl (very lethal in small doses)"],
      effects: [
        "Intense drowsiness and pain relief",
        "Respiratory depression",
        "Severe physical & mental dependence",
        "Withdrawal leads to vomiting, tremors, muscle pain",
        "Overdose can cause death"
      ],
      streetNames: "Smack, Chitta, Brown Sugar, H, Horse"
    },
    {
      title: "Psychotropic Substances (Synthetic)",
      color: "from-yellow-500 to-yellow-600",
      icon: Brain,
      description: "These are synthetic mind-altering substances that affect mood, perception, or consciousness. Some are prescription drugs misused for highs.",
      commonDrugs: ["MDMA (Ecstasy)", "LSD (Acid)", "Methamphetamine (Crystal Meth)", "Amphetamine", "Alprazolam (Xanax)", "Diazepam (Valium)"],
      effects: [
        "Euphoria and hallucinations",
        "Aggressive or violent behavior",
        "Anxiety, depression, paranoia",
        "Brain damage from long-term use",
        "Risk of overdose or psychosis"
      ],
      streetNames: "Ecstasy, Ice, Crystal, Acid, Xannies"
    },
    {
      title: "Cannabis (Ganja and derivatives)",
      color: "from-green-500 to-green-600",
      icon: Eye,
      description: "Cannabis is a natural psychoactive plant-based drug, illegal in many forms in India under the NDPS Act unless used for research or Ayurveda under license.",
      commonDrugs: ["Ganja (Dried leaves/flower)", "Charas (Resin form)", "Hashish Oil (Extracted oil)", "Bhang (sometimes culturally allowed but restricted)"],
      effects: [
        "Altered sense of time, perception",
        "Slowed reaction, impaired memory",
        "Mental health problems like schizophrenia",
        "Gateway to stronger drug usage",
        "School dropouts, risky driving, productivity loss"
      ],
      streetNames: "Weed, Pot, Mary Jane, Dope, Joint"
    },
    {
      title: "Inhalants and Solvents",
      color: "from-blue-500 to-blue-600",
      icon: Zap,
      description: "Inhalants are household products misused for a cheap high. This is highly dangerous and common among teenagers due to easy availability.",
      commonDrugs: ["Correction Fluid (Whitener)", "Paint Thinners", "Glue/Shoe polish", "Nail polish remover", "Aerosol sprays"],
      effects: [
        "Short-term hallucinations or dizziness",
        "Immediate brain cell death",
        "Liver, kidney, and nerve damage",
        "Can cause Sudden Sniffing Death Syndrome",
        "Chronic users may experience muscle wasting and psychosis"
      ],
      streetNames: "Whizz, Huff, Glue High, Solvent Abuse"
    }
  ];

  const dangers = [
    { icon: Brain, title: "Brain Damage", description: "Permanent cognitive impairment and memory loss" },
    { icon: Heart, title: "Family Breakdown", description: "Destruction of relationships and family bonds" },
    { icon: Skull, title: "Suicidal Tendencies", description: "Increased risk of self-harm and suicide" },
    { icon: AlertTriangle, title: "Legal Consequences", description: "Up to 10-20 years in prison under NDPS Act" },
    { icon: Zap, title: "Disease Spread", description: "HIV transmission through needle sharing" },
    { icon: Eye, title: "Financial Ruin", description: "Complete loss of financial stability and future prospects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              Types of <span className="text-blue-600">Drugs & Info</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding the 4 major classifications of drugs as identified by TG ANB and NCB
            </p>
          </div>

          {/* Drug Types */}
          <div className="space-y-12 mb-16">
            {drugTypes.map((drug, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${drug.color} rounded-full flex items-center justify-center mr-6`}>
                    <drug.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 font-poppins">{drug.title}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r ${drug.color} rounded-full mt-2"></div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{drug.description}</p>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Drugs</h3>
                    <ul className="space-y-2">
                      {drug.commonDrugs.map((drugName, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{drugName}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Effects on Body</h3>
                    <ul className="space-y-2">
                      {drug.effects.map((effect, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-red-700 text-sm">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-4">Street Names</h3>
                    <p className="text-yellow-700">{drug.streetNames}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Real Dangers Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="text-center mb-12">
              <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">The Real Dangers of Drug Abuse</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dangers.map((danger, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <danger.icon className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{danger.title}</h3>
                  <p className="text-red-200">{danger.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awareness Message */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Remember</h2>
              <p className="text-2xl font-bold text-yellow-400 mb-4">
                "Drugs don't just ruin lives — they destroy families, careers, futures, and your very identity."
              </p>
              <p className="text-xl text-blue-200">
                Say no to drugs, say yes to life.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DrugTypes;
