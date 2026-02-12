export type TransportType = 'all' | 'train' | 'bus';
export type StepType = 'search' | 'results' | 'checkout' | 'success';

export interface Trip {
  id: number;
  type: 'train' | 'bus';
  company: string;
  departure: string;
  arrival: string;
  price: number;
  duration: string;
  rating: number;
  fast?: boolean;
  cheap?: boolean;
}

export interface SearchData {
  origin: string;
  destination: string;
  date: string;
  passengers: number;
}