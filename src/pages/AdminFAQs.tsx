
import { useState } from 'react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';
import { FAQItem } from '@/hooks/useContentData';
import { useAuth } from '@/contexts/AuthContext';

const AdminFAQs = () => {
  const { isAdmin } = useAuth();
  const { faqsData, addFAQ, updateFAQ, deleteFAQ, isLoading } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<FAQItem, 'id'>>({
    question: '',
    answer: '',
    category: 'General'
  });

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateFAQ(editingId, formData);
      } else {
        await addFAQ(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving FAQ:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      question: '',
      answer: '',
      category: 'General'
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (faq: FAQItem) => {
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category
    });
    setEditingId(faq.id);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this FAQ?')) {
      try {
        await deleteFAQ(id);
      } catch (error) {
        console.error('Error deleting FAQ:', error);
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
            <h1 className="text-2xl font-bold">Manage FAQs</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add FAQ
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle>{editingId ? 'Edit FAQ' : 'Add New FAQ'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Question</Label>
                    <Input
                      value={formData.question}
                      onChange={(e) => setFormData({...formData, question: e.target.value})}
                      placeholder="Enter the question"
                      required
                    />
                  </div>
                  <div>
                    <Label>Answer</Label>
                    <Textarea
                      value={formData.answer}
                      onChange={(e) => setFormData({...formData, answer: e.target.value})}
                      placeholder="Enter the answer"
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Input
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      placeholder="e.g., General, Legal, Drugs, etc."
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button type="submit">
                      {editingId ? 'Update' : 'Add'} FAQ
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* FAQs List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Existing FAQs ({faqsData.length})</h2>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {faqsData.map((faq) => (
                <Card key={faq.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{faq.question}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2">{faq.answer}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => handleEdit(faq)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(faq.id)}>
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

export default AdminFAQs;
