
import { useState } from 'react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, Edit, Trash2, Video } from 'lucide-react';
import { CelebrityVideoItem } from '@/hooks/useContentData';
import { useAuth } from '@/contexts/AuthContext';

const AdminCelebrityVideos = () => {
  const { isAdmin } = useAuth();
  const { celebrityVideos, addCelebrityVideo, updateCelebrityVideo, deleteCelebrityVideo, isLoading } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<CelebrityVideoItem, 'id'>>({
    name: '',
    designation: '',
    video_url: ''
  });

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateCelebrityVideo(editingId, formData);
      } else {
        await addCelebrityVideo(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving celebrity video:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      designation: '',
      video_url: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (video: CelebrityVideoItem) => {
    setFormData({
      name: video.name,
      designation: video.designation,
      video_url: video.video_url
    });
    setEditingId(video.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this celebrity video?')) {
      try {
        await deleteCelebrityVideo(id);
      } catch (error) {
        console.error('Error deleting celebrity video:', error);
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
            <h1 className="text-2xl font-bold">Manage Celebrity Videos</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Celebrity Video
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? 'Edit Celebrity Video' : 'Add New Celebrity Video'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Celebrity Name</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter celebrity name"
                      required
                    />
                  </div>
                  <div>
                    <Label>Designation</Label>
                    <Input
                      value={formData.designation}
                      onChange={(e) => setFormData({...formData, designation: e.target.value})}
                      placeholder="e.g., Film Actor, Singer, etc."
                      required
                    />
                  </div>
                  <div>
                    <Label className="flex items-center space-x-2">
                      <Video className="w-4 h-4" />
                      <span>Video URL</span>
                    </Label>
                    <Input
                      value={formData.video_url}
                      onChange={(e) => setFormData({...formData, video_url: e.target.value})}
                      placeholder="YouTube URL (e.g., https://youtu.be/...)"
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingId ? 'Update' : 'Add'} Celebrity Video
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Celebrity Videos List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Existing Celebrity Videos ({celebrityVideos.length})</h2>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {celebrityVideos.map((video) => (
                <Card key={video.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1">{video.name}</h3>
                        <p className="text-xs text-gray-600 mb-2">{video.designation}</p>
                        <div className="text-xs text-gray-500">
                          <a href={video.video_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            View Video
                          </a>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(video)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(video.id)}>
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

export default AdminCelebrityVideos;
