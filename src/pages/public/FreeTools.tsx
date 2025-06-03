
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, FileText, User, Image, MessageSquare, TrendingUp, Zap, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UpdatesTicker } from '@/components/marketing/UpdatesTicker';

const FreeTools: React.FC = () => {
  const navigate = useNavigate();

  const tools = [
    {
      icon: FileText,
      title: "LinkedIn Post Generator",
      description: "Create engaging LinkedIn posts with AI assistance. Get ideas, improve your writing, and boost engagement.",
      href: "/tools/linkedin-post-generator",
      popular: true
    },
    {
      icon: User,
      title: "LinkedIn Headline Generator",
      description: "Craft compelling LinkedIn headlines that attract the right audience and showcase your expertise.",
      href: "/tools/linkedin-headline-generator"
    },
    {
      icon: FileText,
      title: "LinkedIn Summary Generator", 
      description: "Write a professional LinkedIn summary that tells your story and attracts opportunities.",
      href: "/tools/linkedin-summary-generator"
    },
    {
      icon: Image,
      title: "LinkedIn Carousel Generator",
      description: "Design beautiful carousel posts that engage your audience and drive meaningful conversations.",
      href: "/tools/linkedin-carousel-generator",
      popular: true
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Profile Feedback",
      description: "Get AI-powered feedback on your LinkedIn profile and learn how to optimize it for better results.",
      href: "/tools/linkedin-profile-feedback"
    },
    {
      icon: TrendingUp,
      title: "LinkedIn Post Booster",
      description: "Improve existing posts with AI suggestions to increase engagement and reach more people.",
      href: "/tools/linkedin-post-booster"
    },
    {
      icon: Zap,
      title: "Viral Post Generator",
      description: "Analyze viral content patterns and create posts with higher potential for virality.",
      href: "/tools/viral-post-generator"
    },
    {
      icon: BarChart3,
      title: "LinkedIn Video Downloader",
      description: "Download LinkedIn videos for analysis, inspiration, or personal reference.",
      href: "/tools/linkedin-video-downloader"
    }
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Free LinkedIn{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growth Tools
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Boost your LinkedIn presence with our collection of free AI-powered tools. 
            No account required – start optimizing your content today.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
                  {tool.popular && (
                    <div className="absolute -top-3 left-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-slate-600 mb-6">{tool.description}</p>
                    <Button 
                      className="w-full"
                      onClick={() => navigate(tool.href)}
                    >
                      Try it free
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Updates Ticker */}
      <UpdatesTicker />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for more advanced features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Upgrade to LeadKin Pro for unlimited access to all tools, 
            advanced analytics, and AI-powered content creation.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
            onClick={() => navigate('/app')}
          >
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </AppShell>
  );
};

export default FreeTools;
