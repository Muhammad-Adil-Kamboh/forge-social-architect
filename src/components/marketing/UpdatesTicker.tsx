
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Calendar, Image, BarChart3 } from 'lucide-react';

export const UpdatesTicker: React.FC = () => {
  const updates = [
    {
      icon: Sparkles,
      title: "New AI Writing Assistant",
      description: "Enhanced AI now understands industry-specific terminology",
      date: "Nov 2024",
      type: "Feature"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Auto-schedule posts for optimal engagement times",
      date: "Oct 2024",
      type: "Enhancement"
    },
    {
      icon: Image,
      title: "Carousel Templates",
      description: "50+ new professional carousel templates added",
      date: "Oct 2024",
      type: "Content"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "New competitor analysis and trending topics insights",
      date: "Sep 2024",
      type: "Feature"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What's New in LeadKin
          </h2>
          <p className="text-lg text-slate-600">
            We're constantly improving our tools to help you succeed on LinkedIn
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {updates.map((update, index) => {
            const Icon = update.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                  <Badge variant="outline" className="text-xs">
                    {update.type}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-slate-900 mb-2">
                  {update.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4">
                  {update.description}
                </p>
                
                <div className="text-xs text-slate-500">
                  {update.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
