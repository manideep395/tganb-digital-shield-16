
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { useNavigate } from 'react-router-dom';
import { 
  Newspaper, 
  Megaphone, 
  Scroll, 
  GraduationCap, 
  Trophy, 
  Video, 
  HelpCircle, 
  FileText,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Home,
  Database
} from 'lucide-react';

const AdminDashboard = () => {
  const { isAdmin, signOut } = useAuth();
  const { 
    newsData, 
    announcementData, 
    scrollingData, 
    trainingData, 
    achievementsData,
    celebrityVideos,
    faqsData,
    drugReports,
    isLoading 
  } = useDatabaseAdmin();
  const navigate = useNavigate();

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const contentStats = [
    { name: 'News Articles', count: newsData.length, icon: Newspaper, color: 'blue', path: '/admin/news' },
    { name: 'Announcements', count: announcementData.length, icon: Megaphone, color: 'orange', path: '/admin/announcements' },
    { name: 'Scrolling Content', count: scrollingData.length, icon: Scroll, color: 'purple', path: '/admin/scrolling-content' },
    { name: 'Training Sessions', count: trainingData.length, icon: GraduationCap, color: 'green', path: '/admin/trainings' },
    { name: 'Achievements', count: achievementsData.length, icon: Trophy, color: 'yellow', path: '/admin/achievements' },
    { name: 'Celebrity Videos', count: celebrityVideos.length, icon: Video, color: 'red', path: '/admin/celebrity-videos' },
    { name: 'FAQs', count: faqsData.length, icon: HelpCircle, color: 'indigo', path: '/admin/faqs' },
    { name: 'Drug Reports', count: drugReports.length, icon: FileText, color: 'gray', path: '/admin/drug-reports' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700',
      purple: 'bg-purple-50 border-purple-200 text-purple-700',
      green: 'bg-green-50 border-green-200 text-green-700',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
      red: 'bg-red-50 border-red-200 text-red-700',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      gray: 'bg-gray-50 border-gray-200 text-gray-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Database className="w-8 h-8 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">TGANB Admin Panel</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>View Website</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h2>
          <p className="text-gray-600">Manage your TGANB website content and monitor system status.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Content</p>
                  <p className="text-3xl font-bold">
                    {contentStats.reduce((acc, stat) => acc + stat.count, 0)}
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Active News</p>
                  <p className="text-3xl font-bold">{newsData.length}</p>
                </div>
                <Newspaper className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Announcements</p>
                  <p className="text-3xl font-bold">{announcementData.length}</p>
                </div>
                <Megaphone className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Drug Reports</p>
                  <p className="text-3xl font-bold">{drugReports.length}</p>
                </div>
                <FileText className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Management Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="w-6 h-6 mr-2" />
            Content Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contentStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.name} 
                  className={`hover:shadow-lg transition-all duration-200 cursor-pointer border-2 ${getColorClasses(stat.color)}`}
                  onClick={() => navigate(stat.path)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Icon className="w-6 h-6" />
                      <Badge variant="secondary" className="font-bold">
                        {stat.count}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardTitle className="text-sm font-semibold mb-1">{stat.name}</CardTitle>
                    <CardDescription className="text-xs">
                      Manage and edit {stat.name.toLowerCase()}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Newspaper className="w-5 h-5 text-blue-600" />
                  <span>Add News Article</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Publish breaking news and important updates
                </p>
                <Button 
                  onClick={() => navigate('/admin/news')}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Create News
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Megaphone className="w-5 h-5 text-orange-600" />
                  <span>New Announcement</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Share official announcements with the public
                </p>
                <Button 
                  onClick={() => navigate('/admin/announcements')}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  Create Announcement
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <span>View Reports</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Review submitted drug-related reports
                </p>
                <Button 
                  onClick={() => navigate('/admin/drug-reports')}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity Summary */}
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              <span>System Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-white rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{newsData.length}</p>
                <p className="text-sm text-gray-600">News Articles</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-2xl font-bold text-orange-600">{announcementData.length}</p>
                <p className="text-sm text-gray-600">Announcements</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-2xl font-bold text-green-600">{trainingData.length}</p>
                <p className="text-sm text-gray-600">Training Sessions</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-2xl font-bold text-purple-600">{drugReports.length}</p>
                <p className="text-sm text-gray-600">Drug Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
