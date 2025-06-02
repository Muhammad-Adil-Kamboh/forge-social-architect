
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bookmark, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SavedPosts: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Saved Posts
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your collection of saved content and inspiration.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Saved Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Bookmark className="w-5 h-5 mr-2 text-yellow-600" />
                    Saved Post {index}
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4 fill-current text-yellow-600" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  This is an inspiring post about LinkedIn growth strategies and content creation...
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Saved: 1 day ago</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Growth</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default SavedPosts;
