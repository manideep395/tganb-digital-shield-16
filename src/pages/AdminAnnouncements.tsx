
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2, Link, FileText } from 'lucide-react';
import { AnnouncementItem } from '../data/announcementData';

const AdminAnnouncements = () => {
  const { isAuthenticated, announcementData, addAnnouncement, updateAnnouncement, deleteAnnouncement } = useAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<AnnouncementItem>({
    name: '',
    date: '',
    attachmentLink: '',
    description: ''
  });

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      updateAnnouncement(editingIndex, formData);
    } else {
      addAnnouncement(formData);
    }
    resetForm();
    alert('Announcement saved successfully!');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      date: '',
      attachmentLink: '',
      description: ''
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setFormData(announcementData[index]);
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
                <CardTitle>{editingIndex !== null ? 'Edit Announcement' : 'Add New Announcement'}</CardTitle>
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
                      value={formData.attachmentLink || ''}
                      onChange={(e) => setFormData({...formData, attachmentLink: e.target.value})}
                      placeholder="https://drive.google.com/file/... or document URL"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingIndex !== null ? 'Update' : 'Add'} Announcement
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
            {announcementData.map((announcement, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {announcement.attachmentLink && (
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
                      <Button size="sm" variant="outline" onClick={() => handleEdit(index)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => deleteAnnouncement(index)}>
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

export default AdminAnnouncements;
