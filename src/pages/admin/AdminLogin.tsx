
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, user, profile, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already logged in as admin
  useEffect(() => {
    if (user && profile?.role === 'admin' && !loading) {
      navigate('/admin');
    }
  }, [user, profile, loading, navigate]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await signIn(email, password);
    
    if (!error) {
      // Check if user is admin after login
      if (profile?.role === 'admin') {
        navigate('/admin');
      } else {
        // Handle non-admin users trying to access admin
        setIsSubmitting(false);
      }
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
      <div className="max-w-md w-full space-y-8">
        {/* Admin Login Card */}
        <Card className="shadow-linkedin-hover border-linkedin bg-linkedin-surface">
          <CardHeader className="text-center space-y-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-[rgb(var(--blue-primary))] rounded-xl flex items-center justify-center">
                <Shield className="text-white w-6 h-6" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-[rgb(var(--grey-900))]">
              Admin Login
            </CardTitle>
            <p className="text-linkedin-secondary">
              Access the LeadKin administration panel
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-linkedin-secondary">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
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
                    placeholder="Enter admin password"
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
                  'Admin Sign In'
                )}
              </Button>
            </form>

            <div className="text-center text-sm text-linkedin-secondary">
              <p>Demo Credentials:</p>
              <p className="font-mono text-xs mt-1">admin@example.com / AdminPassword123!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
