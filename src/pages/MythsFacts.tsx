
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const MythsFacts = () => {
  const mythsAndFacts = [
    {
      myth: "You can stop using drugs at any time.",
      fact: "Withdrawal symptoms, peer pressure and the availability of drugs make it difficult, yet help and support services are available."
    },
    {
      myth: "You can get addicted to drugs only if you use them for a long time.",
      fact: "Drugs can cause the brain to send the wrong signals to the body. This can make a person stop breathing, have a heart attack or go into coma. This can happen the first time the drug is used."
    },
    {
      myth: "Drugs increase creativity.",
      fact: "Drug users lose clarity of perception and thinking and coherence in action."
    },
    {
      myth: "As soon as a person feels normal, all the drugs are out of the body.",
      fact: "Long after the effects of the drug stop being felt, the drug can still be in the body. For example, cocaine can be found in the body for up to one week and marijuana for up to three months after a single use."
    },
    {
      myth: "Drugs relieve stress. They help deal with problems.",
      fact: "Drugs only make people forget and not care about their troubles. When the drug wears off, the problem still persists."
    },
    {
      myth: "Teenagers are too young to get addicted to drugs.",
      fact: "Addiction can happen at any age. Even an unborn child can get addicted because of their mother's drug use."
    },
    {
      myth: "One can try drugs just once and then stop.",
      fact: "Almost all drug addicts start by trying just once."
    },
    {
      myth: "Most of the addicts get their first drug from a peddler or a pusher.",
      fact: "Most of the addicts get their first drug from a friend or an associate in the form of a favour."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 font-poppins">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600 dark:text-blue-400">Myths & Facts</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Separating truth from fiction about drug addiction and substance abuse
            </p>
          </div>

          {/* Myths & Facts Grid */}
          <div className="max-w-6xl mx-auto space-y-8">
            {mythsAndFacts.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-blue-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Myth Section */}
                  <div className="bg-red-50 dark:bg-red-900/20 p-8 border-r border-red-200 dark:border-red-700">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">MYTH</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.myth}</p>
                      </div>
                    </div>
                  </div>

                  {/* Fact Section */}
                  <div className="bg-green-50 dark:bg-green-900/20 p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2">FACT</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.fact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Need Help or Support?</h2>
              <p className="text-blue-100 mb-6">
                If you or someone you know is struggling with substance abuse, help is available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-red-600 px-6 py-3 rounded-full">
                  <span className="font-bold">Emergency: 1908</span>
                </div>
                <div className="bg-blue-500 px-6 py-3 rounded-full">
                  <span className="font-bold">Helpline: 8712671111</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MythsFacts;
