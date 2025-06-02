
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Users, TrendingUp, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LeadKin
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/features')} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
              <button onClick={() => navigate('/pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
              <button onClick={() => navigate('/free-tools')} className="text-gray-700 hover:text-blue-600 transition-colors">Free Tools</button>
              <button onClick={() => navigate('/resources')} className="text-gray-700 hover:text-blue-600 transition-colors">Resources</button>
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
          <div className="mb-8">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              ✨ Trusted by 50,000+ Content Creators Worldwide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Grow Your Brand on{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkedIn with AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The AI-powered tool used by top content creators and businesses worldwide. 
            Create viral content, schedule posts, and build meaningful relationships on LinkedIn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
              onClick={() => navigate('/')}
            >
              Start for Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-2 hover:bg-gray-50"
              onClick={() => navigate('/features')}
            >
              See Features
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="ml-1 font-medium">50K+ Users</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="ml-1 font-medium">500M+ Posts Analyzed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to dominate LinkedIn
            </h2>
            <p className="text-lg text-gray-600">
              AI-powered tools to create, schedule, and analyze your LinkedIn content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle>AI Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create high-quality posts with AI trained on 500M+ LinkedIn posts
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
                <CardTitle>Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Schedule posts at optimal times and track performance with analytics
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>Relationship Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Engage with peers and customers using AI-powered insights
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Loved by content creators worldwide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "LeadKin transformed my LinkedIn presence. My engagement increased by 300% in just 2 months!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="ml-3 text-left">
                      <p className="font-medium text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">Marketing Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to grow your LinkedIn presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of creators who trust LeadKin to grow their brand
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() => navigate('/')}
          >
            Start Your 7-Day Free Trial
          </Button>
          <p className="text-blue-100 mt-4 text-sm">
            No credit card required • Full access to all features
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">LeadKin</h3>
              <p className="text-sm">
                The AI-powered LinkedIn growth tool trusted by creators worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate('/features')} className="hover:text-white">Features</button></li>
                <li><button onClick={() => navigate('/pricing')} className="hover:text-white">Pricing</button></li>
                <li><button onClick={() => navigate('/free-tools')} className="hover:text-white">Free Tools</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate('/resources')} className="hover:text-white">Blog</button></li>
                <li><a href="#" className="hover:text-white">Personal Branding School</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@leadkin.com" className="hover:text-white">support@leadkin.com</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 LeadKin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
