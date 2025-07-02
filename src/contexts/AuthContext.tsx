
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
    // Check for stored admin session
    const storedSession = localStorage.getItem('adminSession');
    if (storedSession) {
      try {
        const parsedSession = JSON.parse(storedSession);
        const now = new Date().getTime();
        
        // Check if session is still valid (30 minutes)
        if (parsedSession.expiresAt && now < parsedSession.expiresAt) {
          setUser(parsedSession.user);
          setSession(parsedSession);
        } else {
          localStorage.removeItem('adminSession');
        }
      } catch (error) {
        localStorage.removeItem('adminSession');
      }
    }
    setIsLoading(false);
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
      const clientIP = 'user_session';
      const rateLimitResult = loginLimiter.isAllowed(clientIP);
      
      if (!rateLimitResult.allowed) {
        return { 
          error: { 
            message: `Too many login attempts. Try again in ${rateLimitResult.blockTimeRemaining} minutes.` 
          } 
        };
      }

      // Check if user exists in admin_users table
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('id, email, password_hash, failed_login_attempts')
        .eq('email', sanitizedEmail)
        .single();

      if (adminError || !adminUser) {
        console.log('Authentication attempt for non-existent user:', sanitizedEmail);
        return { error: { message: 'Invalid credentials' } };
      }

      // Check for account lockout (3 failed attempts)
      if (adminUser.failed_login_attempts >= 3) {
        return { error: { message: 'Account temporarily locked due to too many failed attempts' } };
      }

      // Verify password (simple comparison for now - in production use proper hashing)
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

      // Create session object
      const sessionData = {
        user: {
          id: adminUser.id,
          email: adminUser.email,
          user_metadata: { email: adminUser.email }
        },
        access_token: `admin_${adminUser.id}_${Date.now()}`,
        refresh_token: `refresh_${adminUser.id}_${Date.now()}`,
        expires_at: Math.floor((Date.now() + 30 * 60 * 1000) / 1000), // 30 minutes
        expiresAt: Date.now() + 30 * 60 * 1000 // 30 minutes in milliseconds
      };

      // Store session in localStorage for persistence
      localStorage.setItem('adminSession', JSON.stringify(sessionData));

      setSession(sessionData as any);
      setUser(sessionData.user as any);

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
      setSession(null);
      setUser(null);
      
      // Clear stored session
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
