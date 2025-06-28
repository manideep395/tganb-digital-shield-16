
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, RefreshCw } from 'lucide-react';

const AdminScrollingData = () => {
  const { isAuthenticated, newsData, announcementData, updateScrollingData } = useAdmin();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const handleUpdateScrollingData = () => {
    // Combine news and announcements for scrolling data
    const combinedData = [
      ...newsData,
      ...announcementData
    ];
    updateScrollingData(combinedData);
    alert('Scrolling data updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button onClick={() => navigate('/admin/dashboard')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold">Manage Scrolling Data</h1>
          </div>
          <Button onClick={handleUpdateScrollingData}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Update Scrolling Data
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current News */}
          <Card>
            <CardHeader>
              <CardTitle>Current News Items ({newsData.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-96 overflow-y-auto">
              {newsData.map((news, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded border">
                  <h4 className="font-semibold text-sm">{news.title}</h4>
                  <p className="text-xs text-gray-600">{news.date} • {news.newsType}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Current Announcements */}
          <Card>
            <CardHeader>
              <CardTitle>Current Announcements ({announcementData.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-96 overflow-y-auto">
              {announcementData.map((announcement, index) => (
                <div key={index} className="p-3 bg-orange-50 rounded border border-orange-200">
                  <p className="text-sm">{announcement.name}</p>
                  <p className="text-xs text-gray-600">{announcement.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• The scrolling sidebar automatically displays your latest news and announcements</p>
              <p>• Add or edit news items in the "Manage News" section</p>
              <p>• Add or edit announcements in the "Manage Announcements" section</p>
              <p>• Click "Update Scrolling Data" to refresh the sidebar with current content</p>
              <p>• News items will show with their type badges (Breaking News, Achievement, etc.)</p>
              <p>• Announcements will appear with an orange gradient background</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminScrollingData;
