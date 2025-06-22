
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
  
  // Add outer border with TGANB dark green color (#006400)
  pdf.setDrawColor(0, 100, 0);
  pdf.setLineWidth(3);
  pdf.rect(10, 10, 190, 277);
  
  // Inner border with lighter green
  pdf.setLineWidth(1);
  pdf.setDrawColor(34, 139, 34);
  pdf.rect(15, 15, 180, 267);
  
  // Three logos at top - properly positioned
  try {
    // Telangana Government Logo (left)
    const telanganaGovImg = '/lovable-uploads/dc5b1429-5d0c-4d96-a676-6979624c1570.png';
    pdf.addImage(telanganaGovImg, 'PNG', 40, 25, 20, 20);
    
    // TGANB Logo (center) 
    const tganbImg = '/lovable-uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png';
    pdf.addImage(tganbImg, 'PNG', 95, 25, 20, 20);
    
    // Telangana Police Logo (right)
    const policeImg = '/lovable-uploads/686dd008-b6ba-4b5c-8342-6bd71c98b2a8.png';
    pdf.addImage(policeImg, 'PNG', 150, 25, 20, 20);
  } catch (error) {
    console.log('Error adding logos:', error);
  }
  
  // Set font to use available system font (closest to Poppins)
  pdf.setFont('helvetica', 'bold');
  
  // Header text - TELANGANA ANTI NARCOTICS BUREAU in TGANB dark green
  pdf.setFontSize(16);
  pdf.setTextColor(0, 100, 0);
  pdf.text('TELANGANA ANTI NARCOTICS BUREAU', 105, 55, { align: 'center' });
  
  // Certificate title with proper spacing
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0);
  pdf.text('Certificate of Enrollment', 105, 70, { align: 'center' });
  
  // Add underline
  pdf.setLineWidth(0.5);
  pdf.setDrawColor(0, 100, 0);
  pdf.line(65, 72, 145, 72);
  
  // Add student photo if provided with proper positioning
  if (photoUrl) {
    try {
      pdf.addImage(photoUrl, 'JPEG', 85, 80, 40, 50);
    } catch (error) {
      console.log('Error adding student photo:', error);
      // Fallback placeholder
      pdf.setDrawColor(128, 128, 128);
      pdf.rect(85, 80, 40, 50);
      pdf.setFontSize(8);
      pdf.setTextColor(128, 128, 128);
      pdf.text('Student Photo', 105, 107, { align: 'center' });
    }
  }
  
  // Certificate content with proper spacing and formatting
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
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
  
  let yPosition = 140;
  const lineHeight = 5;
  const maxWidth = 160;
  
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
      pdf.setTextColor(0, 100, 0);
      pdf.setFont('helvetica', 'bold');
      pdf.text(formData.name, nameStartX, yPosition);
      
      const remainderStartX = nameStartX + pdf.getTextWidth(formData.name);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text(parts[1], remainderStartX, yPosition);
    } else if (line.includes('Anti-Narcotic Soldier')) {
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 100, 0);
      pdf.text(line, 105, yPosition, { align: 'center', maxWidth });
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
    } else {
      pdf.text(line, 105, yPosition, { align: 'center', maxWidth });
    }
    yPosition += lineHeight;
  });
  
  // Bottom section with proper spacing
  pdf.setFillColor(248, 249, 250);
  pdf.rect(20, 250, 170, 25, 'F');
  pdf.setDrawColor(200, 200, 200);
  pdf.setLineWidth(0.5);
  pdf.rect(20, 250, 170, 25);
  
  // Generate QR code with verification URL
  const verificationUrl = `${window.location.origin}/certificate-verification?id=${certificateId}`;
  try {
    const qrCodeDataURL = await QRCode.toDataURL(verificationUrl);
    pdf.addImage(qrCodeDataURL, 'PNG', 25, 255, 15, 15);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
  
  // Certificate ID and signature with proper positioning
  pdf.setFontSize(9);
  pdf.setTextColor(0, 0, 0);
  pdf.text(`Certificate ID: ${certificateId}`, 45, 262);
  pdf.text('Digitally Signed', 45, 267);
  
  pdf.text('Authorized Signatory', 140, 262);
  pdf.text('TGANB', 140, 267);
  
  // Download the PDF
  pdf.save(`ADS_Certificate_${formData.name.replace(/\s+/g, '_')}.pdf`);
};
