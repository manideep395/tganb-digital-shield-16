
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Eye, FileText, MapPin, Calendar, User, AlertTriangle, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface DrugReport {
  id: string;
  report_type: string;
  location_incident: string;
  detailed_description: string;
  incident_date_time?: string;
  reporter_name?: string;
  reporter_email?: string;
  reporter_phone?: string;
  evidence_file_url?: string;
  evidence_file_name?: string;
  status: string;
  reviewer_notes?: string;
  is_anonymous: boolean;
  created_at: string;
}

const AdminDrugReports = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [drugReports, setDrugReports] = useState<DrugReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<DrugReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
    }
  }, [isAdmin, navigate]);

  // Fetch drug reports from database
  const fetchDrugReports = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('drug_reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching drug reports:', error);
        setError('Failed to fetch drug reports: ' + error.message);
        return;
      }

      console.log('Fetched drug reports:', data);
      setDrugReports(data || []);
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred while fetching reports');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDrugReports();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReportTypeColor = (type: string) => {
    switch (type) {
      case 'Drug Sale': return 'bg-red-100 text-red-800';
      case 'Drug Manufacturing': return 'bg-orange-100 text-orange-800';
      case 'Drug Trafficking': return 'bg-purple-100 text-purple-800';
      case 'Drug Abuse': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <Button onClick={() => navigate('/admin/dashboard')} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl md:text-2xl font-bold">Drug Reports Management</h1>
          </div>
          <Button onClick={fetchDrugReports} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-800 text-sm md:text-base">{error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Reports List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-lg md:text-xl font-semibold">
                Reports ({isLoading ? '...' : drugReports.length})
              </h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-yellow-50 text-xs md:text-sm">
                  Pending: {drugReports.filter(r => r.status === 'pending').length}
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-xs md:text-sm">
                  Reviewed: {drugReports.filter(r => r.status === 'reviewed').length}
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-xs md:text-sm">
                  Resolved: {drugReports.filter(r => r.status === 'resolved').length}
                </Badge>
              </div>
            </div>
            
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-24 md:h-32 rounded-lg"></div>
                ))}
              </div>
            ) : drugReports.length === 0 ? (
              <Card>
                <CardContent className="p-6 md:p-8 text-center">
                  <AlertTriangle className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm md:text-base">No drug reports found</p>
                  <p className="text-gray-400 text-xs md:text-sm mt-2">Reports will appear here when submitted by users</p>
                </CardContent>
              </Card>
            ) : (
              <div className="max-h-96 overflow-y-auto space-y-3">
                {drugReports.map((report) => (
                  <Card key={report.id} className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedReport(report)}>
                    <CardContent className="p-3 md:p-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                        <div className="flex flex-wrap gap-2">
                          <Badge className={`${getReportTypeColor(report.report_type)} text-xs`}>
                            {report.report_type}
                          </Badge>
                          <Badge className={`${getStatusColor(report.status)} text-xs`}>
                            {report.status}
                          </Badge>
                          {report.is_anonymous && (
                            <Badge variant="outline" className="text-xs">Anonymous</Badge>
                          )}
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">
                        {report.detailed_description}
                      </p>
                      
                      <div className="space-y-1 text-xs text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{report.location_incident}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                          {new Date(report.created_at).toLocaleDateString()}
                        </div>
                        {!report.is_anonymous && report.reporter_name && (
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{report.reporter_name}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Report Details */}
          <div className="space-y-4">
            {selectedReport ? (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-base md:text-lg">
                    <FileText className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Report Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4 text-sm">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className={`${getReportTypeColor(selectedReport.report_type)} text-xs`}>
                        {selectedReport.report_type}
                      </Badge>
                      <Badge className={`${getStatusColor(selectedReport.status)} text-xs`}>
                        {selectedReport.status}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs md:text-sm mb-1">Description</h4>
                    <p className="text-xs md:text-sm text-gray-600 break-words">{selectedReport.detailed_description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs md:text-sm mb-1">Location</h4>
                    <p className="text-xs md:text-sm text-gray-600 break-words">{selectedReport.location_incident}</p>
                  </div>

                  {selectedReport.incident_date_time && (
                    <div>
                      <h4 className="font-semibold text-xs md:text-sm mb-1">Incident Date/Time</h4>
                      <p className="text-xs md:text-sm text-gray-600">
                        {new Date(selectedReport.incident_date_time).toLocaleString()}
                      </p>
                    </div>
                  )}

                  {!selectedReport.is_anonymous && (
                    <div>
                      <h4 className="font-semibold text-xs md:text-sm mb-1">Reporter Information</h4>
                      <div className="space-y-1 text-xs md:text-sm text-gray-600">
                        {selectedReport.reporter_name && <p className="break-words">Name: {selectedReport.reporter_name}</p>}
                        {selectedReport.reporter_email && <p className="break-words">Email: {selectedReport.reporter_email}</p>}
                        {selectedReport.reporter_phone && <p className="break-words">Phone: {selectedReport.reporter_phone}</p>}
                      </div>
                    </div>
                  )}

                  {selectedReport.evidence_file_url && (
                    <div>
                      <h4 className="font-semibold text-xs md:text-sm mb-1">Evidence</h4>
                      <a 
                        href={selectedReport.evidence_file_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs md:text-sm break-all"
                      >
                        {selectedReport.evidence_file_name || 'View Evidence'}
                      </a>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-xs md:text-sm mb-1">Submitted</h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      {new Date(selectedReport.created_at).toLocaleString()}
                    </p>
                  </div>

                  {selectedReport.reviewer_notes && (
                    <div>
                      <h4 className="font-semibold text-xs md:text-sm mb-1">Reviewer Notes</h4>
                      <p className="text-xs md:text-sm text-gray-600 break-words">{selectedReport.reviewer_notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 md:p-8 text-center">
                  <AlertTriangle className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm md:text-base">Select a report to view details</p>
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
