
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Zap, Copy, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ViralPostGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [angle, setAngle] = useState('controversial');
  const [industry, setIndustry] = useState('');
  const [viralPosts, setViralPosts] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateViralPosts = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const posts = [
        `🔥 Unpopular opinion about ${topic}:\n\nEveryone talks about ${topic}, but nobody mentions the dark side.\n\n${angle === 'controversial' ? '💣 Here\'s what the industry doesn\'t want you to know...' : '✨ Here\'s the game-changing truth...'}\n\nThread 🧵👇\n\n#${industry} #Truth #Leadership`,
        
        `🚨 I'm about to get canceled for this ${topic} take...\n\nBut someone needs to say it.\n\n${angle === 'controversial' ? 'The emperor has no clothes.' : 'This changes everything.'}\n\nRepost if you agree (or disagree) 👇\n\n#Controversial #${industry} #RealTalk`,
        
        `📈 ${topic} is broken. Here's how to fix it:\n\n❌ What everyone does wrong:\n• Point 1\n• Point 2\n• Point 3\n\n✅ What actually works:\n• Better approach 1\n• Better approach 2\n• Better approach 3\n\nSave this post. Thank me later.\n\n#${industry} #Strategy #Innovation`,
        
        `💡 Plot twist: ${topic} isn't what you think it is.\n\nI just spent 6 months studying this, and my mind is blown.\n\n🤯 The biggest revelation?\n\n[Insert surprising insight]\n\nThis changes everything about how we approach ${industry}.\n\nThoughts? 👇\n\n#MindBlown #${industry} #GameChanger`
      ];
      
      setViralPosts(posts);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
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
              <h1 className="text-xl font-bold text-gray-900">Viral Post Generator</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-yellow-600 hover:bg-yellow-700">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Viral Post Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create posts with high viral potential using proven engagement formulas and psychological triggers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-600" />
                <span>Viral Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic/Subject
                </label>
                <Input
                  placeholder="e.g., Remote work, AI, Leadership"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry/Niche
                </label>
                <Input
                  placeholder="e.g., Tech, Marketing, Business"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Viral Angle
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'controversial', label: '🔥 Controversial Take' },
                    { key: 'surprising', label: '🤯 Surprising Truth' },
                    { key: 'contrarian', label: '🔄 Contrarian View' },
                    { key: 'emotional', label: '💝 Emotional Story' }
                  ].map((option) => (
                    <Button
                      key={option.key}
                      variant={angle === option.key ? 'default' : 'outline'}
                      onClick={() => setAngle(option.key)}
                      className="w-full justify-start text-sm"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={generateViralPosts}
                disabled={!topic || !industry || isGenerating}
                className="w-full bg-yellow-600 hover:bg-yellow-700"
              >
                {isGenerating ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Star className="w-4 h-4 mr-2" />
                    Generate Viral Posts
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {viralPosts.length > 0 ? (
              <div className="space-y-6">
                {viralPosts.map((post, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        <span>Viral Post Option {index + 1}</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap text-sm">
                        {post}
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                        <span>Viral potential: High 🔥</span>
                        <span>Character count: {post.length}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="h-96">
                <CardContent className="h-full flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Your viral posts will appear here</p>
                    <p className="text-sm mt-2">Fill in the details and generate your viral content</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Viral Post Elements */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>🧠 Psychology of Viral Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Emotional Triggers",
                  elements: ["Surprise/shock", "Controversy", "Inspiration", "Fear/urgency"]
                },
                {
                  title: "Social Proof",
                  elements: ["Bandwagon effect", "Authority bias", "Consensus", "Testimonials"]
                },
                {
                  title: "Cognitive Biases",
                  elements: ["Confirmation bias", "Scarcity", "Loss aversion", "Novelty bias"]
                },
                {
                  title: "Engagement Hooks",
                  elements: ["Questions", "Polls", "Challenges", "Predictions"]
                }
              ].map((category, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-3">{category.title}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.elements.map((element, elementIndex) => (
                      <li key={elementIndex}>• {element}</li>
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

export default ViralPostGenerator;
