import React from 'react';
import { ArrowRightLeft, Filter, Train, Bus, Star } from 'lucide-react';
import { SearchData, Trip } from '../types';

interface ResultsStepProps {
  searchData: SearchData;
  trips: Trip[];
  onSelectTrip: (trip: Trip) => void;
  onBack: () => void;
}

export const ResultsStep: React.FC<ResultsStepProps> = ({ searchData, trips, onSelectTrip, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button 
            onClick={onBack}
            className="text-indigo-600 font-semibold flex items-center gap-1 mb-2 hover:underline"
          >
            Modificar búsqueda
          </button>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
            {searchData.origin} <ArrowRightLeft size={20} className="text-gray-400" /> {searchData.destination}
          </h2>
          <p className="text-gray-500">Resultados para hoy • {searchData.passengers} pasajero</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-xl hover:bg-gray-50 transition-colors font-medium">
          <Filter size={18} /> Filtrar
        </button>
      </div>

      <div className="space-y-4">
        {trips.map((trip) => (
          <div 
            key={trip.id} 
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            onClick={() => onSelectTrip(trip)}
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4 min-w-[150px]">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                  {trip.type === 'train' ? <Train className="text-indigo-600" /> : <Bus className="text-orange-600" />}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{trip.company}</p>
                  <div className="flex items-center text-xs text-yellow-500 font-bold">
                    <Star size={12} fill="currentColor" /> {trip.rating}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-xl font-bold">{trip.departure}</p>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{searchData.origin}</p>
                </div>
                
                <div className="flex-1 max-w-[120px] flex flex-col items-center">
                  <span className="text-xs text-gray-400 font-medium mb-1">{trip.duration}</span>
                  <div className="w-full h-[2px] bg-gray-200 relative">
                    <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-gray-300 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-gray-300 -translate-y-1/2"></div>
                  </div>
                  <span className="text-[10px] text-indigo-500 font-bold mt-1 uppercase tracking-tighter">Directo</span>
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold">{trip.arrival}</p>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{searchData.destination}</p>
                </div>
              </div>

              <div className="text-right min-w-[120px]">
                <div className="flex flex-col items-end gap-1 mb-2">
                  {trip.cheap && <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">MÁS BARATO</span>}
                  {trip.fast && <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold">MÁS RÁPIDO</span>}
                </div>
                <p className="text-2xl font-black text-gray-900">{trip.price.toFixed(2)}€</p>
                <button className="mt-2 bg-indigo-50 text-indigo-600 px-4 py-1 rounded-lg text-sm font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  Seleccionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};