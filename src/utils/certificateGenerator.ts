
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

interface FormData {
  name: string;
  institutionName: string;
}

export const generateCertificatePDF = async (formData: FormData, certificateId: string, photoUrl?: string) => {
  const pdf = new jsPDF('landscape', 'mm', 'a4');
  
  // Set up the certificate background
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, 297, 210, 'F');
  
  // Add border
  pdf.setDrawColor(0, 0, 139);
  pdf.setLineWidth(3);
  pdf.rect(10, 10, 277, 190);
  
  // Inner border
  pdf.setLineWidth(1);
  pdf.rect(15, 15, 267, 180);
  
  // Header logos and title area
  pdf.setFontSize(24);
  pdf.setTextColor(0, 0, 139);
  pdf.text('TELANGANA ANTI NARCOTICS BUREAU', 148.5, 35, { align: 'center' });
  
  // Certificate title
  pdf.setFontSize(28);
  pdf.setTextColor(220, 20, 60);
  pdf.text('Certificate of Enrollment', 148.5, 55, { align: 'center' });
  
  // Add student photo placeholder (center aligned)
  if (photoUrl) {
    // In a real implementation, you would load and add the actual image
    pdf.setDrawColor(128, 128, 128);
    pdf.rect(130, 70, 37, 45);
    pdf.setFontSize(8);
    pdf.setTextColor(128, 128, 128);
    pdf.text('Student Photo', 148.5, 95, { align: 'center' });
  }
  
  // Certificate content
  pdf.setFontSize(14);
  pdf.setTextColor(0, 0, 0);
  
  const content = [
    `This is to proudly certify that ${formData.name}`,
    `of ${formData.institutionName} has been officially enrolled as an`,
    'ANTI-NARCOTIC SOLDIER on this day, ' + new Date().toLocaleDateString(),
    'for showing commitment and responsibility in joining the national',
    'movement against drug abuse.',
    '',
    'By enrolling, the student pledges to:',
    '',
    '• Promote awareness about the harmful effects of narcotics',
    '• Stand as a role model for a drug-free lifestyle',
    '• Support peers in choosing healthy, positive paths',
    '• Contribute actively to anti-narcotic initiatives in their',
    '  institution and community',
    '',
    'We recognize and commend this effort in building a healthier,',
    'safer, and stronger India.'
  ];
  
  let yPosition = 125;
  content.forEach((line) => {
    if (line.includes('ANTI-NARCOTIC SOLDIER')) {
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(220, 20, 60);
    } else {
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
    }
    pdf.text(line, 148.5, yPosition, { align: 'center' });
    yPosition += 5;
  });
  
  // Generate QR code
  try {
    const qrCodeDataURL = await QRCode.toDataURL(certificateId);
    pdf.addImage(qrCodeDataURL, 'PNG', 20, 160, 25, 25);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
  
  // Certificate ID
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  pdf.text(`Certificate ID: ${certificateId}`, 50, 175);
  
  // Footer
  pdf.text('Issued by: TELANGANA ANTI NARCOTICS BUREAU', 148.5, 190, { align: 'center' });
  pdf.text('Authorized Signatory', 240, 185);
  pdf.text('(E-Certificate)', 240, 190);
  
  // Download the PDF
  pdf.save(`ADS_Certificate_${formData.name.replace(/\s+/g, '_')}.pdf`);
};
