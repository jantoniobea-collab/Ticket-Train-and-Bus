import { Trip } from './types';

export const CITIES = [
  "Madrid", 
  "Barcelona", 
  "Valencia", 
  "Sevilla", 
  "Bilbao", 
  "Málaga", 
  "Zaragoza",
  "Vigo",
  "Pontevedra"
];

export const MOCK_TRIPS: Trip[] = [
  { id: 1, type: 'train', company: 'Renfe Ave', departure: '08:00', arrival: '10:30', price: 45.50, duration: '2h 30m', rating: 4.8, fast: true },
  { id: 2, type: 'train', company: 'Iryo', departure: '09:15', arrival: '12:00', price: 32.00, duration: '2h 45m', rating: 4.7, cheap: true },
  { id: 3, type: 'bus', company: 'Alsa', departure: '07:30', arrival: '13:30', price: 18.90, duration: '6h 00m', rating: 4.5, cheap: true },
  { id: 4, type: 'bus', company: 'FlixBus', departure: '10:00', arrival: '16:15', price: 22.00, duration: '6h 15m', rating: 4.3 },
  { id: 5, type: 'train', company: 'Ouigo', departure: '14:00', arrival: '16:40', price: 25.00, duration: '2h 40m', rating: 4.6 },
];