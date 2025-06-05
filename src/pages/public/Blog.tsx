
import React, { useEffect, useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { PostCard } from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import { useBlog } from '@/hooks/useBlog';

const Blog: React.FC = () => {
  const { blogs, loading, fetchBlogs } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlogs(true); // Only fetch published blogs
  }, []);

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredPost = filteredBlogs[0];
  const otherPosts = filteredBlogs.slice(1);

  return (
    <AppShell>
      {/* Animated Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linkedin-light relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(var(--grey-300))] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-linkedin-fade"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(var(--blue-accent))]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-linkedin-fade" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[rgb(var(--grey-200))] text-linkedin-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Latest LinkedIn insights & strategies
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[rgb(var(--grey-900))] mb-6 animate-slide-up">
            We'll share every{' '}
            <span className="text-[rgb(var(--blue-primary))]">
              LinkedIn secret
            </span>
          </h1>
          <p className="text-xl text-linkedin-secondary mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Learn from the best LinkedIn creators and discover the strategies behind viral content, 
            personal branding, and lead generation.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-linkedin-muted w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[rgb(var(--grey-300))] rounded-lg focus:ring-2 focus:ring-[rgb(var(--blue-primary))] focus:border-transparent transition-all duration-200 bg-linkedin-surface"
            />
          </div>
        </div>
      </section>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-linkedin-primary" />
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linkedin-surface">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-[rgb(var(--grey-900))] mb-8 animate-fade-in">Featured Article</h2>
                <div className="animate-scale-in">
                  <PostCard 
                    title={featuredPost.title}
                    excerpt={featuredPost.description || ''}
                    author={`${featuredPost.profiles?.first_name || ''} ${featuredPost.profiles?.last_name || ''}`.trim() || 'Anonymous'}
                    date={new Date(featuredPost.published_at || featuredPost.created_at).toLocaleDateString()}
                    category={featuredPost.tags?.[0] || 'General'}
                    slug={featuredPost.slug}
                    featured
                    image={featuredPost.featured_image_url || undefined}
                  />
                </div>
              </div>
            </section>
          )}

          {/* All Posts Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linkedin-light">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-[rgb(var(--grey-900))]">Latest Articles</h2>
                <Button variant="outline" className="border-[rgb(var(--grey-300))] text-linkedin-primary hover:bg-[rgb(var(--grey-100))]">
                  View All Categories
                </Button>
              </div>
              
              {otherPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post, index) => (
                    <div 
                      key={post.id} 
                      className="animate-slide-up" 
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <PostCard 
                        title={post.title}
                        excerpt={post.description || ''}
                        author={`${post.profiles?.first_name || ''} ${post.profiles?.last_name || ''}`.trim() || 'Anonymous'}
                        date={new Date(post.published_at || post.created_at).toLocaleDateString()}
                        category={post.tags?.[0] || 'General'}
                        slug={post.slug}
                        image={post.featured_image_url || undefined}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-linkedin-muted text-lg">No blog posts available yet.</p>
                </div>
              )}
              
              {/* Load More */}
              {otherPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-[rgb(var(--grey-300))] text-linkedin-primary hover:bg-[rgb(var(--grey-100))] px-8 py-3"
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </AppShell>
  );
};

export default Blog;
