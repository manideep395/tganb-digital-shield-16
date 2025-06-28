
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2, RefreshCw } from 'lucide-react';

interface ScrollingItem {
  language: string;
  text: string;
}

const AdminScrollingContent = () => {
  const { isAuthenticated, scrollingData, updateScrollingData } = useAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<ScrollingItem>({
    language: '',
    text: ''
  });

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentData = [...scrollingData];
    
    if (editingIndex !== null) {
      currentData[editingIndex] = formData;
    } else {
      currentData.push(formData);
    }
    
    updateScrollingData(currentData);
    resetForm();
    alert('Scrolling content updated successfully!');
  };

  const resetForm = () => {
    setFormData({
      language: '',
      text: ''
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setFormData(scrollingData[index]);
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this scrolling content?')) {
      const currentData = scrollingData.filter((_, i) => i !== index);
      updateScrollingData(currentData);
      alert('Scrolling content deleted successfully!');
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
                <CardTitle>{editingIndex !== null ? 'Edit Scrolling Content' : 'Add New Scrolling Content'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Language</Label>
                    <Input
                      value={formData.language}
                      onChange={(e) => setFormData({...formData, language: e.target.value})}
                      placeholder="e.g., Multilingual, English, Telugu"
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
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingIndex !== null ? 'Update' : 'Add'} Content
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
            <h2 className="text-xl font-semibold">Current Scrolling Content ({scrollingData.length})</h2>
            {scrollingData.map((content, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {content.language}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {content.text.substring(0, 200)}...
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(index)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(index)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• The scrolling content appears at the bottom of the website as a news ticker</p>
              <p>• You can add multilingual content separated by bullet points (•)</p>
              <p>• Use the language field to specify which languages are included</p>
              <p>• The content will automatically scroll across the bottom of all pages</p>
              <p>• Make sure the content is informative and relevant to drug awareness</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminScrollingContent;
