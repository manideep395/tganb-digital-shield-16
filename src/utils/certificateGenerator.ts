
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

interface FormData {
  name: string;
  institutionName: string;
}

export const generateCertificatePDF = async (formData: FormData, certificateId: string, photoUrl?: string) => {
  const pdf = new jsPDF('portrait', 'mm', 'a4');
  
  // Set white background
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, 210, 297, 'F');
  
  // Add main border with police dark blue color
  pdf.setDrawColor(0, 51, 102);
  pdf.setLineWidth(2);
  pdf.rect(15, 15, 180, 267);
  
  // Inner decorative border
  pdf.setLineWidth(0.5);
  pdf.setDrawColor(0, 51, 102);
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
  
  // Use Times-Bold for professional look
  pdf.setFont('times', 'bold');
  
  // Header text - TELANGANA ANTI NARCOTICS BUREAU in police dark blue
  pdf.setFontSize(12);
  pdf.setTextColor(0, 51, 102);
  pdf.text('TELANGANA ANTI NARCOTICS BUREAU', 105, 65, { align: 'center' });
  
  // Certificate title
  pdf.setFontSize(14);
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
  
  // Certificate content with Times New Roman Bold size 10
  pdf.setFont('times', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  
  let yPosition = 145;
  const lineHeight = 5;
  
  // Main certification text
  const line1Part1 = `This is to proudly certify that `;
  const line1Part2 = `${formData.name}`;
  const line1Part3 = `, a student of`;
  
  const line1Width = pdf.getTextWidth(line1Part1 + line1Part2 + line1Part3);
  const startX = 105 - (line1Width / 2);
  
  pdf.setTextColor(0, 0, 0);
  pdf.text(line1Part1, startX, yPosition);
  
  const nameStartX = startX + pdf.getTextWidth(line1Part1);
  pdf.setTextColor(0, 51, 102);
  pdf.text(line1Part2, nameStartX, yPosition);
  
  const part3StartX = nameStartX + pdf.getTextWidth(line1Part2);
  pdf.setTextColor(0, 0, 0);
  pdf.text(line1Part3, part3StartX, yPosition);
  yPosition += lineHeight;
  
  // Institution name and enrollment text
  pdf.text(`${formData.institutionName}, has been officially enrolled as an`, 105, yPosition, { align: 'center' });
  yPosition += lineHeight + 1;
  
  // Anti-Narcotic Soldier in blue
  pdf.setTextColor(0, 51, 102);
  pdf.text('Anti-Narcotic Soldier', 105, yPosition, { align: 'center' });
  yPosition += lineHeight + 1;
  
  // Remaining text in black
  pdf.setTextColor(0, 0, 0);
  pdf.text('under the initiative of the Telangana Anti', 105, yPosition, { align: 'center' });
  yPosition += lineHeight;
  
  pdf.text(`Narcotics Bureau on ${new Date().toLocaleDateString()}.`, 105, yPosition, { align: 'center' });
  yPosition += lineHeight + 3;
  
  // Content with proper spacing
  const contentLines = [
    'Through this enrollment, the student has pledged to actively participate',
    'in building a drug-free society by promoting awareness about the harmful',
    'effects of narcotics and supporting community-driven anti-drug campaigns.',
    '',
    'As an Anti-Narcotic Soldier, the student commits to leading by example',
    'and contributing to the vision of a safe, responsible, and addiction-free nation.',
    '',
    'We recognize this valuable step towards national well-being and social responsibility.'
  ];
  
  contentLines.forEach((line) => {
    if (line === '') {
      yPosition += lineHeight / 2;
      return;
    }
    pdf.text(line, 105, yPosition, { align: 'center' });
    yPosition += lineHeight;
  });
  
  // Bottom section with attractive design
  yPosition = 255;
  pdf.setFillColor(240, 245, 255);
  pdf.roundedRect(25, yPosition, 160, 20, 3, 3, 'F');
  pdf.setDrawColor(0, 51, 102);
  pdf.setLineWidth(1);
  pdf.roundedRect(25, yPosition, 160, 20, 3, 3, 'S');
  
  // Generate QR code with verification URL
  const verificationUrl = `${window.location.origin}/certificate-verification?id=${certificateId}`;
  try {
    const qrCodeDataURL = await QRCode.toDataURL(verificationUrl, { width: 50 });
    pdf.addImage(qrCodeDataURL, 'PNG', 30, yPosition + 3, 12, 12);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
  
  // Certificate information with Times New Roman Bold
  pdf.setFontSize(8);
  pdf.setTextColor(0, 51, 102);
  pdf.setFont('times', 'bold');
  pdf.text('Certificate Information', 47, yPosition + 6);
  
  pdf.setTextColor(0, 0, 0);
  pdf.text(`ID: ${certificateId}`, 47, yPosition + 10);
  pdf.text('Digitally Verified', 47, yPosition + 13);
  
  pdf.text('Authorized by TGANB', 130, yPosition + 10);
  pdf.text('Government of Telangana', 130, yPosition + 13);
  
  // Download the PDF
  pdf.save(`ADS_Certificate_${formData.name.replace(/\s+/g, '_')}.pdf`);
};
