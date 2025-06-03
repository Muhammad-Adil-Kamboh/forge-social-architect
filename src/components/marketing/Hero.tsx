
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-linkedin-50 via-white to-linkedin-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linkedin-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linkedin-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-100 text-linkedin-700 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by 4,000+ LinkedIn creators
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Grow Your Personal Brand on{' '}
            <span className="text-gradient-linkedin">
              LinkedIn
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Create viral content, schedule posts, and build meaningful relationships with 
            AI-powered tools trusted by thousands of creators.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button 
              size="lg" 
              className="bg-linkedin-500 hover:bg-linkedin-600 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/login')}
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-linkedin-300 text-linkedin-700 hover:bg-linkedin-50 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <p className="text-gray-500 text-sm">Trusted by 4,000+ creators</p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-linkedin-400 to-linkedin-600 border-2 border-white shadow-md animate-scale-in"
                  style={{ animationDelay: `${600 + i * 100}ms` }}
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600 shadow-md animate-scale-in" style={{ animationDelay: '1100ms' }}>
                +4K
              </div>
            </div>
          </div>

          {/* Product Preview */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '800ms' }}>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="bg-gradient-to-r from-linkedin-500 to-accent h-64 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Product Preview</span>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold animate-float">
                ✓
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-linkedin-500 rounded-full flex items-center justify-center text-white font-bold animate-float" style={{ animationDelay: '1s' }}>
                AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
