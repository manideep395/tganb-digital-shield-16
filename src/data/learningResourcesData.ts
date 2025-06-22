
export interface LearningResource {
  title: string;
  description: string;
  downloadLink: string;
}

export const learningResourcesData: LearningResource[] = [
  {
    title: "Drug Awareness Fundamentals",
    description: "A comprehensive guide covering the basics of drug awareness, prevention strategies, and community engagement techniques.",
    downloadLink: "https://drive.google.com/file/d/example1/view"
  },
  {
    title: "NDPS Act 1985 - Complete Reference",
    description: "Detailed explanation of the Narcotic Drugs and Psychotropic Substances Act, including penalties and enforcement procedures.",
    downloadLink: "https://drive.google.com/file/d/example2/view"
  },
  {
    title: "Youth Counseling Guidelines",
    description: "Best practices for counseling young people about drug abuse, including communication techniques and intervention strategies.",
    downloadLink: "https://drive.google.com/file/d/example3/view"
  }
];
