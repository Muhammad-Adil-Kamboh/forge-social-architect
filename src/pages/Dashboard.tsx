
import React from 'react';
import { BarChart3, Users, TrendingUp, Plus } from 'lucide-react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { KPIStatCard } from '@/components/Dashboard/KPIStatCard';
import { ContentPerformanceChart } from '@/components/Dashboard/ContentPerformanceChart';
import { UpcomingPipelineList } from '@/components/Dashboard/UpcomingPipelineList';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back! Here's what's happening with your content.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KPIStatCard
            title="Posts This Week"
            value={12}
            change={20}
            changeLabel="vs last week"
            icon={<BarChart3 className="w-4 h-4" />}
            loading={loading}
          />
          <KPIStatCard
            title="Follower Growth"
            value="+247"
            change={15.3}
            changeLabel="vs last week"
            icon={<Users className="w-4 h-4" />}
            loading={loading}
          />
          <KPIStatCard
            title="Avg Engagement"
            value="8.2%"
            change={-2.1}
            changeLabel="vs last week"
            icon={<TrendingUp className="w-4 h-4" />}
            loading={loading}
          />
        </div>

        {/* Charts and Lists */}
        <div className="grid grid-cols-12 gap-6">
          <ContentPerformanceChart loading={loading} />
          <UpcomingPipelineList loading={loading} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
