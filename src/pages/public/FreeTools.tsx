
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Hash, User, Image, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FreeTools: React.FC = () => {
  const navigate = useNavigate();

  const tools = [
    {
      icon: FileText,
      title: "LinkedIn Post Generator",
      description: "Generate engaging posts based on your experience and writing style",
      color: "text-blue-600",
      path: "/tools/linkedin-post-generator"
    },
    {
      icon: Download,
      title: "LinkedIn Video Downloader",
      description: "Download your favorite LinkedIn videos for offline viewing",
      color: "text-green-600",
      path: "/tools/linkedin-video-downloader"
    },
    {
      icon: FileText,
      title: "LinkedIn Headline Generator",
      description: "Create catchy profile headlines that attract attention",
      color: "text-purple-600",
      path: "/tools/linkedin-headline-generator"
    },
    {
      icon: FileText,
      title: "LinkedIn Summary Generator",
      description: "Craft a standout 'About' section that showcases your expertise",
      color: "text-orange-600",
      path: "/tools/linkedin-summary-generator"
    },
    {
      icon: Image,
      title: "LinkedIn Carousel Generator",
      description: "Create beautiful carousel posts with AI assistance or visual editor",
      color: "text-red-600",
      path: "/tools/linkedin-carousel-generator"
    },
    {
      icon: FileText,
      title: "LinkedIn Profile Feedback",
      description: "Get AI-powered optimization suggestions for your profile",
      color: "text-indigo-600",
      path: "/tools/linkedin-profile-feedback"
    },
    {
      icon: Zap,
      title: "LinkedIn Post Booster",
      description: "Enhance your existing posts with LeadKin AI suggestions",
      color: "text-pink-600",
      path: "/tools/linkedin-post-booster"
    },
    {
      icon: Zap,
      title: "Viral Post Generator",
      description: "Use AI to write posts with high viral potential",
      color: "text-yellow-600",
      path: "/tools/viral-post-generator"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => navigate('/home')} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LeadKin
            </button>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => navigate('/features')} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
              <button onClick={() => navigate('/pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
              <button onClick={() => navigate('/free-tools')} className="text-blue-600 font-medium">Free Tools</button>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')}>Log In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={() => navigate('/')}>
                Sign-up for Free
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Free LinkedIn{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growth Tools
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Powerful tools to enhance your LinkedIn presence, completely free. No signup required for most tools.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => navigate(tool.path)}>
                  <CardHeader className="text-center">
                    <Icon className={`w-12 h-12 ${tool.color} mx-auto mb-4`} />
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                    <Button variant="outline" className="w-full">
                      Try Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                LinkedIn Chrome Extension
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get instant insights about any LinkedIn profile or post. Our free Chrome extension 
                provides real-time statistics and top-performing post analysis without requiring a subscription.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Instant profile statistics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Top-performing post insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Works without subscription
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Enhanced features with account
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Add to Chrome - Free
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
              <img src="/placeholder.svg" alt="Chrome Extension Preview" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want access to premium tools?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Upgrade to LeadKin Pro for unlimited AI-powered content creation and advanced analytics
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold mr-4"
            onClick={() => navigate('/')}
          >
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            onClick={() => navigate('/pricing')}
          >
            View Pricing
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FreeTools;
