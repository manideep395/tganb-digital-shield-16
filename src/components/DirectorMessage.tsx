
import { Button } from '@/components/ui/button';

const DirectorMessage = () => {
  const handleReadMore = () => {
    window.location.href = '/directors-note';
  };

  return (
    <section className="py-8 bg-gradient-to-b from-blue-50 to-white font-poppins dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">Director's Message</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            {/* Director Info */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src="/lovable-uploads/8f0c5105-a6c3-4812-85b3-0e1c39e29f3b.png" 
                    alt="Sri. Sandeep Shandilya IPS" 
                    className="w-16 h-16 rounded-full border-2 border-blue-600 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Sri. Sandeep Shandilya IPS</h3>
                    <p className="text-blue-600 font-semibold text-sm">Director, TG ANB</p>
                  </div>
                </div>
                
                <blockquote className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed border-l-4 border-blue-600 pl-4 mb-4">
                  "Don't Let Drugs Decide Your Destiny. Together, we can build a drug-free Telangana 
                  where every citizen can realize their full potential without the shadow of substance abuse."
                </blockquote>
                
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full px-6 text-sm"
                  onClick={handleReadMore}
                >
                  Read Full Message
                </Button>
              </div>
            </div>

            {/* Director Photo */}
            <div className="relative flex justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6">
                <img 
                  src="/lovable-uploads/8f0c5105-a6c3-4812-85b3-0e1c39e29f3b.png"
                  alt="Director TG ANB"
                  className="w-64 h-64 rounded-full object-cover border-4 border-blue-600 shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* DGP Message Section */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">DGP's Message</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* DGP Photo */}
            <div className="relative flex justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6">
                <img 
                  src="/lovable-uploads/58955152-6125-4601-abc9-e7cf3762b834.png"
                  alt="Dr. Jitender DGP, Telangana"
                  className="w-64 h-64 rounded-full object-cover border-4 border-green-600 shadow-2xl"
                />
              </div>
            </div>

            {/* DGP Info */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src="/lovable-uploads/58955152-6125-4601-abc9-e7cf3762b834.png" 
                    alt="Dr. Jitender DGP" 
                    className="w-16 h-16 rounded-full border-2 border-green-600 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Dr. Jitender</h3>
                    <p className="text-green-600 font-semibold text-sm">DGP, Telangana</p>
                  </div>
                </div>
                
                <blockquote className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed border-l-4 border-green-600 pl-4 mb-4">
                  "Drugs ruin lives by damaging mental and physical health. Each of you should spread 
                  the message to at least 10 others — say no to drugs, yes to health and a good life."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
