
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { PostCard } from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { Search, Sparkles } from 'lucide-react';

const Blog: React.FC = () => {
  // Mock data - in real app this would come from CMS/API
  const featuredPost = {
    title: "The Ultimate Guide to LinkedIn Growth in 2024",
    excerpt: "Discover the proven strategies and AI-powered techniques that successful LinkedIn creators use to grow their personal brand and generate leads.",
    author: "Sarah Johnson",
    date: "Dec 1, 2024",
    category: "Growth Strategy",
    slug: "ultimate-linkedin-growth-guide-2024",
    image: "/placeholder.svg"
  };

  const posts = [
    {
      title: "How to Write LinkedIn Posts That Go Viral",
      excerpt: "Learn the psychology behind viral content and the specific frameworks top creators use to craft engaging LinkedIn posts.",
      author: "Mike Chen",
      date: "Nov 28, 2024",
      category: "Content Creation",
      slug: "viral-linkedin-posts-guide",
      image: "/placeholder.svg"
    },
    {
      title: "AI Tools for LinkedIn Content Creation",
      excerpt: "A comprehensive review of the best AI tools for creating LinkedIn content, including tips for getting the most out of each platform.",
      author: "Emma Davis",
      date: "Nov 25, 2024",
      category: "AI Tools",
      slug: "ai-tools-linkedin-content",
      image: "/placeholder.svg"
    },
    {
      title: "LinkedIn Analytics: What Metrics Actually Matter",
      excerpt: "Cut through the noise and focus on the LinkedIn metrics that truly indicate growth and engagement success.",
      author: "James Wilson",
      date: "Nov 22, 2024",
      category: "Analytics",
      slug: "linkedin-analytics-guide",
      image: "/placeholder.svg"
    },
    {
      title: "Building Authority on LinkedIn: A Step-by-Step Guide",
      excerpt: "Transform your LinkedIn presence from unknown to industry authority with these proven tactics and content strategies.",
      author: "Lisa Rodriguez",
      date: "Nov 19, 2024",
      category: "Personal Branding",
      slug: "building-authority-linkedin",
      image: "/placeholder.svg"
    },
    {
      title: "The Psychology of LinkedIn Engagement",
      excerpt: "Understanding what drives people to like, comment, and share content on LinkedIn - backed by data and research.",
      author: "Alex Thompson",
      date: "Nov 16, 2024",
      category: "Psychology",
      slug: "psychology-linkedin-engagement",
      image: "/placeholder.svg"
    }
  ];

  return (
    <AppShell>
      {/* Animated Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-linkedin-50 via-white to-linkedin-100 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-linkedin-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linkedin-100 text-linkedin-700 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Latest LinkedIn insights & strategies
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            We'll share every{' '}
            <span className="text-gradient-linkedin">
              LinkedIn secret
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Learn from the best LinkedIn creators and discover the strategies behind viral content, 
            personal branding, and lead generation.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Featured Article</h2>
          <div className="animate-scale-in">
            <PostCard {...featuredPost} featured />
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Button variant="outline" className="border-linkedin-300 text-linkedin-700 hover:bg-linkedin-50">
              View All Categories
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div 
                key={index} 
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-linkedin-300 text-linkedin-700 hover:bg-linkedin-50 px-8 py-3"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
};

export default Blog;
