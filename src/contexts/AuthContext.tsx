
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

interface LoginResponse {
  success: boolean;
  error?: string;
  user?: {
    id: string;
    email: string;
  };
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
      
      // Input validation
      if (!email || !password) {
        return { error: { message: 'Email and password are required' } };
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { error: { message: 'Invalid email format' } };
      }

      // Sanitize email
      const sanitizedEmail = email.toLowerCase().trim();
      
      console.log('Attempting login for:', sanitizedEmail);
      
      // Direct database query to check user credentials
      const { data: adminUser, error: queryError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', sanitizedEmail)
        .single();

      if (queryError || !adminUser) {
        console.error('User lookup error:', queryError);
        return { error: { message: 'Invalid credentials' } };
      }

      console.log('Found admin user:', adminUser.email);

      // Simple password verification for development
      // In production, use proper bcrypt verification
      const isValidPassword = password === 'SecureAdmin2024!';
      
      if (!isValidPassword) {
        console.log('Password verification failed');
        return { error: { message: 'Invalid credentials' } };
      }

      console.log('Password verification successful');

      // Create session manually since we're bypassing Supabase auth
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
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const mockSession: Session = {
        access_token: `admin_token_${Date.now()}_${Math.random().toString(36)}`,
        refresh_token: `refresh_token_${Date.now()}_${Math.random().toString(36)}`,
        expires_in: 3600,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: 'bearer',
        user: mockUser
      };

      // Update last login
      await supabase
        .from('admin_users')
        .update({ 
          last_login: new Date().toISOString(),
          failed_login_attempts: 0,
          updated_at: new Date().toISOString()
        })
        .eq('id', adminUser.id);

      setSession(mockSession);
      setUser(mockUser);

      console.log('Login successful for:', sanitizedEmail);
      return { error: null };
    } catch (error) {
      console.error('Login error:', error);
      return { error: { message: 'Authentication service temporarily unavailable' } };
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      // Log audit event if user exists
      if (user) {
        await supabase.rpc('log_audit_event', {
          p_user_id: user.id,
          p_action: 'logout',
          p_user_agent: navigator.userAgent
        });
      }
    } catch (error) {
      console.error('Logout audit error:', error);
    }
    
    setSession(null);
    setUser(null);
  };

  // Enhanced admin check
  const isAdmin = Boolean(
    user?.email === 'admin@tganb.gov.in' || 
    user?.email === 'tganb@tspolice' ||
    user?.email === 'teagle@tgp.com' ||
    user?.app_metadata?.role === 'admin'
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
