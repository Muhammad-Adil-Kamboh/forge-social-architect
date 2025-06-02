
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Zap, Copy, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LinkedInHeadlineGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [keywords, setKeywords] = useState('');
  const [headlines, setHeadlines] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateHeadlines = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const generatedHeadlines = [
        `${jobTitle} | Helping businesses grow through ${industry} | ${keywords}`,
        `🚀 ${jobTitle} passionate about ${industry} innovation | ${keywords} expert`,
        `${industry} ${jobTitle} | Transforming ideas into results | ${keywords} specialist`,
        `💡 ${jobTitle} driving ${industry} excellence | ${keywords} enthusiast`,
        `${jobTitle} | ${industry} thought leader | Specializing in ${keywords}`
      ];
      setHeadlines(generatedHeadlines);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
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
              <h1 className="text-xl font-bold text-gray-900">LinkedIn Headline Generator</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-purple-600 hover:bg-purple-700">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Headline Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create compelling headlines that make your profile stand out and attract the right connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span>Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <Input
                  placeholder="e.g., Marketing Manager, Software Engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <Input
                  placeholder="e.g., Technology, Healthcare, Finance"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Skills/Keywords
                </label>
                <Input
                  placeholder="e.g., Digital Marketing, AI, Leadership"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>

              <Button 
                onClick={generateHeadlines}
                disabled={!jobTitle || !industry || isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {isGenerating ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Generating Headlines...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Generate Headlines
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Generated Headlines</CardTitle>
            </CardHeader>
            <CardContent>
              {headlines.length > 0 ? (
                <div className="space-y-3">
                  {headlines.map((headline, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                      <span className="text-sm flex-1 mr-3">{headline}</span>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg text-center text-gray-500">
                  Fill in your information to generate compelling headlines
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>💡 Headline Writing Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Include your job title and industry</li>
                  <li>• Mention key skills or specializations</li>
                  <li>• Use action words and value propositions</li>
                  <li>• Add personality with emojis (sparingly)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Don't:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use generic phrases like "Expert" without context</li>
                  <li>• Stuff keywords unnaturally</li>
                  <li>• Make it too long (220 characters max)</li>
                  <li>• Use jargon that others won't understand</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LinkedInHeadlineGenerator;
