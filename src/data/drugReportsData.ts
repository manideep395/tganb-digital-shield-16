
export interface DrugReport {
  id: string;
  reportType: string;
  isAnonymous: boolean;
  reporterName?: string;
  reporterEmail?: string;
  reporterPhone?: string;
  locationIncident: string;
  incidentDateTime?: string;
  dateUnknown: boolean;
  detailedDescription: string;
  evidenceFileName?: string;
  status: 'pending' | 'reviewed' | 'resolved';
  submittedAt: string;
}

export const drugReportsData: DrugReport[] = [
  {
    id: '1',
    reportType: 'drug_trafficking',
    isAnonymous: true,
    locationIncident: 'Hyderabad',
    dateUnknown: false,
    incidentDateTime: '2024-01-15T14:30:00',
    detailedDescription: 'Suspicious drug trafficking activity observed near main market area',
    status: 'pending',
    submittedAt: '2024-01-15T15:00:00'
  },
  {
    id: '2',
    reportType: 'suspicious_activity',
    isAnonymous: false,
    reporterName: 'John Doe',
    reporterEmail: 'john@example.com',
    reporterPhone: '9876543210',
    locationIncident: 'Warangal',
    dateUnknown: true,
    detailedDescription: 'Strange behavior and frequent visitors at a residential property',
    status: 'reviewed',
    submittedAt: '2024-01-14T10:20:00'
  }
];
