
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogManager } from '@/components/admin/BlogManager';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  ArrowLeft,
  Loader2
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { profile, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-linkedin-light flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-linkedin-primary" />
      </div>
    );
  }

  if (profile?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-linkedin-light flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-linkedin bg-linkedin-surface">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-[rgb(var(--grey-900))] mb-2">Access Denied</h2>
            <p className="text-linkedin-secondary mb-4">You don't have permission to access the admin dashboard.</p>
            <Button onClick={() => navigate('/')} className="btn-linkedin-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linkedin-light">
      {/* Header */}
      <div className="bg-linkedin-surface border-b border-[rgb(var(--grey-300))] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[rgb(var(--grey-900))]">Admin Dashboard</h1>
            <p className="text-linkedin-secondary">Welcome back, {profile.first_name}!</p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="border-[rgb(var(--grey-300))] text-linkedin-primary hover:bg-[rgb(var(--grey-100))]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Site
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-linkedin bg-linkedin-surface">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-linkedin-secondary">Total Users</CardTitle>
              <Users className="h-4 w-4 text-linkedin-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[rgb(var(--grey-900))]">1,234</div>
              <p className="text-xs text-linkedin-muted">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="border-linkedin bg-linkedin-surface">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-linkedin-secondary">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-linkedin-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[rgb(var(--grey-900))]">45</div>
              <p className="text-xs text-linkedin-muted">+3 this week</p>
            </CardContent>
          </Card>
          
          <Card className="border-linkedin bg-linkedin-surface">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-linkedin-secondary">Page Views</CardTitle>
              <BarChart3 className="h-4 w-4 text-linkedin-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[rgb(var(--grey-900))]">12,345</div>
              <p className="text-xs text-linkedin-muted">+8% from last week</p>
            </CardContent>
          </Card>
          
          <Card className="border-linkedin bg-linkedin-surface">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-linkedin-secondary">Active Sessions</CardTitle>
              <Settings className="h-4 w-4 text-linkedin-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[rgb(var(--grey-900))]">89</div>
              <p className="text-xs text-linkedin-muted">Currently online</p>
            </CardContent>
          </Card>
        </div>

        {/* Blog Manager */}
        <BlogManager />
      </div>
    </div>
  );
};

export default AdminDashboard;
