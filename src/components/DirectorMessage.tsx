
import { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DirectorMessage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReadMore = () => {
    // Navigate to director note page
    window.location.href = '/director-note';
  };

  return (
    <section className="py-8 bg-gradient-to-b from-blue-50 to-white font-poppins">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Director's Message</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Director Info */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src="/lovable-uploads/8f0c5105-a6c3-4812-85b3-0e1c39e29f3b.png" 
                    alt="Sri. Sandeep Shandilya IPS" 
                    className="w-16 h-16 rounded-full border-2 border-blue-600 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Sri. Sandeep Shandilya IPS</h3>
                    <p className="text-blue-600 font-semibold text-sm">Director, TG ANB</p>
                  </div>
                </div>
                
                <blockquote className="text-sm text-gray-700 italic leading-relaxed border-l-4 border-blue-600 pl-4 mb-4">
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

            {/* Video Section */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video relative">
                  {isPlaying ? (
                    <iframe
                      src="https://www.youtube.com/embed/tqFqKrmJAoU?autoplay=1&mute=0"
                      title="Director's Message"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img 
                        src="https://img.youtube.com/vi/tqFqKrmJAoU/maxresdefault.jpg"
                        alt="Director's Message Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Button
                          size="lg"
                          onClick={toggleVideo}
                          className="bg-red-600 hover:bg-red-700 rounded-full w-16 h-16 shadow-2xl transform hover:scale-110 transition-all duration-300"
                        >
                          <Play className="w-6 h-6 ml-1" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    Don't Let Drugs Decide Your Destiny
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Message by Director TG ANB Sri. Sandeep Shandilya IPS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
