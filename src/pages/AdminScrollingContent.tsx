
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { ScrollingContentItem } from '@/hooks/useContentData';

const AdminScrollingContent = () => {
  const { scrollingData, addScrollingContent, updateScrollingContent, deleteScrollingContent } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<ScrollingContentItem, 'id'>>({
    language: '',
    text: '',
    is_active: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateScrollingContent(editingId, formData);
      } else {
        await addScrollingContent(formData);
      }
      resetForm();
      alert('Scrolling content saved successfully!');
    } catch (error) {
      console.error('Error saving scrolling content:', error);
      alert('Error saving scrolling content. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      language: '',
      text: '',
      is_active: true
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (content: ScrollingContentItem) => {
    setFormData({
      language: content.language,
      text: content.text,
      is_active: content.is_active
    });
    setEditingId(content.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this scrolling content?')) {
      try {
        await deleteScrollingContent(id);
        alert('Scrolling content deleted successfully!');
      } catch (error) {
        console.error('Error deleting scrolling content:', error);
        alert('Error deleting scrolling content. Please try again.');
      }
    }
  };

  const toggleActive = async (content: ScrollingContentItem) => {
    try {
      await updateScrollingContent(content.id, { is_active: !content.is_active });
    } catch (error) {
      console.error('Error updating scrolling content:', error);
      alert('Error updating scrolling content. Please try again.');
    }
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
            <h1 className="text-2xl font-bold">Manage Scrolling Content</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Scrolling Content
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? 'Edit Scrolling Content' : 'Add New Scrolling Content'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Language/Category</Label>
                    <Input
                      value={formData.language}
                      onChange={(e) => setFormData({...formData, language: e.target.value})}
                      placeholder="e.g., English, Telugu, BREAKING, IMPORTANT"
                      required
                    />
                  </div>
                  <div>
                    <Label>Scrolling Text Content</Label>
                    <Textarea
                      value={formData.text}
                      onChange={(e) => setFormData({...formData, text: e.target.value})}
                      rows={6}
                      placeholder="Enter the scrolling text content..."
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_active"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                    />
                    <Label htmlFor="is_active">Active (will be shown in ticker)</Label>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingId ? 'Update' : 'Add'} Content
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Content List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Current Scrolling Content ({scrollingData.length})</h2>
              <div className="text-sm text-gray-600">
                Active: {scrollingData.filter(c => c.is_active).length}
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {scrollingData.map((content) => (
                <Card key={content.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded ${
                            content.language === 'Multilingual' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {content.language === 'Multilingual' ? 'BREAKING' : content.language}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            content.is_active 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {content.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                          {content.text}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => toggleActive(content)}
                          title={content.is_active ? 'Deactivate' : 'Activate'}
                        >
                          {content.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleEdit(content)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(content.id)}>
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

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• The scrolling content appears at the bottom of the website as a news ticker</p>
              <p>• Only active content will be displayed in the ticker</p>
              <p>• Use meaningful language/category labels like "BREAKING", "IMPORTANT", "English", "Telugu"</p>
              <p>• The word "Multilingual" will be automatically replaced with "BREAKING" in the ticker</p>
              <p>• Content automatically cycles every 6 seconds</p>
              <p>• Make sure the content is informative and relevant to drug awareness</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminScrollingContent;
