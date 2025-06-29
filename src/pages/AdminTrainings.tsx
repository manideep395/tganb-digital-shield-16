
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2, Calendar, MapPin, Users } from 'lucide-react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { TrainingItem } from '@/hooks/useContentData';

const AdminTrainings = () => {
  const { trainingData, addTraining, updateTraining, deleteTraining } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<TrainingItem, 'id'>>({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    instructor: '',
    capacity: 0,
    image_url: '',
    registration_link: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateTraining(editingId, formData);
      } else {
        await addTraining(formData);
      }
      resetForm();
      alert('Training saved successfully!');
    } catch (error) {
      console.error('Error saving training:', error);
      alert('Error saving training. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      instructor: '',
      capacity: 0,
      image_url: '',
      registration_link: ''
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (training: TrainingItem) => {
    setFormData({
      title: training.title,
      description: training.description,
      date: training.date,
      time: training.time || '',
      location: training.location || '',
      instructor: training.instructor || '',
      capacity: training.capacity || 0,
      image_url: training.image_url || '',
      registration_link: training.registration_link || ''
    });
    setEditingId(training.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this training?')) {
      try {
        await deleteTraining(id);
        alert('Training deleted successfully!');
      } catch (error) {
        console.error('Error deleting training:', error);
        alert('Error deleting training. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button onClick={() => navigate('/admin/dashboard')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold">Manage Training Sessions</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Training
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? 'Edit Training' : 'Add New Training'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Training Title</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Enter training title"
                      required
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Enter training description"
                      rows={3}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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
                      <Label>Time</Label>
                      <Input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Training location"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Instructor</Label>
                      <Input
                        value={formData.instructor}
                        onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                        placeholder="Instructor name"
                      />
                    </div>
                    <div>
                      <Label>Capacity</Label>
                      <Input
                        type="number"
                        value={formData.capacity}
                        onChange={(e) => setFormData({...formData, capacity: parseInt(e.target.value) || 0})}
                        placeholder="Max participants"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Image URL</Label>
                    <Input
                      value={formData.image_url}
                      onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <Label>Registration Link</Label>
                    <Input
                      value={formData.registration_link}
                      onChange={(e) => setFormData({...formData, registration_link: e.target.value})}
                      placeholder="https://forms.google.com/..."
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingId ? 'Update' : 'Add'} Training
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Training List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Training Sessions ({trainingData.length})</h2>
            <div className="max-h-96 overflow-y-auto space-y-4">
              {trainingData.map((training) => (
                <Card key={training.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-2">{training.title}</h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{training.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="w-3 h-3 mr-1" />
                            {training.date} {training.time && `at ${training.time}`}
                          </div>
                          {training.location && (
                            <div className="flex items-center text-xs text-gray-500">
                              <MapPin className="w-3 h-3 mr-1" />
                              {training.location}
                            </div>
                          )}
                          {training.capacity && (
                            <div className="flex items-center text-xs text-gray-500">
                              <Users className="w-3 h-3 mr-1" />
                              Max {training.capacity} participants
                            </div>
                          )}
                          {training.instructor && (
                            <div className="text-xs text-gray-500">
                              Instructor: {training.instructor}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(training)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(training.id)}>
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

export default AdminTrainings;
