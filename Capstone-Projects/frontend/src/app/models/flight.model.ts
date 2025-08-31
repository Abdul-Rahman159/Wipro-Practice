export interface Flight {
  id?: number;
  flightNumber: string;
  airline: string;
  aircraft: string;
  source: string;
  destination: string;
  validFrom: string;
  validTo: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
}
