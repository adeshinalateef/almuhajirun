
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-28 overflow-hidden bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block text-emerald-900">Al-Muhaajirun Institute</span>
              <span className="block text-2xl md:text-3xl mt-2 font-semibold text-emerald-700">Learning Islam Upon Sound ‘Aqeedah & Sunnah</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Dedicated to teaching Islam upon the <strong className="text-emerald-800">Qur’an and authentic Sunnah</strong>, according to the understanding of the <strong className="text-emerald-800">Salaf aṣ-Ṣāliḥ</strong>. We build Muslims with correct belief, sound knowledge, and upright character.
            </p>
            
            <div className="mt-6 border-l-4 border-amber-500 pl-6 py-2 italic text-slate-500 bg-white/50 rounded-r-lg">
              “Whoever travels a path seeking knowledge, Allah will make easy for him a path to Paradise.”
              <span className="block font-bold mt-1 text-xs uppercase tracking-widest">— Ṣaḥīḥ Muslim</span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#programs" className="px-8 py-4 bg-emerald-800 text-white rounded-xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-100 text-center">
                Explore Our Programs
              </a>
              <a href="#support" className="px-8 py-4 bg-white text-emerald-800 border-2 border-emerald-100 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all text-center">
                Support the Institute
              </a>
            </div>
            
            <p className="mt-6 text-sm font-medium text-emerald-700 italic">
              Our approach emphasizes understanding, practice, and sincerity—before quantity.
            </p>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-3xl"></div>
              <img 
                src="/images/quran-1.jpg" 
                alt="Quran open on a book stand" 
                className="relative rounded-3xl shadow-2xl border-8 border-white object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
