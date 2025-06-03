
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const SocialProofCarousel: React.FC = () => {
  const testimonials = [
    {
      content: "LeadKin has completely transformed how I approach LinkedIn content. My engagement has increased by 300% in just 2 months!",
      author: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechCorp",
      rating: 5
    },
    {
      content: "The AI-powered suggestions are incredible. It's like having a LinkedIn expert right beside me every time I write a post.",
      author: "Michael Chen",
      title: "Founder",
      company: "StartupXYZ",
      rating: 5
    },
    {
      content: "I've tried many LinkedIn tools, but LeadKin is the only one that actually understands my voice and helps me create authentic content.",
      author: "Emily Davis",
      title: "Sales Manager",
      company: "Enterprise Inc",
      rating: 5
    }
  ];

  const logos = [
    "Microsoft", "Google", "Amazon", "Salesforce", "HubSpot", "Slack"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-slate-600 mb-8">Trusted by professionals at leading companies</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="h-8 bg-slate-200 rounded flex items-center justify-center">
                  <span className="text-slate-600 font-medium text-sm">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What our users are saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  
                  <p className="text-slate-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
