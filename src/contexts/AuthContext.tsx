
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Check if user exists in admin_users table
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single();

      if (adminError || !adminUser) {
        console.log('Admin user not found:', adminError);
        return { error: { message: 'Invalid credentials' } };
      }

      // Simple password comparison (since the migration uses plain text for demo)
      if (password !== adminUser.password_hash) {
        console.log('Password mismatch');
        // Log failed attempt
        await supabase
          .from('admin_users')
          .update({ 
            failed_login_attempts: (adminUser.failed_login_attempts || 0) + 1 
          })
          .eq('id', adminUser.id);

        return { error: { message: 'Invalid credentials' } };
      }

      // Create a mock user session for the admin
      const mockUser: User = {
        id: adminUser.id,
        email: adminUser.email,
        aud: 'authenticated',
        role: 'authenticated',
        email_confirmed_at: new Date().toISOString(),
        phone: '',
        confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        app_metadata: { role: 'admin' },
        user_metadata: {},
        identities: [],
        created_at: adminUser.created_at,
        updated_at: adminUser.updated_at || adminUser.created_at
      };

      const mockSession: Session = {
        access_token: 'mock_admin_token',
        refresh_token: 'mock_refresh_token',
        expires_in: 3600,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: 'bearer',
        user: mockUser
      };

      // Set the session and user
      setSession(mockSession);
      setUser(mockUser);

      // Update last login and reset failed attempts
      await supabase
        .from('admin_users')
        .update({ 
          last_login: new Date().toISOString(),
          failed_login_attempts: 0
        })
        .eq('id', adminUser.id);

      return { error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: { message: 'An error occurred during sign in' } };
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setSession(null);
    setUser(null);
  };

  // Check if user is admin based on email or app_metadata
  const isAdmin = user?.email === 'admin@tganb.gov.in' || user?.app_metadata?.role === 'admin' || false;

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signOut,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
