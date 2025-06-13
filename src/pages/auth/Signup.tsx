
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Eye, EyeOff, Check, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { signUp, user, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate('/app');
    }
  }, [user, loading, navigate]);

  const handleLinkedInSignup = () => {
    // LinkedIn OAuth integration would go here
    console.log('LinkedIn signup');
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await signUp(formData.email, formData.password, {
      first_name: formData.firstName,
      last_name: formData.lastName
    });
    
    setIsSubmitting(false);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[rgb(var(--grey-300))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-linkedin-fade"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[rgb(var(--blue-accent))]/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-linkedin-fade" style={{ animationDelay: '2s' }}></div>
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

        {/* Signup Card */}
        <Card className="shadow-linkedin-hover border-linkedin bg-linkedin-surface">
          <CardHeader className="text-center space-y-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-[rgb(var(--blue-primary))] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-[rgb(var(--grey-900))]">
              Join LeadKin
            </CardTitle>
            <p className="text-linkedin-secondary">
              Start growing your LinkedIn presence today
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* LinkedIn Signup */}
            <Button
              onClick={handleLinkedInSignup}
              className="w-full bg-[rgb(var(--blue-primary))] hover:bg-[rgb(var(--blue-accent))] text-white py-3 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Sign up with LinkedIn
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-linkedin" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-linkedin-surface px-2 text-linkedin-muted">Or sign up with email</span>
              </div>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-linkedin-secondary">First name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    placeholder="First name"
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-[rgb(var(--blue-primary))] border-linkedin"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-linkedin-secondary">Last name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    placeholder="Last name"
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-[rgb(var(--blue-primary))] border-linkedin"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-linkedin-secondary">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
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
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
                    placeholder="Create a password"
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
                <div className="text-xs text-linkedin-muted">
                  Password must be at least 8 characters long
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => updateFormData('agreeToTerms', checked as boolean)}
                  className="border-2 border-[rgb(var(--grey-300))] data-[state=checked]:bg-[rgb(var(--blue-primary))]"
                />
                <Label htmlFor="terms" className="text-sm text-linkedin-secondary">
                  I agree to the{' '}
                  <Button variant="link" className="text-linkedin-primary hover:text-[rgb(var(--blue-accent))] p-0 h-auto">
                    Terms of Service
                  </Button>{' '}
                  and{' '}
                  <Button variant="link" className="text-linkedin-primary hover:text-[rgb(var(--blue-accent))] p-0 h-auto">
                    Privacy Policy
                  </Button>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={!formData.agreeToTerms || isSubmitting}
                className="w-full bg-[rgb(var(--blue-primary))] hover:bg-[rgb(var(--blue-accent))] py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create account'
                )}
              </Button>
            </form>

            {/* Benefits */}
            <div className="bg-[rgb(var(--grey-100))] rounded-lg p-4 space-y-2">
              <div className="text-sm font-medium text-linkedin-primary mb-2">What you'll get:</div>
              <div className="space-y-1">
                {[
                  '7-day free trial',
                  'AI-powered content creation',
                  'Advanced scheduling tools',
                  'Analytics & insights'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-linkedin-secondary">
                    <Check className="w-4 h-4 mr-2 text-[rgb(var(--blue-accent))]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-sm text-linkedin-secondary">
              Already have an account?{' '}
              <Button
                variant="link"
                onClick={() => navigate('/login')}
                className="text-linkedin-primary hover:text-[rgb(var(--blue-accent))] p-0"
              >
                Sign in
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
