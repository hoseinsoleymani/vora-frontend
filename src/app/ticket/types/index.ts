export interface StopInfo {
  airport: string;
  duration: string;
}

export interface Flight {
  airline: string;
  airlineImage: string;
  departureTime: string;
  departureCity: string;
  arrivalTime: string;
  arrivalCity: string;
  duration: string;
  price: string;
  flightNumber: string;
  stops: string;
  stopInfo: StopInfo[];
}

export interface SearchParams {
  origin?: string;
  destination?: string;
  departure_date?: string;
  adults?: string;
  selected_date?: string;
  selectedItemIndex?: string;
  currentIndex?: string;
  page?: string;
  current_step?: string;
  sort_by?: string;
} 