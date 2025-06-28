
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Plus, Edit, Trash2, Image, Link } from 'lucide-react';
import { NewsItem } from '../data/newsData';

const AdminNews = () => {
  const { isAuthenticated, newsData, addNews, updateNews, deleteNews } = useAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<NewsItem>({
    title: '',
    subtitle: '',
    description: '',
    date: '',
    imageUrl: '',
    newsType: 'Breaking News',
    link: ''
  });

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      updateNews(editingIndex, formData);
    } else {
      addNews(formData);
    }
    resetForm();
    alert('News article saved successfully!');
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      date: '',
      imageUrl: '',
      newsType: 'Breaking News',
      link: ''
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setFormData(newsData[index]);
    setEditingIndex(index);
    setIsEditing(true);
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
            <h1 className="text-2xl font-bold">Manage News</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add News
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingIndex !== null ? 'Edit News' : 'Add New News'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label>Subtitle</Label>
                    <Input
                      value={formData.subtitle || ''}
                      onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={formData.date || ''}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label className="flex items-center space-x-2">
                      <Image className="w-4 h-4" />
                      <span>Image URL</span>
                    </Label>
                    <Input
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                      placeholder="https://example.com/image.jpg or /uploads/image.jpg"
                      required
                    />
                    {formData.imageUrl && (
                      <img 
                        src={formData.imageUrl} 
                        alt="Preview" 
                        className="mt-2 w-full max-w-xs h-32 object-cover rounded border"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <Label className="flex items-center space-x-2">
                      <Link className="w-4 h-4" />
                      <span>Article Link (Optional)</span>
                    </Label>
                    <Input
                      value={formData.link || ''}
                      onChange={(e) => setFormData({...formData, link: e.target.value})}
                      placeholder="/news-detail/1 or https://example.com/news"
                    />
                  </div>
                  <div>
                    <Label>News Type</Label>
                    <Select value={formData.newsType} onValueChange={(value) => setFormData({...formData, newsType: value as any})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Breaking News">Breaking News</SelectItem>
                        <SelectItem value="Shocking News">Shocking News</SelectItem>
                        <SelectItem value="Important Update">Important Update</SelectItem>
                        <SelectItem value="Achievement">Achievement</SelectItem>
                        <SelectItem value="Alert">Alert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingIndex !== null ? 'Update' : 'Add'} News
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
            <h2 className="text-xl font-semibold">Existing News ({newsData.length})</h2>
            {newsData.map((news, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded font-bold ${
                          news.newsType === 'Breaking News' ? 'bg-red-100 text-red-600' :
                          news.newsType === 'Achievement' ? 'bg-green-100 text-green-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {news.newsType}
                        </span>
                        {news.link && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center">
                            <Link className="w-3 h-3 mr-1" />
                            Linked
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold">{news.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{news.description.substring(0, 100)}...</p>
                      <div className="text-xs text-gray-500 flex items-center space-x-4">
                        <span>{news.date}</span>
                        {news.imageUrl && (
                          <span className="flex items-center">
                            <Image className="w-3 h-3 mr-1" />
                            Image
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(index)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => deleteNews(index)}>
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
  );
};

export default AdminNews;
