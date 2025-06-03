
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Image, Zap, Download, Sparkles, Star, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const LinkedInCarouselGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [slides, setSlides] = useState(['']);
  const [isGenerating, setIsGenerating] = useState(false);

  useScrollToTop();

  const addSlide = () => {
    setSlides([...slides, '']);
  };

  const updateSlide = (index: number, content: string) => {
    const newSlides = [...slides];
    newSlides[index] = content;
    setSlides(newSlides);
  };

  const generateCarousel = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setSlides([
        `${topic} - The Ultimate Guide`,
        'Why this matters:\n• Key insight 1\n• Key insight 2\n• Key insight 3',
        'Step 1: Getting Started\n\nDetailed explanation of the first step...',
        'Step 2: Implementation\n\nHow to put this into practice...',
        'Step 3: Optimization\n\nTips for maximizing results...',
        'Key Takeaways:\n\n✅ Main point 1\n✅ Main point 2\n✅ Main point 3',
        'Thank you for reading!\n\nLike if this was helpful\nFollow for more insights'
      ]);
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
              <h1 className="text-xl font-bold">LinkedIn Carousel Generator</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-linkedin-green-500 hover:bg-linkedin-green-600">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linkedin-green-50 via-background to-linkedin-green-100 dark:from-linkedin-green-900/20 dark:via-background dark:to-linkedin-green-800/20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-green-100 dark:bg-linkedin-green-900/50 text-linkedin-green-700 dark:text-linkedin-green-300 text-sm font-medium mb-8 animate-fade-in">
            <Image className="w-4 h-4 mr-2" />
            Visual Content Creation
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Create Stunning{' '}
            <span className="bg-gradient-to-r from-linkedin-green-500 to-linkedin-500 bg-clip-text text-transparent">
              Carousels
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Design engaging carousel posts that tell a story and drive massive engagement on LinkedIn. 
            Perfect for tutorials, tips, and educational content.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {[
              { icon: Image, value: '10x', label: 'More Engaging' },
              { icon: TrendingUp, value: '300%', label: 'Higher Reach' },
              { icon: Star, value: '4.9/5', label: 'User Rating' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${600 + index * 100}ms` }}>
                  <Icon className="w-8 h-8 text-linkedin-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <Card className="lg:col-span-1 linkedin-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Image className="w-5 h-5 text-linkedin-green-500" />
                <span>Carousel Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Carousel Topic
                </label>
                <Input
                  placeholder="e.g., 5 LinkedIn Growth Tips"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <Button 
                onClick={generateCarousel}
                disabled={!topic || isGenerating}
                className="w-full bg-linkedin-green-500 hover:bg-linkedin-green-600"
              >
                {isGenerating ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Generate Carousel
                  </>
                )}
              </Button>

              <Button variant="outline" onClick={addSlide} className="w-full">
                <Image className="w-4 h-4 mr-2" />
                Add Slide
              </Button>

              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Export as Images
              </Button>
            </CardContent>
          </Card>

          {/* Slides */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {slides.map((slide, index) => (
                <Card key={index} className="h-80 linkedin-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Slide {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={slide}
                      onChange={(e) => updateSlide(index, e.target.value)}
                      placeholder={`Content for slide ${index + 1}...`}
                      className="h-56 text-sm resize-none"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Tips */}
        <Card className="mt-12 linkedin-shadow">
          <CardHeader>
            <CardTitle>🎨 Carousel Design Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Hook First",
                  tips: ["Strong opening slide", "Clear value proposition", "Eye-catching design"]
                },
                {
                  title: "Tell a Story",
                  tips: ["Logical flow", "Build anticipation", "Clear progression"]
                },
                {
                  title: "Visual Consistency",
                  tips: ["Same color scheme", "Consistent fonts", "Uniform layout"]
                },
                {
                  title: "End Strong",
                  tips: ["Clear call-to-action", "Summary slide", "Engagement prompt"]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-3">{section.title}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LinkedInCarouselGenerator;
