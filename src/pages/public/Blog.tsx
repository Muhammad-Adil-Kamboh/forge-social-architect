
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useBlog } from '@/hooks/useBlog';

const Blog: React.FC = () => {
  const { blogs, loading } = useBlog();

  if (loading) {
    return (
      <AppShell>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading blogs...</div>
        </div>
      </AppShell>
    );
  }

  const publishedBlogs = blogs.filter(blog => blog.status === 'published');

  return (
    <AppShell>
      <div className="bg-linkedin-light min-h-screen">
        {/* Hero Section */}
        <div className="bg-linkedin-surface border-b border-linkedin">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[rgb(var(--grey-900))] mb-4">
              LeadKin Blog
            </h1>
            <p className="text-xl text-linkedin-secondary max-w-2xl mx-auto">
              Insights, strategies, and tips to grow your LinkedIn presence and professional network
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 py-12">
          {publishedBlogs.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-[rgb(var(--grey-900))] mb-4">
                No blog posts yet
              </h2>
              <p className="text-linkedin-secondary">
                Check back soon for insights and tips on LinkedIn growth!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedBlogs.map((blog) => (
                <Card key={blog.id} className="border-linkedin bg-linkedin-surface hover:shadow-linkedin-hover transition-all duration-300 hover:scale-105">
                  {blog.featured_image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={blog.featured_image_url} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-linkedin-muted mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(blog.published_at!).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        Author
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-[rgb(var(--grey-900))] line-clamp-2">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-linkedin-secondary mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex items-center flex-wrap gap-2 mb-4">
                        <Tag className="w-4 h-4 text-linkedin-muted" />
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-[rgb(var(--grey-200))] text-linkedin-secondary text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-linkedin-primary hover:text-[rgb(var(--blue-accent))] hover:bg-[rgb(var(--grey-100))]"
                      onClick={() => window.location.href = `/blog/${blog.slug}`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
};

export default Blog;
