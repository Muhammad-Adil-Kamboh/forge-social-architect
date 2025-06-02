
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KPIStatCardProps {
  title: string;
  value: string | number;
  change: number;
  changeLabel: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

export const KPIStatCard: React.FC<KPIStatCardProps> = ({
  title,
  value,
  change,
  changeLabel,
  icon,
  loading = false
}) => {
  const isPositive = change >= 0;

  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-24"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </CardTitle>
        {icon && <div className="text-gray-500 dark:text-gray-400">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {value}
        </div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
          )}
          <span className={`font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{change}%
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">
            {changeLabel}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
