
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Eye, FileText, MapPin, Calendar, User, AlertTriangle } from 'lucide-react';
import { useDatabaseAdmin } from '@/contexts/DatabaseAdminContext';

const AdminDrugReports = () => {
  const { drugReports } = useDatabaseAdmin();
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState<any>(null);

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reports List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Reports ({drugReports.length})</h2>
              <div className="flex space-x-2">
                <Badge variant="outline" className="bg-yellow-50">
                  Pending: {drugReports.filter(r => r.status === 'pending').length}
                </Badge>
                <Badge variant="outline" className="bg-blue-50">
                  Reviewed: {drugReports.filter(r => r.status === 'reviewed').length}
                </Badge>
                <Badge variant="outline" className="bg-green-50">
                  Resolved: {drugReports.filter(r => r.status === 'resolved').length}
                </Badge>
              </div>
            </div>
            
            <div className="max-h-96 overflow-y-auto space-y-3">
              {drugReports.map((report) => (
                <Card key={report.id} className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedReport(report)}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex space-x-2">
                        <Badge className={getReportTypeColor(report.report_type)}>
                          {report.report_type}
                        </Badge>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        {report.is_anonymous && (
                          <Badge variant="outline">Anonymous</Badge>
                        )}
                      </div>
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {report.detailed_description}
                    </p>
                    
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {report.location_incident}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(report.created_at).toLocaleDateString()}
                      </div>
                      {!report.is_anonymous && report.reporter_name && (
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {report.reporter_name}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Report Details */}
          <div className="space-y-4">
            {selectedReport ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Report Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex space-x-2 mb-2">
                      <Badge className={getReportTypeColor(selectedReport.report_type)}>
                        {selectedReport.report_type}
                      </Badge>
                      <Badge className={getStatusColor(selectedReport.status)}>
                        {selectedReport.status}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-1">Description</h4>
                    <p className="text-sm text-gray-600">{selectedReport.detailed_description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-1">Location</h4>
                    <p className="text-sm text-gray-600">{selectedReport.location_incident}</p>
                  </div>

                  {selectedReport.incident_date_time && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Incident Date/Time</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(selectedReport.incident_date_time).toLocaleString()}
                      </p>
                    </div>
                  )}

                  {!selectedReport.is_anonymous && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Reporter Information</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        {selectedReport.reporter_name && <p>Name: {selectedReport.reporter_name}</p>}
                        {selectedReport.reporter_email && <p>Email: {selectedReport.reporter_email}</p>}
                        {selectedReport.reporter_phone && <p>Phone: {selectedReport.reporter_phone}</p>}
                      </div>
                    </div>
                  )}

                  {selectedReport.evidence_file_url && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Evidence</h4>
                      <a 
                        href={selectedReport.evidence_file_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {selectedReport.evidence_file_name || 'View Evidence'}
                      </a>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-sm mb-1">Submitted</h4>
                    <p className="text-sm text-gray-600">
                      {new Date(selectedReport.created_at).toLocaleString()}
                    </p>
                  </div>

                  {selectedReport.reviewer_notes && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Reviewer Notes</h4>
                      <p className="text-sm text-gray-600">{selectedReport.reviewer_notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Select a report to view details</p>
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
