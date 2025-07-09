
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const SecureAdminLogin = () => {
  const navigate = useNavigate();
  const { signIn, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Input validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Rate limiting
    if (attempts >= 5) {
      setError('Too many failed attempts. Please wait 15 minutes before trying again.');
      return;
    }

    try {
      const { error } = await signIn(formData.email, formData.password);
      
      if (error) {
        setAttempts(prev => prev + 1);
        setError('Invalid credentials. Please check your email and password.');
        
        // Auto-reset attempts after 15 minutes
        setTimeout(() => {
          setAttempts(0);
        }, 15 * 60 * 1000);
      } else {
        // Successful login
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center space-y-4 px-4 md:px-6">
          <div className="flex justify-center mb-4">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">
            TGANB Admin Portal
          </CardTitle>
          <p className="text-sm md:text-base text-gray-600">Secure Authentication Required</p>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm md:text-base">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
                placeholder="Enter your email"
                required
                autoComplete="email"
                maxLength={255}
                className="mt-1 text-sm md:text-base"
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-sm md:text-base">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  maxLength={255}
                  className="pr-10 text-sm md:text-base"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="w-4 h-4" />
                <AlertDescription className="text-xs md:text-sm">{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base py-2 md:py-3"
              disabled={isLoading || attempts >= 5}
            >
              {isLoading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Security Notice:</strong> This system includes audit logging and rate limiting for security.
                All login attempts are monitored and logged.
              </p>
            </div>
            
            {/* Development credentials info */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800">
                <strong>Authorized Credentials:</strong><br/>
                • admin@tganb.gov.in (Password: SecureAdmin2024!)<br/>
                • tganb@tspolice (Password: SecureAdmin2024!)<br/>
                • teagle@tgp.com (Password: SecureAdmin2024!)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecureAdminLogin;
