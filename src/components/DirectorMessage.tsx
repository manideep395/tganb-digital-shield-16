
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DirectorMessage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting && isPlaying) {
          setIsPlaying(false);
          // Pause video when section is not visible
          if (videoRef.current) {
            videoRef.current.src = videoRef.current.src;
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Director's Message</h2>
            <p className="text-xl text-gray-600">
              A message from Sri. Sandeep Shandilya IPS, Director TG ANB
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Director Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    SS
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Sri. Sandeep Shandilya IPS</h3>
                    <p className="text-blue-600 font-semibold">Director, TG ANB</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 italic leading-relaxed border-l-4 border-blue-600 pl-4">
                  "Don't Let Drugs Decide Your Destiny. Together, we can build a drug-free Telangana 
                  where every citizen can realize their full potential without the shadow of substance abuse."
                </blockquote>
                
                <Button 
                  className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full px-8"
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
                      ref={videoRef}
                      src="https://www.youtube.com/embed/tqFqKrmJAoU?autoplay=1&mute=0"
                      title="Director's Message - Don't Let Drugs Decide Your Destiny"
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
                          className="bg-red-600 hover:bg-red-700 rounded-full w-20 h-20 shadow-2xl transform hover:scale-110 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 ml-1" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Don't Let Drugs Decide Your Destiny
                  </h4>
                  <p className="text-gray-600">
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
