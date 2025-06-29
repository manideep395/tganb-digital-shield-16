
import { useState } from 'react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2, Link, FileText } from 'lucide-react';
import { AnnouncementItem } from '@/hooks/useContentData';
import { useAuth } from '@/contexts/AuthContext';

const AdminAnnouncements = () => {
  const { isAdmin } = useAuth();
  const { announcementData, addAnnouncement, updateAnnouncement, deleteAnnouncement, isLoading } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<AnnouncementItem, 'id'>>({
    name: '',
    date: '',
    attachment_link: '',
    description: ''
  });

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateAnnouncement(editingId, formData);
      } else {
        await addAnnouncement(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving announcement:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      date: '',
      attachment_link: '',
      description: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (announcement: AnnouncementItem) => {
    setFormData({
      name: announcement.name,
      date: announcement.date,
      attachment_link: announcement.attachment_link || '',
      description: announcement.description || ''
    });
    setEditingId(announcement.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this announcement?')) {
      try {
        await deleteAnnouncement(id);
      } catch (error) {
        console.error('Error deleting announcement:', error);
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
            <h1 className="text-2xl font-bold">Manage Announcements</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Announcement
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? 'Edit Announcement' : 'Add New Announcement'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Announcement Title</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter announcement title"
                      required
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description || ''}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Enter detailed description (optional)"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label className="flex items-center space-x-2">
                      <Link className="w-4 h-4" />
                      <span>Attachment Link (Optional)</span>
                    </Label>
                    <Input
                      value={formData.attachment_link || ''}
                      onChange={(e) => setFormData({...formData, attachment_link: e.target.value})}
                      placeholder="https://drive.google.com/file/... or document URL"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingId ? 'Update' : 'Add'} Announcement
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Announcements List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Existing Announcements ({announcementData.length})</h2>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {announcementData.map((announcement) => (
                <Card key={announcement.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {announcement.attachment_link && (
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded flex items-center">
                              <FileText className="w-3 h-3 mr-1" />
                              Has Attachment
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{announcement.name}</h3>
                        {announcement.description && (
                          <p className="text-xs text-gray-600 mb-2">{announcement.description}</p>
                        )}
                        <div className="text-xs text-gray-500">{announcement.date}</div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(announcement)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(announcement.id)}>
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

export default AdminAnnouncements;
