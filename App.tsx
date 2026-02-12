import React, { useState, useMemo } from 'react';
import { Train } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SearchStep } from './components/SearchStep';
import { ResultsStep } from './components/ResultsStep';
import { CheckoutStep } from './components/CheckoutStep';
import { SuccessStep } from './components/SuccessStep';
import { Trip, SearchData, StepType, TransportType } from './types';
import { MOCK_TRIPS } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<StepType>('search');
  const [transportType, setTransportType] = useState<TransportType>('all');
  const [searchData, setSearchData] = useState<SearchData>({
    origin: '',
    destination: '',
    date: '',
    passengers: 1
  });
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchData.origin && searchData.destination) {
      setStep('results');
    }
  };

  const filteredTrips = useMemo(() => {
    if (transportType === 'all') return MOCK_TRIPS;
    return MOCK_TRIPS.filter(trip => trip.type === transportType);
  }, [transportType]);

  const handleSelectTrip = (trip: Trip) => {
    setSelectedTrip(trip);
    setStep('checkout');
  };

  const handleConfirmBooking = () => {
    setStep('success');
  };

  const handleReset = () => {
    setStep('search');
    setSelectedTrip(null);
    setSearchData({
      origin: '',
      destination: '',
      date: '',
      passengers: 1
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />
      
      <main className="animate-in fade-in duration-700 min-h-[calc(100vh-300px)]">
        {step === 'search' && (
          <SearchStep 
            searchData={searchData}
            setSearchData={setSearchData}
            transportType={transportType}
            setTransportType={setTransportType}
            onSearch={handleSearch}
          />
        )}
        
        {step === 'results' && (
          <ResultsStep 
            searchData={searchData}
            trips={filteredTrips}
            onSelectTrip={handleSelectTrip}
            onBack={() => setStep('search')}
          />
        )}
        
        {step === 'checkout' && selectedTrip && (
          <CheckoutStep 
            trip={selectedTrip}
            searchData={searchData}
            onConfirm={handleConfirmBooking}
          />
        )}
        
        {step === 'success' && selectedTrip && (
          <SuccessStep 
            trip={selectedTrip}
            searchData={searchData}
            onReset={handleReset}
          />
        )}
      </main>

      <footer className="mt-20 border-t bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 p-1 rounded-md">
                <Train className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-indigo-600">VíaLibre</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              La plataforma líder en España para la búsqueda y gestión de billetes de transporte terrestre. Viaja más, paga menos.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">Sobre Nosotros</li>
              <li className="hover:text-indigo-600 cursor-pointer">Prensa</li>
              <li className="hover:text-indigo-600 cursor-pointer">Blog de Viajes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Soporte</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li className="hover:text-indigo-600 cursor-pointer">Centro de Ayuda</li>
              <li className="hover:text-indigo-600 cursor-pointer">Términos de Uso</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contacto</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t text-center text-gray-400 text-sm">
          © 2024 VíaLibre S.L. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;