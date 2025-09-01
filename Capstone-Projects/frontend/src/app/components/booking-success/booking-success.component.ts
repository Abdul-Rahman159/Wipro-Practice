import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.css']
})
export class BookingSuccessComponent {
  booking: any = null;
  flight: any = null;
  payment: any = null;

  constructor(private http: HttpClient) {
    const state = history.state as any;
    this.booking = state?.booking || null;
    this.payment = state?.payment || null;

    if (this.booking?.flightId) {
      this.http.get(`http://localhost:8080/flights/${this.booking.flightId}`).subscribe({
        next: (flight: any) => {
          this.flight = flight;
          console.log("Flight details:", this.flight);
        },
        error: (err) => {
          console.error("Failed to fetch flight details", err);
        }
      });
    }
  }

  getAirlineInitials(airline: string): string {
    return airline ? airline.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase() : 'AI';
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('en-IN', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  }

  getCurrentDateTime(): string {
    return new Date().toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  downloadTicket() {
    if (!this.booking || !this.flight || !this.payment) {
      alert('Booking data not available!');
      return;
    }

    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = 297;
      const pageHeight = 210;

      // Background
      doc.setFillColor(245, 245, 245);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');

      // Main ticket container
      const ticketX = 20;
      const ticketY = 20;
      const ticketWidth = pageWidth - 40;
      const ticketHeight = pageHeight - 40;

      // White ticket background
      doc.setFillColor(255, 255, 255);
      doc.rect(ticketX, ticketY, ticketWidth, ticketHeight, 'F');

      // Header section
      doc.setFillColor(0, 123, 255);
      doc.rect(ticketX, ticketY, ticketWidth, 25, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(18);
      doc.text(`${String(this.flight.airline || 'Airlines')}`, ticketX + 10, ticketY + 16);
      
      doc.setFontSize(12);
      doc.text('BOARDING PASS', pageWidth - 80, ticketY + 16);

      // Passenger Information
      doc.setTextColor(0, 0, 0);
      let yPos = ticketY + 40;
      
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('PASSENGER NAME', ticketX + 10, yPos);
      
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text(String(this.booking.passengerName || '').toUpperCase(), ticketX + 10, yPos + 8);

      // Flight Route
      yPos += 25;
      
      // Departure
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('FROM', ticketX + 10, yPos);
      
      doc.setFontSize(18);
      doc.setTextColor(0, 0, 0);
      const sourceCode = String(this.flight.source || 'XXX').substring(0, 3).toUpperCase();
      doc.text(sourceCode, ticketX + 10, yPos + 12);
      
      doc.setFontSize(9);
      doc.text(String(this.flight.source || 'Unknown'), ticketX + 10, yPos + 20);

      // Arrival
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text('TO', ticketX + 80, yPos);
      
      doc.setFontSize(18);
      doc.setTextColor(0, 0, 0);
      const destCode = String(this.flight.destination || 'XXX').substring(0, 3).toUpperCase();
      doc.text(destCode, ticketX + 80, yPos + 12);
      
      doc.setFontSize(9);
      doc.text(String(this.flight.destination || 'Unknown'), ticketX + 80, yPos + 20);

      // Flight Details
      yPos += 35;
      const details = [
        { label: 'FLIGHT', value: String(this.flight.flightNumber || 'N/A') },
        { label: 'DEPARTURE', value: String(this.flight.departureTime || 'N/A') },
        { label: 'ARRIVAL', value: String(this.flight.arrivalTime || 'N/A') },
        { label: 'GATE', value: `A${Math.floor(Math.random() * 20) + 1}` },
        { label: 'SEAT', value: `${['A','B','C','D','E','F'][Math.floor(Math.random() * 6)]}${Math.floor(Math.random() * 25) + 1}` },
        { label: 'BOOKING REF', value: String(this.booking.id || 'N/A') }
      ];

      details.forEach((detail, index) => {
        const col = index % 3;
        const row = Math.floor(index / 3);
        const x = ticketX + 10 + (col * 70);
        const y = yPos + (row * 20);

        doc.setFontSize(7);
        doc.setTextColor(100, 100, 100);
        doc.text(detail.label, x, y);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(detail.value, x, y + 7);
      });

      // QR Code area
      const qrX = pageWidth - 80;
      const qrY = ticketY + 40;
      
      doc.setDrawColor(200, 200, 200);
      doc.rect(qrX, qrY, 50, 50);
      
      // QR pattern
      doc.setFillColor(0, 0, 0);
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (Math.random() > 0.5) {
            doc.rect(qrX + 5 + (i * 4), qrY + 5 + (j * 4), 3, 3, 'F');
          }
        }
      }

      // Footer
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(`Thank you for flying with ${String(this.flight.airline || 'us')}!`, ticketX + 10, pageHeight - 25);
      
      doc.setTextColor(0, 150, 0);
      doc.text(`CONFIRMED | Amount Paid: ${this.booking.amount}`, ticketX + 10, pageHeight - 15);

      // Save PDF
      const fileName = `Ticket_${this.flight.flightNumber}_${this.booking.passengerName?.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
      doc.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate ticket. Please try again.');
    }
  }
}