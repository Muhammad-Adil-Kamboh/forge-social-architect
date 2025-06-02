
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Zap, Copy, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LinkedInSummaryGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [experience, setExperience] = useState('');
  const [goals, setGoals] = useState('');
  const [achievements, setAchievements] = useState('');
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      setGeneratedSummary(`🚀 ${experience} professional with a passion for driving innovation and delivering exceptional results.

Throughout my career, I've focused on ${goals}, leveraging my expertise to create meaningful impact in every project I undertake.

📈 Key Achievements:
${achievements.split('\n').map(achievement => `• ${achievement.trim()}`).join('\n')}

💡 What drives me: I believe in the power of collaboration and continuous learning. Whether it's mentoring team members, implementing new strategies, or solving complex challenges, I approach every opportunity with enthusiasm and strategic thinking.

🎯 Currently: Looking to connect with like-minded professionals and explore opportunities where I can contribute to organizational growth while continuing to develop my skills.

Let's connect and explore how we can create value together! 👋

#Professional #Innovation #Growth #Networking`);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
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
              <h1 className="text-xl font-bold text-gray-900">LinkedIn Summary Generator</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-orange-600 hover:bg-orange-700">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Summary Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a compelling "About" section that showcases your expertise and attracts the right opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-orange-600" />
                <span>Tell Us About Yourself</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Experience & Background
                </label>
                <Textarea
                  placeholder="e.g., 5+ years in digital marketing, specialized in B2B campaigns..."
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Goals & Interests
                </label>
                <Textarea
                  placeholder="e.g., helping startups scale their marketing efforts, exploring AI applications..."
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Achievements (one per line)
                </label>
                <Textarea
                  placeholder="e.g., Increased ROI by 200%&#10;Led team of 10 professionals&#10;Launched 5 successful campaigns"
                  value={achievements}
                  onChange={(e) => setAchievements(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                onClick={generateSummary}
                disabled={!experience || !goals || isGenerating}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {isGenerating ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Generating Summary...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Generate Summary
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Generated Summary</CardTitle>
            </CardHeader>
            <CardContent>
              {generatedSummary ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg min-h-[300px] whitespace-pre-wrap text-sm">
                    {generatedSummary}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Summary
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <FileText className="w-4 h-4 mr-2" />
                      Edit Summary
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    Character count: {generatedSummary.length} / 2600
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg text-center text-gray-500 min-h-[300px] flex items-center justify-center">
                  Your generated summary will appear here
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Summary Writing Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>✍️ Summary Writing Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Structure</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hook in first 2 lines</li>
                  <li>• Professional background</li>
                  <li>• Key achievements</li>
                  <li>• Current goals</li>
                  <li>• Call to action</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Tone</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Write in first person</li>
                  <li>• Be conversational</li>
                  <li>• Show personality</li>
                  <li>• Use active voice</li>
                  <li>• Include relevant keywords</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Format</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Use short paragraphs</li>
                  <li>• Add bullet points</li>
                  <li>• Include emojis strategically</li>
                  <li>• Keep under 2600 characters</li>
                  <li>• End with hashtags</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LinkedInSummaryGenerator;
