
import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Contact: React.FC = () => {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@leadkin.com',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      value: '+1 (555) 123-4567',
      action: 'Call Now'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 456\nSan Francisco, CA 94105',
      phone: '+1 (415) 123-4567'
    },
    {
      city: 'New York',
      address: '456 Broadway, 12th Floor\nNew York, NY 10013',
      phone: '+1 (212) 123-4567'
    },
    {
      city: 'Austin',
      address: '789 Congress Avenue, Suite 101\nAustin, TX 78701',
      phone: '+1 (512) 123-4567'
    }
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linkedin-50 via-background to-linkedin-100 dark:from-linkedin-900/20 dark:via-background dark:to-linkedin-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-100 dark:bg-linkedin-900/50 text-linkedin-700 dark:text-linkedin-300 text-sm font-medium mb-8 animate-fade-in">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            We'd Love to{' '}
            <span className="text-gradient-linkedin">
              Hear from You
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Have questions about LeadKin? Want to partner with us? Or just want to say hello? 
            We're here to help and would love to connect.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="linkedin-shadow hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 text-linkedin-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-3">{method.description}</p>
                    <p className="font-medium mb-4">{method.value}</p>
                    <Button className="bg-linkedin-500 hover:bg-linkedin-600">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="linkedin-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5 text-linkedin-500" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us more about your question or feedback..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-linkedin-500 hover:bg-linkedin-600">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Offices</h3>
              {offices.map((office, index) => (
                <Card key={index} className="linkedin-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-linkedin-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{office.city}</h4>
                        <p className="text-muted-foreground whitespace-pre-line mb-2">{office.address}</p>
                        <p className="text-sm font-medium">{office.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Business Hours */}
              <Card className="linkedin-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-linkedin-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                        <p>Sunday: Closed</p>
                      </div>
                      <p className="text-sm mt-2 text-linkedin-500">Support available 24/7 via chat</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                question: "How quickly do you respond?",
                answer: "We typically respond to all inquiries within 24 hours during business days."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes, phone support is available for Pro and Business plan subscribers."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! Contact us to schedule a personalized demo of LeadKin."
              },
              {
                question: "Do you have a partner program?",
                answer: "Yes, we offer partnership opportunities. Reach out to learn more about our program."
              }
            ].map((faq, index) => (
              <Card key={index} className="linkedin-shadow">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
};

export default Contact;
