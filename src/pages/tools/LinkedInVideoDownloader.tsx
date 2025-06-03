
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Download, Zap, FileText, Sparkles, Play, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const LinkedInVideoDownloader: React.FC = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  useScrollToTop();

  const processVideo = async () => {
    if (!videoUrl) return;
    setIsProcessing(true);
    
    setTimeout(() => {
      setVideoInfo({
        title: "Amazing LinkedIn Video Content",
        duration: "2:45",
        quality: "1080p",
        size: "45.2 MB"
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
      {/* Header */}
      <header className="bg-card/80 dark:bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/free-tools')} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tools</span>
              </Button>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="text-xl font-bold">LinkedIn Video Downloader</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-linkedin-green-500 hover:bg-linkedin-green-600">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-background to-green-100 dark:from-green-900/20 dark:via-background dark:to-green-800/20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-sm font-medium mb-8 animate-fade-in">
            <Play className="w-4 h-4 mr-2" />
            Video Content Tools
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Download{' '}
            <span className="bg-gradient-to-r from-green-500 to-linkedin-500 bg-clip-text text-transparent">
              LinkedIn Videos
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Save your favorite LinkedIn videos for offline viewing, analysis, or inspiration. 
            Fast, free, and easy to use.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {[
              { icon: Download, value: '50k+', label: 'Videos Downloaded' },
              { icon: Users, value: '2,500+', label: 'Happy Users' },
              { icon: TrendingUp, value: '99%', label: 'Success Rate' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${600 + index * 100}ms` }}>
                  <Icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8 linkedin-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-green-500" />
              <span>Video Downloader</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                LinkedIn Video URL
              </label>
              <Input
                placeholder="https://www.linkedin.com/posts/..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="text-base"
              />
            </div>

            <Button 
              onClick={processVideo}
              disabled={!videoUrl || isProcessing}
              className="w-full bg-green-500 hover:bg-green-600"
            >
              {isProcessing ? (
                <>
                  <Zap className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Process Video
                </>
              )}
            </Button>

            {videoInfo && (
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg animate-fade-in">
                <h3 className="font-semibold mb-3">Video Ready for Download</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Title:</strong> {videoInfo.title}</p>
                  <p><strong>Duration:</strong> {videoInfo.duration}</p>
                  <p><strong>Quality:</strong> {videoInfo.quality}</p>
                  <p><strong>Size:</strong> {videoInfo.size}</p>
                </div>
                <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download Video
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center linkedin-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Paste URL</h3>
              <p className="text-muted-foreground text-sm">Copy and paste the LinkedIn video URL</p>
            </CardContent>
          </Card>
          
          <Card className="text-center linkedin-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Process</h3>
              <p className="text-muted-foreground text-sm">Our tool extracts the video information</p>
            </CardContent>
          </Card>
          
          <Card className="text-center linkedin-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Download</h3>
              <p className="text-muted-foreground text-sm">Save the video to your device</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LinkedInVideoDownloader;
