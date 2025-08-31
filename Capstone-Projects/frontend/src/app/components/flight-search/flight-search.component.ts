import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Hero Section with Background -->
    <div class="hero-section">
      
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">Find Your Perfect Flight</span>
          </h1>
          <p class="hero-subtitle">
            🌍 Search thousands of flights worldwide • 💰 Best prices guaranteed • ⚡ Instant booking
          </p>
        </div>
      </div>
    </div>

    <!-- Search Form -->
    <div class="search-container">
      <div class="container">
        <div class="search-card">
          <div class="search-header">
            <h3 class="search-title">
              <span class="search-icon">🔍</span>
              Search Flights
            </h3>
            <div class="trip-type">
              <span class="trip-badge">✈️ One Way</span>
            </div>
          </div>

          <form [formGroup]="form" (ngSubmit)="search()" class="search-form">
            <div class="form-row">
              <div class="form-group from-group">
                <label class="form-label">
                  <span class="label-icon">🛫</span>
                  From
                </label>
                <div class="input-wrapper">
                  <input formControlName="source" 
                         class="form-input" 
                         placeholder="Enter departure city"/>
                  <div class="input-decoration"></div>
                </div>
              </div>

              <div class="swap-button">
                <button type="button" class="swap-btn" (click)="swapLocations()">
                  <span class="swap-icon">⇄</span>
                </button>
              </div>

              <div class="form-group to-group">
                <label class="form-label">
                  <span class="label-icon">🛬</span>
                  To
                </label>
                <div class="input-wrapper">
                  <input formControlName="destination" 
                         class="form-input" 
                         placeholder="Enter destination city"/>
                  <div class="input-decoration"></div>
                </div>
              </div>

              <div class="form-group date-group">
                <label class="form-label">
                  <span class="label-icon">📅</span>
                  Departure Date
                </label>
                <div class="input-wrapper">
                  <input type="date" 
                         formControlName="date" 
                         class="form-input date-input"/>
                  <div class="input-decoration"></div>
                </div>
              </div>

              <div class="form-group search-group">
                <button class="search-btn" 
                        type="submit" 
                        [disabled]="loading || form.invalid"
                        [class.loading]="loading">
                  <span *ngIf="!loading" class="btn-content">
                    <span class="btn-icon">🚀</span>
                    <span class="btn-text">Search Flights</span>
                  </span>
                  <span *ngIf="loading" class="loading-content">
                    <span class="spinner"></span>
                    <span>Searching...</span>
                  </span>
                </button>
              </div>
            </div>
          </form>

          <!-- Status Messages -->
          <div class="status-messages">
            <div *ngIf="error" class="alert error-alert">
              <span class="alert-icon">⚠️</span>
              <span>{{error}}</span>
            </div>
            <div *ngIf="noResults" class="alert warning-alert">
              <span class="alert-icon">📭</span>
              <span>No flights available for the selected route/date. Try different options.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Hero Section */
    .hero-section {
      position: relative;
      height: 400px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cloud {
      position: absolute;
      font-size: 40px;
      opacity: 0.6;
      animation: float 15s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(-10px) translateX(-10px); }
      75% { transform: translateY(-30px) translateX(5px); }
    }

    @keyframes fly-across {
      0% { left: -100px; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: calc(100% + 100px); opacity: 0; }
    }

    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      color: white;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .gradient-text {
      background: linear-gradient(45deg, #fff, #e3f2fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      opacity: 0.95;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    }

    /* Search Container */
    .search-container {
      margin-top: -80px;
      position: relative;
      z-index: 100;
      padding-bottom: 4rem;
    }

    .search-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      padding: 2.5rem;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.2);
      animation: slideUp 0.8s ease-out;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .search-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .search-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1976d2;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
    }

    .search-icon {
      font-size: 1.3rem;
    }

    .trip-type {
      display: flex;
      gap: 0.5rem;
    }

    .trip-badge {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    /* Form Styling */
    .search-form {
      position: relative;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr 1fr 1fr;
      gap: 1.5rem;
      align-items: end;
    }

    .form-group {
      position: relative;
    }

    .form-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .label-icon {
      font-size: 1rem;
    }

    .input-wrapper {
      position: relative;
    }

    .form-input {
      width: 100%;
      padding: 1rem 1.2rem;
      border: 2px solid #e3f2fd;
      border-radius: 16px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
    }

    .form-input:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 4px rgba(25, 118, 210, 0.1);
      transform: translateY(-2px);
    }

    .input-decoration {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .form-input:focus + .input-decoration {
      width: 100%;
    }

    .date-input {
      color: #333;
    }

    .swap-btn {
      background: linear-gradient(135deg, #667eea, #764ba2);
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }

    .swap-btn:hover {
      transform: rotate(180deg) scale(1.1);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }

    /* Search Button */
    .search-btn {
      background: linear-gradient(135deg, #ff6b6b, #ff8e53);
      border: none;
      padding: 1rem 2rem;
      border-radius: 16px;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
      position: relative;
      overflow: hidden;
    }

    
    .btn-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
    }

    .loading-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Status Messages */
    .status-messages {
      margin-top: 1.5rem;
    }

    .alert {
      padding: 1rem 1.5rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      animation: fadeIn 0.5s ease;
    }

    .error-alert {
      background: rgba(244, 67, 54, 0.1);
      border: 1px solid rgba(244, 67, 54, 0.3);
      color: #d32f2f;
    }

    .warning-alert {
      background: rgba(255, 152, 0, 0.1);
      border: 1px solid rgba(255, 152, 0, 0.3);
      color: #f57c00;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    
    @keyframes bounce {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }

     
    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
        padding: 0 1rem;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .search-card {
        margin: 0 1rem;
        padding: 1.5rem;
      }

      .suggestions-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .search-card {
        border-radius: 16px;
        margin: 0 0.5rem;
      }
    }
  `]
})
export class FlightSearchComponent {
  loading = false;
  error = '';
  noResults = false;

  form = new FormGroup({
    source: new FormControl('Mumbai', { nonNullable: true, validators: [Validators.required] }),
    destination: new FormControl('Delhi', { nonNullable: true, validators: [Validators.required] }),
    date: new FormControl(this.today(), { nonNullable: true, validators: [Validators.required] })
  });

  constructor(
    private flightService: FlightService,
    private router: Router
  ) {}

  today(): string {
    return new Date().toISOString().slice(0, 10);
  }

  swapLocations() {
    const source = this.form.get('source')?.value;
    const destination = this.form.get('destination')?.value;
    
    this.form.patchValue({
      source: destination,
      destination: source
    });
  }

  fillRoute(from: string, to: string) {
    this.form.patchValue({
      source: from,
      destination: to
    });
  }

  search() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    this.noResults = false;

    const { source, destination, date } = this.form.getRawValue();

    this.flightService.searchFlights(source, destination, date).subscribe({
      next: (res: Flight[]) => {
        this.loading = false;
        if (res && res.length > 0) {
          // ✅ flights mil gaye → new page pe bhejna
          this.router.navigate(['/search-results'], {
            queryParams: { source, destination, date }
          });
        } else {
          // ❌ flights nahi mile
          this.noResults = true;
        }
      },
      error: _ => {
        this.error = 'Search failed';
        this.loading = false;
      }
    });
  }
}