
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Calendar, BarChart3, Users } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Content',
      description: 'Generate viral LinkedIn posts using AI trained on 500M+ posts.',
      bullets: ['Smart content suggestions', 'Brand voice adaptation', 'Viral trend analysis']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Schedule and manage your content pipeline with intelligent timing.',
      bullets: ['Best time optimization', 'Queue management', 'Auto-posting']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance and optimize your LinkedIn strategy.',
      bullets: ['Engagement insights', 'Follower growth', 'Post performance']
    },
    {
      icon: Users,
      title: 'Relationship Building',
      description: 'Engage with your network and build meaningful connections.',
      bullets: ['Smart engagement', 'Lead tracking', 'Network growth']
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything you need to grow on LinkedIn
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features designed to help you create viral content, 
            build relationships, and grow your personal brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-center text-sm text-slate-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
