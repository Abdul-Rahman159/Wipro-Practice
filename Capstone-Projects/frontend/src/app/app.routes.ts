import { Routes } from '@angular/router';

import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BookingSuccessComponent } from './components/booking-success/booking-success.component';
import { PaymentFailedComponent } from './components/payment-failed/payment-failed.component';

export const routes: Routes = [
  { path: '', component: FlightSearchComponent },              // 1: Search form
  { path: 'results', component: SearchResultsComponent },      // 2: Search results
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'booking', component: BookingComponent },            // 3: Booking details
  { path: 'payment', component: PaymentComponent },            // 4: Payment form
  { path: 'booking-success', component: BookingSuccessComponent }, // 5: Payment success + PDF
  { path: 'payment-failed', component: PaymentFailedComponent },   // 6: Payment failed
  { path: '**', redirectTo: '' }                               // fallback → homepage
];
