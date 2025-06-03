
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

export const FeedbackPrompt: React.FC = () => {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  if (showThankYou) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="text-green-600 font-medium">
            Thank you for your feedback! 🎉
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-50">
      <CardContent className="p-6">
        <h3 className="font-semibold text-slate-900 mb-4 text-center">
          Did this answer your question?
        </h3>
        
        <div className="flex justify-center space-x-4 mb-4">
          <Button
            variant={feedback === 'positive' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFeedback('positive')}
            className="flex items-center"
          >
            <ThumbsUp className="w-4 h-4 mr-2" />
            Yes
          </Button>
          <Button
            variant={feedback === 'negative' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleFeedback('negative')}
            className="flex items-center"
          >
            <ThumbsDown className="w-4 h-4 mr-2" />
            No
          </Button>
        </div>
        
        <div className="text-center">
          <Button variant="ghost" size="sm" className="text-slate-600">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact support
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
