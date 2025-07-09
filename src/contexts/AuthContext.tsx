
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
      
      console.log('Attempting login for:', email);
      
      // Use the Supabase RPC function for authentication
      const { data, error } = await supabase.rpc('handle_login_attempt', {
        p_email: email.toLowerCase().trim(),
        p_password: password,
        p_ip_address: 'web_client',
        p_user_agent: navigator.userAgent
      });

      if (error) {
        console.error('RPC error:', error);
        return { error: { message: 'Authentication failed' } };
      }

      console.log('Login response:', data);

      // Check if login was successful
      if (data && typeof data === 'object' && 'success' in data) {
        const loginResult = data as { success: boolean; error?: string; user?: any };
        
        if (loginResult.success && loginResult.user) {
          console.log('Login successful, creating session...');
          
          // Create a mock session for the admin user
          const mockUser: User = {
            id: loginResult.user.id,
            email: loginResult.user.email,
            aud: 'authenticated',
            role: 'authenticated',
            email_confirmed_at: new Date().toISOString(),
            phone: '',
            confirmed_at: new Date().toISOString(),
            last_sign_in_at: new Date().toISOString(),
            app_metadata: { role: 'admin' },
            user_metadata: { admin_email: loginResult.user.email },
            identities: [],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };

          const mockSession: Session = {
            access_token: `admin_token_${Date.now()}`,
            refresh_token: `refresh_token_${Date.now()}`,
            expires_in: 3600,
            expires_at: Math.floor(Date.now() / 1000) + 3600,
            token_type: 'bearer',
            user: mockUser
          };

          setSession(mockSession);
          setUser(mockUser);
          
          console.log('Login successful for:', email);
          return { error: null };
        } else {
          console.log('Login failed:', loginResult.error);
          return { error: { message: loginResult.error || 'Invalid credentials' } };
        }
      }
      
      return { error: { message: 'Invalid response from server' } };
    } catch (error) {
      console.error('Login error:', error);
      return { error: { message: 'Authentication failed' } };
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
    
    setSession(null);
    setUser(null);
  };

  // Enhanced admin check
  const isAdmin = Boolean(
    user && (
      user.email === 'admin@tganb.gov.in' || 
      user.email === 'tganb@tspolice' ||
      user.email === 'teagle@tgp.com' ||
      user.app_metadata?.role === 'admin' ||
      user.user_metadata?.admin_email
    )
  );

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
