
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles, TrendingUp, Users, BarChart3, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Content",
      description: "Create viral content with AI trained on 500M+ LinkedIn posts"
    },
    {
      icon: TrendingUp,
      title: "Schedule & Analyze",
      description: "Schedule posts and track performance with advanced analytics"
    },
    {
      icon: Users,
      title: "Build Relationships",
      description: "Connect with influential voices and grow your network"
    },
    {
      icon: BarChart3,
      title: "Track Growth",
      description: "Monitor follower growth and engagement metrics"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "LeadKin helped me grow my LinkedIn following by 300% in just 3 months!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Entrepreneur",
      content: "The AI content creation feature is incredible. My posts get 10x more engagement.",
      avatar: "MC"
    },
    {
      name: "Emma Davis",
      role: "Sales Manager",
      content: "This tool transformed my LinkedIn strategy. Highly recommended!",
      avatar: "ED"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-slate-900">LeadKin</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/')} className="text-blue-600 font-medium">Home</button>
              <button onClick={() => navigate('/features')} className="text-slate-700 hover:text-blue-600 transition-colors">Features</button>
              <button onClick={() => navigate('/pricing')} className="text-slate-700 hover:text-blue-600 transition-colors">Pricing</button>
              <button onClick={() => navigate('/free-tools')} className="text-slate-700 hover:text-blue-600 transition-colors">Free Tools</button>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/app')}>Log In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate('/app')}>
                Sign-up for Free
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Grow Your Brand on{' '}
            <span className="text-blue-600">LinkedIn</span>{' '}
            with AI
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            The AI-powered tool trusted by top content creators and businesses worldwide. 
            Create viral content, build relationships, and track your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/app')}
            >
              Start for Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-slate-300"
              onClick={() => navigate('/features')}
            >
              Learn More
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-4">7-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to succeed on LinkedIn
            </h2>
            <p className="text-lg text-slate-600">
              Powerful AI tools to create, schedule, and analyze your content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trusted by 10,000+ creators
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            See what our users are saying about LeadKin
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to grow your LinkedIn presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of creators using AI to build their brand
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold"
            onClick={() => navigate('/app')}
          >
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold">LeadKin</span>
              </div>
              <p className="text-slate-400">AI-powered LinkedIn growth platform</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => navigate('/features')} className="hover:text-white">Features</button></li>
                <li><button onClick={() => navigate('/pricing')} className="hover:text-white">Pricing</button></li>
                <li><button onClick={() => navigate('/free-tools')} className="hover:text-white">Free Tools</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => navigate('/resources')} className="hover:text-white">Blog</button></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LeadKin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
