
import { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { celebrityVideos } from '../data/celebrityVideos';

const CelebrityCampaigns = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting && playingVideo) {
          setPlayingVideo(null);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [playingVideo]);

  useEffect(() => {
    if (playingVideo) {
      const timer = setTimeout(() => {
        // Auto advance to next slide when video completes (approximate duration)
        nextSlide();
        setPlayingVideo(null);
      }, 60000); // Assuming average 60 seconds per video

      return () => clearTimeout(timer);
    }
  }, [playingVideo]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % celebrityVideos.length);
    setPlayingVideo(null);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + celebrityVideos.length) % celebrityVideos.length);
    setPlayingVideo(null);
  };

  const toggleVideo = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]+)/);
    return match ? match[1] : '';
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Celebrity Video Campaigns</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Influential voices joining our mission against drug abuse
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {celebrityVideos.map((celebrity, index) => {
                const videoId = getYouTubeId(celebrity.videoUrl);
                const isPlaying = playingVideo === videoId;
                
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl overflow-hidden">
                      <div className="aspect-video relative">
                        {isPlaying ? (
                          <iframe
                            ref={(el) => videoRefs.current[videoId] = el}
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
                            title={`${celebrity.name} - Anti Drug Campaign`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <img 
                              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                              alt={`${celebrity.name} Campaign Thumbnail`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Button
                                size="lg"
                                onClick={() => toggleVideo(videoId)}
                                className="bg-red-600 hover:bg-red-700 rounded-full w-20 h-20 shadow-2xl transform hover:scale-110 transition-all duration-300"
                              >
                                <Play className="w-8 h-8 ml-1" />
                              </Button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                              <h3 className="text-2xl font-bold mb-2">{celebrity.name}</h3>
                              <p className="text-lg opacity-90">{celebrity.designation}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-white shadow-xl hover:shadow-2xl rounded-full w-12 h-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-white shadow-xl hover:shadow-2xl rounded-full w-12 h-12"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {celebrityVideos.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'bg-purple-600 w-8 h-3' 
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                  setPlayingVideo(null);
                }}
              />
            ))}
          </div>

          {/* Celebrity Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {celebrityVideos.map((celebrity, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-2 ring-purple-500 scale-105' 
                    : 'hover:shadow-xl hover:scale-105'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <h4 className="font-bold text-lg text-gray-800 mb-2">{celebrity.name}</h4>
                <p className="text-purple-600 font-medium">{celebrity.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityCampaigns;
