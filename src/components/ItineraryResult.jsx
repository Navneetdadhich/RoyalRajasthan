import React, { useRef } from 'react';
import { Download, Printer, Share2, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { jsPDF } from 'jspdf';

const ItineraryResult = ({ itinerary, onReset }) => {
  const { plan, details } = itinerary;
  const contentRef = useRef(null);
  
  const handlePrint = () => {
    window.print();
  };
  
  const cleanTextForPdf = (text) => {
    // Replace markdown formatting and special characters with plain text
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
      .replace(/_(.*?)_/g, '$1')       // Remove italic formatting
      .replace(/\s*Ø>\s*Þ\s*w\s*/g, '') // Remove strange character sequences
      .replace(/[^\x00-\x7F]/g, '');   // Remove non-ASCII characters
  };
  
  const handleDownload = async () => {
    try {
      // Show loading state
      const button = document.querySelector('[data-download-btn]');
      const originalText = button.innerHTML;
      button.innerHTML = '<span class="animate-pulse">Generating PDF...</span>';
      
      // Create PDF with better formatting
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      
      // PDF dimensions
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15; // slightly reduced margins for more content space
      const contentWidth = pageWidth - (margin * 2);
      
      // Add title with better styling
      pdf.setFontSize(22);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0); // Black for consistent rendering
      pdf.text(`Rajasthan Itinerary`, pageWidth/2, margin + 10, { align: 'center' });
      
      // Add trip duration as subtitle
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`${details.days} Days Journey`, pageWidth/2, margin + 18, { align: 'center' });
      
      // Add trip details box - using simple rectangle instead of rounded
      const detailsY = margin + 25;
      pdf.setFillColor(240, 240, 240); // light gray background
      pdf.rect(margin, detailsY, contentWidth, 15, 'F');
      
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      
      // Trip details in two rows with simple formatting
      pdf.text(`Budget: Rs. ${details.budget.toLocaleString('en-IN')} | Travelers: ${details.members}`, pageWidth/2, detailsY + 6, { align: 'center' });
      pdf.text(`Hotel: ${details.hotelStars}-star | Starting City: ${details.startingCity || 'Jaipur'}`, pageWidth/2, detailsY + 12, { align: 'center' });
      
      // Set content styling
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(12); 
      
      // Starting position for content
      let y = detailsY + 25; // Increased spacing after details box
      const lineHeight = 6; // Reduced line height for compact content
      
      // Clean the plan text of markdown and special characters
      const cleanedPlan = cleanTextForPdf(plan);
      
      // Process days with better formatting - parse the content by days
      const dayRegex = /Day (\d+):(.*?)(?=Day \d+:|$)/gs;
      let match;
      let dayIndex = 0;
      
      while ((match = dayRegex.exec(cleanedPlan)) !== null) {
        dayIndex++;
        const dayNumber = match[1];
        const dayContent = match[2].trim();
        
        // Add spacing between days (except first day)
        if (dayIndex > 1) {
          y += 8;
        }
        
        // Check if we need a new page
        if (y > pageHeight - 30) {
          pdf.addPage();
          y = margin + 10;
        }
        
        // Day title with background
        pdf.setFillColor(240, 240, 240);
        pdf.rect(margin, y - 5, contentWidth, 10, 'F');
        
        // Day heading
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text(`Day ${dayNumber}: ${dayContent.split('\n')[0]}`, margin + 2, y);
        y += lineHeight + 4;
        
        // Parse the content sections (Morning, Afternoon, Evening)
        const sections = dayContent.match(/(Morning|Afternoon|Evening|Night).*?(?=(Morning|Afternoon|Evening|Night)|$)/gs) || [];
        
        for (const section of sections) {
          const sectionLines = section.split('\n');
          const sectionTitle = sectionLines[0].trim();
          
          // Check for page break
          if (y > pageHeight - 30) {
            pdf.addPage();
            y = margin + 10;
          }
          
          // Section title
          pdf.setFont('helvetica', 'bold');
          pdf.text(sectionTitle, margin + 2, y);
          y += lineHeight;
          
          // Section content - look for bullet points
          pdf.setFont('helvetica', 'normal');
          
          for (let i = 1; i < sectionLines.length; i++) {
            const line = sectionLines[i].trim();
            
            if (!line) continue; // Skip empty lines
            
            if (line.startsWith('*') || line.startsWith('-')) {
              // It's a bullet point
              if (y > pageHeight - 30) {
                pdf.addPage();
                y = margin + 10;
              }
              
              // Simple dash as bullet
              pdf.text('-', margin + 4, y);
              
              // Format bullet content
              const bulletContent = line.substring(1).trim();
              const bulletLines = pdf.splitTextToSize(bulletContent, contentWidth - 10);
              
              // First line
              pdf.text(bulletLines[0], margin + 8, y);
              y += lineHeight;
              
              // Wrapped lines with indent
              if (bulletLines.length > 1) {
                for (let j = 1; j < bulletLines.length; j++) {
                  if (y > pageHeight - 30) {
                    pdf.addPage();
                    y = margin + 10;
                  }
                  pdf.text(bulletLines[j], margin + 8, y);
                  y += lineHeight;
                }
              }
            } else {
              // Regular paragraph
              if (y > pageHeight - 30) {
                pdf.addPage();
                y = margin + 10;
              }
              
              const paragraphLines = pdf.splitTextToSize(line, contentWidth - 4);
              
              paragraphLines.forEach(paragraphLine => {
                pdf.text(paragraphLine, margin + 4, y);
                y += lineHeight;
              });
            }
            
            // Small space after each item
            y += 1;
          }
          
          // Add spacing between sections
          y += 3;
        }
      }
      
      // Add a footer to all pages
      const pageCount = pdf.internal.getNumberOfPages();
      pdf.setFont('helvetica', 'normal'); // Changed from italic to normal for better rendering
      pdf.setFontSize(9);
      pdf.setTextColor(100, 100, 100);
      
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i);
        
        // Date on left
        const today = new Date().toLocaleDateString('en-US');
        pdf.text(`Generated: ${today}`, margin, pageHeight - 10);
        
        // App name in center
        pdf.text('Royal Rajasthan Tour Planner', pageWidth/2, pageHeight - 10, { align: 'center' });
        
        // Page number on right
        pdf.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
      }
      
      // Save PDF
      pdf.save(`Rajasthan_Itinerary_${details.days}days.pdf`);
      
      // Restore button state
      button.innerHTML = originalText;
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
      // Restore button
      const button = document.querySelector('[data-download-btn]');
      button.innerHTML = '<span class="flex items-center"><Download className="h-4 w-4 mr-1" /> Export PDF</span>';
    }
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Rajasthan Itinerary for ${details.days} days`,
        text: plan,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      alert('Web Share API not supported in your browser');
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#1D3557]">
            Your Rajasthan Itinerary
          </h2>
          <p className="text-gray-600">
            {details.days} days • ₹{details.budget} • {details.members} travelers • {details.hotelStars}-star hotels
          </p>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button 
            onClick={handlePrint}
            className="flex items-center px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors duration-200"
          >
            <Printer className="h-4 w-4 mr-1" /> Print
          </button>
          
          <button 
            onClick={handleDownload}
            data-download-btn
            className="flex items-center px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors duration-200"
          >
            <Download className="h-4 w-4 mr-1" /> Export PDF
          </button>
          
          <button 
            onClick={handleShare}
            className="flex items-center px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm transition-colors duration-200"
          >
            <Share2 className="h-4 w-4 mr-1" /> Share
          </button>
        </div>
      </div>
      
      <div className="card print:shadow-none bg-white rounded-lg shadow-md p-6" ref={contentRef}>
        <div className="prose max-w-none">
          <ReactMarkdown>{plan}</ReactMarkdown>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button 
          onClick={onReset}
          className="flex items-center px-4 py-2 rounded-md bg-[#A8DADC] text-[#1D3557] hover:bg-opacity-80 font-medium transition-colors duration-200 cursor-pointer"
        >
          <RefreshCw className="h-4 w-4 mr-1" /> 
          Create Another Itinerary
        </button>
      </div>
    </div>
  );
};

export default ItineraryResult;