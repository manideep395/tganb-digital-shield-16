
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Eye, Calendar, MapPin, AlertTriangle, CheckCircle, Clock, FileText, Phone, Mail, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';

interface DrugReport {
  id: string;
  report_type: string;
  location_incident: string;
  detailed_description: string;
  reporter_name?: string;
  reporter_email?: string;
  reporter_phone?: string;
  incident_date_time?: string;
  date_unknown?: boolean;
  is_anonymous: boolean;
  evidence_file_url?: string;
  evidence_file_name?: string;
  status: string;
  reviewed_by?: string;
  reviewer_notes?: string;
  created_at: string;
  updated_at: string;
}

const AdminDrugReports = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [reports, setReports] = useState<DrugReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<DrugReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewerNotes, setReviewerNotes] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }
    
    fetchReports();
  }, [isAdmin, navigate]);

  const fetchReports = async () => {
    try {
      setIsLoading(true);
      console.log('Fetching drug reports...');
      
      const { data, error } = await supabase
        .from('drug_reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reports:', error);
      } else {
        console.log('Fetched reports:', data);
        setReports(data || []);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateReportStatus = async (reportId: string, status: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('drug_reports')
        .update({
          status,
          reviewer_notes: notes,
          reviewed_by: 'Admin',
          updated_at: new Date().toISOString()
        })
        .eq('id', reportId);

      if (error) {
        console.error('Error updating report:', error);
        return false;
      }

      await fetchReports();
      setSelectedReport(null);
      setReviewerNotes('');
      setSelectedStatus('');
      return true;
    } catch (error) {
      console.error('Error updating report:', error);
      return false;
    }
  };

  const handleReportClick = (report: DrugReport) => {
    setSelectedReport(report);
    setReviewerNotes(report.reviewer_notes || '');
    setSelectedStatus(report.status);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in_progress':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'reviewed':
        return <Eye className="w-4 h-4" />;
      case 'in_progress':
        return <AlertTriangle className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading drug reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <Button onClick={() => navigate('/admin/dashboard')} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl md:text-2xl font-bold">Drug Reports Management</h1>
          </div>
          <div className="text-sm text-gray-600">
            Total Reports: <span className="font-semibold">{reports.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Reports List */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">Recent Reports</h2>
            <div className="max-h-[70vh] overflow-y-auto space-y-3">
              {reports.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center text-gray-500">
                    No drug reports found.
                  </CardContent>
                </Card>
              ) : (
                reports.map((report) => (
                  <Card 
                    key={report.id} 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedReport?.id === report.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => handleReportClick(report)}
                  >
                    <CardContent className="p-3 md:p-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${getStatusColor(report.status)} flex items-center gap-1`}>
                            {getStatusIcon(report.status)}
                            {report.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {report.report_type}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {formatDate(report.created_at)}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-900 line-clamp-1">
                            {report.location_incident}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {report.detailed_description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            {!report.is_anonymous && report.reporter_name && (
                              <span className="flex items-center">
                                <User className="w-3 h-3 mr-1" />
                                {report.reporter_name}
                              </span>
                            )}
                            {report.is_anonymous && (
                              <span className="text-orange-600 font-medium">Anonymous Report</span>
                            )}
                          </div>
                          {report.evidence_file_url && (
                            <span className="text-xs text-blue-600 flex items-center">
                              <FileText className="w-3 h-3 mr-1" />
                              Evidence
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Report Details */}
          <div>
            {selectedReport ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl flex items-center justify-between">
                    <span>Report Details</span>
                    <Badge className={`${getStatusColor(selectedReport.status)} flex items-center gap-1`}>
                      {getStatusIcon(selectedReport.status)}
                      {selectedReport.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Report Type</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded mt-1">
                        {selectedReport.report_type}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Submitted</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded mt-1">
                        {formatDate(selectedReport.created_at)}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">Incident Location</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded mt-1">
                      {selectedReport.location_incident}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">Detailed Description</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded mt-1 leading-relaxed">
                      {selectedReport.detailed_description}
                    </p>
                  </div>

                  {/* Incident Date/Time */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">Incident Date & Time</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded mt-1">
                      {selectedReport.date_unknown 
                        ? 'Date/Time Unknown' 
                        : selectedReport.incident_date_time 
                          ? formatDate(selectedReport.incident_date_time)
                          : 'Not specified'
                      }
                    </p>
                  </div>

                  {/* Reporter Information */}
                  {!selectedReport.is_anonymous && (
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Reporter Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedReport.reporter_name && (
                          <div>
                            <label className="text-xs text-gray-600 flex items-center">
                              <User className="w-3 h-3 mr-1" />
                              Name
                            </label>
                            <p className="text-sm text-gray-900">{selectedReport.reporter_name}</p>
                          </div>
                        )}
                        {selectedReport.reporter_email && (
                          <div>
                            <label className="text-xs text-gray-600 flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              Email
                            </label>
                            <p className="text-sm text-gray-900">{selectedReport.reporter_email}</p>
                          </div>
                        )}
                        {selectedReport.reporter_phone && (
                          <div>
                            <label className="text-xs text-gray-600 flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              Phone
                            </label>
                            <p className="text-sm text-gray-900">{selectedReport.reporter_phone}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedReport.is_anonymous && (
                    <div className="border-t pt-4">
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                        <p className="text-sm text-orange-800 font-medium">
                          ⚠️ This is an anonymous report - no reporter contact information available.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Evidence */}
                  {selectedReport.evidence_file_url && (
                    <div className="border-t pt-4">
                      <label className="text-sm font-medium text-gray-700">Evidence File</label>
                      <div className="mt-2">
                        <a 
                          href={selectedReport.evidence_file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <FileText className="w-4 h-4" />
                          <span>{selectedReport.evidence_file_name || 'View Evidence'}</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Status Update */}
                  <div className="border-t pt-4 space-y-4">
                    <h4 className="text-sm font-medium text-gray-700">Update Status</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Status</label>
                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="reviewed">Reviewed</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Reviewer Notes</label>
                      <Textarea
                        value={reviewerNotes}
                        onChange={(e) => setReviewerNotes(e.target.value)}
                        placeholder="Add your notes about this report..."
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      onClick={() => updateReportStatus(selectedReport.id, selectedStatus, reviewerNotes)}
                      disabled={!selectedStatus}
                      className="w-full"
                    >
                      Update Report Status
                    </Button>
                  </div>

                  {/* Previous Review */}
                  {selectedReport.reviewer_notes && (
                    <div className="border-t pt-4">
                      <label className="text-sm font-medium text-gray-700">Previous Review Notes</label>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded mt-1">
                        {selectedReport.reviewer_notes}
                      </p>
                      {selectedReport.reviewed_by && (
                        <p className="text-xs text-gray-500 mt-1">
                          Reviewed by: {selectedReport.reviewed_by}
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center text-gray-500">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Select a report from the list to view details</p>
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
