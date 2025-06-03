
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Sparkles, Copy, Download, Zap, Star, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const LinkedInPostGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedPost, setGeneratedPost] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useScrollToTop();

  const generatePost = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedPost(`🚀 Here's an engaging LinkedIn post about ${topic}!\n\nThis is where your AI-generated content would appear. The post is crafted to be ${tone} and engaging for your LinkedIn audience.\n\n✨ Key benefits:\n• Increased engagement\n• Professional visibility\n• Thought leadership\n\n#LinkedIn #ContentCreation #AI`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
      {/* Header */}
      <header className="bg-card/80 dark:bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/free-tools')} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tools</span>
              </Button>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="text-xl font-bold">LinkedIn Post Generator</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-linkedin-500 hover:bg-linkedin-600">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linkedin-50 via-background to-linkedin-100 dark:from-linkedin-900/20 dark:via-background dark:to-linkedin-800/20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-100 dark:bg-linkedin-900/50 text-linkedin-700 dark:text-linkedin-300 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Content Creation
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Create Viral{' '}
            <span className="text-gradient-linkedin">
              LinkedIn Posts
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Generate engaging LinkedIn content in seconds with AI trained on 500M+ viral posts. 
            Boost your engagement and grow your professional network.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {[
              { icon: Users, value: '4,000+', label: 'Creators' },
              { icon: TrendingUp, value: '500M+', label: 'Posts Analyzed' },
              { icon: Star, value: '95%', label: 'Success Rate' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${600 + index * 100}ms` }}>
                  <Icon className="w-8 h-8 text-linkedin-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="h-fit linkedin-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-linkedin-500" />
                <span>Generate Your Post</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  What topic would you like to write about?
                </label>
                <Textarea
                  placeholder="e.g., AI in business, remote work productivity, leadership tips..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Choose your tone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['professional', 'casual', 'inspiring', 'educational'].map((t) => (
                    <Button
                      key={t}
                      variant={tone === t ? 'default' : 'outline'}
                      onClick={() => setTone(t)}
                      className="capitalize"
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={generatePost}
                disabled={!topic || isGenerating}
                className="w-full bg-linkedin-500 hover:bg-linkedin-600"
              >
                {isGenerating ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Post
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="h-fit linkedin-shadow">
            <CardHeader>
              <CardTitle>Generated Post</CardTitle>
            </CardHeader>
            <CardContent>
              {generatedPost ? (
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg min-h-[200px] whitespace-pre-wrap">
                    {generatedPost}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-muted p-8 rounded-lg text-center text-muted-foreground min-h-[200px] flex items-center justify-center">
                  Your generated post will appear here
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Use Our Post Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "AI-Powered",
                description: "Trained on 500M+ LinkedIn posts for maximum engagement"
              },
              {
                icon: Users,
                title: "Multiple Tones",
                description: "Professional, casual, inspiring, or educational - you choose"
              },
              {
                icon: TrendingUp,
                title: "Instant Results",
                description: "Generate high-quality posts in seconds, not hours"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center linkedin-shadow">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 text-linkedin-500 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPostGenerator;
