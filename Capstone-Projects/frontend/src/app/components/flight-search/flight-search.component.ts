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
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
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
          // flights mil gaye → new page pe bhejna
          this.router.navigate(['/search-results'], {
            queryParams: { source, destination, date }
          });
        } else {
          // flights nahi mile
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
