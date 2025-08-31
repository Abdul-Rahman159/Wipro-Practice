import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

const API = 'http://localhost:8080'; // API Gateway base URL

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient) {}

  // consistent method name
  searchFlights(source: string, destination: string, date: string): Observable<Flight[]> {
    const params = new HttpParams()
      .set('source', source || '')
      .set('destination', destination || '')
      .set('date', date || '');
    return this.http.get<Flight[]>(`${API}/flights/search`, { params });
  }
}
