import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-payment-failed',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="failed-page">
      <div class="container">
        <div class="failed-content">
          <div class="status-card">
            
            <!-- Status Icon -->
            <div class="status-icon error">
              <div class="icon-circle">✕</div>
            </div>

            <!-- Status Message -->
            <div class="status-message">
              <h2 class="status-title">Payment Failed</h2>
              <p class="status-description">
                Unfortunately, your payment could not be processed. 
                Please check your payment details and try again.
              </p>
            </div>

            <!-- Booking Details -->
            <div class="booking-info" *ngIf="booking">
              <h5>Booking Details</h5>
              <div class="booking-summary">
                <div class="booking-row">
                  <span>Passenger</span>
                  <span>{{ booking?.passengerName }}</span>
                </div>
                <div class="booking-row">
                  <span>Amount</span>
                  <span>₹{{ booking?.amount | number }}</span>
                </div>
              </div>
            </div>

            <!-- Common Issues -->
            <div class="help-section">
              <h6>Common Issues</h6>
              <ul class="help-list">
                <li>Insufficient balance in your account</li>
                <li>Incorrect card details entered</li>
                <li>Card expired or blocked</li>
                <li>Network connectivity issues</li>
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
              <button class="btn-secondary" (click)="tryAgain()">
                Try Different Payment
              </button>
              <button class="btn-primary" (click)="startOver()">
                Search New Flights
              </button>
            </div>

            <!-- Support Info -->
            <div class="support-info">
              <p>Need help? Contact our support team at 
                <a href="tel:1800-123-4567">1800-123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Layout */
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .failed-page {
      background: #f5f5f5;
      min-height: 100vh;
      padding: 3rem 0;
      display: flex;
      align-items: center;
    }

    .failed-content {
      width: 100%;
    }

    .status-card {
      background: white;
      border-radius: 12px;
      padding: 3rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border: 1px solid #e0e0e0;
    }

    /* Status Icon */
    .status-icon {
      margin-bottom: 1.5rem;
    }

    .icon-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      font-size: 2rem;
      font-weight: bold;
    }

    .status-icon.error .icon-circle {
      background: #fee;
      color: #dc3545;
      border: 3px solid #dc3545;
    }

    /* Status Message */
    .status-message {
      margin-bottom: 2rem;
    }

    .status-title {
      color: #dc3545;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .status-description {
      color: #666;
      line-height: 1.5;
      margin: 0;
    }

    /* Booking Info */
    .booking-info {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      text-align: left;
    }

    .booking-info h5 {
      color: #333;
      font-weight: 600;
      margin-bottom: 1rem;
      text-align: center;
    }

    .booking-summary {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .booking-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
    }

    .booking-row span:first-child {
      color: #666;
    }

    .booking-row span:last-child {
      font-weight: 500;
      color: #333;
    }

    /* Help Section */
    .help-section {
      text-align: left;
      margin-bottom: 2rem;
    }

    .help-section h6 {
      color: #333;
      font-weight: 600;
      margin-bottom: 0.75rem;
      text-align: center;
    }

    .help-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .help-list li {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;
    }

    .help-list li:before {
      content: '•';
      position: absolute;
      left: 0;
      color: #dc3545;
    }

    /* Action Buttons */
    .action-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      justify-content: center;
    }

    .btn-primary {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
      text-decoration: none;
    }

    .btn-primary:hover {
      background: #0056b3;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .btn-secondary:hover {
      background: #5a6268;
    }

    /* Support Info */
    .support-info {
      padding-top: 1.5rem;
      border-top: 1px solid #f0f0f0;
    }

    .support-info p {
      color: #666;
      font-size: 0.9rem;
      margin: 0;
    }

    .support-info a {
      color: #007bff;
      text-decoration: none;
    }

    .support-info a:hover {
      text-decoration: underline;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .failed-page {
        padding: 2rem 0;
      }

      .status-card {
        padding: 2rem 1.5rem;
      }

      .action-buttons {
        flex-direction: column;
      }

      .icon-circle {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }
    }
  `]
})
export class PaymentFailedComponent {
  booking: any = null;

  constructor(private router: Router) {
    // Safely handle state
    const state = history.state as any;
    this.booking = state?.booking || state?.flight || null;
  }

  tryAgain() {
    this.router.navigate(['/payment'], { state: { booking: this.booking } });
  }

  startOver() {
    this.router.navigate(['/']);
  }
}
