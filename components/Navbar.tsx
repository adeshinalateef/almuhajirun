
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center text-amber-400 font-bold text-2xl shadow-lg">M</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">Al-Muhaajirun</span>
              <span className="text-xs font-semibold text-emerald-700 tracking-[0.2em] uppercase">Institute</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Home</a>
            <a href="#about" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">About</a>
            <a href="#programs" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Programs</a>
            <a href="#support" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Support</a>
            <button className="bg-emerald-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-900 transition-all shadow-md">
              Enrollment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-emerald-700 p-2">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-6 px-4 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <a href="#home" className="block text-slate-600 hover:text-emerald-700 font-medium py-2">Home</a>
          <a href="#about" className="block text-slate-600 hover:text-emerald-700 font-medium py-2">About</a>
          <a href="#programs" className="block text-slate-600 hover:text-emerald-700 font-medium py-2">Programs</a>
          <a href="#support" className="block text-slate-600 hover:text-emerald-700 font-medium py-2">Support</a>
          <button className="w-full bg-emerald-800 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-all">
            Start Enrollment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
