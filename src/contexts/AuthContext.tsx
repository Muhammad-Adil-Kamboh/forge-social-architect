
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  avatar_url: string | null;
  role: string;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: any }>;
  isAdmin: boolean;
  hasRole: (role: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchProfile = async (userId: string) => {
    try {
      console.log('Fetching profile for user:', userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        throw error;
      }
      
      console.log('Profile fetched:', data);
      setProfile(data);
      return data;
    } catch (error) {
      console.error('Error in fetchProfile:', error);
      setProfile(null);
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.id);
        
        if (!mounted) return;
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Defer profile fetch to avoid deadlock
          setTimeout(async () => {
            if (mounted) {
              await fetchProfile(session.user.id);
              setLoading(false);
            }
          }, 0);
        } else {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    // Check for existing session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          setLoading(false);
          return;
        }
        
        console.log('Initial session:', session?.user?.id);
        
        if (!mounted) return;
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await fetchProfile(session.user.id);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error in getInitialSession:', error);
        setLoading(false);
      }
    };

    getInitialSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, metadata?: any) => {
    setLoading(true);
    
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: metadata
      }
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Sign Up Failed",
        description: error.message
      });
    } else {
      toast({
        title: "Account Created",
        description: "Please check your email to confirm your account."
      });
    }

    setLoading(false);
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Sign In Failed",
        description: error.message
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in."
      });
      
      // Fetch profile immediately after successful login
      if (data.user) {
        setTimeout(async () => {
          await fetchProfile(data.user.id);
          setLoading(false);
        }, 0);
      }
    }

    if (!data.user) {
      setLoading(false);
    }
    
    return { error };
  };

  const signOut = async () => {
    setLoading(true);
    
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Sign Out Failed",
        description: error.message
      });
    } else {
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out."
      });
      setUser(null);
      setProfile(null);
      setSession(null);
    }
    
    setLoading(false);
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: 'No user logged in' };
    
    setLoading(true);
    
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: error.message
      });
    } else {
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated."
      });
      // Refresh profile data
      setTimeout(async () => {
        await fetchProfile(user.id);
        setLoading(false);
      }, 0);
    }

    if (error) {
      setLoading(false);
    }
    
    return { error };
  };

  const isAdmin = profile?.role === 'admin';
  const hasRole = (role: string) => profile?.role === role;

  const value = {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
    isAdmin,
    hasRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
