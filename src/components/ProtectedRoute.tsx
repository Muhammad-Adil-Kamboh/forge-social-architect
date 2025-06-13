
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false,
  redirectTo = '/login'
}) => {
  const { user, profile, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-linkedin-light flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-linkedin-primary" />
      </div>
    );
  }

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  // If profile is still loading after user is available, wait a bit more
  if (!profile) {
    return (
      <div className="min-h-screen bg-linkedin-light flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-linkedin-primary" />
      </div>
    );
  }

  // If admin access is required but user is not admin, redirect to admin login
  if (requireAdmin && profile.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};
