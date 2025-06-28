
export interface NewsItem {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  date?: string;
  newsType: 'Breaking News' | 'Shocking News' | 'Important Update' | 'Achievement' | 'Alert' | 'Event';
  link?: string;
}

export const newsData: NewsItem[] = [
  {
    title: "Anti-drug awareness week launched in Telangana!",
    subtitle: "Campaign with 2,000 student; outreach to continue till June 26",
    description: "HYDERABAD: Telangana Anti-Narcotics Bureau (TGANB) on Saturday launched a week-long Anti-Drug Awareness campaign involving students. At an event held at Integrated Command and Control Centre (I-CCC), Banjara Hills, 2,000 students from 15 schools attended, where in TGANB officials showcased a series of testimonies and short films. A 'pledge wall' was installed for participants. DGP Jitender, who was the chief guest, addressed the gathering, calling students the 'soldiers' of the state's anti-drug efforts. The campaign would continue until June 26, with events scheduled at venues, including I-CCC, Banjara Hills and Jala Vihar on Necklace Road. Officials and partner organisations would also visit schools and colleges for outreach activities.",
    imageUrl: "/uploads/f8dc5c1c-f04c-4da0-914e-58f74d4e9436.png",
    date: "June 2024",
    newsType: "Breaking News",
    link: "/news-detail/1"
  },
  {
    title: "Major drug bust in Hyderabad - 50kg cocaine seized",
    subtitle: "International drug cartel dismantled by TGANB",
    description: "In a major operation, TGANB officials seized 50kg of cocaine worth ₹200 crores and arrested 8 members of an international drug cartel operating in Hyderabad.",
    imageUrl: "/uploads/f8dc5c1c-f04c-4da0-914e-58f74d4e9436.png",
    date: "Dec 2024",
    newsType: "Shocking News",
    link: "/news-detail/2"
  }
];
