import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
  TrendingUp,
  Trophy,
  Video,
  HelpCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const { 
    isAuthenticated, 
    logout, 
    newsData, 
    announcementData, 
    trainingData,
    achievementsData,
    celebrityVideos,
    faqsData,
    drugReports
  } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const statsData = [
    {
      title: 'Drug Reports',
      value: drugReports.length,
      icon: FileText,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
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
    },
    {
      title: 'Achievements',
      value: achievementsData.length,
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Celebrity Videos',
      value: celebrityVideos.length,
      icon: Video,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'FAQs',
      value: faqsData.length,
      icon: HelpCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  const quickActions = [
    {
      title: 'Manage Drug Reports',
      description: 'View and manage submitted drug reports',
      icon: FileText,
      action: () => navigate('/admin/drug-reports'),
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      count: drugReports.length
    },
    {
      title: 'Manage News',
      description: 'Add, edit, or remove news articles',
      icon: FileText,
      action: () => navigate('/admin/news'),
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      count: newsData.length
    },
    {
      title: 'Manage Announcements',
      description: 'Add, edit, or remove announcements',
      icon: Megaphone,
      action: () => navigate('/admin/announcements'),
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      count: announcementData.length
    },
    {
      title: 'Manage Trainings',
      description: 'Add, edit, or remove training programs',
      icon: Calendar,
      action: () => navigate('/admin/trainings'),
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      count: trainingData.length
    },
    {
      title: 'Manage Achievements',
      description: 'Add, edit, or remove achievements',
      icon: Trophy,
      action: () => navigate('/admin/achievements'),
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      count: achievementsData.length
    },
    {
      title: 'Manage Celebrity Videos',
      description: 'Add, edit, or remove celebrity videos',
      icon: Video,
      action: () => navigate('/admin/celebrity-videos'),
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      count: celebrityVideos.length
    },
    {
      title: 'Manage FAQs',
      description: 'Add, edit, or remove FAQs',
      icon: HelpCircle,
      action: () => navigate('/admin/faqs'),
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      count: faqsData.length
    },
    {
      title: 'Update Scrolling Data',
      description: 'Update scrolling news and announcements',
      icon: TrendingUp,
      action: () => navigate('/admin/scrolling-data'),
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      count: null
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
                <p className="text-sm text-gray-500">Content Management System</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Content Management Dashboard</h2>
          <p className="text-gray-600">Manage all website content from this central dashboard</p>
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
          <h3 className="text-xl font-bold text-gray-900 mb-6">Content Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={action.action}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${action.color} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    {action.count !== null && (
                      <span className="text-2xl font-bold text-gray-600">{action.count}</span>
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent News</CardTitle>
              <CardDescription>Latest news articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {newsData.slice(0, 5).map((news, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
                    <div className={`px-2 py-1 rounded text-xs font-bold ${
                      news.newsType === 'Breaking News' ? 'bg-red-100 text-red-600' :
                      news.newsType === 'Achievement' ? 'bg-green-100 text-green-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {news.newsType}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{news.title}</p>
                      <p className="text-xs text-gray-500">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>Latest announcements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {announcementData.slice(0, 5).map((announcement, index) => (
                  <div key={index} className="p-3 bg-orange-50 rounded border border-orange-200">
                    <p className="text-sm font-medium">{announcement.name}</p>
                    <p className="text-xs text-gray-600">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Notice */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Live Content Management</h4>
                <p className="text-sm text-gray-600">
                  All changes made here will be immediately reflected on the website. 
                  Content is automatically synchronized across all sections. 
                  Please ensure accuracy before publishing new content.
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
