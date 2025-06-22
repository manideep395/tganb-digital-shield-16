
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

interface FormData {
  name: string;
  institutionName: string;
}

export const generateCertificatePDF = async (formData: FormData, certificateId: string, photoUrl?: string) => {
  const pdf = new jsPDF('portrait', 'mm', 'a4');
  
  // Set up gradient background
  pdf.setFillColor(240, 245, 255);
  pdf.rect(0, 0, 210, 297, 'F');
  
  // Add subtle gradient effect
  for (let i = 0; i < 20; i++) {
    const alpha = 0.05 - (i * 0.002);
    pdf.setFillColor(59, 130, 246, alpha);
    pdf.rect(0, i * 15, 210, 15, 'F');
  }
  
  // Add TGANB logo as watermark
  try {
    const tganbWatermark = '/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png';
    pdf.setGState({ opacity: 0.2 });
    pdf.addImage(tganbWatermark, 'PNG', 75, 120, 60, 60);
    pdf.setGState({ opacity: 1 });
  } catch (error) {
    console.log('Error adding watermark:', error);
  }
  
  // Add main border with police dark blue color
  pdf.setDrawColor(0, 51, 102);
  pdf.setLineWidth(2);
  pdf.rect(15, 15, 180, 267);
  
  // Inner decorative border
  pdf.setLineWidth(0.5);
  pdf.setDrawColor(59, 130, 246);
  pdf.rect(20, 20, 170, 257);
  
  // Three logos at top - properly positioned
  try {
    // Telangana Government Logo (left)
    const telanganaGovImg = '/lovable-uploads/dc5b1429-5d0c-4d96-a676-6979624c1570.png';
    pdf.addImage(telanganaGovImg, 'PNG', 35, 30, 25, 25);
    
    // TGANB Logo (center) 
    const tganbImg = '/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png';
    pdf.addImage(tganbImg, 'PNG', 92.5, 30, 25, 25);
    
    // Telangana Police Logo (right)
    const policeImg = '/lovable-uploads/686dd008-b6ba-4b5c-8342-6bd71c98b2a8.png';
    pdf.addImage(policeImg, 'PNG', 150, 30, 25, 25);
  } catch (error) {
    console.log('Error adding logos:', error);
  }
  
  // Use Helvetica as closest to Poppins
  pdf.setFont('helvetica', 'bold');
  
  // Header text - TELANGANA ANTI NARCOTICS BUREAU in police dark blue
  pdf.setFontSize(14);
  pdf.setTextColor(0, 51, 102);
  pdf.text('TELANGANA ANTI NARCOTICS BUREAU', 105, 65, { align: 'center' });
  
  // Certificate title
  pdf.setFontSize(18);
  pdf.setTextColor(0, 0, 0);
  pdf.text('Certificate of Enrollment', 105, 75, { align: 'center' });
  
  // Add decorative underline
  pdf.setLineWidth(0.8);
  pdf.setDrawColor(0, 51, 102);
  pdf.line(70, 77, 140, 77);
  
  // Add student photo if provided
  if (photoUrl) {
    try {
      pdf.addImage(photoUrl, 'JPEG', 85, 85, 40, 50);
      // Photo border
      pdf.setDrawColor(0, 51, 102);
      pdf.setLineWidth(1);
      pdf.rect(85, 85, 40, 50);
    } catch (error) {
      console.log('Error adding student photo:', error);
      // Fallback placeholder
      pdf.setDrawColor(128, 128, 128);
      pdf.rect(85, 85, 40, 50);
      pdf.setFontSize(8);
      pdf.setTextColor(128, 128, 128);
      pdf.text('Student Photo', 105, 112, { align: 'center' });
    }
  }
  
  // Certificate content with proper spacing and formatting
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  
  const content = [
    `This is to proudly certify that ${formData.name}, a student of`,
    `${formData.institutionName}, has been officially enrolled as an`,
    '',
    'under the initiative of the Telangana Anti',
    `Narcotics Bureau on ${new Date().toLocaleDateString()}.`,
    '',
    'Through this enrollment, the student has pledged to actively participate',
    'in building a drug-free society by promoting awareness about the harmful',
    'effects of narcotics, encouraging healthy choices among peers, and',
    'supporting community-driven anti-drug campaigns.',
    '',
    'As an Anti-Narcotic Soldier, the student commits to leading by example',
    'and contributing to the vision of a safe, responsible, and addiction-free',
    'nation.',
    '',
    'We appreciate and recognize this valuable step taken towards national',
    'well-being and social responsibility. The enrollment of this individual',
    'as an Anti-Narcotic Soldier symbolizes their dedication to making a',
    'positive impact in society and inspiring others to follow the path of',
    'awareness, strength, and integrity.'
  ];
  
  let yPosition = 145;
  const lineHeight = 5;
  
  content.forEach((line) => {
    if (line === '') {
      yPosition += lineHeight / 2;
      return;
    }
    
    if (line.includes(formData.name)) {
      // Handle student name highlighting
      const parts = line.split(formData.name);
      const fullLineWidth = pdf.getTextWidth(line);
      const startX = 105 - (fullLineWidth / 2);
      
      pdf.setTextColor(0, 0, 0);
      pdf.text(parts[0], startX, yPosition);
      
      const nameStartX = startX + pdf.getTextWidth(parts[0]);
      pdf.setTextColor(0, 51, 102);
      pdf.setFont('helvetica', 'bold');
      pdf.text(formData.name, nameStartX, yPosition);
      
      const remainderStartX = nameStartX + pdf.getTextWidth(formData.name);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text(parts[1], remainderStartX, yPosition);
    } else if (line.includes('Anti-Narcotic Soldier')) {
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text(line, 105, yPosition, { align: 'center' });
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
    } else {
      pdf.text(line, 105, yPosition, { align: 'center' });
    }
    yPosition += lineHeight;
  });
  
  // Bottom section with attractive design
  pdf.setFillColor(240, 245, 255);
  pdf.roundedRect(25, 250, 160, 25, 3, 3, 'F');
  pdf.setDrawColor(0, 51, 102);
  pdf.setLineWidth(1);
  pdf.roundedRect(25, 250, 160, 25, 3, 3, 'S');
  
  // Generate QR code with verification URL
  const verificationUrl = `${window.location.origin}/certificate-verification?id=${certificateId}`;
  try {
    const qrCodeDataURL = await QRCode.toDataURL(verificationUrl, { width: 60 });
    pdf.addImage(qrCodeDataURL, 'PNG', 30, 255, 15, 15);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
  
  // Certificate information
  pdf.setFontSize(8);
  pdf.setTextColor(0, 51, 102);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Certificate Information', 50, 258);
  
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(0, 0, 0);
  pdf.text(`ID: ${certificateId}`, 50, 263);
  pdf.text('Digitally Verified', 50, 267);
  
  pdf.text('Authorized by TGANB', 140, 263);
  pdf.text('Government of Telangana', 140, 267);
  
  // Download the PDF
  pdf.save(`ADS_Certificate_${formData.name.replace(/\s+/g, '_')}.pdf`);
};
