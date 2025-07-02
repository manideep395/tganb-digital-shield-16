
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { sanitizeInput } from '@/utils/inputSanitization';
import { loginLimiter } from '@/utils/rateLimiter';

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
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
        
        // Log auth events for audit
        if (session?.user) {
          console.log('Auth event:', event, 'User:', session.user.email);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Enhanced input validation
      if (!email || !password) {
        return { error: { message: 'Email and password are required' } };
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { error: { message: 'Invalid email format' } };
      }

      // Sanitize email
      const sanitizedEmail = sanitizeInput(email.toLowerCase().trim());
      
      // Rate limiting check
      const clientIP = 'user_session'; // Use session identifier
      const rateLimitResult = loginLimiter.isAllowed(clientIP);
      
      if (!rateLimitResult.allowed) {
        return { 
          error: { 
            message: `Too many login attempts. Try again in ${rateLimitResult.blockTimeRemaining} minutes.` 
          } 
        };
      }

      // Check if user exists in admin_users table first
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('id, email, password_hash, failed_login_attempts')
        .eq('email', sanitizedEmail)
        .single();

      if (adminError || !adminUser) {
        console.log('Authentication attempt for non-existent user:', sanitizedEmail);
        return { error: { message: 'Invalid credentials' } };
      }

      // Check for account lockout
      if (adminUser.failed_login_attempts >= 3) {
        return { error: { message: 'Account temporarily locked due to too many failed attempts' } };
      }

      // Verify password (currently plain text comparison, but structured for future hashing)
      const passwordValid = password === adminUser.password_hash;

      if (!passwordValid) {
        // Update failed attempts
        await supabase
          .from('admin_users')
          .update({ 
            failed_login_attempts: (adminUser.failed_login_attempts || 0) + 1,
            updated_at: new Date().toISOString()
          })
          .eq('id', adminUser.id);

        return { error: { message: 'Invalid credentials' } };
      }

      // Create a proper Supabase auth session using signInWithPassword
      const { data, error } = await supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password: password
      });

      if (error) {
        // If Supabase auth fails, we need to create the user first
        const { error: signUpError } = await supabase.auth.signUp({
          email: sanitizedEmail,
          password: password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin/dashboard`
          }
        });

        if (signUpError) {
          return { error: { message: 'Authentication service error' } };
        }

        // Try signing in again after signup
        const { data: retryData, error: retryError } = await supabase.auth.signInWithPassword({
          email: sanitizedEmail,
          password: password
        });

        if (retryError) {
          return { error: { message: 'Authentication failed' } };
        }

        setSession(retryData.session);
        setUser(retryData.user);
      } else {
        setSession(data.session);
        setUser(data.user);
      }

      // Reset failed attempts on successful login
      await supabase
        .from('admin_users')
        .update({ 
          last_login: new Date().toISOString(),
          failed_login_attempts: 0,
          updated_at: new Date().toISOString()
        })
        .eq('id', adminUser.id);

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
      await supabase.auth.signOut();
      setSession(null);
      setUser(null);
      
      // Clear any stored tokens
      localStorage.removeItem('adminSession');
      sessionStorage.clear();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Enhanced admin check
  const isAdmin = Boolean(
    user && 
    session &&
    (
      user.email === 'admin@tganb.gov.in' || 
      user.email === 'tganb@tspolice' ||
      user.email === 'teagle@tgp.com'
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
