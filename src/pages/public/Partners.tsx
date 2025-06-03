
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, TrendingUp, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Partners: React.FC = () => {
  useScrollToTop();

  const partnerTypes = [
    {
      icon: TrendingUp,
      title: 'Affiliate Partners',
      description: 'Earn commissions by referring new customers to LeadKin',
      commission: 'Up to 30%',
      benefits: ['Recurring commissions', 'Marketing materials', 'Dedicated support']
    },
    {
      icon: Users,
      title: 'Agency Partners',
      description: 'White-label our tools for your clients and scale your business',
      commission: 'Custom rates',
      benefits: ['White-label access', 'Priority support', 'Custom integrations']
    },
    {
      icon: Handshake,
      title: 'Technology Partners',
      description: 'Integrate with LeadKin to provide enhanced value to users',
      commission: 'Revenue share',
      benefits: ['API access', 'Co-marketing', 'Technical support']
    }
  ];

  const partnerBenefits = [
    'Generous commission structure',
    'Real-time tracking and reporting',
    'Dedicated partner success manager',
    'Marketing materials and resources',
    'Priority customer support',
    'Exclusive partner events and training'
  ];

  const currentPartners = [
    { name: 'ContentCorp', logo: '🏢' },
    { name: 'SocialGrow', logo: '🚀' },
    { name: 'MarketingPro', logo: '📈' },
    { name: 'CreatorHub', logo: '🎨' },
    { name: 'GrowthAgency', logo: '🎯' },
    { name: 'DigitalEdge', logo: '💡' }
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linkedin-50 via-background to-linkedin-100 dark:from-linkedin-900/20 dark:via-background dark:to-linkedin-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-100 dark:bg-linkedin-900/50 text-linkedin-700 dark:text-linkedin-300 text-sm font-medium mb-8 animate-fade-in">
            <Handshake className="w-4 h-4 mr-2" />
            Partner Program
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Grow Together with{' '}
            <span className="text-gradient-linkedin">
              LeadKin Partners
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Join our partner ecosystem and unlock new revenue opportunities while helping more creators 
            succeed on LinkedIn. We believe in mutual growth and long-term partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button size="lg" className="bg-linkedin-500 hover:bg-linkedin-600 px-8 py-4 text-lg font-semibold">
              Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="linkedin-shadow hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-linkedin-500 mb-4" />
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Commission: </span>
                      <span className="text-lg font-bold text-linkedin-500">{type.commission}</span>
                    </div>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-linkedin-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-linkedin-500 hover:bg-linkedin-600">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Partner with LeadKin?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-linkedin-green-500 mr-3" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Trusted by Leading Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="linkedin-shadow hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="font-semibold text-sm">{partner.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-linkedin-500 mb-2">500+</div>
              <div className="text-muted-foreground">Active Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-linkedin-500 mb-2">$2M+</div>
              <div className="text-muted-foreground">Partner Earnings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-linkedin-500 mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-linkedin-500 mb-2">24hrs</div>
              <div className="text-muted-foreground">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linkedin-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-linkedin-100 mb-8">
            Join our growing partner ecosystem and start earning today. 
            We'll provide everything you need to succeed.
          </p>
          <Button size="lg" className="bg-white text-linkedin-500 hover:bg-linkedin-50 px-8 py-4 text-lg font-semibold">
            Start Partnership Application <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </AppShell>
  );
};

export default Partners;
