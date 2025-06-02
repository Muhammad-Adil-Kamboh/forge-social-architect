
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Wand2, Lightbulb, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIStudio: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              AI Studio
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              AI-powered tools to enhance your content creation.
            </p>
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <Sparkles className="w-6 h-6 mr-3" />
                Smart Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Get AI-powered content suggestions based on trending topics.
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Generate Ideas
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Wand2 className="w-6 h-6 mr-3" />
                Post Forge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create engaging posts with AI assistance and templates.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Creating
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Lightbulb className="w-6 h-6 mr-3" />
                Hooksmith
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Generate compelling hooks that grab attention.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Create Hooks
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-700">
                <RefreshCw className="w-6 h-6 mr-3" />
                Content Recycler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Repurpose existing content into new formats.
              </p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Recycle Content
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent AI Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent AI Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Generated post about AI trends</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Using Smart Suggestions tool</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{index}h ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AIStudio;
