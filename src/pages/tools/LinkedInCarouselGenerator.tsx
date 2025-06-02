
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Image, Zap, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LinkedInCarouselGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [slides, setSlides] = useState(['']);
  const [isGenerating, setIsGenerating] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/free-tools')} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tools</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">LinkedIn Carousel Generator</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-red-600 hover:bg-red-700">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Carousel Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create engaging carousel posts that tell a story and drive engagement on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Image className="w-5 h-5 text-red-600" />
                <span>Carousel Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                className="w-full bg-red-600 hover:bg-red-700"
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
                <Card key={index} className="h-80">
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
        <Card className="mt-12">
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
                  <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
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
