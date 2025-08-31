export interface BookingRequest {
  flightId: number;
  passengerName: string;
  amount: number;
  cardNumber?: string;
  expiry?: string;
}

export interface BookingResponse {
  id?: number;
  flightId: number;
  passengerName: string;
  amount: number;
  status?: string;
  createdAt?: string;
}
