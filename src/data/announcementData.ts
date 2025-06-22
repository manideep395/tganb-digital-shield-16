
export interface AnnouncementItem {
  date: string;
  name: string;
  attachmentLink?: string;
  description?: string;
}

export const announcementData: AnnouncementItem[] = [
  {
    date: "Dec 20, 2024",
    name: "Registration open for Anti-Drug Awareness Certificate Program",
    attachmentLink: "https://drive.google.com/file/d/example1/view",
    description: "Join our comprehensive certificate program to become an anti-drug awareness ambassador"
  },
  {
    date: "Dec 18, 2024",
    name: "New helpline numbers activated for drug crime reporting",
    description: "Enhanced 24/7 support system now available for anonymous reporting"
  },
  {
    date: "Dec 15, 2024",
    name: "Training workshops scheduled for educational institutions",
    attachmentLink: "https://drive.google.com/file/d/example2/view",
    description: "Specialized training sessions for teachers and counselors"
  }
];
