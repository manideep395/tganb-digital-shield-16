
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Eye, Trash2, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { DrugReport } from '../data/drugReportsData';

const AdminDrugReports = () => {
  const { isAuthenticated, drugReports, updateDrugReportStatus, deleteDrugReport } = useAdmin();
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState<DrugReport | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const filteredReports = drugReports.filter(report => 
    statusFilter === 'all' || report.status === statusFilter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'reviewed':
        return <AlertCircle className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
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
            <h1 className="text-2xl font-bold">Drug Reports Management</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reports</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reports List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">
              Reports ({filteredReports.length})
            </h2>
            {filteredReports.map((report) => (
              <Card key={report.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getStatusColor(report.status)}>
                          {getStatusIcon(report.status)}
                          <span className="ml-1 capitalize">{report.status}</span>
                        </Badge>
                        <Badge variant="outline">
                          {report.reportType.replace('_', ' ').toUpperCase()}
                        </Badge>
                        {report.isAnonymous && (
                          <Badge variant="secondary">Anonymous</Badge>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Report #{report.id}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Location: {report.locationIncident}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        {report.detailedDescription.substring(0, 100)}...
                      </p>
                      <p className="text-xs text-gray-500">
                        Submitted: {new Date(report.submittedAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => setSelectedReport(report)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        onClick={() => deleteDrugReport(report.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Select
                      value={report.status}
                      onValueChange={(value) => updateDrugReportStatus(report.id, value as DrugReport['status'])}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="reviewed">Reviewed</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Report Details */}
          <div className="space-y-4">
            {selectedReport ? (
              <Card>
                <CardHeader>
                  <CardTitle>Report Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Report ID</h4>
                    <p className="text-sm text-gray-600">#{selectedReport.id}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Type</h4>
                    <p className="text-sm text-gray-600 capitalize">
                      {selectedReport.reportType.replace('_', ' ')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-gray-600">{selectedReport.locationIncident}</p>
                  </div>
                  {selectedReport.incidentDateTime && (
                    <div>
                      <h4 className="font-semibold">Incident Date & Time</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(selectedReport.incidentDateTime).toLocaleString()}
                      </p>
                    </div>
                  )}
                  {selectedReport.dateUnknown && (
                    <div>
                      <Badge variant="outline">Date/Time Unknown</Badge>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">Description</h4>
                    <p className="text-sm text-gray-600">{selectedReport.detailedDescription}</p>
                  </div>
                  {!selectedReport.isAnonymous && (
                    <div>
                      <h4 className="font-semibold">Reporter Details</h4>
                      <p className="text-sm text-gray-600">
                        Name: {selectedReport.reporterName}<br />
                        Email: {selectedReport.reporterEmail}<br />
                        Phone: {selectedReport.reporterPhone}
                      </p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">Submitted</h4>
                    <p className="text-sm text-gray-600">
                      {new Date(selectedReport.submittedAt).toLocaleString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center text-gray-500">
                  Select a report to view details
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDrugReports;
