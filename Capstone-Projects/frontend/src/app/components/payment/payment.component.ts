import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  totalPrice: any = 0;
  booking: any = null;

  cardHolder: string = '';
  cardNumber: string = '';
  expiry: string = '';
  cvv: string = '';

  constructor(private http: HttpClient, private router: Router) {
    const state = history.state as any;
    this.booking = state?.booking || null;
    this.totalPrice = this.booking?.amount || this.booking?.price || 0;
  }

  pay() {
    if (!this.cardHolder || !this.cardNumber || !this.expiry || !this.cvv) {
      alert("Please fill all card details!");
      return;
    }

    const paymentPayload = {
      bookingId: this.booking.id,
      price: this.totalPrice,
      cardHolderName: this.cardHolder,
      cardNumber: this.cardNumber.replace(/\s/g, ''),
      cardExpiry: this.expiry,
      cvv: Number(this.cvv)
    };

    this.http.post("http://localhost:8080/payment/pay", paymentPayload).subscribe({
      next: (resp: any) => {
        console.log("Payment response:", resp);

        const paymentStatus = resp?.status || resp?.paymentStatus;
        let newStatus = "failed";
        if (paymentStatus && paymentStatus.toLowerCase().includes("success")) {
          newStatus = "successful";
        }

        this.http.put(`http://localhost:8080/booking/${this.booking.id}/status?status=${newStatus}`, {})
          .subscribe({
            next: (bookingResp: any) => {
              console.log("Booking updated:", bookingResp);

              const navigationData = {
                booking: bookingResp,
                flight: this.booking,
                payment: resp
              };

              if (newStatus === "successful") {
                this.router.navigate(['/booking-success'], { state: navigationData });
              } else {
                this.router.navigate(['/payment-failed'], { state: navigationData });
              }
            },
            error: (err) => {
              console.error("Failed to update booking status", err);
              this.router.navigate(['/payment-failed'], { state: { booking: this.booking } });
            }
          });
      },
      error: (err) => {
        console.error("Payment failed:", err);
        this.router.navigate(['/payment-failed'], { state: { booking: this.booking } });
      }
    });
  }
}
