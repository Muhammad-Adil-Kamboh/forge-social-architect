
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, BookOpen, Settings, Zap, Users, BarChart3, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Help: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      articleCount: 8,
      articles: [
        "Getting started with LeadKin",
        "Setting up your first LinkedIn post",
        "Understanding the dashboard"
      ]
    },
    {
      icon: Settings,
      title: "Writing & Scheduling",
      description: "Master content creation and scheduling",
      articleCount: 12,
      articles: [
        "How to write engaging LinkedIn posts",
        "Scheduling posts for optimal timing",
        "Using AI writing assistance"
      ]
    },
    {
      icon: Zap,
      title: "AI Settings",
      description: "Customize AI behavior and preferences",
      articleCount: 6,
      articles: [
        "Personalizing AI writing style",
        "Setting content preferences",
        "Managing AI suggestions"
      ]
    },
    {
      icon: Users,
      title: "Integrations",
      description: "Connect with LinkedIn and other tools",
      articleCount: 10,
      articles: [
        "Connecting your LinkedIn account",
        "Installing the Chrome extension",
        "Troubleshooting connection issues"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track performance and growth",
      articleCount: 9,
      articles: [
        "Understanding your analytics dashboard",
        "Tracking post performance",
        "Measuring follower growth"
      ]
    },
    {
      icon: Chrome,
      title: "Browser Extension",
      description: "Get help with our Chrome extension",
      articleCount: 7,
      articles: [
        "Installing the extension",
        "Using extension features",
        "Extension troubleshooting"
      ]
    }
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            How can we{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              help you?
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Find answers to common questions and get the most out of LeadKin
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-sm text-slate-500">{category.articleCount} articles</p>
                      </div>
                    </div>
                    <p className="text-slate-600">{category.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <button
                          key={articleIndex}
                          onClick={() => navigate(`/help/article/${article.toLowerCase().replace(/\s+/g, '-')}`)}
                          className="block w-full text-left text-sm text-slate-600 hover:text-blue-600 transition-colors py-1"
                        >
                          {article}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Popular Articles
          </h2>
          
          <div className="space-y-4">
            {[
              "How do I connect my LinkedIn account to LeadKin?",
              "I installed the extension but LeadKin can't detect it",
              "Why aren't my scheduled posts appearing on LinkedIn?",
              "How to customize AI writing style to match my voice",
              "Understanding post analytics and engagement metrics"
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <button
                    onClick={() => navigate(`/help/article/${article.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
                    className="text-left hover:text-blue-600 transition-colors font-medium"
                  >
                    {article}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
};

export default Help;
