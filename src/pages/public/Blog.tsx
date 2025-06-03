
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { PostCard } from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            We'll share every{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkedIn secret
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Learn from the best LinkedIn creators and discover the strategies behind viral content, 
            personal branding, and lead generation.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Article</h2>
          <PostCard {...featuredPost} featured />
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
            <Button variant="outline">View All Categories</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
};

export default Blog;
