import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="success-page">
      <div class="container">
        
        <!-- Success Header -->
        <div class="success-header">
          <div class="success-icon">
            <div class="check-circle">✓</div>
          </div>
          <h2 class="success-title">Booking Confirmed!</h2>
          <p class="success-message">
            Your flight has been successfully booked. A confirmation email has been sent to your registered email address.
          </p>
        </div>

        <!-- Booking Details -->
        <div class="booking-details" *ngIf="booking && flight">
          
          <!-- Confirmation Info -->
          <div class="confirmation-card">
            <div class="card-header">
              <h5>Booking Confirmation</h5>
              <div class="booking-ref">
                <span class="ref-label">Booking Reference</span>
                <span class="ref-number">{{booking.id}}</span>
              </div>
            </div>
            
            <div class="card-content">
              <div class="passenger-info">
                <h6>Passenger Details</h6>
                <div class="info-grid">
                  <div class="info-item">
                    <span class="label">Name</span>
                    <span class="value">{{booking.passengerName}}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Email</span>
                    <span class="value">{{booking.email}}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Phone</span>
                    <span class="value">{{booking.phone}}</span>
                  </div>
                  <div class="info-item">
                    <span class="label">Age</span>
                    <span class="value">{{booking.age}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Flight Details -->
          <div class="flight-card">
            <div class="card-header">
              <h5>Flight Details</h5>
              <div class="flight-status confirmed">Confirmed</div>
            </div>
            
            <div class="card-content">
              <div class="airline-section">
                <div class="airline-logo">{{getAirlineInitials(flight.airline)}}</div>
                <div class="airline-info">
                  <div class="airline-name">{{flight.airline}}</div>
                  <div class="flight-number">{{flight.flightNumber}}</div>
                  <div class="aircraft" *ngIf="flight.aircraft">{{flight.aircraft}}</div>
                </div>
              </div>

              <div class="flight-route">
                <div class="departure">
                  <div class="time">{{flight.departureTime}}</div>
                  <div class="location">{{flight.source}}</div>
                  <div class="date">{{getCurrentDate()}}</div>
                </div>
                
                <div class="route-info">
                  <div class="duration">{{flight.duration}}</div>
                  <div class="route-line"></div>
                  <div class="stops">Non-stop</div>
                </div>
                
                <div class="arrival">
                  <div class="time">{{flight.arrivalTime}}</div>
                  <div class="location">{{flight.destination}}</div>
                  <div class="date">{{getCurrentDate()}}</div>
                </div>
              </div>

              <div class="flight-extras">
                <div class="extra-item">
                  <span class="extra-icon">🧳</span>
                  <span>20kg Check-in Baggage</span>
                </div>
                <div class="extra-item">
                  <span class="extra-icon">🎒</span>
                  <span>7kg Cabin Baggage</span>
                </div>
                <div class="extra-item">
                  <span class="extra-icon">🍽️</span>
                  <span>Complimentary Meal</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Summary -->
          <div class="payment-card" *ngIf="payment">
            <div class="card-header">
              <h5>Payment Summary</h5>
              <div class="payment-status paid">Paid</div>
            </div>
            
            <div class="card-content">
              <div class="payment-details">
                <div class="payment-row">
                  <span>Flight Fare</span>
                  <span>₹{{booking.amount | number}}</span>
                </div>
                <div class="payment-total">
                  <span>Total Paid</span>
                  <span class="total-amount">₹{{booking.amount | number}}</span>
                </div>
              </div>
              
              <div class="transaction-info">
                <div class="transaction-row">
                  <span>Transaction ID</span>
                  <span>{{payment.transactionId || 'TXN' }}</span>
                </div>
                <div class="transaction-row">
                  <span>Payment Method</span>
                  <span>Credit/Debit Card</span>
                </div>
                <div class="transaction-row">
                  <span>Payment Time</span>
                  <span>{{getCurrentDateTime()}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="action-section">
          <button class="btn-download" (click)="downloadTicket()">
            Download Ticket
          </button>
          <button class="btn-home" routerLink="/">
            Book Another Flight
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Layout */
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .success-page {
      background: #f5f5f5;
      min-height: 100vh;
      padding: 2rem 0;
    }

    /* Success Header */
    .success-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .success-icon {
      margin-bottom: 1rem;
    }

    .check-circle {
      width: 80px;
      height: 80px;
      background: #28a745;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0 auto;
      box-shadow: 0 4px 20px rgba(40, 167, 69, 0.3);
    }

    .success-title {
      color: #28a745;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .success-message {
      color: #666;
      max-width: 500px;
      margin: 0 auto;
      line-height: 1.5;
    }

    /* Booking Details */
    .booking-details {
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .confirmation-card, .flight-card, .payment-card {
      background: white;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      overflow: hidden;
    }

    .card-header {
      background: #f8f9fa;
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e0e0e0;
    }

    .card-header h5 {
      margin: 0;
      color: #333;
      font-weight: 600;
    }

    .booking-ref {
      text-align: right;
    }

    .ref-label {
      display: block;
      font-size: 0.8rem;
      color: #666;
      margin-bottom: 0.25rem;
    }

    .ref-number {
      font-weight: 600;
      color: #007bff;
      font-family: monospace;
      font-size: 1.1rem;
    }

    .flight-status, .payment-status {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .flight-status.confirmed {
      background: #d4edda;
      color: #155724;
    }

    .payment-status.paid {
      background: #d1ecf1;
      color: #0c5460;
    }

    .card-content {
      padding: 1.5rem;
    }

    /* Passenger Info */
    .passenger-info h6 {
      color: #333;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .info-item .label {
      font-size: 0.8rem;
      color: #666;
      font-weight: 500;
    }

    .info-item .value {
      color: #333;
      font-weight: 500;
    }

    /* Flight Details */
    .airline-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #f0f0f0;
    }

    .airline-logo {
      width: 50px;
      height: 50px;
      background: #007bff;
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1rem;
    }

    .airline-name {
      font-weight: 600;
      color: #333;
      margin-bottom: 0.25rem;
    }

    .flight-number {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }

    .aircraft {
      color: #999;
      font-size: 0.8rem;
    }

    .flight-route {
      display: grid;
      grid-template-columns: 1fr 150px 1fr;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .departure, .arrival {
      text-align: center;
    }

    .time {
      font-size: 1.4rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .location {
      color: #666;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .date {
      font-size: 0.8rem;
      color: #999;
    }

    .route-info {
      text-align: center;
    }

    .duration {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .route-line {
      height: 2px;
      background: #ddd;
      margin: 0.5rem 0;
      position: relative;
    }

    .route-line::after {
      content: '✈';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      color: #007bff;
      padding: 0 0.5rem;
      font-size: 0.9rem;
    }

    .stops {
      font-size: 0.8rem;
      color: #28a745;
      font-weight: 500;
    }

    .flight-extras {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .extra-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #f8f9fa;
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      font-size: 0.85rem;
      color: #666;
    }

    .extra-icon {
      font-size: 1rem;
    }

    /* Payment Details */
    .payment-details {
      margin-bottom: 1rem;
    }

    .payment-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .payment-row span:first-child {
      color: #666;
    }

    .payment-row span:last-child {
      font-weight: 500;
      color: #333;
    }

    .payment-total {
      display: flex;
      justify-content: space-between;
      padding-top: 0.75rem;
      border-top: 1px solid #f0f0f0;
      font-weight: 600;
    }

    .total-amount {
      color: #28a745;
      font-size: 1.2rem;
    }

    .transaction-info {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 6px;
      margin-top: 1rem;
    }

    .transaction-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.85rem;
    }

    .transaction-row:last-child {
      margin-bottom: 0;
    }

    .transaction-row span:first-child {
      color: #666;
    }

    .transaction-row span:last-child {
      font-weight: 500;
      color: #333;
      font-family: monospace;
    }

    /* Information Section */
    .info-section {
      margin-bottom: 3rem;
    }

    .info-section h5 {
      color: #333;
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    

     

    .info-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .info-icon {
      font-size: 1.2rem;
    }

    .info-header span:last-child {
      font-weight: 600;
      color: #333;
    }

    

    /* Action Section */
    .action-section {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .btn-download {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .btn-download:hover {
      background: #0056b3;
    }

    .btn-home {
      background: #6c757d;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }

    .btn-home:hover {
      background: #5a6268;
      color: white;
      text-decoration: none;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .success-page {
        padding: 1rem 0;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }

      .flight-route {
        grid-template-columns: 1fr;
        gap: 1rem;
        text-align: center;
      }

      .route-info {
        order: 2;
      }

      .action-section {
        flex-direction: column;
        align-items: center;
      }

      .btn-download, .btn-home {
        width: 100%;
        max-width: 300px;
        justify-content: center;
      }

      .flight-extras {
        justify-content: center;
      }
    }
  `]
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
      
      // Simple QR pattern
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