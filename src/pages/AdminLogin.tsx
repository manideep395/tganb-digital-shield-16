
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User, AlertTriangle } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Input validation
    if (!username.trim() || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Rate limiting
    if (attempts >= 5) {
      setError('Too many failed attempts. Please wait before trying again.');
      return;
    }

    setIsLoading(true);

    // Simulate loading time for security
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = login(username.trim(), password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setAttempts(prev => prev + 1);
      setError('Invalid credentials. Please check your username and password.');
      
      // Auto-reset attempts after 15 minutes
      setTimeout(() => {
        setAttempts(0);
      }, 15 * 60 * 1000);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20" />
      
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img 
                src="/uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TG ANB Logo" 
                className="w-20 h-20 rounded-full border-4 border-blue-600 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Admin Portal
          </CardTitle>
          <CardDescription className="text-gray-600">
            Telangana Anti-Narcotics Bureau
            <br />
            Secure Administrator Access
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700 font-medium">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter username"
                  required
                  maxLength={50}
                  autoComplete="username"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter password"
                  required
                  maxLength={100}
                  autoComplete="current-password"
                />
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
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              disabled={isLoading || attempts >= 5}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </div>
              ) : (
                'Secure Login'
              )}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-xs text-gray-500">
            This is a secure government portal. All activities are logged and monitored for security purposes.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
