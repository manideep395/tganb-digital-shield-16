
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Eye, Trash2, Clock, CheckCircle, AlertCircle, Search, Filter, Download } from 'lucide-react';
import { DrugReport } from '../data/drugReportsData';

const AdminDrugReports = () => {
  const { isAuthenticated, drugReports, updateDrugReportStatus, deleteDrugReport } = useAdmin();
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState<DrugReport | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  console.log('All drug reports:', drugReports);

  const filteredReports = drugReports.filter(report => {
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    const matchesSearch = searchTerm === '' || 
      report.locationIncident.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.detailedDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reportType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (report.reporterName && report.reporterName.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-3 h-3" />;
      case 'reviewed':
        return <AlertCircle className="w-3 h-3" />;
      case 'resolved':
        return <CheckCircle className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  const handleDeleteReport = (id: string) => {
    if (confirm('Are you sure you want to delete this report? This action cannot be undone.')) {
      deleteDrugReport(id);
      if (selectedReport?.id === id) {
        setSelectedReport(null);
      }
      alert('Report deleted successfully!');
    }
  };

  const exportReports = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "ID,Type,Location,Status,Date,Description,Reporter\n" +
      filteredReports.map(report => 
        `${report.id},"${report.reportType}","${report.locationIncident}","${report.status}","${new Date(report.submittedAt).toLocaleDateString()}","${report.detailedDescription.replace(/"/g, '""')}","${report.isAnonymous ? 'Anonymous' : report.reporterName || 'N/A'}"`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `drug_reports_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const statusCounts = {
    all: drugReports.length,
    pending: drugReports.filter(r => r.status === 'pending').length,
    reviewed: drugReports.filter(r => r.status === 'reviewed').length,
    resolved: drugReports.filter(r => r.status === 'resolved').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button onClick={() => navigate('/admin/dashboard')} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Drug Reports Management</h1>
                <p className="text-sm text-gray-500">{filteredReports.length} reports found</p>
              </div>
            </div>
            <Button onClick={exportReports} size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(statusCounts).map(([status, count]) => (
            <Card key={status} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 capitalize">
                      {status === 'all' ? 'Total Reports' : `${status} Reports`}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{count}</p>
                  </div>
                  <div className={`p-2 rounded-full ${status === 'all' ? 'bg-gray-100' : 
                    status === 'pending' ? 'bg-yellow-100' :
                    status === 'reviewed' ? 'bg-blue-100' : 'bg-green-100'}`}>
                    {getStatusIcon(status === 'all' ? 'pending' : status)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Filters & Reports List */}
          <div className="lg:col-span-2 space-y-4">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search reports by location, description, type..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="sm:w-48">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status ({statusCounts.all})</SelectItem>
                        <SelectItem value="pending">Pending ({statusCounts.pending})</SelectItem>
                        <SelectItem value="reviewed">Reviewed ({statusCounts.reviewed})</SelectItem>
                        <SelectItem value="resolved">Resolved ({statusCounts.resolved})</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reports List */}
            <div className="space-y-3">
              {filteredReports.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center text-gray-500">
                    <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium mb-2">No reports found</p>
                    <p className="text-sm">Try adjusting your search criteria or filters.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredReports.map((report) => (
                  <Card key={report.id} className={`hover:shadow-lg transition-all cursor-pointer ${
                    selectedReport?.id === report.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`} onClick={() => setSelectedReport(report)}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-2">
                          <Badge className={`${getStatusColor(report.status)} border`}>
                            {getStatusIcon(report.status)}
                            <span className="ml-1 capitalize text-xs font-medium">{report.status}</span>
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {report.reportType.replace('_', ' ').toUpperCase()}
                          </Badge>
                          {report.isAnonymous && (
                            <Badge variant="secondary" className="text-xs">Anonymous</Badge>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={(e) => {e.stopPropagation(); setSelectedReport(report);}}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive" 
                            onClick={(e) => {e.stopPropagation(); handleDeleteReport(report.id);}}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          Report #{report.id} - {report.locationIncident}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {report.detailedDescription}
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>
                            {report.incidentDateTime ? 
                              `Incident: ${new Date(report.incidentDateTime).toLocaleDateString()}` :
                              'Date Unknown'
                            }
                          </span>
                          <span>Submitted: {new Date(report.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <Select
                          value={report.status}
                          onValueChange={(value) => {
                            updateDrugReportStatus(report.id, value as DrugReport['status']);
                          }}
                        >
                          <SelectTrigger className="w-32 h-8">
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
                ))
              )}
            </div>
          </div>

          {/* Report Details */}
          <div className="space-y-4">
            {selectedReport ? (
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Report Details</span>
                    <Badge className={getStatusColor(selectedReport.status)}>
                      {getStatusIcon(selectedReport.status)}
                      <span className="ml-1 capitalize">{selectedReport.status}</span>
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Report ID</h4>
                      <p className="text-sm text-gray-900">#{selectedReport.id}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Report Type</h4>
                      <p className="text-sm text-gray-900 capitalize">
                        {selectedReport.reportType.replace('_', ' ')}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Location</h4>
                      <p className="text-sm text-gray-900">{selectedReport.locationIncident}</p>
                    </div>
                    
                    {selectedReport.incidentDateTime && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700">Incident Date & Time</h4>
                        <p className="text-sm text-gray-900">
                          {new Date(selectedReport.incidentDateTime).toLocaleString()}
                        </p>
                      </div>
                    )}
                    
                    {selectedReport.dateUnknown && (
                      <div>
                        <Badge variant="outline" className="text-xs">Date/Time Unknown</Badge>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Description</h4>
                      <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedReport.detailedDescription}</p>
                    </div>
                    
                    {!selectedReport.isAnonymous && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700">Reporter Details</h4>
                        <div className="text-sm text-gray-900 space-y-1">
                          <p><strong>Name:</strong> {selectedReport.reporterName}</p>
                          <p><strong>Email:</strong> {selectedReport.reporterEmail}</p>
                          <p><strong>Phone:</strong> {selectedReport.reporterPhone}</p>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">Submitted</h4>
                      <p className="text-sm text-gray-900">
                        {new Date(selectedReport.submittedAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center text-gray-500">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="font-medium">Select a report to view details</p>
                  <p className="text-sm">Click on any report from the list to see more information</p>
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
