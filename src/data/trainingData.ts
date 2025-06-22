
export interface TrainingSession {
  id: number;
  name: string;
  title: string;
  date: string;
  place: string;
  location: string;
  nominatedOfficers: string;
  participants: string;
  description: string;
  duration: string;
  status: 'Upcoming' | 'Completed' | 'Registration Open';
  photo?: string;
}

export const trainingData: TrainingSession[] = [
  {
    id: 1,
    name: '3-day course on "Financial Investigation on NDPS Act cases and Case Laws on Narcotics"',
    title: 'Financial Investigation on NDPS Act Cases',
    date: '14.09.2023 to 16.09.2023',
    place: '(Offline) Dr. MCR HRD Institute, Jubilee Hills, Hyderabad',
    location: 'Dr. MCR HRD Institute, Jubilee Hills, Hyderabad',
    nominatedOfficers: 'All TSNAB officers',
    participants: 'All TSNAB officers',
    description: 'Comprehensive 3-day training on financial investigation techniques for NDPS Act cases and understanding case laws related to narcotics.',
    duration: '3 days',
    status: 'Completed',
    photo: '/placeholder-training-1.jpg'
  },
  {
    id: 2,
    name: 'Training on registration of FIR on NDPS cases, Confession-cum-seizure panchanama and overview on NDPS Act, 1985 etc.',
    title: 'FIR Registration and NDPS Act Overview',
    date: '30.12.2023',
    place: 'Mini-Conference Hall, Ground Floor, Tower-D, TSPICCC, Hyd.',
    location: 'TSPICCC, Hyderabad',
    nominatedOfficers: 'All TSNAB officers',
    participants: 'All TSNAB officers',
    description: 'Training focused on proper FIR registration procedures for NDPS cases, confession-cum-seizure panchanama, and comprehensive overview of NDPS Act 1985.',
    duration: '1 day',
    status: 'Completed',
    photo: '/placeholder-training-2.jpg'
  },
  {
    id: 3,
    name: '1-Day training course on NDPS Act & Narcotics related topics for the month of Jan-2024 to all the units of TS',
    title: 'NDPS Act & Narcotics Topics Training',
    date: '04.01.2024 to 31.01.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: '80-125 members everyday',
    participants: '80-125 members daily',
    description: 'Comprehensive training program on NDPS Act and narcotics-related topics conducted throughout January 2024 for all Telangana State units.',
    duration: '1 day (multiple sessions)',
    status: 'Completed',
    photo: '/placeholder-training-3.jpg'
  },
  {
    id: 4,
    name: '1-Day training course on NDPS Act & Investigation process to CCRB, SCRB & JRMS & CMS and Nodal Officers',
    title: 'NDPS Act Investigation Process Training',
    date: '09.01.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: '180 members',
    participants: '180 members',
    description: 'Specialized training on NDPS Act and investigation processes for CCRB, SCRB, JRMS, CMS, and Nodal Officers.',
    duration: '1 day',
    status: 'Completed',
    photo: '/placeholder-training-4.jpg'
  },
  {
    id: 5,
    name: 'Half Day training course on Chapter V(A) of NDPS Act (forfeiture of Illegally acquired property)',
    title: 'NDPS Act Chapter V(A) - Property Forfeiture',
    date: '12.01.2024',
    place: 'Offline/Online Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: 'All unit Officers',
    participants: 'All unit Officers',
    description: 'Focused training on Chapter V(A) of NDPS Act covering forfeiture of illegally acquired property procedures and legal aspects.',
    duration: 'Half day',
    status: 'Completed',
    photo: '/placeholder-training-5.jpg'
  },
  {
    id: 6,
    name: 'Half Day training course on NDPS and its related topics',
    title: 'NDPS and Related Topics Training',
    date: '17.01.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: 'All unit Officers',
    participants: 'All unit Officers',
    description: 'Comprehensive half-day training covering NDPS Act and various related topics for law enforcement officers.',
    duration: 'Half day',
    status: 'Completed',
    photo: '/placeholder-training-6.jpg'
  },
  {
    id: 7,
    name: 'One day training on NDPS and its related topics',
    title: 'NDPS Training for Regional Units',
    date: '27.02.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: 'Mahabubnagar, Wanaparthy, Narayanpet and Excise',
    participants: 'Regional Officers',
    description: 'Specialized NDPS training for officers from Mahabubnagar, Wanaparthy, Narayanpet districts and Excise department.',
    duration: '1 day',
    status: 'Completed',
    photo: '/placeholder-training-7.jpg'
  },
  {
    id: 8,
    name: 'One day training on NDPS and its related topics',
    title: 'Multi-District NDPS Training',
    date: '28.02.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: 'Nalgonda, Cyberabad, Medak and Excise',
    participants: 'Multi-district Officers',
    description: 'Comprehensive NDPS training for officers from Nalgonda, Cyberabad, Medak districts and Excise department.',
    duration: '1 day',
    status: 'Completed',
    photo: '/placeholder-training-8.jpg'
  },
  {
    id: 9,
    name: 'NDPS Act and its related topics, Bail oppose, etc.',
    title: 'NDPS Act and Bail Opposition Training',
    date: '02.03.2024',
    place: 'Auditorium, ICCC',
    location: 'Auditorium, ICCC',
    nominatedOfficers: 'ONE DAY TRAINING To all units including Excise and Railway Police Court PCs, Writers, I.O. & Addl. PPs',
    participants: 'All units + Court Staff',
    description: 'Comprehensive training on NDPS Act, bail opposition procedures for all units including Excise, Railway Police, Court PCs, Writers, and Additional Public Prosecutors.',
    duration: '1 day',
    status: 'Completed',
    photo: '/placeholder-training-9.jpg'
  },
  {
    id: 10,
    name: 'One day training on NDPS and its related topics',
    title: 'Regional NDPS Training Program',
    date: '05.03.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: 'KHAMMAM, JAGATIAL, RAMAGUNDAM, MAHABUBABAD, RAJANNA SIRCILLA AND PROHIBITION & EXCISE DEPT.',
    participants: 'Regional Officers',
    description: 'Specialized training for officers from Khammam, Jagatial, Ramagundam, Mahabubabad, Rajanna Sircilla districts and Prohibition & Excise Department.',
    duration: '1 day',
    status: 'Completed',
    photo: '/placeholder-training-10.jpg'
  },
  {
    id: 11,
    name: 'One day training on NDPS and its related topics',
    title: 'District-wise NDPS Training',
    date: '06.03.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: 'CYBERABAD, SURYAPET, SANGAREDDY AND PROHIBITION & EXCISE DEPT.',
    participants: 'District Officers',
    description: 'Focused training for officers from Cyberabad, Suryapet, Sangareddy districts and Prohibition & Excise Department.',
    duration: '1 day',
    status: 'Completed',
    photo: '/placeholder-training-11.jpg'
  },
  {
    id: 12,
    name: 'One day training on 25 mandatory templates for perfection in Investigation of NDPS cases',
    title: '25 Mandatory Templates for NDPS Investigation',
    date: '03.04.2024 to 10.04.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    location: 'Mini Conference Hall, ICCC',
    nominatedOfficers: 'All Units of Telangana State',
    participants: 'All Units of TS',
    description: 'Intensive training program on 25 mandatory templates required for perfect investigation of NDPS cases across all units of Telangana State.',
    duration: '8 days',
    status: 'Completed',
    photo: '/placeholder-training-12.jpg'
  }
];
