
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
        return { error: { message: 'Invalid credentials' } };
      }

      // Verify password
      const { data: passwordValid, error: verifyError } = await supabase
        .rpc('verify_password', { 
          password: password, 
          hash: adminUser.password_hash 
        });

      if (verifyError || !passwordValid) {
        // Log failed attempt
        await supabase
          .from('admin_users')
          .update({ 
            failed_login_attempts: (adminUser.failed_login_attempts || 0) + 1 
          })
          .eq('id', adminUser.id);

        return { error: { message: 'Invalid credentials' } };
      }

      // Create session with custom claims
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (!error) {
        // Update last login
        await supabase
          .from('admin_users')
          .update({ 
            last_login: new Date().toISOString(),
            failed_login_attempts: 0
          })
          .eq('id', adminUser.id);

        // Log audit event
        await supabase.rpc('log_audit_event', {
          p_user_id: adminUser.id,
          p_action: 'LOGIN',
          p_table_name: 'admin_users',
          p_record_id: adminUser.id,
          p_old_values: null,
          p_new_values: { email: email },
          p_ip_address: null,
          p_user_agent: navigator.userAgent
        });
      }

      return { error };
    } catch (error) {
      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const isAdmin = user?.email === 'admin@tganb.gov.in' || false;

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
