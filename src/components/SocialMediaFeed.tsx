
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

const SocialMediaFeed = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/telanganaantinarcoticsbureau/',
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Latest photos and stories'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/tg_anb?lang=en',
      color: 'bg-gray-800 hover:bg-gray-900',
      description: 'Real-time updates and news'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/telanganaantinarcoticsbureau/',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Community discussions'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@TG_ANB',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Educational videos and campaigns'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Follow Us on Social Media
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with TGANB through our social media channels for the latest updates, 
            awareness campaigns, and community initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <Card 
                key={platform.name}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => handleSocialClick(platform.url)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    {platform.description}
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 min-h-[120px] flex items-center justify-center">
                    <p className="text-gray-500 text-sm">
                      Click to view latest posts and updates
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Join our growing community and be part of the fight against drug abuse
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;
