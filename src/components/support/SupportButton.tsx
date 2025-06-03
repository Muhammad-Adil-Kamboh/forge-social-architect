
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MessageCircle, Bot, User, X } from 'lucide-react';

export const SupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [supportType, setSupportType] = useState<'main' | 'ai' | 'human'>('main');

  const resetAndClose = () => {
    setIsOpen(false);
    setSupportType('main');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-linkedin-500 hover:bg-linkedin-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Support Dialog */}
      <Dialog open={isOpen} onOpenChange={resetAndClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              How can we help you?
              <Button
                variant="ghost"
                size="icon"
                onClick={resetAndClose}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          {supportType === 'main' && (
            <div className="space-y-4 py-4">
              <Button
                onClick={() => setSupportType('ai')}
                className="w-full justify-start h-auto p-4 bg-linkedin-50 hover:bg-linkedin-100 text-linkedin-700 border border-linkedin-200"
                variant="outline"
              >
                <Bot className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Talk to AI Assistant</div>
                  <div className="text-sm opacity-70">Get instant answers to common questions</div>
                </div>
              </Button>

              <Button
                onClick={() => setSupportType('human')}
                className="w-full justify-start h-auto p-4 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30"
                variant="outline"
              >
                <User className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Connect with Human Support</div>
                  <div className="text-sm opacity-70">For premium subscribers only</div>
                </div>
              </Button>
            </div>
          )}

          {supportType === 'ai' && (
            <div className="space-y-4 py-4">
              <div className="bg-linkedin-50 rounded-lg p-4 border border-linkedin-200">
                <div className="flex items-center mb-3">
                  <Bot className="w-6 h-6 text-linkedin-500 mr-2" />
                  <span className="font-semibold text-linkedin-700">AI Assistant</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Hi! I'm here to help you with LeadKin. What would you like to know?
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full text-left justify-start">
                    How do I create my first post?
                  </Button>
                  <Button variant="outline" size="sm" className="w-full text-left justify-start">
                    How does the AI content generator work?
                  </Button>
                  <Button variant="outline" size="sm" className="w-full text-left justify-start">
                    What's included in the free trial?
                  </Button>
                </div>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setSupportType('main')}
                className="w-full"
              >
                ← Back to options
              </Button>
            </div>
          )}

          {supportType === 'human' && (
            <div className="space-y-4 py-4">
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                <div className="flex items-center mb-3">
                  <User className="w-6 h-6 text-accent mr-2" />
                  <span className="font-semibold text-accent">Human Support</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Connect with our support team for personalized assistance.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Start Live Chat
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                  <div className="text-xs text-gray-500 text-center">
                    Available for Pro and Business subscribers
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setSupportType('main')}
                className="w-full"
              >
                ← Back to options
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
