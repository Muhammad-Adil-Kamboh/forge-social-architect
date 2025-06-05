
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NotFoundPageProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
  homeUrl?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = "Page not found",
  message = "Sorry, we couldn't find the page you're looking for.",
  showBackButton = true,
  homeUrl = "/"
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linkedin-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="text-9xl font-bold text-[rgb(var(--grey-300))] mb-4">404</div>
        <h1 className="text-4xl font-bold text-[rgb(var(--grey-900))] mb-4">{title}</h1>
        <p className="text-xl text-linkedin-secondary mb-8 max-w-md mx-auto">{message}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate(homeUrl)}
            className="btn-linkedin-primary"
          >
            <Home className="w-4 h-4 mr-2" />
            Go back home
          </Button>
          {showBackButton && (
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-linkedin"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go back
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
