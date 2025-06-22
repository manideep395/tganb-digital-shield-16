
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

interface FormData {
  name: string;
  institutionName: string;
}

export const generateCertificatePDF = async (formData: FormData, certificateId: string, photoUrl?: string) => {
  const pdf = new jsPDF('portrait', 'mm', 'a4');
  
  // Set up the certificate background
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, 210, 297, 'F');
  
  // Add outer border with 3D effect
  pdf.setDrawColor(0, 100, 0);
  pdf.setLineWidth(4);
  pdf.rect(10, 10, 190, 277);
  
  // Inner border
  pdf.setLineWidth(2);
  pdf.setDrawColor(34, 139, 34);
  pdf.rect(15, 15, 180, 267);
  
  // Add decorative corner elements
  pdf.setFillColor(34, 139, 34);
  pdf.circle(25, 25, 8, 'F');
  pdf.circle(185, 25, 8, 'F');
  pdf.circle(25, 272, 8, 'F');
  pdf.circle(185, 272, 8, 'F');
  
  // Three logos at top
  try {
    // Telangana Government Logo (left)
    const telanganaGovImg = '/lovable-uploads/dc5b1429-5d0c-4d96-a676-6979624c1570.png';
    pdf.addImage(telanganaGovImg, 'PNG', 40, 30, 25, 25);
    
    // TGANB Logo (center) 
    const tganbImg = '/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png';
    pdf.addImage(tganbImg, 'PNG', 92.5, 30, 25, 25);
    
    // Telangana Police Logo (right)
    const policeImg = '/lovable-uploads/686dd008-b6ba-4b5c-8342-6bd71c98b2a8.png';
    pdf.addImage(policeImg, 'PNG', 145, 30, 25, 25);
  } catch (error) {
    console.log('Error adding logos:', error);
  }
  
  // Header text - TELANGANA ANTI NARCOTICS BUREAU in green
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(18);
  pdf.setTextColor(34, 139, 34);
  pdf.text('TELANGANA ANTI NARCOTICS BUREAU', 105, 70, { align: 'center' });
  
  // Certificate title with underline
  pdf.setFontSize(24);
  pdf.setTextColor(0, 0, 0);
  pdf.text('Certificate of Enrollment', 105, 85, { align: 'center' });
  // Add underline
  pdf.setLineWidth(0.5);
  pdf.setDrawColor(0, 0, 0);
  pdf.line(55, 87, 155, 87);
  
  // Add student photo if provided
  if (photoUrl) {
    try {
      pdf.addImage(photoUrl, 'JPEG', 85, 100, 40, 50);
    } catch (error) {
      console.log('Error adding student photo:', error);
      // Fallback placeholder
      pdf.setDrawColor(128, 128, 128);
      pdf.rect(85, 100, 40, 50);
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text('Student Photo', 105, 127, { align: 'center' });
    }
  }
  
  // Certificate content with updated text
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(12);
  pdf.setTextColor(0, 0, 0);
  
  const content = [
    `This is to proudly certify that ${formData.name}, a student of`,
    `${formData.institutionName}, has been officially enrolled as an`,
    'Anti-Narcotic Soldier under the initiative of the Telangana Anti',
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
  
  let yPosition = 165;
  content.forEach((line) => {
    if (line.includes(formData.name)) {
      // Student name in green color
      const parts = line.split(formData.name);
      pdf.setTextColor(0, 0, 0);
      pdf.text(parts[0], 105, yPosition, { align: 'center' });
      pdf.setTextColor(34, 139, 34);
      pdf.setFont('helvetica', 'bold');
      const nameWidth = pdf.getTextWidth(formData.name);
      const startX = 105 - (pdf.getTextWidth(line) / 2) + pdf.getTextWidth(parts[0]);
      pdf.text(formData.name, startX, yPosition);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text(parts[1], startX + nameWidth, yPosition);
    } else if (line.includes('Anti-Narcotic Soldier')) {
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(34, 139, 34);
      pdf.text(line, 105, yPosition, { align: 'center' });
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
    } else {
      pdf.text(line, 105, yPosition, { align: 'center' });
    }
    yPosition += 6;
  });
  
  // Bottom section with 3D effect
  pdf.setFillColor(240, 240, 240);
  pdf.rect(20, 250, 170, 25, 'F');
  pdf.setDrawColor(200, 200, 200);
  pdf.setLineWidth(1);
  pdf.rect(20, 250, 170, 25);
  
  // Generate QR code with verification URL
  const verificationUrl = `${window.location.origin}/certificate-verification?id=${certificateId}`;
  try {
    const qrCodeDataURL = await QRCode.toDataURL(verificationUrl);
    pdf.addImage(qrCodeDataURL, 'PNG', 25, 255, 15, 15);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
  
  // Certificate ID and signature
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  pdf.text(`Certificate ID: ${certificateId}`, 45, 262);
  pdf.text('Digitally Signed', 45, 268);
  
  pdf.text('Authorized Signatory', 140, 262);
  pdf.text('TGANB', 140, 268);
  
  // Download the PDF
  pdf.save(`ADS_Certificate_${formData.name.replace(/\s+/g, '_')}.pdf`);
};
