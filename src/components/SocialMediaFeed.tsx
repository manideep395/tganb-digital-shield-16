
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Youtube, Twitter, Facebook, X } from 'lucide-react';

const SocialMediaFeed = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/telanganaantinarcoticsbureau/',
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Latest photos and stories',
      embedCode: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/example/" data-instgrm-version="14"></blockquote>'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/tg_anb?lang=en',
      color: 'bg-gray-800 hover:bg-gray-900',
      description: 'Real-time updates and news',
      embedCode: '<a class="twitter-timeline" href="https://twitter.com/tg_anb">Tweets by tg_anb</a>'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/telanganaantinarcoticsbureau/',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Community discussions',
      embedCode: '<div class="fb-page" data-href="https://www.facebook.com/telanganaantinarcoticsbureau" data-tabs="timeline"></div>'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@TG_ANB',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Educational videos and campaigns',
      embedCode: '<div style="text-align: center;"><iframe width="400" height="225" src="https://www.youtube.com/embed/tqFqKrmJAoU" frameborder="0" allowfullscreen></iframe></div>'
    }
  ];

  const handlePlatformClick = (platformName: string) => {
    setSelectedPlatform(selectedPlatform === platformName ? null : platformName);
  };

  const closeFeed = () => {
    setSelectedPlatform(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-gray-800 dark:to-gray-900 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Social Media Feed
          </h2>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className={`cursor-pointer transform hover:scale-110 transition-all duration-300 p-4 rounded-full ${platform.color}`}
                onClick={() => handlePlatformClick(platform.name)}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>
            );
          })}
        </div>

        {selectedPlatform && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-4xl mx-auto relative">
            <button
              onClick={closeFeed}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {selectedPlatform} Feed
            </h3>
            
            <div className="min-h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
              {selectedPlatform === 'YouTube' ? (
                <div className="text-center">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/tqFqKrmJAoU" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="max-w-full"
                  ></iframe>
                </div>
              ) : (
                <div className="text-center text-gray-600 dark:text-gray-300">
                  <p className="text-lg mb-4">
                    {selectedPlatform} content would be displayed here
                  </p>
                  <p className="text-sm">
                    Click the button below to visit the official page
                  </p>
                  <button
                    onClick={() => window.open(socialPlatforms.find(p => p.name === selectedPlatform)?.url, '_blank')}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Visit {selectedPlatform}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialMediaFeed;
