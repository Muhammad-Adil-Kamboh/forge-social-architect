
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  featured?: boolean;
  image?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  author,
  date,
  category,
  slug,
  featured = false,
  image
}) => {
  const navigate = useNavigate();

  return (
    <Card 
      className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
      onClick={() => navigate(`/blog/${slug}`)}
    >
      {image && (
        <div className="aspect-video bg-slate-200 rounded-t-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-medium">Article Image</span>
          </div>
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{category}</Badge>
          {featured && <Badge className="bg-blue-600">Featured</Badge>}
        </div>
        <h3 className={`font-bold text-slate-900 hover:text-blue-600 transition-colors ${
          featured ? 'text-2xl' : 'text-lg'
        }`}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </div>
          </div>
          <ArrowRight className="w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  );
};
