import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
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

    this.bookingService.createBooking(bookingPayload).subscribe({
      next: (res) => {
        console.log("Booking created:", res);
        this.router.navigate(['/payment'], { state: { booking: res } });
      },
      error: (err) => {
        console.error('Booking failed:', err);
        alert('Booking failed, please try again.');
      }
    });
  }
}
