
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Radar as RadarIcon, MessageCircle, Heart, Share2 } from 'lucide-react';

const Radar: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Radar
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track engagement and interactions with your content.
            </p>
          </div>
        </div>

        {/* Engagement Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 font-medium">Likes</p>
                  <p className="text-2xl font-bold text-red-700">342</p>
                </div>
                <Heart className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Comments</p>
                  <p className="text-2xl font-bold text-blue-700">89</p>
                </div>
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Shares</p>
                  <p className="text-2xl font-bold text-green-700">67</p>
                </div>
                <Share2 className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Interactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <RadarIcon className="w-5 h-5 mr-2" />
              Recent Interactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      U{index}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">User {index}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Liked your post about LinkedIn growth</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2h ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Radar;
