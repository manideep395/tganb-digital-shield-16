
import { useState } from 'react';
import { Play, Pause, Volume2, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { celebrityVideos } from '@/data/celebrityVideos';

const CelebrityCampaigns = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoPlay = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Celebrity Video Campaigns
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Prominent personalities join hands with TGANB to spread awareness about the dangers of drug abuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {celebrityVideos.slice(0, 3).map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
                    onClick={() => handleVideoPlay(video.id)}
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  {video.celebrity}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{video.views} views</span>
                  <span>{video.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 z-10 bg-white hover:bg-gray-100 rounded-full"
                onClick={closeModal}
              >
                <X className="w-4 h-4" />
              </Button>
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Celebrity Campaign Video"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-6">
          <Button 
            variant="outline" 
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
            onClick={() => window.open('https://www.youtube.com/@TG_ANB', '_blank')}
          >
            View More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CelebrityCampaigns;
