
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    { id: 1, title: "Drug Seizure Operation", category: "Operations" },
    { id: 2, title: "School Awareness Program", category: "Education" },
    { id: 3, title: "Community Rally", category: "Community" },
    { id: 4, title: "Training Session", category: "Training" },
    { id: 5, title: "Press Conference", category: "Media" },
    { id: 6, title: "Award Ceremony", category: "Achievement" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visual documentation of our initiatives and achievements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-2">
            <Button
              variant={activeTab === 'photos' ? 'default' : 'ghost'}
              className={`rounded-full px-6 ${activeTab === 'photos' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => setActiveTab('photos')}
            >
              Photos
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              className={`rounded-full px-6 ml-2 ${activeTab === 'videos' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </Button>
          </div>
        </div>

        {/* Photo Gallery */}
        {activeTab === 'photos' && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl aspect-square overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400 group-hover:text-white transition-colors duration-300">
                    📸
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((video) => (
              <div
                key={video}
                className="group relative bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl aspect-video overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-gray-400 group-hover:text-white transition-colors duration-300">
                    ▶️
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold mb-1">Campaign Video {video}</h3>
                  <p className="text-sm opacity-90">Awareness Content</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8"
          >
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
