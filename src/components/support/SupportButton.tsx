
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Bot, User, X, HelpCircle, LogIn, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const supportOptions = [
    {
      id: 'ai',
      icon: Bot,
      title: 'AI Assistant',
      description: 'Get instant answers',
      color: 'bg-linkedin-500 hover:bg-linkedin-600',
      textColor: 'text-white'
    },
    {
      id: 'human',
      icon: User,
      title: 'Human Support',
      description: 'Talk to our team',
      color: 'bg-linkedin-green-500 hover:bg-linkedin-green-600',
      textColor: 'text-white'
    },
    {
      id: 'help',
      icon: HelpCircle,
      title: 'Help Center',
      description: 'Browse articles',
      color: 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
      textColor: 'text-gray-700 dark:text-gray-300'
    },
    {
      id: 'login',
      icon: LogIn,
      title: 'Login',
      description: 'Access your account',
      color: 'bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700',
      textColor: 'text-gray-700 dark:text-gray-300'
    }
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Support Panel */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 w-80 animate-scale-in">
              <Card className="linkedin-shadow border-linkedin-200 dark:border-linkedin-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Sparkles className="w-5 h-5 text-linkedin-500" />
                      <span>How can we help?</span>
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {supportOptions.map((option, index) => {
                    const Icon = option.icon;
                    return (
                      <Button
                        key={option.id}
                        onClick={() => {
                          if (option.id === 'login') navigate('/login');
                          else if (option.id === 'help') navigate('/help');
                          setIsOpen(false);
                        }}
                        className={`w-full justify-start h-auto p-4 ${option.color} ${option.textColor} animate-slide-up`}
                        style={{ animationDelay: `${index * 100}ms` }}
                        variant="outline"
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">{option.title}</div>
                          <div className="text-xs opacity-80">{option.description}</div>
                        </div>
                      </Button>
                    );
                  })}
                  
                  {/* Quick Stats */}
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>4,000+ creators helped</span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse-slow"></span>
                        Online
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Main Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full gradient-linkedin shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce-soft"
            size="icon"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </Button>
        </div>
      </div>
    </>
  );
};
