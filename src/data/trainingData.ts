
export interface TrainingSession {
  id: number;
  name: string;
  date: string;
  place: string;
  nominatedOfficers: string;
  photo?: string;
}

export const trainingData: TrainingSession[] = [
  {
    id: 1,
    name: '3-day course on "Financial Investigation on NDPS Act cases and Case Laws on Narcotics"',
    date: '14.09.2023 to 16.09.2023',
    place: '(Offline) Dr. MCR HRD Institute, Jubilee Hills, Hyderabad',
    nominatedOfficers: 'All TSNAB officers',
    photo: '/placeholder-training-1.jpg'
  },
  {
    id: 2,
    name: 'Training on registration of FIR on NDPS cases, Confession-cum-seizure panchanama and overview on NDPS Act, 1985 etc.',
    date: '30.12.2023',
    place: 'Mini-Conference Hall, Ground Floor, Tower-D, TSPICCC, Hyd.',
    nominatedOfficers: 'All TSNAB officers',
    photo: '/placeholder-training-2.jpg'
  },
  {
    id: 3,
    name: '1-Day training course on NDPS Act & Narcotics related topics for the month of Jan-2024 to all the units of TS',
    date: '04.01.2024 to 31.01.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: '80-125 members everyday',
    photo: '/placeholder-training-3.jpg'
  },
  {
    id: 4,
    name: '1-Day training course on NDPS Act & Investigation process to CCRB, SCRB & JRMS & CMS and Nodal Officers',
    date: '09.01.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: '180 members',
    photo: '/placeholder-training-4.jpg'
  },
  {
    id: 5,
    name: 'Half Day training course on Chapter V(A) of NDPS Act (forfeiture of Illegally acquired property)',
    date: '12.01.2024',
    place: 'Offline/Online Mini Conference Hall, ICCC',
    nominatedOfficers: 'All unit Officers',
    photo: '/placeholder-training-5.jpg'
  },
  {
    id: 6,
    name: 'Half Day training course on NDPS and its related topics',
    date: '17.01.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: 'All unit Officers',
    photo: '/placeholder-training-6.jpg'
  },
  {
    id: 7,
    name: 'One day training on NDPS and its related topics',
    date: '27.02.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: 'Mahabubnagar, Wanaparthy, Narayanpet and Excise',
    photo: '/placeholder-training-7.jpg'
  },
  {
    id: 8,
    name: 'One day training on NDPS and its related topics',
    date: '28.02.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: 'Nalgonda, Cyberabad, Medak and Excise',
    photo: '/placeholder-training-8.jpg'
  },
  {
    id: 9,
    name: 'NDPS Act and its related topics, Bail oppose, etc.',
    date: '02.03.2024',
    place: 'Auditorium, ICCC',
    nominatedOfficers: 'ONE DAY TRAINING To all units including Excise and Railway Police Court PCs, Writers, I.O. & Addl. PPs',
    photo: '/placeholder-training-9.jpg'
  },
  {
    id: 10,
    name: 'One day training on NDPS and its related topics',
    date: '05.03.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: 'KHAMMAM, JAGATIAL, RAMAGUNDAM, MAHABUBABAD, RAJANNA SIRCILLA AND PROHIBITION & EXCISE DEPT.',
    photo: '/placeholder-training-10.jpg'
  },
  {
    id: 11,
    name: 'One day training on NDPS and its related topics',
    date: '06.03.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: 'CYBERABAD, SURYAPET, SANGAREDDY AND PROHIBITION & EXCISE DEPT.',
    photo: '/placeholder-training-11.jpg'
  },
  {
    id: 12,
    name: 'One day training on 25 mandatory templates for perfection in Investigation of NDPS cases',
    date: '03.04.2024 to 10.04.2024',
    place: 'Offline Mini Conference Hall, ICCC',
    nominatedOfficers: 'All Units of Telangana State',
    photo: '/placeholder-training-12.jpg'
  }
];
