
import React from 'react';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, Clock, Share2, Heart, MessageCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';

const BlogArticle: React.FC = () => {
  const { slug } = useParams();

  // Mock data - in real app this would be fetched based on slug
  const article = {
    title: "The Ultimate Guide to LinkedIn Growth in 2024",
    author: "Sarah Johnson",
    date: "December 1, 2024",
    readTime: "12 min read",
    category: "Growth Strategy",
    likes: 247,
    comments: 18,
    shares: 35,
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>LinkedIn has evolved dramatically in recent years, becoming the premier platform for professional networking and personal branding. With over 900 million users worldwide, standing out requires more than just posting occasionally.</p>
      
      <h2 id="content-strategy">Content Strategy That Works</h2>
      <p>The foundation of LinkedIn growth lies in consistent, valuable content creation. Here are the key principles that successful creators follow:</p>
      
      <h3 id="posting-frequency">Optimal Posting Frequency</h3>
      <p>Research shows that posting 3-5 times per week yields the best engagement rates. This frequency keeps you visible without overwhelming your network.</p>
      
      <h2 id="engagement-tactics">Advanced Engagement Tactics</h2>
      <p>Engagement is a two-way street on LinkedIn. The most successful creators spend as much time engaging with others' content as they do creating their own.</p>
      
      <h2 id="analytics-optimization">Using Analytics for Optimization</h2>
      <p>LinkedIn provides powerful analytics tools that most users ignore. Understanding these metrics is crucial for long-term growth.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Growing on LinkedIn requires patience, consistency, and strategic thinking. By following these proven strategies, you'll be well on your way to building a powerful personal brand.</p>
    `
  };

  const tocHeadings = [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'content-strategy', title: 'Content Strategy That Works', level: 2 },
    { id: 'posting-frequency', title: 'Optimal Posting Frequency', level: 3 },
    { id: 'engagement-tactics', title: 'Advanced Engagement Tactics', level: 2 },
    { id: 'analytics-optimization', title: 'Using Analytics for Optimization', level: 2 },
    { id: 'conclusion', title: 'Conclusion', level: 2 }
  ];

  return (
    <BlogLayout showToc tocHeadings={tocHeadings}>
      {/* Cover Image */}
      <div className="aspect-video bg-gradient-to-r from-linkedin-500 to-accent rounded-lg mb-8 flex items-center justify-center animate-scale-in">
        <span className="text-white text-2xl font-bold">Article Cover Image</span>
      </div>

      {/* Article Header */}
      <header className="mb-8 animate-fade-in">
        <Badge className="mb-4 bg-linkedin-100 text-linkedin-700 hover:bg-linkedin-200">{article.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>
        
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {article.readTime}
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>{article.likes}</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>{article.comments}</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>{article.shares}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none mb-12 animate-slide-up"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Inline CTA */}
      <Card className="bg-gradient-to-r from-linkedin-50 to-accent/10 border-linkedin-200 mb-12 animate-scale-in">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to implement these strategies?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of creators using LeadKin to streamline their LinkedIn growth
          </p>
          <Button size="lg" className="bg-linkedin-500 hover:bg-linkedin-600">
            Start your free trial
          </Button>
        </CardContent>
      </Card>

      {/* Author Card */}
      <Card className="mb-8 animate-fade-in">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-linkedin-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-linkedin-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{article.author}</h4>
              <p className="text-gray-600 mb-4">
                Sarah is a LinkedIn growth strategist who has helped over 500 professionals 
                build their personal brands and generate leads through strategic content creation.
              </p>
              <Button variant="outline" size="sm" className="border-linkedin-300 text-linkedin-700 hover:bg-linkedin-50">
                Follow Sarah on LinkedIn
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      <Card className="animate-fade-in">
        <CardContent className="p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h4>
          <div className="space-y-4">
            {[
              "How to Create Viral LinkedIn Posts",
              "LinkedIn Analytics: What Metrics Matter",
              "Building Your Personal Brand on LinkedIn"
            ].map((title, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-2 h-2 bg-linkedin-500 rounded-full"></div>
                <span className="text-gray-700 hover:text-linkedin-600">{title}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </BlogLayout>
  );
};

export default BlogArticle;
