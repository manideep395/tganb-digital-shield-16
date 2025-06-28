
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';
import { Achievement } from '../data/achievementsData';

const AdminAchievements = () => {
  const { isAuthenticated, achievementsData, addAchievement, updateAchievement, deleteAchievement } = useAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Achievement>({
    title: '',
    description: '',
    crNumber: '',
    offenders: [{ serialNumber: 1, name: '' }]
  });

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      updateAchievement(editingIndex, formData);
    } else {
      addAchievement(formData);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      crNumber: '',
      offenders: [{ serialNumber: 1, name: '' }]
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleEdit = (index: number) => {
    setFormData(achievementsData[index]);
    setEditingIndex(index);
    setIsEditing(true);
  };

  const addOffender = () => {
    setFormData({
      ...formData,
      offenders: [...formData.offenders, { serialNumber: formData.offenders.length + 1, name: '' }]
    });
  };

  const removeOffender = (index: number) => {
    setFormData({
      ...formData,
      offenders: formData.offenders.filter((_, i) => i !== index)
    });
  };

  const updateOffender = (index: number, name: string) => {
    const updatedOffenders = [...formData.offenders];
    updatedOffenders[index] = { ...updatedOffenders[index], name };
    setFormData({ ...formData, offenders: updatedOffenders });
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
                <CardTitle>{editingIndex !== null ? 'Edit Achievement' : 'Add New Achievement'}</CardTitle>
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
                    <Label>CR Number</Label>
                    <Input
                      value={formData.crNumber}
                      onChange={(e) => setFormData({...formData, crNumber: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label>Image Link (Optional)</Label>
                    <Input
                      value={formData.imageLink || ''}
                      onChange={(e) => setFormData({...formData, imageLink: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Offenders</Label>
                    {formData.offenders.map((offender, index) => (
                      <div key={index} className="flex items-center space-x-2 mb-2">
                        <Input
                          placeholder={`Offender ${index + 1} name`}
                          value={offender.name}
                          onChange={(e) => updateOffender(index, e.target.value)}
                          required
                        />
                        {formData.offenders.length > 1 && (
                          <Button type="button" variant="destructive" size="sm" onClick={() => removeOffender(index)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button type="button" variant="outline" onClick={addOffender}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Offender
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingIndex !== null ? 'Update' : 'Add'} Achievement
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
            {achievementsData.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description.substring(0, 100)}...</p>
                      <div className="text-xs text-gray-500">
                        <div>CR Number: {achievement.crNumber}</div>
                        <div>Offenders: {achievement.offenders.length}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(index)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => deleteAchievement(index)}>
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

export default AdminAchievements;
