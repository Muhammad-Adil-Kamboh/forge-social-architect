
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageCircle, Sparkles, TrendingUp, Heart, Star } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Community: React.FC = () => {
  useScrollToTop();

  const communityStats = [
    { icon: Users, value: '4,000+', label: 'Active Members' },
    { icon: MessageCircle, value: '500+', label: 'Daily Messages' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Heart, value: '99%', label: 'Satisfaction' }
  ];

  const channels = [
    {
      name: 'General Discussion',
      description: 'Connect with fellow creators and share your LinkedIn journey',
      members: '3,200+',
      color: 'bg-linkedin-500'
    },
    {
      name: 'Content Ideas',
      description: 'Get inspiration and feedback on your content strategy',
      members: '2,800+',
      color: 'bg-linkedin-green-500'
    },
    {
      name: 'Success Stories',
      description: 'Celebrate wins and learn from community achievements',
      members: '1,900+',
      color: 'bg-purple-500'
    },
    {
      name: 'Q&A Support',
      description: 'Get help from experts and experienced creators',
      members: '2,100+',
      color: 'bg-orange-500'
    }
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linkedin-50 via-background to-linkedin-100 dark:from-linkedin-900/20 dark:via-background dark:to-linkedin-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-100 dark:bg-linkedin-900/50 text-linkedin-700 dark:text-linkedin-300 text-sm font-medium mb-8 animate-fade-in">
            <Users className="w-4 h-4 mr-2" />
            Join Our Community
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Connect with{' '}
            <span className="text-gradient-linkedin">
              4,000+ Creators
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Join the most supportive community of LinkedIn creators. Share ideas, get feedback, 
            celebrate wins, and grow together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button size="lg" className="bg-linkedin-500 hover:bg-linkedin-600 px-8 py-4 text-lg font-semibold">
              Join Community <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-linkedin-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Community Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <Card key={index} className="linkedin-shadow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${channel.color}`}></div>
                    <CardTitle className="text-xl">{channel.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{channel.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{channel.members} members</span>
                    <Button variant="outline" size="sm">Join Channel</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Join Our Community?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Get Inspired',
                description: 'Daily content ideas and creative inspiration from top creators'
              },
              {
                icon: TrendingUp,
                title: 'Grow Faster',
                description: 'Learn proven strategies and tactics that actually work'
              },
              {
                icon: Users,
                title: 'Build Relationships',
                description: 'Connect with like-minded creators and potential collaborators'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="linkedin-shadow">
                  <CardContent className="pt-6 text-center">
                    <Icon className="w-12 h-12 text-linkedin-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linkedin-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-linkedin-100 mb-8">
            Start connecting with creators who are just as passionate about LinkedIn growth as you are.
          </p>
          <Button size="lg" className="bg-white text-linkedin-500 hover:bg-linkedin-50 px-8 py-4 text-lg font-semibold">
            Join Now - It's Free! <Users className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </AppShell>
  );
};

export default Community;
