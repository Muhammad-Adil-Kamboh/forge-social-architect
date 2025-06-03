
import React from 'react';
import { TrendingUp, Users, FileText, Zap } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '4,000+' },
    { icon: FileText, label: 'Posts Created', value: '500K+' },
    { icon: TrendingUp, label: 'Engagement Rate', value: '3.2x' },
    { icon: Zap, label: 'Time Saved', value: '10hrs/week' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
