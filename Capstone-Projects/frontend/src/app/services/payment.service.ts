import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // ⚡ Yahan tum Gateway ya direct service ka URL use kar sakte ho
  private baseUrl = 'http://localhost:8080/payment'; 
  // agar direct service use karna ho: http://localhost:8301/payment

  constructor(private http: HttpClient) {}

  // payload = { bookingId, price, cardHolder, cardNumber, expiry, cvv }
  makePayment(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pay`, payload);
  }
}
