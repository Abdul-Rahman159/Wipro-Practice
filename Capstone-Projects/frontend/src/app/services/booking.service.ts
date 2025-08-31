import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:8080/booking'; // ⚡ tumhare backend port ke hisaab se update karo

  constructor(private http: HttpClient) {}

  createBooking(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, payload);
  }

    // payment API call
  makePayment(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/payment/pay`, payload);
  }

  getAllBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
}
