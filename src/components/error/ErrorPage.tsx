
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';

interface ErrorPageProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  title = "Page not found",
  message = "Sorry, we couldn't find the page you're looking for.",
  showBackButton = true
}) => {
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-9xl font-bold text-slate-200 mb-4">404</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">{message}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Home className="w-4 h-4 mr-2" />
              Go back home
            </Button>
            {showBackButton && (
              <Button 
                variant="outline"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go back
              </Button>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
};
