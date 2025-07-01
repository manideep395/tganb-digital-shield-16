
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Database, Info } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';

const AdminScrollingData = () => {
  const { isAdmin } = useAuth();
  const { scrollingData, isLoading } = useDatabaseAdmin();
  const navigate = useNavigate();

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button onClick={() => navigate('/admin/dashboard')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold">Scrolling Data Management</h1>
          </div>
          <Button onClick={() => navigate('/admin/scrolling-content')}>
            <Database className="w-4 h-4 mr-2" />
            Manage Scrolling Content
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="w-5 h-5 text-blue-600" />
              <span>Database-Driven Content</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Automatic Content Integration:</strong> The scrolling ticker now automatically displays content from your database.
                </p>
                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>• News articles are automatically included in the ticker</li>
                  <li>• Announcements are automatically displayed</li>
                  <li>• Scrolling content is managed through the database</li>
                  <li>• No manual updates required - content syncs automatically</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 mb-2">
                  <strong>Current Active Scrolling Content:</strong> {scrollingData.length} items
                </p>
                <p className="text-sm text-green-700">
                  To add new scrolling content, use the "Manage Scrolling Content" section in the admin panel.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Scrolling Content</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading content...</p>
              </div>
            ) : scrollingData.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No scrolling content available.</p>
                <p className="text-sm text-gray-400 mt-2">Add content through the Scrolling Content management page.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {scrollingData.map((content, index) => (
                  <div key={content.id} className="p-4 bg-gray-50 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-blue-600">
                        {content.language}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        content.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {content.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{content.text}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminScrollingData;
