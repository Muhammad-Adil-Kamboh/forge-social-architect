
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Zap, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LinkedInProfileFeedback: React.FC = () => {
  const navigate = useNavigate();
  const [profileUrl, setProfileUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<any>(null);

  const analyzeProfile = async () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setFeedback({
        score: 72,
        suggestions: [
          {
            category: "Profile Photo",
            score: 85,
            suggestion: "Great professional photo! Consider updating every 2-3 years to keep it current."
          },
          {
            category: "Headline",
            score: 60,
            suggestion: "Your headline could be more specific. Add your key skills and value proposition."
          },
          {
            category: "Summary",
            score: 45,
            suggestion: "Your summary needs work. Add more personality, achievements, and a clear call-to-action."
          },
          {
            category: "Experience",
            score: 80,
            suggestion: "Good job detailing your experience. Consider adding more quantifiable achievements."
          },
          {
            category: "Skills & Endorsements",
            score: 90,
            suggestion: "Excellent skill selection and endorsements. Keep requesting endorsements from colleagues."
          }
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
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
              <h1 className="text-xl font-bold text-gray-900">LinkedIn Profile Feedback</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-indigo-600 hover:bg-indigo-700">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LinkedIn Profile Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get AI-powered insights and optimization suggestions to make your LinkedIn profile stand out.
          </p>
        </div>

        {!feedback ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span>Analyze Your Profile</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile URL
                </label>
                <Input
                  placeholder="https://www.linkedin.com/in/your-profile"
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  className="text-base"
                />
              </div>

              <Button 
                onClick={analyzeProfile}
                disabled={!profileUrl || isAnalyzing}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                {isAnalyzing ? (
                  <>
                    <Zap className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing Profile...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Analyze Profile
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-6xl font-bold ${getScoreColor(feedback.score)} mb-2`}>
                      {feedback.score}
                    </div>
                    <div className="text-gray-600">out of 100</div>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mt-4 ${getScoreBg(feedback.score)} ${getScoreColor(feedback.score)}`}>
                      {feedback.score >= 80 ? 'Excellent' : feedback.score >= 60 ? 'Good' : 'Needs Improvement'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {feedback.suggestions.map((item: any, index: number) => (
                    <div key={index} className="border-l-4 border-indigo-200 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-900">{item.category}</h3>
                        <span className={`text-2xl font-bold ${getScoreColor(item.score)}`}>
                          {item.score}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.suggestion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={() => setFeedback(null)} 
              variant="outline" 
              className="w-full"
            >
              Analyze Another Profile
            </Button>
          </div>
        )}

        {/* Profile Optimization Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>🚀 Profile Optimization Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Essential Elements</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✅ Professional headshot</li>
                  <li>✅ Compelling headline</li>
                  <li>✅ Detailed summary</li>
                  <li>✅ Complete work history</li>
                  <li>✅ Skills and endorsements</li>
                  <li>✅ Recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Advanced Tips</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>🎯 Use keywords for your industry</li>
                  <li>📈 Share regular content</li>
                  <li>🤝 Build meaningful connections</li>
                  <li>💬 Engage with others' posts</li>
                  <li>🏆 Showcase achievements</li>
                  <li>📊 Track profile views</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LinkedInProfileFeedback;
