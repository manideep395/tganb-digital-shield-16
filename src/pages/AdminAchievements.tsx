
import { useState } from 'react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2, Image } from 'lucide-react';
import { AchievementItem } from '@/hooks/useContentData';
import { useAuth } from '@/contexts/AuthContext';

const AdminAchievements = () => {
  const { isAdmin } = useAuth();
  const { achievementsData, addAchievement, updateAchievement, deleteAchievement, isLoading } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<AchievementItem, 'id'>>({
    title: '',
    description: '',
    date: '',
    image_url: '',
    category: ''
  });

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateAchievement(editingId, formData);
      } else {
        await addAchievement(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving achievement:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      image_url: '',
      category: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (achievement: AchievementItem) => {
    setFormData({
      title: achievement.title,
      description: achievement.description,
      date: achievement.date,
      image_url: achievement.image_url || '',
      category: achievement.category || ''
    });
    setEditingId(achievement.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this achievement?')) {
      try {
        await deleteAchievement(id);
      } catch (error) {
        console.error('Error deleting achievement:', error);
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
            <h1 className="text-2xl font-bold">Manage Achievements</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Achievement
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? 'Edit Achievement' : 'Add New Achievement'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Enter achievement title"
                      required
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
                    <Label>Date</Label>
                    <Input
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      placeholder="e.g., Dec 2024"
                      required
                    />
                  </div>
                  <div>
                    <Label>Category (Optional)</Label>
                    <Input
                      value={formData.category || ''}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      placeholder="e.g., Drug Bust, Award, etc."
                    />
                  </div>
                  <div>
                    <Label className="flex items-center space-x-2">
                      <Image className="w-4 h-4" />
                      <span>Image URL (Optional)</span>
                    </Label>
                    <Input
                      value={formData.image_url || ''}
                      onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingId ? 'Update' : 'Add'} Achievement
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Achievements List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Existing Achievements ({achievementsData.length})</h2>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {achievementsData.map((achievement) => (
                <Card key={achievement.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1">{achievement.title}</h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{achievement.description}</p>
                        <div className="text-xs text-gray-500 space-y-1">
                          <div>Date: {achievement.date}</div>
                          {achievement.category && <div>Category: {achievement.category}</div>}
                          {achievement.image_url && <div className="text-green-600">Has Image</div>}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(achievement)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(achievement.id)}>
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

export default AdminAchievements;
