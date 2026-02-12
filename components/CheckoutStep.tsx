import React from 'react';
import { Users, CreditCard, Train, Bus, Info } from 'lucide-react';
import { SearchData, Trip } from '../types';

interface CheckoutStepProps {
  trip: Trip;
  searchData: SearchData;
  onConfirm: () => void;
}

export const CheckoutStep: React.FC<CheckoutStepProps> = ({ trip, searchData, onConfirm }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <section className="bg-white p-8 rounded-3xl shadow-sm border">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users size={24} className="text-indigo-600" /> Detalles del Pasajero
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ring-indigo-500" placeholder="Ej. Juan" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ring-indigo-500" placeholder="Ej. Pérez" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ring-indigo-500" placeholder="juan.perez@email.com" />
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-sm border">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <CreditCard size={24} className="text-indigo-600" /> Método de Pago
          </h2>
          <div className="space-y-4">
            <div className="p-4 border-2 border-indigo-600 rounded-2xl flex items-center justify-between bg-indigo-50">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-indigo-600 border-4 border-white ring-1 ring-indigo-600"></div>
                <span className="font-bold text-indigo-900">Tarjeta de Crédito / Débito</span>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                <div className="w-8 h-5 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-2xl flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                <span className="font-bold text-gray-700">PayPal</span>
              </div>
              <div className="font-bold text-blue-600 italic">PayPal</div>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" placeholder="Número de tarjeta" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" placeholder="MM/AA" />
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" placeholder="CVC" />
            </div>
          </div>
        </section>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-indigo-100 sticky top-24">
          <h3 className="font-bold text-xl mb-4 pb-4 border-b">Resumen de tu Viaje</h3>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Trayecto</p>
                <p className="font-bold text-gray-800">{searchData.origin} a {searchData.destination}</p>
              </div>
              <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg">
                {trip.type === 'train' ? <Train size={20}/> : <Bus size={20}/>}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Fecha y Hora</p>
              <p className="font-bold text-gray-800">{searchData.date || 'Hoy'} • {trip.departure}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl flex items-center gap-2">
              <Info size={16} className="text-gray-400" />
              <p className="text-xs text-gray-500">Billete electrónico flexible. Cambio permitido hasta 2h antes.</p>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t">
            <div className="flex justify-between text-gray-600">
              <span>Tarifa Base</span>
              <span>{(trip.price * 0.8).toFixed(2)}€</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Impuestos y tasas</span>
              <span>{(trip.price * 0.2).toFixed(2)}€</span>
            </div>
            <div className="flex justify-between items-center pt-4 text-2xl font-black text-gray-900">
              <span>Total</span>
              <span className="text-indigo-600">{trip.price.toFixed(2)}€</span>
            </div>
          </div>

          <button 
            onClick={onConfirm}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-100 transition-all transform hover:scale-[1.02] mt-8"
          >
            Confirmar Reserva
          </button>
          <p className="text-center text-xs text-gray-400 mt-4 px-4">
            Al confirmar, aceptas nuestras condiciones generales de transporte.
          </p>
        </div>
      </div>
    </div>
  );
};