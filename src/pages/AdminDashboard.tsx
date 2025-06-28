
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3, 
  FileText, 
  Megaphone, 
  Users, 
  Calendar,
  LogOut, 
  Settings,
  Shield,
  TrendingUp
} from 'lucide-react';

const AdminDashboard = () => {
  const { 
    isAuthenticated, 
    logout, 
    newsData, 
    announcementData, 
    trainingData, 
    totalReports 
  } = useAdmin();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const statsData = [
    {
      title: 'Total Reports Received',
      value: totalReports,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'News Articles',
      value: newsData.length,
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Announcements',
      value: announcementData.length,
      icon: Megaphone,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Training Programs',
      value: trainingData.length,
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const quickActions = [
    {
      title: 'Manage Scrolling Data',
      description: 'Update scrolling news and announcements',
      icon: TrendingUp,
      action: () => navigate('/admin/scrolling-data'),
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      title: 'Manage News',
      description: 'Add, edit, or remove news articles',
      icon: FileText,
      action: () => navigate('/admin/news'),
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      title: 'Manage Announcements',
      description: 'Add, edit, or remove announcements',
      icon: Megaphone,
      action: () => navigate('/admin/announcements'),
      color: 'bg-gradient-to-r from-orange-500 to-orange-600'
    },
    {
      title: 'Manage Trainings',
      description: 'Add, edit, or remove training programs',
      icon: Calendar,
      action: () => navigate('/admin/trainings'),
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
                alt="TG ANB Logo" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">TGANB Admin Portal</h1>
                <p className="text-sm text-gray-500">Administrator Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button onClick={handleLogout} variant="destructive" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
          <p className="text-gray-600">Welcome to the TGANB Content Management System</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-full`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={action.action}>
                <CardContent className="p-6">
                  <div className={`${action.color} p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Security Notice</h4>
                <p className="text-sm text-gray-600">
                  This is a secure government portal. All administrative activities are logged and monitored for security purposes. 
                  Please ensure you follow proper protocols when managing content.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
