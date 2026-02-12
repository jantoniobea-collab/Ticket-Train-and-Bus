import React from 'react';
import { Search, Train, Bus, MapPin, Calendar, CheckCircle2, Clock, Users } from 'lucide-react';
import { CITIES } from '../constants';
import { SearchData, TransportType } from '../types';

interface SearchStepProps {
  searchData: SearchData;
  setSearchData: (data: SearchData) => void;
  transportType: TransportType;
  setTransportType: (type: TransportType) => void;
  onSearch: (e: React.FormEvent) => void;
}

export const SearchStep: React.FC<SearchStepProps> = ({
  searchData,
  setSearchData,
  transportType,
  setTransportType,
  onSearch
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Tu próximo destino, <br /><span className="text-indigo-600">a un clic de distancia.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compara y reserva billetes de tren y autobús en toda España con los mejores precios garantizados.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setTransportType('all')}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${transportType === 'all' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Search size={18} /> Todos
          </button>
          <button 
            onClick={() => setTransportType('train')}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${transportType === 'train' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Train size={18} /> Tren
          </button>
          <button 
            onClick={() => setTransportType('bus')}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${transportType === 'bus' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Bus size={18} /> Autobús
          </button>
        </div>

        <form onSubmit={onSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block ml-1">Origen</label>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:ring-2 ring-indigo-500 transition-all">
              <MapPin className="text-gray-400 mr-2" size={20} />
              <select 
                className="bg-transparent w-full focus:outline-none text-gray-700"
                value={searchData.origin}
                onChange={(e) => setSearchData({...searchData, origin: e.target.value})}
                required
              >
                <option value="">¿Desde dónde?</option>
                {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block ml-1">Destino</label>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:ring-2 ring-indigo-500 transition-all">
              <MapPin className="text-gray-400 mr-2" size={20} />
              <select 
                className="bg-transparent w-full focus:outline-none text-gray-700"
                value={searchData.destination}
                onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                required
              >
                <option value="">¿A dónde vas?</option>
                {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-bold text-gray-400 uppercase mb-1 block ml-1">Fecha</label>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:ring-2 ring-indigo-500 transition-all">
              <Calendar className="text-gray-400 mr-2" size={20} />
              <input 
                type="date" 
                className="bg-transparent w-full focus:outline-none text-gray-700"
                value={searchData.date}
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="flex items-end">
            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Buscar Billete
            </button>
          </div>
        </form>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="text-green-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Mejor Precio</h3>
          <p className="text-gray-500 text-sm">Garantizamos las tarifas más bajas del mercado.</p>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-blue-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Sin Esperas</h3>
          <p className="text-gray-500 text-sm">Reserva en menos de 2 minutos desde cualquier dispositivo.</p>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-purple-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Atención 24/7</h3>
          <p className="text-gray-500 text-sm">Nuestro equipo está listo para ayudarte en todo momento.</p>
        </div>
      </div>
    </div>
  );
};