import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
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

    if (this.selectedAirlines.length > 0) {
      filtered = filtered.filter(f => this.selectedAirlines.includes(f.airline));
    }

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
