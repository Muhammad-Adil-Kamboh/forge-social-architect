
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

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
  view_count: number;
  created_at: string;
  updated_at: string;
  profiles?: {
    first_name: string | null;
    last_name: string | null;
  };
}

interface CreateBlogData {
  title: string;
  slug: string;
  description?: string;
  body: string;
  featured_image_url?: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
  tags?: string[];
  status?: 'draft' | 'published' | 'scheduled';
  published_at?: string;
  scheduled_at?: string;
}

export const useBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user, profile } = useAuth();

  const fetchBlogs = async (published_only = false) => {
    setLoading(true);
    try {
      let query = supabase
        .from('blogs')
        .select(`
          *,
          profiles:author_id (
            first_name,
            last_name
          )
        `)
        .order('created_at', { ascending: false });

      if (published_only) {
        query = query.eq('status', 'published');
      }

      const { data, error } = await query;

      if (error) throw error;
      setBlogs(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to fetch blogs",
        description: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogBySlug = async (slug: string) => {
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
        .eq('slug', slug)
        .single();

      if (error) throw error;
      
      // Increment view count
      if (data) {
        await supabase
          .from('blogs')
          .update({ view_count: (data.view_count || 0) + 1 })
          .eq('id', data.id);
      }
      
      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to fetch blog",
        description: error.message
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createBlog = async (blogData: CreateBlogData) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "You must be logged in to create a blog."
      });
      return null;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .insert({
          ...blogData,
          author_id: user.id
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Blog created",
        description: "Your blog post has been created successfully."
      });

      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to create blog",
        description: error.message
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (id: string, updates: Partial<CreateBlogData>) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Blog updated",
        description: "Your blog post has been updated successfully."
      });

      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to update blog",
        description: error.message
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Blog deleted",
        description: "Your blog post has been deleted successfully."
      });

      return true;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to delete blog",
        description: error.message
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File, folder: string = 'blog-images') => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "You must be logged in to upload images."
      });
      return null;
    }

    setLoading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from(folder)
        .upload(fileName, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from(folder)
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to upload image",
        description: error.message
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Set up real-time subscription for blogs
  useEffect(() => {
    const channel = supabase
      .channel('blogs-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'blogs'
        },
        () => {
          // Refresh blogs when changes occur
          fetchBlogs();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    blogs,
    loading,
    fetchBlogs,
    fetchBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
    uploadImage
  };
};
