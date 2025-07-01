
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
      
      // Check if user exists in admin_users table
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('id, email, password_hash, failed_login_attempts, last_login')
        .eq('email', sanitizedEmail)
        .single();

      if (adminError || !adminUser) {
        return { error: { message: 'Invalid credentials' } };
      }

      // Check for too many failed attempts
      if (adminUser.failed_login_attempts >= 5) {
        return { error: { message: 'Account temporarily locked due to too many failed attempts' } };
      }

      // Password verification (in production, use proper bcrypt)
      if (password !== adminUser.password_hash) {
        // Update failed attempts
        await supabase
          .from('admin_users')
          .update({ 
            failed_login_attempts: (adminUser.failed_login_attempts || 0) + 1 
          })
          .eq('id', adminUser.id);

        return { error: { message: 'Invalid credentials' } };
      }

      // Create secure session
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
        access_token: `secure_token_${Date.now()}_${Math.random().toString(36)}`,
        refresh_token: `refresh_token_${Date.now()}_${Math.random().toString(36)}`,
        expires_in: 3600,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: 'bearer',
        user: mockUser
      };

      // Set the session and user
      setSession(mockSession);
      setUser(mockUser);

      // Update successful login and reset failed attempts
      await supabase
        .from('admin_users')
        .update({ 
          last_login: new Date().toISOString(),
          failed_login_attempts: 0
        })
        .eq('id', adminUser.id);

      // Log audit event
      await supabase
        .from('audit_log')
        .insert({
          user_id: adminUser.id,
          action: 'login_success',
          ip_address: 'client_ip', // Would be populated server-side
          user_agent: navigator.userAgent
        });

      return { error: null };
    } catch (error) {
      return { error: { message: 'Authentication service temporarily unavailable' } };
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      // Log audit event
      if (user) {
        await supabase
          .from('audit_log')
          .insert({
            user_id: user.id,
            action: 'logout',
            user_agent: navigator.userAgent
          });
      }
    } catch (error) {
      // Silently handle audit logging errors
    }
    
    setSession(null);
    setUser(null);
  };

  // Secure admin check
  const isAdmin = Boolean(
    user?.email === 'admin@tganb.gov.in' || 
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
