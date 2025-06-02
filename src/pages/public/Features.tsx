
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Calendar, Image, Users, BarChart3, Chrome, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Features: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Content Creation",
      description: "Uses AI trained on 500M+ LinkedIn posts to help create and edit high-quality content that resonates with your audience.",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Write & Schedule LinkedIn Posts",
      description: "Get inspired from a library of 5M+ viral posts. Write, edit, and schedule with one click. Kanban view to track posts.",
      color: "text-purple-600"
    },
    {
      icon: Image,
      title: "Generate Carousels for LinkedIn",
      description: "Easily create visual carousels using AI, YouTube videos, or links. Also available as a free tool.",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Build Relationships & Engage",
      description: "Engage with peers, clients, and customers. NEW: AI-powered Engagement to connect with influential voices.",
      color: "text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Analyze Your LinkedIn Statistics",
      description: "Track post engagement, follower growth, top-performing posts. Advanced insights beyond LinkedIn basics.",
      color: "text-red-600"
    },
    {
      icon: Chrome,
      title: "LinkedIn Chrome Extension",
      description: "Free tool with instant stats and top-performing post insights. Works without a subscription.",
      color: "text-indigo-600"
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
              <button onClick={() => navigate('/features')} className="text-blue-600 font-medium">Features</button>
              <button onClick={() => navigate('/pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
              <button onClick={() => navigate('/free-tools')} className="text-gray-700 hover:text-blue-600 transition-colors">Free Tools</button>
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
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkedIn Growth
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to create viral content, build relationships, and grow your LinkedIn presence with AI-powered tools.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <Icon className={`w-12 h-12 ${feature.color} mb-4`} />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose LeadKin?
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of creators who trust our AI-powered platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                AI Trained on 500M+ Posts
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our AI has analyzed over 500 million LinkedIn posts to understand what makes content go viral. 
                Get personalized suggestions that match your writing style and resonate with your audience.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Personalized content suggestions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Viral post analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Writing style adaptation
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
              <Sparkles className="w-20 h-20 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">500M+ Posts Analyzed</h4>
              <p className="text-gray-600">Continuously learning from the best LinkedIn content</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to experience these features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your 7-day free trial and see the difference AI can make
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() => navigate('/')}
          >
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;
