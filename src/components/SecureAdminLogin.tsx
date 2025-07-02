
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Eye, EyeOff, AlertTriangle, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { sanitizeInput, generateCSRFToken } from '@/utils/inputSanitization';

const SecureAdminLogin = () => {
  const navigate = useNavigate();
  const { signIn, isLoading, isAdmin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [csrfToken, setCsrfToken] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Generate CSRF token
    setCsrfToken(generateCSRFToken());
    
    // Check if already authenticated
    if (isAdmin) {
      navigate('/admin/dashboard');
    }
    
    // Check for previous failed attempts
    const storedAttempts = localStorage.getItem('loginAttempts');
    const lastAttempt = localStorage.getItem('lastAttempt');
    
    if (storedAttempts && lastAttempt) {
      const timeSinceLastAttempt = Date.now() - parseInt(lastAttempt);
      if (timeSinceLastAttempt < 15 * 60 * 1000) { // 15 minutes
        setAttempts(parseInt(storedAttempts));
        if (parseInt(storedAttempts) >= 3) {
          setIsBlocked(true);
          const remainingTime = Math.ceil((15 * 60 * 1000 - timeSinceLastAttempt) / 60000);
          setError(`Account temporarily locked. Try again in ${remainingTime} minutes.`);
        }
      } else {
        localStorage.removeItem('loginAttempts');
        localStorage.removeItem('lastAttempt');
      }
    }
  }, [isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check if blocked
    if (isBlocked || attempts >= 3) {
      setError('Too many failed attempts. Please wait 15 minutes before trying again.');
      return;
    }

    // Enhanced input validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(formData.email.trim());
    const sanitizedPassword = formData.password;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password validation
    if (sanitizedPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const { error } = await signIn(sanitizedEmail, sanitizedPassword);
      
      if (error) {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        // Store failed attempts
        localStorage.setItem('loginAttempts', newAttempts.toString());
        localStorage.setItem('lastAttempt', Date.now().toString());
        
        if (newAttempts >= 3) {
          setIsBlocked(true);
          setError('Too many failed attempts. Account temporarily locked for 15 minutes.');
        } else {
          setError(`Invalid credentials. ${3 - newAttempts} attempts remaining.`);
        }
      } else {
        // Clear failed attempts on successful login
        localStorage.removeItem('loginAttempts');
        localStorage.removeItem('lastAttempt');
        navigate('/admin/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Shield className="w-12 h-12 text-blue-600" />
              <Lock className="w-4 h-4 text-blue-800 absolute -bottom-1 -right-1" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            TGANB Admin Portal
          </CardTitle>
          <p className="text-gray-600">Secure Government Access</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="csrf_token" value={csrfToken} />
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: sanitizeInput(e.target.value) })}
                placeholder="Enter your government email"
                required
                autoComplete="email"
                maxLength={255}
                disabled={isBlocked}
                className="border-2 focus:border-blue-500"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password *</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your secure password"
                  required
                  autoComplete="current-password"
                  maxLength={255}
                  disabled={isBlocked}
                  className="border-2 focus:border-blue-500 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isBlocked}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="border-red-300">
                <AlertTriangle className="w-4 h-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 font-semibold"
              disabled={isLoading || isBlocked}
            >
              {isLoading ? 'Authenticating...' : 'Secure Sign In'}
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-xs text-red-800">
                <strong>Security Notice:</strong> This system includes comprehensive audit logging, 
                rate limiting, and intrusion detection. All login attempts are monitored and logged 
                for security compliance.
              </p>
            </div>
            
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800">
                <strong>Authorized Access Only:</strong> Unauthorized access is strictly prohibited 
                and will be prosecuted to the full extent of the law.
              </p>
            </div>

            {/* Development credentials info - Remove in production */}
            {process.env.NODE_ENV === 'development' && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-xs text-green-800">
                  <strong>Dev Credentials:</strong><br/>
                  • admin@tganb.gov.in : SecureAdmin2024!<br/>
                  • tganb@tspolice : Tganb1!<br/>
                  • teagle@tgp.com : Teagle@1
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecureAdminLogin;
