import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="booking-container">
      <div class="container">
        
        <!-- Header -->
        <div class="booking-header">
          <h2 class="page-title">Complete Your Booking</h2>
          <p class="page-subtitle">Review flight details and enter passenger information</p>
        </div>

        <div class="row">
          
          <!-- Flight Summary -->
          <div class="col-lg-4">
            <div class="flight-summary" *ngIf="flight">
              <h5 class="summary-title">
                <span class="title-icon">✈️</span>
                Flight Summary
              </h5>

              <div class="flight-card">
                <div class="airline-header">
                  <div class="airline-info">
                    <div class="airline-logo">{{getAirlineIcon(flight.airline)}}</div>
                    <div>
                      <h6 class="airline-name">{{flight.airline}}</h6>
                      <span class="flight-number">{{flight.flightNumber}}</span>
                    </div>
                  </div>
                </div>

                <div class="route-info">
                  <div class="route-section">
                    <div class="route-point">
                      <div class="time">{{flight.departureTime}}</div>
                      <div class="location">{{flight.source}}</div>
                      <div class="code">{{getAirportCode(flight.source)}}</div>
                    </div>
                    
                    <div class="route-middle">
                      <div class="duration">{{flight.duration}}</div>
                      <div class="route-line">
                        <span class="line"></span>
                        <span class="plane-icon">✈</span>
                      </div>
                      <div class="direct">Direct</div>
                    </div>
                    
                    <div class="route-point">
                      <div class="time">{{flight.arrivalTime}}</div>
                      <div class="location">{{flight.destination}}</div>
                      <div class="code">{{getAirportCode(flight.destination)}}</div>
                    </div>
                  </div>
                </div>

                <div class="price-summary">
                  <hr class="price-divider">
                  <div class="price-total">
                    <span>Total Amount</span>
                    <span class="total-price">₹{{flight.price}}</span>
                  </div>
                </div>

                <div class="included-services">
                  <h6 class="services-title">Included Services</h6>
                  <div class="services-list">
                    <div class="service-item">🧳 Check-in Baggage (20kg)</div>
                    <div class="service-item">🎒 Cabin Baggage (7kg)</div>
                    <div class="service-item">🍽️ Complimentary Meal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Passenger Form -->
          <div class="col-lg-8">
            <div class="form-container">
              <h5 class="form-title">
                <span class="title-icon">👤</span>
                Passenger Information
              </h5>

              <form [formGroup]="passengerForm" (ngSubmit)="proceedToPay()" class="passenger-form">
                
                <div class="form-section">
                  <h6 class="section-title">Personal Details</h6>
                  <div class="form-row">
                    <div class="form-group col-12">
                      <label class="form-label">Full Name *</label>
                      <input formControlName="name" 
                             type="text"
                             class="form-control"
                             [class.is-invalid]="passengerForm.get('name')?.invalid && passengerForm.get('name')?.touched"
                             placeholder="Enter full name as per ID">
                      <div class="invalid-feedback" 
                           *ngIf="passengerForm.get('name')?.invalid && passengerForm.get('name')?.touched">
                        Please enter a valid name (minimum 3 characters)
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label class="form-label">Age *</label>
                      <input formControlName="age" 
                             type="number"
                             class="form-control"
                             [class.is-invalid]="passengerForm.get('age')?.invalid && passengerForm.get('age')?.touched"
                             placeholder="Age">
                      <div class="invalid-feedback" 
                           *ngIf="passengerForm.get('age')?.invalid && passengerForm.get('age')?.touched">
                        Please enter a valid age
                      </div>
                    </div>

                    <div class="form-group col-md-6">
                      <label class="form-label">Gender *</label>
                      <select formControlName="gender" 
                              class="form-control"
                              [class.is-invalid]="passengerForm.get('gender')?.invalid && passengerForm.get('gender')?.touched">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <div class="invalid-feedback" 
                           *ngIf="passengerForm.get('gender')?.invalid && passengerForm.get('gender')?.touched">
                        Please select your gender
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-section">
                  <h6 class="section-title">Contact Information</h6>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label class="form-label">Email Address *</label>
                      <input formControlName="email" 
                             type="email"
                             class="form-control"
                             [class.is-invalid]="passengerForm.get('email')?.invalid && passengerForm.get('email')?.touched"
                             placeholder="your.email@example.com">
                      <div class="invalid-feedback" 
                           *ngIf="passengerForm.get('email')?.invalid && passengerForm.get('email')?.touched">
                        Please enter a valid email address
                      </div>
                    </div>

                    <div class="form-group col-md-6">
                      <label class="form-label">Phone Number *</label>
                      <input formControlName="phone" 
                             type="tel"
                             class="form-control"
                             [class.is-invalid]="passengerForm.get('phone')?.invalid && passengerForm.get('phone')?.touched"
                             placeholder="10-digit mobile number">
                      <div class="invalid-feedback" 
                           *ngIf="passengerForm.get('phone')?.invalid && passengerForm.get('phone')?.touched">
                        Please enter a valid 10-digit phone number
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Important Notes -->
                <div class="info-alert">
                  <div class="alert-icon">ℹ️</div>
                  <div class="alert-content">
                    <h6 class="alert-title">Important Information</h6>
                    <ul class="alert-list">
                      <li>Ensure name matches your government-issued ID</li>
                      <li>Arrive at airport 2 hours before departure</li>
                      <li>Valid ID proof required for check-in</li>
                    </ul>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="form-actions">
                  <button type="button" 
                          class="btn btn-secondary"
                          (click)="goBack()">
                    ← Back to Results
                  </button>
                  
                  <button type="submit" 
                          class="btn btn-primary"
                          [disabled]="passengerForm.invalid">
                    <span class="btn-icon">💳</span>
                    Proceed to Payment
                    <span class="btn-arrow">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .booking-container {
      background: #f8f9fa;
      min-height: 100vh;
      padding: 2rem 0;
    }

    .booking-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .page-title {
      color: #333;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .page-subtitle {
      color: #6c757d;
      margin: 0;
    }

    /* Flight Summary */
    .flight-summary {
      position: sticky;
      top: 100px;
    }

    .summary-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #1976d2;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    .flight-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .airline-header {
      background: linear-gradient(135deg, #1976d2, #1565c0);
      color: white;
      padding: 1.5rem;
    }

    .airline-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .airline-logo {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .airline-name {
      margin: 0;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .flight-number {
      opacity: 0.9;
      font-size: 0.9rem;
    }

    .route-info {
      padding: 2rem 1.5rem;
    }

    .route-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
    }

    .route-point {
      text-align: center;
      flex: 1;
    }

    .time {
      font-size: 1.3rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .location {
      font-weight: 600;
      color: #555;
      margin-bottom: 0.25rem;
    }

    .code {
      background: #e3f2fd;
      color: #1976d2;
      padding: 0.25rem 0.5rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .route-middle {
      text-align: center;
      flex: 1;
    }

    .duration {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .route-line {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin: 0.5rem 0;
    }

    .line {
      width: 60px;
      height: 2px;
      background: #ddd;
      border-radius: 1px;
    }

    .plane-icon {
      color: #1976d2;
      font-size: 1.1rem;
    }

    .direct {
      font-size: 0.75rem;
      color: #4caf50;
      font-weight: 500;
    }

    /* Price Summary */
    .price-summary {
      padding: 1.5rem;
      background: #f8f9fa;
      border-top: 1px solid #e9ecef;
    }

    .price-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .price-row span:first-child {
      color: #666;
    }

    .price-row span:last-child {
      font-weight: 600;
      color: #333;
    }

    .price-divider {
      margin: 1rem 0;
      border-color: #dee2e6;
    }

    .price-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 700;
    }

    .total-price {
      color: #4caf50;
      font-size: 1.3rem;
    }

    /* Included Services */
    .included-services {
      padding: 1.5rem;
      border-top: 1px solid #e9ecef;
    }

    .services-title {
      margin-bottom: 1rem;
      color: #333;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .services-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .service-item {
      font-size: 0.85rem;
      color: #555;
      padding: 0.25rem 0;
    }

    /* Form Container */
    .form-container {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .form-title {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 1.5rem 2rem;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
    }

    .passenger-form {
      padding: 2rem;
    }

    .form-section {
      margin-bottom: 2.5rem;
    }

    .section-title {
      color: #333;
      font-weight: 600;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #f0f0f0;
      font-size: 1rem;
    }

    .form-row {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .form-group {
      flex: 1;
      min-width: 250px;
    }

    .form-group.col-12 {
      flex: 1 1 100%;
      min-width: 100%;
    }

    .form-group.col-md-6 {
      flex: 1 1 calc(50% - 0.75rem);
      min-width: 250px;
    }

    .form-label {
      display: block;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .form-control {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.2s ease;
      background: #fff;
    }

    .form-control:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
    }

    .form-control.is-invalid {
      border-color: #dc3545;
      box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }

    .invalid-feedback {
      color: #dc3545;
      font-size: 0.85rem;
      margin-top: 0.5rem;
      display: block;
    }

    /* Info Alert */
    .info-alert {
      background: #e3f2fd;
      border: 1px solid #bbdefb;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      gap: 1rem;
    }

    .alert-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .alert-content {
      flex: 1;
    }

    .alert-title {
      margin: 0 0 0.75rem 0;
      color: #1976d2;
      font-weight: 600;
      font-size: 1rem;
    }

    .alert-list {
      margin: 0;
      padding-left: 1rem;
      list-style: none;
    }

    .alert-list li {
      color: #555;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      position: relative;
    }

    .alert-list li::before {
      content: '•';
      color: #1976d2;
      font-weight: bold;
      position: absolute;
      left: -1rem;
    }

    /* Form Actions */
    .form-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding-top: 2rem;
      border-top: 2px solid #f0f0f0;
    }

    .btn {
      padding: 0.875rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, #4caf50, #45a049);
      color: white;
      flex: 1;
      justify-content: center;
      max-width: 300px;
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #ccc;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
    }

    .btn-secondary:hover {
      background: #5a6268;
      transform: translateY(-1px);
    }

    /* Utility Classes */
    .title-icon {
      font-size: 1.2rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .booking-container {
        padding: 1rem 0;
      }

      .flight-summary {
        position: static;
        margin-bottom: 2rem;
      }

      .form-row {
        flex-direction: column;
        gap: 1rem;
      }

      .form-group {
        min-width: 100%;
      }

      .form-actions {
        flex-direction: column-reverse;
      }

      .btn-primary {
        max-width: none;
        width: 100%;
      }

      .passenger-form {
        padding: 1.5rem;
      }

      .route-section {
        flex-direction: column;
        gap: 1rem;
      }

      .route-middle {
        order: 2;
      }
    }

    @media (max-width: 576px) {
      .booking-header {
        margin-bottom: 2rem;
      }

      .page-title {
        font-size: 1.5rem;
      }

      .flight-card {
        margin: 0 1rem;
      }

      .form-container {
        margin: 0 1rem;
      }
    }
  `]
})
export class BookingComponent {
  flight: any;

  passengerForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[0-9]{10}$/)] }),
    age: new FormControl(18, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
    gender: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {
    // Get flight details from query params
    this.route.queryParams.subscribe(params => {
      if (params && params['flightId']) {
        this.flight = {
          id: params['flightId'],
          flightNumber: params['flightNumber'],
          source: params['source'],
          destination: params['destination'],
          price: params['price'],
          airline: params['airline'] || 'Air India',
          aircraft: params['aircraft'] || 'Airbus A320',
          departureTime: params['departureTime'] || '17:00',
          arrivalTime: params['arrivalTime'] || '19:30',
          duration: params['duration'] || '2h 30m'
        };
      }
    });
  }

  getAirportCode(location: string): string {
    return location ? location.substring(0, 3).toUpperCase() : 'XXX';
  }

  getAirlineIcon(airline: string): string {
    const icons: {[key: string]: string} = {
      'IndiGo': '🔵',
      'Air India': '🔴',
      'SpiceJet': '🟡',
      'Vistara': '🟣',
      'GoAir': '🟢'
    };
    return icons[airline] || '✈️';
  }

  getTaxAmount(): number {
    return Math.round(this.flight?.price * 0.12) || 0;
  }

  getTotalPrice(): number {
    return Math.round(this.flight?.price * 1) || 0;
  }

  goBack() {
    this.router.navigate(['/search-results'], {
      queryParams: {
        source: this.flight?.source,
        destination: this.flight?.destination,
        date: new Date().toISOString().split('T')[0]
      }
    });
  }

  proceedToPay() {
    if (this.passengerForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.passengerForm.controls).forEach(key => {
        this.passengerForm.get(key)?.markAsTouched();
      });
      return;
    }

    const passenger = this.passengerForm.value;
    const bookingPayload = {
      flightId: this.flight.id,
      passengerName: passenger.name,
      email: passenger.email,
      phone: passenger.phone,
      age: passenger.age,
      gender: passenger.gender,
      amount: this.flight.price
    };

    // Call booking API
    this.bookingService.createBooking(bookingPayload).subscribe({
      next: (res) => {
        console.log("Booking created:", res);
        // navigate to payment page with booking response
        this.router.navigate(['/payment'], { state: { booking: res } });
      },
      error: (err) => {
        console.error('Booking failed:', err);
        alert('Booking failed, please try again.');
      }
    });
  }
}