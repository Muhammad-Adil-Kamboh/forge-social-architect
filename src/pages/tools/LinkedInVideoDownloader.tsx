
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Download, Zap, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LinkedInVideoDownloader: React.FC = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const processVideo = async () => {
    if (!videoUrl) return;
    setIsProcessing(true);
    
    // Simulate processing
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/free-tools')} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tools</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">LinkedIn Video Downloader</h1>
            </div>
            <Button onClick={() => navigate('/')} className="bg-green-600 hover:bg-green-700">
              Get Full Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Download LinkedIn Videos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save your favorite LinkedIn videos for offline viewing. Fast, free, and easy to use.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-green-600" />
              <span>Video Downloader</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full bg-green-600 hover:bg-green-700"
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
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Video Ready for Download</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Title:</strong> {videoInfo.title}</p>
                  <p><strong>Duration:</strong> {videoInfo.duration}</p>
                  <p><strong>Quality:</strong> {videoInfo.quality}</p>
                  <p><strong>Size:</strong> {videoInfo.size}</p>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Video
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Paste URL</h3>
              <p className="text-gray-600 text-sm">Copy and paste the LinkedIn video URL</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Process</h3>
              <p className="text-gray-600 text-sm">Our tool extracts the video information</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Download</h3>
              <p className="text-gray-600 text-sm">Save the video to your device</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LinkedInVideoDownloader;
