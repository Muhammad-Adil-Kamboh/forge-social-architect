
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  body: string;
  featured_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  tags: string[] | null;
  status: 'draft' | 'published' | 'scheduled';
  published_at: string | null;
  scheduled_at: string | null;
  author_id: string;
  view_count: number | null;
  created_at: string;
  updated_at: string;
  profiles?: {
    first_name: string | null;
    last_name: string | null;
  };
}

export interface CreateBlogData {
  title: string;
  slug: string;
  description?: string;
  body: string;
  featured_image_url?: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
  tags?: string[];
  status: 'draft' | 'published' | 'scheduled';
  published_at?: string;
  scheduled_at?: string;
}

export const useBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          profiles:author_id (
            first_name,
            last_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Type assertion to ensure proper typing
      const typedBlogs = (data || []).map(blog => ({
        ...blog,
        status: blog.status as 'draft' | 'published' | 'scheduled'
      })) as Blog[];
      
      setBlogs(typedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch blogs"
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const fetchPublishedBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          profiles:author_id (
            first_name,
            last_name
          )
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      
      const typedBlogs = (data || []).map(blog => ({
        ...blog,
        status: blog.status as 'draft' | 'published' | 'scheduled'
      })) as Blog[];
      
      setBlogs(typedBlogs);
    } catch (error) {
      console.error('Error fetching published blogs:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch blogs"
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const createBlog = useCallback(async (blogData: CreateBlogData) => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('blogs')
        .insert([{ ...blogData, author_id: user.id }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post created successfully"
      });

      return true;
    } catch (error) {
      console.error('Error creating blog:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create blog post"
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const updateBlog = useCallback(async (id: string, blogData: Partial<CreateBlogData>) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('blogs')
        .update(blogData)
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post updated successfully"
      });

      return true;
    } catch (error) {
      console.error('Error updating blog:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update blog post"
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const deleteBlog = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post deleted successfully"
      });

      return true;
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete blog post"
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const uploadImage = useCallback(async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to upload image"
      });
      return null;
    }
  }, [toast]);

  return {
    blogs,
    loading,
    fetchBlogs,
    fetchPublishedBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    uploadImage
  };
};
