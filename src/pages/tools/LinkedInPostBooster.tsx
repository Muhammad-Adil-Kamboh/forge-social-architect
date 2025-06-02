
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Zap, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LinkedInPostBooster: React.FC = () => {
  const navigate = useNavigate();
  const [originalPost, setOriginalPost] = useState('');
  const [improvementType, setImprovementType] = useState('engagement');
  const [boostedPost, setBoostedPost] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const boostPost = async () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      let improved = '';
      
      switch (improvementType) {
        case 'engagement':
          improved = `🚀 ${originalPost}\n\n💡 What's your experience with this?\n\n👇 Share your thoughts in the comments!\n\n#Engagement #LinkedIn #Growth`;
          break;
        case 'storytelling':
          improved = `📖 Here's a story that changed my perspective...\n\n${originalPost}\n\n✨ The lesson? Sometimes the best insights come from unexpected places.\n\nWhat unexpected lessons have you learned recently?`;
          break;
        case 'authority':
          improved = `💼 After years in the industry, here's what I've learned:\n\n${originalPost}\n\n🎯 Key takeaway: Consistency and authenticity always win.\n\nWhat strategies have worked best for you?`;
          break;
        case 'viral':
          improved = `🔥 This might be controversial, but...\n\n${originalPost}\n\n🤔 Am I wrong? Let's discuss!\n\n♻️ Repost if you agree\n💬 Comment your thoughts\n\n#Debate #LinkedIn #Perspective`;
          break;
      }
      
      setBoostedPost(improved);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
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
              <h1 className="text-xl font-bold text-gray-900">LinkedIn Post Booster</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-pink-600 hover:bg-pink-700">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Post Booster
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your existing posts with AI-powered suggestions to increase engagement and reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-pink-600" />
                <span>Your Original Post</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paste your post content
                </label>
                <Textarea
                  placeholder="Paste your LinkedIn post here..."
                  value={originalPost}
                  onChange={(e) => setOriginalPost(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Improvement Focus
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'engagement', label: 'More Engagement' },
                    { key: 'storytelling', label: 'Better Story' },
                    { key: 'authority', label: 'Show Authority' },
                    { key: 'viral', label: 'Viral Potential' }
                  ].map((type) => (
                    <Button
                      key={type.key}
                      variant={improvementType === type.key ? 'default' : 'outline'}
                      onClick={() => setImprovementType(type.key)}
                      className="text-sm"
                    >
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={boostPost}
                disabled={!originalPost || isProcessing}
                className="w-full bg-pink-600 hover:bg-pink-700"
              >
                {isProcessing ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Boosting Post...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Boost My Post
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle>Boosted Post</CardTitle>
            </CardHeader>
            <CardContent>
              {boostedPost ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg min-h-[200px] whitespace-pre-wrap text-sm">
                    {boostedPost}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Boosted Post
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500">
                    <strong>Improvements made:</strong> Added engagement hooks, 
                    {improvementType === 'engagement' && ' call-to-action, and relevant hashtags'}
                    {improvementType === 'storytelling' && ' narrative structure and emotional connection'}
                    {improvementType === 'authority' && ' credibility indicators and expertise positioning'}
                    {improvementType === 'viral' && ' controversial angle and sharing prompts'}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg text-center text-gray-500 min-h-[200px] flex items-center justify-center">
                  Your boosted post will appear here
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Post Improvement Strategies */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>📈 Post Boosting Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Engagement",
                  strategies: ["Ask questions", "Use polls", "Add CTAs", "Encourage sharing"]
                },
                {
                  title: "Storytelling",
                  strategies: ["Personal anecdotes", "Problem-solution", "Before/after", "Lessons learned"]
                },
                {
                  title: "Authority",
                  strategies: ["Share expertise", "Use data/stats", "Reference experience", "Provide insights"]
                },
                {
                  title: "Virality",
                  strategies: ["Controversial takes", "Trending topics", "Emotional hooks", "Shareable quotes"]
                }
              ].map((category, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-3">{category.title}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.strategies.map((strategy, strategyIndex) => (
                      <li key={strategyIndex}>• {strategy}</li>
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

export default LinkedInPostBooster;
