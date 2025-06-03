
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Careers: React.FC = () => {
  useScrollToTop();

  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Help us build the future of LinkedIn content creation tools.',
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Develop cutting-edge AI models for content generation and analysis.',
      skills: ['Python', 'TensorFlow', 'NLP']
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design beautiful and intuitive experiences for our users.',
      skills: ['Figma', 'User Research', 'Prototyping']
    },
    {
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Remote / Austin',
      type: 'Full-time',
      description: 'Lead our content strategy and grow our brand presence.',
      skills: ['Content Strategy', 'SEO', 'LinkedIn Marketing']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning budget and career development'
    },
    {
      icon: Users,
      title: 'Amazing Team',
      description: 'Work with passionate, talented people who care'
    },
    {
      icon: Briefcase,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible working hours'
    }
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linkedin-50 via-background to-linkedin-100 dark:from-linkedin-900/20 dark:via-background dark:to-linkedin-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-100 dark:bg-linkedin-900/50 text-linkedin-700 dark:text-linkedin-300 text-sm font-medium mb-8 animate-fade-in">
            <Briefcase className="w-4 h-4 mr-2" />
            Join Our Team
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Build the Future of{' '}
            <span className="text-gradient-linkedin">
              LinkedIn Growth
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Join our mission to help creators grow their personal brands on LinkedIn. 
            We're building the tools that power the next generation of professional content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Button size="lg" className="bg-linkedin-500 hover:bg-linkedin-600 px-8 py-4 text-lg font-semibold">
              View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="linkedin-shadow hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold">{position.title}</h3>
                        <span className="px-3 py-1 bg-linkedin-100 dark:bg-linkedin-900/50 text-linkedin-700 dark:text-linkedin-300 text-sm rounded-full">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {position.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0 md:ml-6 bg-linkedin-500 hover:bg-linkedin-600">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Work at LeadKin?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="linkedin-shadow text-center">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 text-linkedin-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-linkedin-500">Creator-First</h3>
              <p className="text-muted-foreground">We put our users at the center of everything we build</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-linkedin-500">Innovation</h3>
              <p className="text-muted-foreground">We're always pushing the boundaries of what's possible</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-linkedin-500">Transparency</h3>
              <p className="text-muted-foreground">We believe in open communication and honest feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linkedin-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-linkedin-100 mb-8">
            We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
          </p>
          <Button size="lg" className="bg-white text-linkedin-500 hover:bg-linkedin-50 px-8 py-4 text-lg font-semibold">
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </AppShell>
  );
};

export default Careers;
