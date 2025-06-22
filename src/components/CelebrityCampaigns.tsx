
import { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { celebrityVideos } from '../data/celebrityVideos';

const CelebrityCampaigns = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Celebrity Video Campaigns</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Influential voices joining our mission against drug abuse
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {celebrityVideos.map((celebrity, index) => {
                const videoId = getYouTubeId(celebrity.videoUrl);
                const isPlaying = playingVideo === videoId;
                
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <div className="aspect-video relative">
                        {isPlaying ? (
                          <iframe
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
                                className="bg-red-600 hover:bg-red-700 rounded-full w-16 h-16 shadow-2xl transform hover:scale-110 transition-all duration-300"
                              >
                                <Play className="w-6 h-6 ml-1" />
                              </Button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h3 className="text-xl font-bold mb-1">{celebrity.name}</h3>
                              <p className="text-sm opacity-90">{celebrity.designation}</p>
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white shadow-lg hover:shadow-xl rounded-full w-10 h-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white shadow-lg hover:shadow-xl rounded-full w-10 h-10"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {celebrityVideos.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'bg-purple-600 w-6 h-2' 
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                  setPlayingVideo(null);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityCampaigns;
