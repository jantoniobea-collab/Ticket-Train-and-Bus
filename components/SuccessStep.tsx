import React from 'react';
import { CheckCircle2, Train, Bus, ChevronRight } from 'lucide-react';
import { SearchData, Trip } from '../types';

interface SuccessStepProps {
  trip: Trip;
  searchData: SearchData;
  onReset: () => void;
}

export const SuccessStep: React.FC<SuccessStepProps> = ({ trip, searchData, onReset }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <CheckCircle2 size={48} className="text-green-600" />
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">¡Reserva Completada!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Tu billete ha sido enviado a <strong>juan.perez@email.com</strong>. <br />
        También puedes descargarlo directamente en nuestra App móvil.
      </p>
      
      <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-left">
            <p className="text-xs font-bold text-gray-400 uppercase">Referencia</p>
            <p className="text-xl font-mono font-bold">VL-7829-XJ</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-400 uppercase">Precio Pagado</p>
            <p className="text-xl font-bold text-indigo-600">{trip.price.toFixed(2)}€</p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-4 border-t border-b border-gray-100 mb-6">
           <div className="p-3 bg-indigo-50 rounded-xl">
             {trip.type === 'train' ? <Train className="text-indigo-600" /> : <Bus className="text-orange-600" />}
           </div>
           <div className="text-left flex-1">
             <p className="font-bold text-lg">{trip.company}</p>
             <p className="text-gray-500">{searchData.origin} → {searchData.destination}</p>
           </div>
           <div className="text-right font-bold">
             <p>{trip.departure}</p>
             <p className="text-xs text-gray-400">Hoy</p>
           </div>
        </div>
        <button className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors">
          Descargar PDF <ChevronRight size={18} />
        </button>
      </div>

      <button 
        onClick={onReset}
        className="text-indigo-600 font-bold hover:underline"
      >
        Volver al inicio
      </button>
    </div>
  );
};