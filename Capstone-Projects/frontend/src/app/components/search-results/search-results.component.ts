import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Search Summary Header -->
    <div class="search-header">
      <div class="container">
        <div class="search-summary">
          <div class="route-display">
            <span class="route-city">{{params?.source || 'Source'}}</span>
            <span class="route-arrow">→</span>
            <span class="route-city">{{params?.destination || 'Destination'}}</span>
          </div>
          <div class="search-info">
            <span class="search-date">{{params?.date | date:'EEE, MMM d'}}</span>
            <span class="results-count" *ngIf="!loading">
              {{filteredFlights.length}} flights
            </span>
          </div>
        </div>
        <button class="modify-btn" (click)="goBack()">
          Modify Search
        </button>
      </div>
    </div>

    <div class="main-content">
      <div class="container">
        <div class="content-grid">
          
          <!-- Filters Sidebar -->
          <div class="filters-sidebar">
            <div class="filters-card">
              <div class="filters-header">
                <h6>Filter Results</h6>
                <button class="clear-filters" (click)="clearFilters()" *ngIf="hasActiveFilters()">
                  Clear all
                </button>
              </div>

              <!-- Airlines Filter -->
              <div class="filter-group" *ngIf="allAirlines.length > 0">
                <h6 class="filter-title">Airlines</h6>
                <div class="filter-options">
                  <label *ngFor="let airline of allAirlines" class="checkbox-label">
                    <input type="checkbox"
                           [value]="airline"
                           (change)="toggleAirline($event)"
                           [checked]="selectedAirlines.includes(airline)">
                    <span class="checkbox-text">
                      {{airline}}
                      <span class="flight-count">({{getAirlineFlightCount(airline)}})</span>
                    </span>
                  </label>
                </div>
              </div>

              <!-- Sort Options -->
              <div class="filter-group">
                <h6 class="filter-title">Sort by</h6>
                <div class="filter-options">
                  <label class="radio-label">
                    <input type="radio" name="sort" value="price-low" (change)="setSortFilter('price-low')" [checked]="sortFilter === 'price-low'">
                    <span class="radio-text">Price (Low to High)</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="sort" value="price-high" (change)="setSortFilter('price-high')" [checked]="sortFilter === 'price-high'">
                    <span class="radio-text">Price (High to Low)</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="sort" value="departure" (change)="setSortFilter('departure')" [checked]="sortFilter === 'departure'">
                    <span class="radio-text">Departure Time</span>
                  </label>
                </div>
              </div>

              <!-- Time Filter -->
              <div class="filter-group">
                <h6 class="filter-title">Departure Time</h6>
                <div class="filter-options">
                  <label class="checkbox-label">
                    <input type="checkbox" (change)="toggleTimeFilter('morning')" [checked]="timeFilters.includes('morning')">
                    <span class="checkbox-text">Morning (6AM - 12PM)</span>
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" (change)="toggleTimeFilter('afternoon')" [checked]="timeFilters.includes('afternoon')">
                    <span class="checkbox-text">Afternoon (12PM - 6PM)</span>
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" (change)="toggleTimeFilter('evening')" [checked]="timeFilters.includes('evening')">
                    <span class="checkbox-text">Evening (6PM - 12AM)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Flight Results -->
          <div class="results-main">
            
            <!-- Loading State -->
            <div *ngIf="loading" class="loading-state">
              <div class="loading-spinner"></div>
              <p>Searching flights...</p>
            </div>

            <!-- No Results -->
            <div *ngIf="!loading && flights.length === 0" class="empty-state">
              <h5>No flights found</h5>
              <p>Try different search criteria</p>
              <button class="btn-primary" (click)="goBack()">
                Search Again
              </button>
            </div>

            <!-- Flight List -->
            <div *ngIf="!loading && filteredFlights.length > 0" class="flights-list">
              <div *ngFor="let flight of filteredFlights" class="flight-card">
                
                <div class="flight-main">
                  <div class="airline-section">
                    <div class="airline-logo">{{getAirlineInitials(flight.airline)}}</div>
                    <div class="airline-info">
                      <div class="airline-name">{{flight.airline}}</div>
                      <div class="flight-number">{{flight.flightNumber}}</div>
                    </div>
                  </div>

                  <div class="route-section">
                    <div class="departure">
                      <div class="time">{{flight.departureTime}}</div>
                      <div class="city">{{flight.source}}</div>
                    </div>
                    
                    <div class="flight-path">
                      <div class="duration">{{flight.duration}}</div>
                      <div class="path-line"></div>
                      <div class="stops">Non-stop</div>
                    </div>
                    
                    <div class="arrival">
                      <div class="time">{{flight.arrivalTime}}</div>
                      <div class="city">{{flight.destination}}</div>
                    </div>
                  </div>

                  <div class="price-section">
                    <div class="price">₹{{flight.price | number}}</div>
                    <div class="price-label">per person</div>
                  </div>
                </div>

                <div class="flight-footer">
                  <div class="flight-details">
                    <span class="detail-item">Economy</span>
                    <span class="detail-item">Baggage: 20kg</span>
                    <span class="detail-item" *ngIf="flight.aircraft">{{flight.aircraft}}</span>
                  </div>
                  <button class="book-btn" (click)="select(flight)">
                    Select Flight
                  </button>
                </div>
              </div>
            </div>

            <!-- Filtered Results Empty -->
            <div *ngIf="!loading && flights.length > 0 && filteredFlights.length === 0" class="empty-state">
              <h5>No flights match your filters</h5>
              <p>Try adjusting your filters</p>
              <button class="btn-secondary" (click)="clearFilters()">
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Layout */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 2rem;
      align-items: start;
    }

    /* Search Header */
    .search-header {
      background: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      padding: 1.5rem 0;
    }

    .search-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .route-display {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .route-city {
      color: #2c3e50;
    }

    .route-arrow {
      color: #6c757d;
      font-size: 1.2rem;
    }

    .search-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
    }

    .search-date {
      color: #6c757d;
      font-size: 0.9rem;
    }

    .results-count {
      color: #28a745;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .modify-btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .modify-btn:hover {
      background: #0056b3;
    }

    /* Filters */
    .filters-sidebar {
      position: sticky;
      top: 2rem;
    }

    .filters-card {
      background: white;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      padding: 1.5rem;
    }

    .filters-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e9ecef;
    }

    .filters-header h6 {
      margin: 0;
      color: #2c3e50;
      font-weight: 600;
    }

    .clear-filters {
      background: none;
      border: none;
      color: #dc3545;
      font-size: 0.85rem;
      cursor: pointer;
      text-decoration: underline;
    }

    .filter-group {
      margin-bottom: 2rem;
    }

    .filter-title {
      color: #495057;
      font-weight: 600;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }

    .filter-options {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .checkbox-label, .radio-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      padding: 0.25rem 0;
    }

    .checkbox-text, .radio-text {
      font-size: 0.9rem;
      color: #495057;
    }

    .flight-count {
      color: #6c757d;
      font-size: 0.8rem;
    }

    input[type="checkbox"], input[type="radio"] {
      margin: 0;
    }

    /* Main Results */
    .results-main {
      min-height: 500px;
    }

    .flights-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .flight-card {
      background: white;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      padding: 1.5rem;
      transition: box-shadow 0.2s;
    }

    .flight-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .flight-main {
      display: grid;
      grid-template-columns: 200px 1fr 120px;
      gap: 2rem;
      align-items: center;
      margin-bottom: 1rem;
    }

    /* Airline Section */
    .airline-section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .airline-logo {
      width: 40px;
      height: 40px;
      background: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 600;
      color: #495057;
    }

    .airline-name {
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 0.25rem;
    }

    .flight-number {
      font-size: 0.85rem;
      color: #6c757d;
    }

    /* Route Section */
    .route-section {
      display: grid;
      grid-template-columns: 1fr 120px 1fr;
      gap: 1rem;
      align-items: center;
      text-align: center;
    }

    .departure, .arrival {
      text-align: center;
    }

    .time {
      font-size: 1.1rem;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 0.25rem;
    }

    .city {
      font-size: 0.9rem;
      color: #6c757d;
    }

    .flight-path {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .duration {
      font-size: 0.85rem;
      color: #6c757d;
      font-weight: 500;
    }

    .path-line {
      width: 60px;
      height: 1px;
      background: #dee2e6;
      position: relative;
    }

    .stops {
      font-size: 0.8rem;
      color: #28a745;
      font-weight: 500;
    }

    /* Price Section */
    .price-section {
      text-align: right;
    }

    .price {
      font-size: 1.4rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 0.25rem;
    }

    .price-label {
      font-size: 0.8rem;
      color: #6c757d;
    }

    /* Flight Footer */
    .flight-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid #f1f3f4;
    }

    .flight-details {
      display: flex;
      gap: 1rem;
    }

    .detail-item {
      font-size: 0.8rem;
      color: #6c757d;
      padding: 0.25rem 0.5rem;
      background: #f8f9fa;
      border-radius: 4px;
    }

    .book-btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1.5rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .book-btn:hover {
      background: #0056b3;
    }

    /* Loading State */
    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      gap: 1rem;
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #007bff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Empty State */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      gap: 1rem;
      text-align: center;
    }

    .empty-state h5 {
      color: #495057;
      margin-bottom: 0.5rem;
    }

    .empty-state p {
      color: #6c757d;
      margin-bottom: 1.5rem;
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
    }

    .btn-primary:hover {
      background: #0056b3;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .btn-secondary:hover {
      background: #545b62;
    }

    /* Responsive Design */
    @media (max-width: 992px) {
      .content-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .filters-sidebar {
        position: static;
      }

      .flight-main {
        grid-template-columns: 1fr;
        gap: 1rem;
        text-align: center;
      }

      .route-section {
        grid-template-columns: 1fr 80px 1fr;
      }

      .price-section {
        text-align: center;
      }
    }

    @media (max-width: 768px) {
      .search-summary {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .search-info {
        align-items: center;
      }

      .flight-footer {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .flight-details {
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  `]
})
export class SearchResultsComponent {
  flights: Flight[] = [];
  loading = false;
  params: any = {};
  selectedAirlines: string[] = [];
  allAirlines: string[] = [];
  sortFilter: string = '';
  timeFilters: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(p => {
      this.params = p || {};
      this.load();
    });
  }

  load() {
    const source = this.params?.source;
    const destination = this.params?.destination;
    const date = this.params?.date;

    if (!source || !destination || !date) {
      this.flights = [];
      this.loading = false;
      return;
    }

    this.loading = true;
    this.flightService.searchFlights(source, destination, date).subscribe({
      next: (res: Flight[]) => {
        this.flights = Array.isArray(res) ? res : (res && (res as any).flights) || [];
        this.allAirlines = [...new Set(this.flights.map(f => f.airline))];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Flight search failed:', err);
        this.flights = [];
        this.loading = false;
      }
    });
  }

  get filteredFlights(): Flight[] {
    let filtered = [...this.flights];

    // Airline filter
    if (this.selectedAirlines.length > 0) {
      filtered = filtered.filter(f => this.selectedAirlines.includes(f.airline));
    }

    // Time filter
    if (this.timeFilters.length > 0) {
      filtered = filtered.filter(f => {
        const hour = parseInt(f.departureTime.split(':')[0]);
        return this.timeFilters.some(filter => {
          switch(filter) {
            case 'morning': return hour >= 6 && hour < 12;
            case 'afternoon': return hour >= 12 && hour < 18;
            case 'evening': return hour >= 18 || hour < 6;
            default: return true;
          }
        });
      });
    }

    // Sort filter
    if (this.sortFilter === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortFilter === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortFilter === 'departure') {
      filtered.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
    }

    return filtered;
  }

  toggleAirline(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedAirlines.push(value);
    } else {
      this.selectedAirlines = this.selectedAirlines.filter(a => a !== value);
    }
  }

  toggleTimeFilter(filter: string) {
    if (this.timeFilters.includes(filter)) {
      this.timeFilters = this.timeFilters.filter(f => f !== filter);
    } else {
      this.timeFilters.push(filter);
    }
  }

  setSortFilter(filter: string) {
    this.sortFilter = filter;
  }

  clearFilters() {
    this.selectedAirlines = [];
    this.sortFilter = '';
    this.timeFilters = [];
  }

  hasActiveFilters(): boolean {
    return this.selectedAirlines.length > 0 || this.sortFilter !== '' || this.timeFilters.length > 0;
  }

  getAirlineFlightCount(airline: string): number {
    return this.flights.filter(f => f.airline === airline).length;
  }

  getAirlineInitials(airline: string): string {
    return airline.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  select(flight: Flight) {
    this.router.navigate(['/booking'], {
      queryParams: {
        flightId: flight.id,
        flightNumber: flight.flightNumber,
        source: flight.source,
        destination: flight.destination,
        price: flight.price,
        airline: flight.airline,
        aircraft: flight.aircraft,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        duration: flight.duration
      }
    });
  }
}