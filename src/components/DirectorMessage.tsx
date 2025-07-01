
import { Button } from '@/components/ui/button';

const DirectorMessage = () => {
  const handleReadMore = () => {
    window.location.href = '/directors-note';
  };

  return (
    <section className="py-8 bg-gradient-to-b from-blue-50 to-white font-poppins dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Leadership Messages</h2>
            <p className="text-gray-600 dark:text-gray-300">Words of guidance from our esteemed leaders</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* DGP Message */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">DGP's Message</h3>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <img 
                    src="/uploads/58955152-6125-4601-abc9-e7cf3762b834.png" 
                    alt="Dr. Jitender IPS" 
                    className="w-16 h-16 rounded-full border-2 border-green-600 object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">Dr. Jitender, IPS</h4>
                    <p className="text-green-600 font-semibold text-sm">DGP, Telangana</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed border-l-4 border-green-600 pl-4">
                "Drugs ruin lives by damaging mental and physical health. Each of you should spread 
                the message to at least 10 others — say no to drugs, yes to health and a good life."
              </blockquote>
            </div>

            {/* Director Message */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Director's Message</h3>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <img 
                    src="/uploads/image.png" 
                    alt="Shri Sandeep Shandilya IPS" 
                    className="w-16 h-16 rounded-full border-2 border-green-600 object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">Shri Sandeep Shandilya IPS</h4>
                    <p className="text-green-600 font-semibold text-sm">Director TGANB, Telangana</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed border-l-4 border-green-600 pl-4">
                "Don't Let Drugs Decide Your Destiny. Together, we can build a drug-free Telangana 
                where every citizen can realize their full potential without the shadow of substance abuse."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
