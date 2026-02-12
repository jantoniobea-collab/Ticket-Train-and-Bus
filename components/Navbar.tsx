import React from 'react';
import { Train } from 'lucide-react';

export const Navbar: React.FC = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="bg-indigo-600 p-2 rounded-lg">
        <Train className="text-white w-6 h-6" />
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
        VíaLibre
      </span>
    </div>
    <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
      <a href="#" className="hover:text-indigo-600 transition-colors">Viajes</a>
      <a href="#" className="hover:text-indigo-600 transition-colors">Mis Reservas</a>
      <a href="#" className="hover:text-indigo-600 transition-colors">Ayuda</a>
    </div>
    <button className="bg-gray-100 px-4 py-2 rounded-full font-semibold text-gray-700 hover:bg-gray-200 transition-all">
      Iniciar Sesión
    </button>
  </nav>
);