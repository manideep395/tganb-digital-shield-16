
import { useState } from 'react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Plus, Edit, Trash2, Image } from 'lucide-react';
import { NewsItem } from '@/hooks/useContentData';
import { useAuth } from '@/contexts/AuthContext';

const AdminNews = () => {
  const { isAdmin } = useAuth();
  const { newsData, addNews, updateNews, deleteNews, isLoading } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<NewsItem, 'id'>>({
    title: '',
    subtitle: '',
    description: '',
    image_url: '',
    date: '',
    news_type: 'Breaking News',
    link: ''
  });

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateNews(editingId, formData);
      } else {
        await addNews(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving news:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image_url: '',
      date: '',
      news_type: 'Breaking News',
      link: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (news: NewsItem) => {
    setFormData({
      title: news.title,
      subtitle: news.subtitle || '',
      description: news.description,
      image_url: news.image_url,
      date: news.date || '',
      news_type: news.news_type,
      link: news.link || ''
    });
    setEditingId(news.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this news article?')) {
      try {
        await deleteNews(id);
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div>Loading...</div>
    </div>;
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
            <h1 className="text-2xl font-bold">Manage News Articles</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add News Article
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? 'Edit News Article' : 'Add New News Article'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Enter news title"
                      required
                    />
                  </div>
                  <div>
                    <Label>Subtitle (Optional)</Label>
                    <Input
                      value={formData.subtitle}
                      onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                      placeholder="Enter subtitle"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Enter detailed description"
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label>News Type</Label>
                    <Select value={formData.news_type} onValueChange={(value: any) => setFormData({...formData, news_type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Breaking News">Breaking News</SelectItem>
                        <SelectItem value="Shocking News">Shocking News</SelectItem>
                        <SelectItem value="Important Update">Important Update</SelectItem>
                        <SelectItem value="Achievement">Achievement</SelectItem>
                        <SelectItem value="Alert">Alert</SelectItem>
                        <SelectItem value="Event">Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="flex items-center space-x-2">
                      <Image className="w-4 h-4" />
                      <span>Image URL</span>
                    </Label>
                    <Input
                      value={formData.image_url}
                      onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      placeholder="e.g., Dec 2024"
                    />
                  </div>
                  <div>
                    <Label>Link (Optional)</Label>
                    <Input
                      value={formData.link}
                      onChange={(e) => setFormData({...formData, link: e.target.value})}
                      placeholder="Internal link (e.g., /news-detail/1)"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingId ? 'Update' : 'Add'} News Article
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* News List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Existing News Articles ({newsData.length})</h2>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {newsData.map((news) => (
                <Card key={news.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded ${
                            news.news_type === 'Breaking News' ? 'bg-red-100 text-red-600' :
                            news.news_type === 'Shocking News' ? 'bg-orange-100 text-orange-600' :
                            news.news_type === 'Achievement' ? 'bg-green-100 text-green-600' :
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {news.news_type}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{news.title}</h3>
                        {news.subtitle && (
                          <p className="text-xs text-gray-600 mb-1">{news.subtitle}</p>
                        )}
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{news.description}</p>
                        <div className="text-xs text-gray-500">{news.date}</div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(news)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(news.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
