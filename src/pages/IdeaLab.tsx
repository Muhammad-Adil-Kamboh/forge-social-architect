
import React, { useState } from 'react';
import { Search, Filter, Bookmark, Plus, TrendingUp } from 'lucide-react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockInspirations = [
  {
    id: 1,
    title: 'The Future of Remote Work',
    content: 'Remote work isn\'t just a trend—it\'s the future. Here\'s why companies that embrace it will thrive...',
    author: 'Sarah Chen',
    engagement: 1245,
    saves: 89,
    category: 'Leadership',
    timeAgo: '2h'
  },
  {
    id: 2,
    title: '5 LinkedIn Growth Hacks',
    content: 'Most people are doing LinkedIn wrong. Here are 5 simple hacks that will 10x your reach...',
    author: 'Marcus Johnson',
    engagement: 2156,
    saves: 156,
    category: 'Growth',
    timeAgo: '4h'
  },
  {
    id: 3,
    title: 'Building a Personal Brand',
    content: 'Your personal brand is your most valuable asset. Here\'s how to build one that stands out...',
    author: 'Alex Rodriguez',
    engagement: 987,
    saves: 67,
    category: 'Branding',
    timeAgo: '6h'
  },
  {
    id: 4,
    title: 'Content Strategy Framework',
    content: 'Stop posting random content. Here\'s the framework I use to create viral posts consistently...',
    author: 'Emma Wilson',
    engagement: 3421,
    saves: 234,
    category: 'Strategy',
    timeAgo: '8h'
  }
];

const trendingHooks = [
  "The biggest mistake I see in...",
  "Here's what nobody tells you about...",
  "I spent $10k learning this so you don't have to:",
  "Most people think... but they're wrong.",
  "This changed everything for me:"
];

const IdeaLab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());

  const handleSavePost = (postId: number) => {
    const newSavedPosts = new Set(savedPosts);
    if (newSavedPosts.has(postId)) {
      newSavedPosts.delete(postId);
    } else {
      newSavedPosts.add(postId);
    }
    setSavedPosts(newSavedPosts);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Leadership': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Growth': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Branding': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Strategy': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Idea Lab
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Discover inspiration and trending content ideas
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search inspirations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content - Inspiration Feed */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockInspirations.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-200 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge className={`${getCategoryColor(post.category)} text-xs`}>
                        {post.category}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSavePost(post.id)}
                        className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                          savedPosts.has(post.id) ? 'text-blue-600' : 'text-gray-400'
                        }`}
                      >
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                        <span>by {post.author}</span>
                        <span>{post.timeAgo}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {post.engagement}
                        </div>
                        <div className="flex items-center">
                          <Bookmark className="w-3 h-3 mr-1" />
                          {post.saves}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Rail - Trending Hooks */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  Trending Hooks
                </CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  High-performing opening lines
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingHooks.map((hook, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        "{hook}"
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Plus className="w-3 h-3 mr-1" />
                        Use Hook
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IdeaLab;
