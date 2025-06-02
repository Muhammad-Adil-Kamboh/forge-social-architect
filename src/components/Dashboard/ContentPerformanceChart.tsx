
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const mockData = [
  { date: '2024-01-01', engagement: 120, reach: 1800, clicks: 45 },
  { date: '2024-01-02', engagement: 98, reach: 1650, clicks: 38 },
  { date: '2024-01-03', engagement: 180, reach: 2200, clicks: 67 },
  { date: '2024-01-04', engagement: 145, reach: 1950, clicks: 52 },
  { date: '2024-01-05', engagement: 220, reach: 2800, clicks: 89 },
  { date: '2024-01-06', engagement: 167, reach: 2100, clicks: 61 },
  { date: '2024-01-07', engagement: 195, reach: 2400, clicks: 73 },
];

interface ContentPerformanceChartProps {
  loading?: boolean;
}

export const ContentPerformanceChart: React.FC<ContentPerformanceChartProps> = ({ 
  loading = false 
}) => {
  if (loading) {
    return (
      <Card className="col-span-8">
        <CardHeader>
          <CardTitle>Content Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-8 hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          Content Performance
        </CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Engagement metrics over the last 7 days
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b7eff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b7eff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="reachGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffb547" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffb547" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
                formatter={(value, name) => [value, name.charAt(0).toUpperCase() + name.slice(1)]}
              />
              <Area
                type="monotone"
                dataKey="engagement"
                stroke="#3b7eff"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#engagementGradient)"
              />
              <Area
                type="monotone"
                dataKey="reach"
                stroke="#ffb547"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#reachGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
