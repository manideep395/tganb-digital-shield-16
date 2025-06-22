import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertTriangle, Heart, Brain, Eye, Users, Phone } from 'lucide-react';

const Education = () => {
  const physicalSymptoms = [
    'Dull-looking/glazed eyes',
    'Drowsiness',
    'Runny nose',
    'Coughing',
    'Needle marks',
    'Tattoos',
    'Weight loss',
    'Malnutrition',
    'Tremors/Hallucinations'
  ];

  const behavioralSymptoms = [
    "'Different' behavior",
    'Lack of motivation',
    'Solitary behaviour',
    'Lying',
    'Changes in speech-rapid, slowed, slurred'
  ];

  const otherSymptoms = [
    'Furtiveness',
    'Falling grades',
    'Use of mouthwash, mints, gum',
    'White specks on nostrils or clothing',
    'HIV, hepatitis B and C and tuberculosis',
    'Infertility',
    'Psycho-somatic disorders',
    'Reduced immunity levels',
    'Premature death',
    'Miscarriage and still birth',
    'Unprotected sex and Sexually Transmitted Diseases (STD)'
  ];

  const chronicUsePoints = [
    'Long lasting',
    'Cannot be cured but can be managed',
    'The brain shows distinct changes after substance use that can persist long after the substance use has stopped',
    'Like diabetes and hypertension, addiction: Cannot be cured, Can be managed'
  ];

  const rehabilitationPoints = [
    'Addiction is treatable, chronic medical disease including Complex Interactions among brain circuits, genetics and the environment.',
    'Arrange regular Counseling session on outpatient basis weekly twice for the first 4 weeks and later make it weekly once for the next 4 weeks. (Total 12 sessions in 8 weeks)',
    'Do random Urine and Blood test at least 3 times in the span of 8 weeks.'
  ];

  const objectives = [
    'To curb the menace of drug in Hyderabad City.',
    'To provide counselling and treatment to drug abusers.',
    'To monitor the activities of drug abusers for at least one year by regularly conducting drug test.'
  ];

  const consumerWayOut = [
    'Follow your treatment plan. Monitor your cravings. It may seem like you\'ve recovered and you don\'t need to keep taking steps to stay drug-free. But your chances of staying drug-free will be much higher if you continue seeing your therapist or counselor, going to support group meetings and taking prescribed medicine.',
    'Avoid high-risk situations. Don\'t go back to the neighborhood where you used to get your drugs. And stay away from your old drug crowd.',
    'Get help immediately if you use the drug again. If you start using the drug again, talk to your health care provider, your mental health provider or someone else who can help you right away.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              <span className="text-blue-600">Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Understanding drug addiction, its symptoms, and pathways to recovery
            </p>
          </div>

          {/* Drug Addicts & Health Impacts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              Drug Addicts & Health Impacts
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">SYMPTOMS</h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Physical Symptoms */}
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <Eye className="w-6 h-6 mr-2" />
                    Physical Symptoms
                  </h4>
                  <ul className="space-y-2">
                    {physicalSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Behavioral Symptoms */}
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                    <Brain className="w-6 h-6 mr-2" />
                    Behavioral Symptoms
                  </h4>
                  <ul className="space-y-2">
                    {behavioralSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other Symptoms */}
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    Other Symptoms
                  </h4>
                  <ul className="space-y-2">
                    {otherSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Chronic Use */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-l-4 border-purple-500 mb-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">Chronic Use</h3>
              <ul className="space-y-3">
                {chronicUsePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* REHAB Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Heart className="w-8 h-8 text-green-600 mr-3" />
              REHAB
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <ul className="space-y-4 mb-6">
                {rehabilitationPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-green-700 mb-4">Objectives:</h4>
                <ol className="space-y-2">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 font-bold mr-3">{index + 1}.</span>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* De-addiction Center */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              DE-ADDICTION CENTER
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Realizing That Only Arresting And Remanding Drug Consumers Peddlers, Transports Is Not Enough And That Rehabilitation Of Those Addicted Is Also Equally Important To Give Counselling Sessions For The Drug Abuse
              </p>
            </div>
          </div>

          {/* Consumer Way Out */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">CONSUMER WAY OUT</h2>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border-l-4 border-yellow-500">
              <p className="text-gray-700 mb-6 font-medium">
                Once you've been addicted to a drug, you're at high risk of falling back into a pattern of addiction. If you do start using the drug, it's likely you'll lose control over its use again — even if you've had treatment and you haven't used the drug for some time.
              </p>
              
              <ul className="space-y-4">
                {consumerWayOut.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Need Help? Call Now</h3>
            <p className="text-red-100 mb-4">24/7 Emergency Helpline for drug-related assistance</p>
            <div className="text-4xl font-bold">1908</div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
