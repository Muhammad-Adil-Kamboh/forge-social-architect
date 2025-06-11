
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NoPermissionProps {
  title?: string;
  message?: string;
  homeUrl?: string;
}

export const NoPermission: React.FC<NoPermissionProps> = ({
  title = "Access Denied",
  message = "You don't have permission to access this page. Sorry!",
  homeUrl = "/"
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linkedin-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-linkedin-hover border-linkedin bg-linkedin-surface">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-[rgb(var(--grey-900))]">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-linkedin-secondary">{message}</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => navigate(homeUrl)}
              className="btn-linkedin-primary"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-linkedin"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
