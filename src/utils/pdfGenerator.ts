
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

interface PDFConfig {
  title: string;
  content: string[];
  userDetails: {
    name: string;
    age?: string;
    location?: string;
    phone?: string;
  };
  recommendations?: string[];
  riskLevel?: string;
  riskScore?: number;
}

export const generateAIPDF = async (config: PDFConfig) => {
  const pdf = new jsPDF('portrait', 'mm', 'a4');
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  // Set white background
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  // Add TGANB watermark
  try {
    const tganbWatermark = '/uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png';
    pdf.setGState(new (pdf as any).GState({ opacity: 0.1 }));
    pdf.addImage(tganbWatermark, 'PNG', 60, 120, 90, 90);
    pdf.setGState(new (pdf as any).GState({ opacity: 1 }));
  } catch (error) {
    console.log('Error adding watermark:', error);
  }
  
  let yPosition = margin;
  
  // Header with logos and title
  try {
    // Telangana Government Logo
    const telanganaGovImg = '/uploads/dc5b1429-5d0c-4d96-a676-6979624c1570.png';
    pdf.addImage(telanganaGovImg, 'PNG', margin, yPosition, 20, 20);
    
    // TGANB Logo
    const tganbImg = '/uploads/3cc3a66f-c1e9-4a3e-ae78-665c190d4eb4.png';
    pdf.addImage(tganbImg, 'PNG', margin + 25, yPosition, 20, 20);
  } catch (error) {
    console.log('Error adding logos:', error);
  }
  
  // Header text
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(14);
  pdf.setTextColor(0, 51, 102);
  pdf.text('TELANGANA ANTI NARCOTICS BUREAU (TGANB)', margin + 50, yPosition + 10);
  
  pdf.setFontSize(12);
  pdf.setTextColor(0, 0, 0);
  pdf.text(config.title, margin + 50, yPosition + 18);
  
  yPosition += 35;
  
  // User Details Section
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(11);
  pdf.text('User Information:', margin, yPosition);
  yPosition += 8;
  
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.text(`Name: ${config.userDetails.name}`, margin, yPosition);
  yPosition += 6;
  
  if (config.userDetails.age) {
    pdf.text(`Age: ${config.userDetails.age}`, margin, yPosition);
    yPosition += 6;
  }
  
  if (config.userDetails.location) {
    pdf.text(`Location: ${config.userDetails.location}`, margin, yPosition);
    yPosition += 6;
  }
  
  if (config.userDetails.phone) {
    pdf.text(`Phone: ${config.userDetails.phone}`, margin, yPosition);
    yPosition += 6;
  }
  
  pdf.text(`Report Generated: ${new Date().toLocaleString()}`, margin, yPosition);
  yPosition += 15;
  
  // Risk Level (if applicable)
  if (config.riskLevel && config.riskScore !== undefined) {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    const riskColor = config.riskLevel === 'High' ? [255, 0, 0] : 
                     config.riskLevel === 'Moderate' ? [255, 165, 0] : [0, 128, 0];
    pdf.setTextColor(riskColor[0], riskColor[1], riskColor[2]);
    pdf.text(`Risk Assessment: ${config.riskLevel} (${config.riskScore}%)`, margin, yPosition);
    yPosition += 12;
  }
  
  // Content Section
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  
  config.content.forEach((paragraph) => {
    const lines = pdf.splitTextToSize(paragraph, contentWidth);
    lines.forEach((line: string) => {
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.text(line, margin, yPosition);
      yPosition += 5;
    });
    yPosition += 3;
  });
  
  // Recommendations Section
  if (config.recommendations && config.recommendations.length > 0) {
    yPosition += 5;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.text('Detailed Recommendations:', margin, yPosition);
    yPosition += 8;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    
    config.recommendations.forEach((rec, index) => {
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      const lines = pdf.splitTextToSize(`${index + 1}. ${rec}`, contentWidth - 10);
      lines.forEach((line: string) => {
        pdf.text(line, margin + 5, yPosition);
        yPosition += 5;
      });
      yPosition += 2;
    });
  }
  
  // Footer on every page
  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    
    // Footer disclaimer
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(128, 128, 128);
    const disclaimerText = 'DISCLAIMER: This is an AI-generated report and not a medical diagnosis. If you are in a critical situation or need professional help, please visit rehabilitation specialists or healthcare professionals immediately.';
    const disclaimerLines = pdf.splitTextToSize(disclaimerText, contentWidth);
    let footerY = pageHeight - 25;
    
    disclaimerLines.forEach((line: string) => {
      pdf.text(line, margin, footerY);
      footerY += 4;
    });
    
    pdf.text('For emergency assistance, contact TG ANB Helpline: 8712671111', margin, footerY + 3);
  }
  
  return pdf;
};
