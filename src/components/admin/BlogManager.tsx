
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Upload, 
  Save, 
  Calendar, 
  Loader2,
  Search
} from 'lucide-react';
import { useBlog, Blog, CreateBlogData } from '@/hooks/useBlog';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export const BlogManager: React.FC = () => {
  const { 
    blogs, 
    loading, 
    fetchBlogs, 
    createBlog, 
    updateBlog, 
    deleteBlog, 
    uploadImage 
  } = useBlog();
  const { profile } = useAuth();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState('list');
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  
  const [formData, setFormData] = useState<CreateBlogData>({
    title: '',
    slug: '',
    description: '',
    body: '',
    featured_image_url: '',
    meta_title: '',
    meta_description: '',
    keywords: [],
    tags: [],
    status: 'draft'
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      body: '',
      featured_image_url: '',
      meta_title: '',
      meta_description: '',
      keywords: [],
      tags: [],
      status: 'draft'
    });
    setEditingBlog(null);
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      description: blog.description || '',
      body: blog.body,
      featured_image_url: blog.featured_image_url || '',
      meta_title: blog.meta_title || '',
      meta_description: blog.meta_description || '',
      keywords: blog.keywords || [],
      tags: blog.tags || [],
      status: blog.status,
      published_at: blog.published_at || undefined,
      scheduled_at: blog.scheduled_at || undefined
    });
    setActiveTab('editor');
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    const imageUrl = await uploadImage(file);
    
    if (imageUrl) {
      setFormData(prev => ({ ...prev, featured_image_url: imageUrl }));
    }
    
    setImageUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingBlog) {
        await updateBlog(editingBlog.id, formData);
      } else {
        await createBlog(formData);
      }
      
      resetForm();
      setActiveTab('list');
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const success = await deleteBlog(id);
      if (success) {
        fetchBlogs();
      }
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || blog.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (profile?.role !== 'admin') {
    return (
      <div className="p-6 text-center">
        <p className="text-linkedin-muted">You don't have permission to access the blog manager.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[rgb(var(--grey-900))]">Blog Manager</h1>
        <Button 
          onClick={() => {
            resetForm();
            setActiveTab('editor');
          }}
          className="btn-linkedin-primary"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Blog Post
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 bg-[rgb(var(--grey-200))]">
          <TabsTrigger value="list" className="data-[state=active]:bg-linkedin-surface">Blog Posts</TabsTrigger>
          <TabsTrigger value="editor" className="data-[state=active]:bg-linkedin-surface">Editor</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          {/* Filters */}
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-linkedin-muted w-4 h-4" />
              <Input
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-linkedin"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 border-linkedin">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-linkedin-surface border-linkedin">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Blog List */}
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-linkedin-primary" />
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredBlogs.map((blog) => (
                <Card key={blog.id} className="border-linkedin bg-linkedin-surface">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-[rgb(var(--grey-900))]">{blog.title}</h3>
                          <Badge 
                            variant={blog.status === 'published' ? 'default' : 'secondary'}
                            className={blog.status === 'published' ? 'bg-[rgb(var(--blue-primary))]' : ''}
                          >
                            {blog.status}
                          </Badge>
                        </div>
                        <p className="text-linkedin-secondary mb-2 line-clamp-2">{blog.description}</p>
                        <div className="flex items-center gap-4 text-sm text-linkedin-muted">
                          <span>By {blog.profiles?.first_name} {blog.profiles?.last_name}</span>
                          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                          <span>{blog.view_count} views</span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(blog)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDelete(blog.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredBlogs.length === 0 && (
                <div className="text-center py-8 text-linkedin-muted">
                  No blog posts found.
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="editor">
          <Card className="border-linkedin bg-linkedin-surface">
            <CardHeader>
              <CardTitle className="text-[rgb(var(--grey-900))]">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-linkedin-secondary">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter blog title"
                      required
                      className="border-linkedin"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug" className="text-linkedin-secondary">Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                      placeholder="blog-post-slug"
                      required
                      className="border-linkedin"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-linkedin-secondary">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of the blog post"
                    rows={3}
                    className="border-linkedin"
                  />
                </div>

                {/* Featured Image */}
                <div className="space-y-2">
                  <Label className="text-linkedin-secondary">Featured Image</Label>
                  <div className="flex gap-4 items-center">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => document.getElementById('image-upload')?.click()}
                      disabled={imageUploading}
                      className="border-linkedin"
                    >
                      {imageUploading ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Upload className="w-4 h-4 mr-2" />
                      )}
                      Upload Image
                    </Button>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {formData.featured_image_url && (
                      <img 
                        src={formData.featured_image_url} 
                        alt="Featured" 
                        className="w-20 h-20 object-cover rounded border-linkedin"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="body" className="text-linkedin-secondary">Content</Label>
                  <Textarea
                    id="body"
                    value={formData.body}
                    onChange={(e) => setFormData(prev => ({ ...prev, body: e.target.value }))}
                    placeholder="Write your blog content here..."
                    rows={15}
                    required
                    className="border-linkedin font-mono"
                  />
                </div>

                {/* SEO Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta_title" className="text-linkedin-secondary">Meta Title</Label>
                    <Input
                      id="meta_title"
                      value={formData.meta_title}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                      placeholder="SEO meta title"
                      className="border-linkedin"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta_description" className="text-linkedin-secondary">Meta Description</Label>
                    <Input
                      id="meta_description"
                      value={formData.meta_description}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                      placeholder="SEO meta description"
                      className="border-linkedin"
                    />
                  </div>
                </div>

                {/* Publishing Options */}
                <div className="flex gap-4 items-center">
                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-linkedin-secondary">Status</Label>
                    <Select value={formData.status} onValueChange={(value: any) => setFormData(prev => ({ ...prev, status: value }))}>
                      <SelectTrigger className="w-40 border-linkedin">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-linkedin-surface border-linkedin">
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-linkedin-primary"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    {editingBlog ? 'Update' : 'Save'} Blog Post
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={resetForm}
                    className="border-linkedin"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
