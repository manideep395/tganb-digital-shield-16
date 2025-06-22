
export interface Achievement {
  title: string;
  description: string;
  crNumber: string;
  offenders: Array<{
    serialNumber: number;
    name: string;
  }>;
  imageLink?: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "Major International Drug Bust",
    description: "TSNAB along with Panjagutta Police on credible information apprehended (1) International #drugpeddler #nigerian who was in possession of Various #NarcoticDrugs in Hyderabad. Seized (557) Grams Cocaine, (902) Ecstasy Pills Weighing 390 Grams, (105) LSD Blots, (215) Grams Charas, (21) Grams Heroine, (7) Grams of Amphetamine, (45) Grams of OG Weed and (190) Grams of Ganja and (3) Cell Phones and cash of Rs 5.4 lakhs all W/Rs. 8 Crores from his possession.",
    crNumber: "Cr.No.131/2024 U/s 8c,r/w 20(b)(ii)(A),21(b),21(c),22(b),22(c),29 NDPS Act-1985 of PS Panja gutta",
    offenders: [
      {
        serialNumber: 1,
        name: "Iwuala Udoka Stanley S/o Iwuala Emanuel"
      }
    ]
  },
  {
    title: "Drug Manufacturing Lab Busted",
    description: "On 07.12.2023, the sleuths of TSNAB under the supervision of SP, East along with Jinnaram Police, Sangareddy District apprehended the following accused persons and Seized 14 KGs Nordazepam drug and entire manufacturing lab along with equipment used in manufacturing & Mobile Phones from their possession. All worth Rs. 3 Crores.",
    crNumber: "Cr.No.118/2023 U/Sec 8(c) r/w 21(c), 22(c), 29 of NDPS Act-1985 of Jinnaram PS (Sangareddy)",
    offenders: [
      {
        serialNumber: 1,
        name: "Mohammed Younus @ Jakka Raju"
      },
      {
        serialNumber: 2,
        name: "Goundla Srinivas Goud"
      },
      {
        serialNumber: 3,
        name: "Krishnamgari Nirmal Goud"
      },
      {
        serialNumber: 4,
        name: "Pasupuleti Manikyala Rao"
      }
    ]
  },
  {
    title: "Methamphetamine Network Dismantled",
    description: "On 01.12.2023, the sleuths of TS-NAB along with Suraram Police, Cyberabad apprehended (03) persons namely who were found in the possession of liquid methamphetamine and crystal methamphetamine drug and selling the same to the needy customers and earning money illegally. Seized 60 grams of crystal Methamphetamine drug, 700 ml liquid methamphetamine drug, Acetone bottle (containing 150 ml Acetone) along with equipment used in the commission of offence all worth of Rs. 50 lakhs.",
    crNumber: "Cr.No.270/2023 U/Sec. 8 (c), r/w 22, 28, 29 of NDPS Act-1985 of Suraram PS",
    offenders: [
      {
        serialNumber: 1,
        name: "Kamma Srinivas @ Srinu (Inter-State)"
      },
      {
        serialNumber: 2,
        name: "G. Narasimha Raju @ Ajay @ Bobby (Inter-State)"
      },
      {
        serialNumber: 3,
        name: "Datla Manikanta Veera Venkata Naga Raju @ D.M.V.V.Nagaraju, @ Pandu (Inter-State)"
      }
    ]
  }
];
