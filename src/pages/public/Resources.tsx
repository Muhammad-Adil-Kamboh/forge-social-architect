
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Lightbulb, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resources: React.FC = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "10 LinkedIn Post Ideas That Always Go Viral",
      excerpt: "Discover the proven post formats that consistently get high engagement on LinkedIn.",
      readTime: "5 min read",
      category: "Content Strategy"
    },
    {
      title: "How to Optimize Your LinkedIn Profile for Maximum Visibility",
      excerpt: "A step-by-step guide to creating a LinkedIn profile that attracts your ideal audience.",
      readTime: "8 min read",
      category: "Profile Optimization"
    },
    {
      title: "The Science Behind LinkedIn's Algorithm in 2024",
      excerpt: "Understanding how LinkedIn's algorithm works and how to leverage it for better reach.",
      readTime: "12 min read",
      category: "Algorithm"
    },
    {
      title: "Personal Branding on LinkedIn: A Complete Guide",
      excerpt: "Build a strong personal brand that stands out in your industry.",
      readTime: "15 min read",
      category: "Personal Branding"
    }
  ];

  const courses = [
    {
      icon: BookOpen,
      title: "Personal Branding School",
      description: "Learn to build your personal brand from scratch with our comprehensive course.",
      lessons: "12 lessons",
      color: "text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "LinkedIn Tips by Justin Welsh",
      description: "Creator-specific advice from one of LinkedIn's top content creators.",
      lessons: "8 lessons",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "LinkedIn Growth Masterclass",
      description: "Advanced strategies for rapid LinkedIn growth and engagement.",
      lessons: "15 lessons",
      color: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => navigate('/home')} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LeadKin
            </button>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => navigate('/features')} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
              <button onClick={() => navigate('/pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
              <button onClick={() => navigate('/resources')} className="text-blue-600 font-medium">Resources</button>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')}>Log In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={() => navigate('/')}>
                Sign-up for Free
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            LinkedIn Growth{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert guides, courses, and tips to help you master LinkedIn and grow your personal brand.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600">Actionable insights and strategies for LinkedIn success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Courses & Training</h2>
            <p className="text-lg text-gray-600">Master LinkedIn with our expert-led courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <Icon className={`w-12 h-12 ${course.color} mx-auto mb-4`} />
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{course.lessons}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Free</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      Start Course
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with LinkedIn Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly insights, strategies, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-blue-100 mt-4 text-sm">
            Join 25,000+ creators getting our weekly newsletter
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resources;
