
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you would send this to your error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Something went wrong
                </h1>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  We're sorry, but something unexpected happened. Our team has been notified.
                </p>

                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-4 text-left">
                    <p className="text-xs font-mono text-red-600 dark:text-red-400">
                      {this.state.error.message}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={this.handleRetry}
                    className="flex-1"
                    variant="outline"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  
                  <Button 
                    onClick={this.handleGoHome}
                    className="flex-1"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
