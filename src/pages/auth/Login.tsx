
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, user, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate('/app');
    }
  }, [user, loading, navigate]);

  const handleLinkedInLogin = () => {
    // LinkedIn OAuth integration would go here
    console.log('LinkedIn login');
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await signIn(email, password);
    
    if (!error) {
      navigate('/app');
    }
    
    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linkedin-light flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-linkedin-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linkedin-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[rgb(var(--grey-300))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-linkedin-fade"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[rgb(var(--blue-accent))]/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-linkedin-fade" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4 text-linkedin-primary hover:text-[rgb(var(--blue-accent))]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Button>

        {/* Login Card */}
        <Card className="shadow-linkedin-hover border-linkedin bg-linkedin-surface">
          <CardHeader className="text-center space-y-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-[rgb(var(--blue-primary))] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-[rgb(var(--grey-900))]">
              Welcome back to LeadKin
            </CardTitle>
            <p className="text-linkedin-secondary">
              Sign in to continue growing your LinkedIn presence
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* LinkedIn Login */}
            <Button
              onClick={handleLinkedInLogin}
              className="w-full bg-[rgb(var(--blue-primary))] hover:bg-[rgb(var(--blue-accent))] text-white py-3 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Continue with LinkedIn
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-linkedin" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-linkedin-surface px-2 text-linkedin-muted">Or continue with email</span>
              </div>
            </div>

            {/* Email Login Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-linkedin-secondary">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-[rgb(var(--blue-primary))] border-linkedin"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-linkedin-secondary">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-[rgb(var(--blue-primary))] border-linkedin"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-linkedin-muted" />
                    ) : (
                      <Eye className="h-4 w-4 text-linkedin-muted" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-linkedin" />
                  <span className="text-linkedin-secondary">Remember me</span>
                </label>
                <Button variant="link" className="text-linkedin-primary hover:text-[rgb(var(--blue-accent))] p-0">
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[rgb(var(--blue-primary))] hover:bg-[rgb(var(--blue-accent))] py-3 transition-all duration-300 transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </Button>
            </form>

            <div className="text-center text-sm text-linkedin-secondary">
              Don't have an account?{' '}
              <Button
                variant="link"
                onClick={() => navigate('/signup')}
                className="text-linkedin-primary hover:text-[rgb(var(--blue-accent))] p-0"
              >
                Sign up
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
