
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PricingPreviewBanner: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    "Unlimited AI-generated posts",
    "Advanced scheduling & analytics",
    "Carousel generator",
    "AI-powered engagement"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to supercharge your LinkedIn presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals growing their personal brand with LeadKin
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-left">
                <Check className="w-5 h-5 text-green-300 mr-2 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-8"
              onClick={() => navigate('/pricing')}
            >
              See Pricing Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="text-blue-100 text-sm">
              7-day free trial • No credit card required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
