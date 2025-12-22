import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Support from './components/Support';
import ContactForm from './components/ContactForm';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Simple Trust Banner */}
        <div className="bg-emerald-950 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-1">Authentic</div>
              <div className="text-emerald-100 text-xs font-bold tracking-widest uppercase">Salafi Manhaj</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-1">Gradual</div>
              <div className="text-emerald-100 text-xs font-bold tracking-widest uppercase">At-Tadarruj</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-1">Applied</div>
              <div className="text-emerald-100 text-xs font-bold tracking-widest uppercase">Knowledge to Action</div>
            </div>
          </div>
        </div>

        <About />
        <Features /> {/* This is our Programs section */}
        <Support />

        {/* Contact/Inquiry Section */}
        <section id="contact" className="py-24 bg-slate-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 mb-12 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 underline decoration-emerald-800 decoration-4 underline-offset-8">Contact Us</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  For inquiries, enrollment, or support, please contact us directly. Our administration is ready to assist you in your journey of seeking knowledge.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-800 shadow-sm border border-slate-200">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Location</h4>
                      <p className="text-slate-600">Maaba Aseese</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-800 shadow-sm border border-slate-200">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">WhatsApp / Phone</h4>
                      <p className="text-slate-600">08054282302</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-800 shadow-sm border border-slate-200">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Class Schedule</h4>
                      <p className="text-slate-600">All days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 border-t border-emerald-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-emerald-950 font-bold text-xl">M</div>
              <div className="text-left">
                <span className="block font-bold text-lg leading-tight">Al-Muhaajirun</span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400">Institute</span>
              </div>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-emerald-200/60">
              <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
              <a href="#programs" className="hover:text-amber-500 transition-colors">Programs</a>
              <a href="#support" className="hover:text-amber-500 transition-colors">Support</a>
              <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-all border border-white/10"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-all border border-white/10"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-emerald-950 transition-all border border-white/10"><i className="fa-brands fa-facebook"></i></a>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-white/5 text-center">
            <p className="text-emerald-400/50 text-xs">
              &copy; 2024 Al-Muhaajirun Institute. Dedicated to dissemination of authentic Islamic knowledge.
            </p>
          </div>
        </div>
      </footer>

      <AIConsultant />
    </div>
  );
};

export default App;
