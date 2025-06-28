
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';
import { TrainingSession } from '../data/trainingData';

const AdminTrainings = () => {
  const { isAuthenticated, trainingData, addTraining, updateTraining, deleteTraining } = useAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<TrainingSession>({
    id: 0,
    title: '',
    description: '',
    date: '',
    duration: '',
    participants: 0,
    location: '',
    status: 'Upcoming'
  });

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const getTrainingStatus = (dateString: string): 'Upcoming' | 'Completed' | 'On Going' => {
    const trainingDate = new Date(dateString);
    const today = new Date();
    const daysDiff = Math.floor((trainingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDiff > 0) return 'Upcoming';
    if (daysDiff === 0) return 'On Going';
    return 'Completed';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trainingWithStatus = {
      ...formData,
      status: getTrainingStatus(formData.date)
    };
    
    if (editingIndex !== null) {
      updateTraining(editingIndex, trainingWithStatus);
    } else {
      addTraining(trainingWithStatus);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: 0,
      title: '',
      description: '',
      date: '',
      duration: '',
      participants: 0,
      location: '',
      status: 'Upcoming'
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setFormData(trainingData[index]);
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
            <h1 className="text-2xl font-bold">Manage Trainings</h1>
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
                <CardTitle>{editingIndex !== null ? 'Edit Training' : 'Add New Training'}</CardTitle>
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
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      required
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
                    <Label>Duration</Label>
                    <Input
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="e.g., 3 days, 5 hours"
                      required
                    />
                  </div>
                  <div>
                    <Label>Number of Participants</Label>
                    <Input
                      type="number"
                      value={formData.participants}
                      onChange={(e) => setFormData({...formData, participants: parseInt(e.target.value)})}
                      required
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingIndex !== null ? 'Update' : 'Add'} Training
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Trainings List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Existing Trainings ({trainingData.length})</h2>
            {trainingData.map((training, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{training.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{training.description.substring(0, 100)}...</p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div>Date: {training.date}</div>
                        <div>Duration: {training.duration}</div>
                        <div>Location: {training.location}</div>
                        <div>Participants: {training.participants}</div>
                        <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                          training.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                          training.status === 'Completed' ? 'bg-green-100 text-green-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {training.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(index)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => deleteTraining(index)}>
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

export default AdminTrainings;
