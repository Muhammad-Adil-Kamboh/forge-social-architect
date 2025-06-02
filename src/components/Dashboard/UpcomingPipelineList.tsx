
import React from 'react';
import { Clock, Calendar, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mockPosts = [
  {
    id: 1,
    title: 'LinkedIn Growth Strategy Tips',
    scheduledFor: '2024-06-03T09:00:00Z',
    status: 'scheduled',
    platform: 'LinkedIn'
  },
  {
    id: 2,
    title: 'Building Personal Brand Authority',
    scheduledFor: '2024-06-03T14:30:00Z',
    status: 'draft',
    platform: 'LinkedIn'
  },
  {
    id: 3,
    title: 'Content Creation Framework',
    scheduledFor: '2024-06-04T11:15:00Z',
    status: 'scheduled',
    platform: 'LinkedIn'
  },
  {
    id: 4,
    title: 'Networking Best Practices',
    scheduledFor: '2024-06-04T16:00:00Z',
    status: 'review',
    platform: 'LinkedIn'
  }
];

interface UpcomingPipelineListProps {
  loading?: boolean;
}

export const UpcomingPipelineList: React.FC<UpcomingPipelineListProps> = ({ 
  loading = false 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      case 'review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Upcoming Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-4 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          Upcoming Pipeline
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockPosts.map((post) => (
            <div 
              key={post.id}
              className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.scheduledFor).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(post.scheduledFor).toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
                <Badge className={`mt-2 text-xs ${getStatusColor(post.status)}`}>
                  {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </Badge>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
