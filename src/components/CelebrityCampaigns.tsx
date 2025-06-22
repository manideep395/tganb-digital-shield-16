
import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { celebrityVideos } from '@/data/celebrityVideos';

const CelebrityCampaigns = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const handleVideoPlay = (videoUrl: string) => {
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      setSelectedVideo(videoId);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
            Celebrity Video Campaigns
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            Prominent personalities join hands with TGANB to spread awareness about the dangers of drug abuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {celebrityVideos.map((video, index) => {
            const videoId = extractVideoId(video.videoUrl);
            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/placeholder.svg';
            
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group dark:bg-gray-800">
                <div className="relative">
                  <img 
                    src={thumbnailUrl} 
                    alt={`${video.name} Anti-Drug Campaign`}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2"
                      onClick={() => handleVideoPlay(video.videoUrl)}
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm text-gray-800 dark:text-white mb-1">
                    Anti-Drug Awareness by {video.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                    {video.designation}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 z-10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
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
            className="border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900"
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
