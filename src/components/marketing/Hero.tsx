
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-linkedin-surface py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle background elements - LinkedIn brand compliant */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(var(--grey-300))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-linkedin-fade"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(var(--grey-300))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-linkedin-fade" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(var(--grey-200))] text-[rgb(var(--grey-800))] text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2 text-[rgb(var(--blue-primary))]" />
            Trusted by 4,000+ LinkedIn creators
          </div>

          {/* Main headline - LinkedIn Typography */}
          <h1 className="text-linkedin-h1 text-[rgb(var(--grey-900))] mb-6 leading-tight animate-slide-up">
            Grow Your Personal Brand on{' '}
            <span className="text-[rgb(var(--blue-primary))]">
              LinkedIn
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-linkedin-body text-linkedin-secondary mb-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            Create viral content, schedule posts, and build meaningful relationships with 
            AI-powered tools trusted by thousands of creators.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button 
              size="lg" 
              className="btn-linkedin-primary focus-linkedin animate-linkedin-hover px-8 py-4 text-lg font-semibold shadow-linkedin hover:shadow-linkedin-hover"
              onClick={() => navigate('/signup')}
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold border-[rgb(var(--grey-300))] text-[rgb(var(--grey-800))] hover:bg-[rgb(var(--grey-100))] focus-linkedin animate-linkedin-hover"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <p className="text-linkedin-muted text-sm">Trusted by 4,000+ creators</p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[rgb(var(--blue-primary))] to-[rgb(var(--blue-accent))] border-2 border-white shadow-linkedin animate-scale-in"
                  style={{ animationDelay: `${600 + i * 100}ms` }}
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-[rgb(var(--grey-200))] border-2 border-white flex items-center justify-center text-xs font-medium text-[rgb(var(--grey-800))] shadow-linkedin animate-scale-in" style={{ animationDelay: '1100ms' }}>
                +4K
              </div>
            </div>
          </div>

          {/* Product Preview */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '800ms' }}>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-linkedin-surface rounded-2xl shadow-linkedin-hover p-8 border border-[rgb(var(--grey-300))]">
                <div className="bg-gradient-to-r from-[rgb(var(--blue-primary))] to-[rgb(var(--blue-accent))] h-64 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-semibold">Product Preview</span>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[rgb(var(--blue-accent))] rounded-full flex items-center justify-center text-white font-bold animate-linkedin-fade">
                ✓
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[rgb(var(--blue-primary))] rounded-full flex items-center justify-center text-white font-bold animate-linkedin-fade" style={{ animationDelay: '1s' }}>
                AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
