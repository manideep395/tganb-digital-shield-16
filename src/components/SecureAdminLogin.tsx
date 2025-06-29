
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
    email: 'admin@tganb.gov.in',
    password: 'SecureAdmin2024!'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (attempts >= 3) {
      setError('Too many failed attempts. Please wait before trying again.');
      return;
    }

    try {
      console.log('Attempting to sign in with:', formData.email);
      const { error } = await signIn(formData.email, formData.password);
      
      if (error) {
        setAttempts(prev => prev + 1);
        setError(error.message || 'Invalid credentials. Please check your email and password.');
        console.error('Sign in error:', error);
      } else {
        console.log('Sign in successful, navigating to dashboard');
        navigate('/admin/dashboard');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            TGANB Admin Portal
          </CardTitle>
          <p className="text-gray-600">Secure Authentication Required</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="admin@tganb.gov.in"
                required
                autoComplete="email"
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter your secure password"
                  required
                  autoComplete="current-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="w-4 h-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading || attempts >= 3}
            >
              {isLoading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <div className="text-sm text-gray-600">
              <p className="font-semibold">Admin Credentials:</p>
              <p>Email: admin@tganb.gov.in</p>
              <p>Password: SecureAdmin2024!</p>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Security Notice:</strong> This system includes audit logging and rate limiting for security.
                All login attempts are monitored.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecureAdminLogin;
