import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Support from './components/Support';
import ContactForm from './components/ContactForm';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [showDonate, setShowDonate] = useState(false);
  const [showArbain, setShowArbain] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const donateRef = useRef<HTMLDivElement | null>(null);
  const arbainRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const exitIntentShownRef = useRef(false);
  const activityTimerRef = useRef<number | null>(null);

  useEffect(() => {
    document.title = "Al-Muhaajirun";
  }, []);

  // CTA triggers and UX improvements
  useEffect(() => {
    // Arba'in: show after 3 minutes (once per session)
    let arbainTimer: number | undefined;
    if (!sessionStorage.getItem('arbainShownThisSession')) {
      const ARBAIN_DELAY = 3 * 60 * 1000; // 3 minutes
      arbainTimer = window.setTimeout(() => {
        setShowArbain(true);
        sessionStorage.setItem('arbainShownThisSession', '1');
      }, ARBAIN_DELAY);
    }

    // Donation: show after 3 minutes of activity (mousemove/keydown/scroll)
    const ACTIVITY_DELAY = 3 * 60 * 1000; // 3 minutes
    const startTimer = () => {
      if (activityTimerRef.current) return;
      activityTimerRef.current = window.setTimeout(() => {
        // only once per session
        if (!sessionStorage.getItem('donationShownThisSession')) {
          setShowDonate(true);
          sessionStorage.setItem('donationShownThisSession', '1');
        }
      }, ACTIVITY_DELAY);
      ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach((evt) =>
        window.removeEventListener(evt, startTimer)
      );
    };
    ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach((evt) =>
      window.addEventListener(evt, startTimer, { passive: true })
    );

    // Exit-intent: show donation when user attempts to leave or tab hidden, once
    const onBeforeUnload = () => {
      if (!exitIntentShownRef.current) {
        exitIntentShownRef.current = true;
        if (!showDonate) setShowDonate(true);
      }
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !exitIntentShownRef.current) {
        exitIntentShownRef.current = true;
        if (!showDonate) setShowDonate(true);
      }
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Back to top visibility
    const onScrollBackTop = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScrollBackTop, { passive: true });

    // ESC key to close modals
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showDonate) setShowDonate(false);
        if (showArbain) setShowArbain(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      if (arbainTimer) clearTimeout(arbainTimer);
      if (activityTimerRef.current) clearTimeout(activityTimerRef.current);
      ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach((evt) =>
        window.removeEventListener(evt, startTimer)
      );
      window.removeEventListener('beforeunload', onBeforeUnload);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('scroll', onScrollBackTop);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [showDonate, showArbain]);

  const onOpenDonate = () => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setShowDonate(true);
    setTimeout(() => donateRef.current?.focus(), 0);
  };
  const onOpenArbain = () => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setShowArbain(true);
    setTimeout(() => arbainRef.current?.focus(), 0);
  };
  const onCloseDonate = () => {
    setShowDonate(false);
    lastFocusedRef.current?.focus?.();
  };
  const onCloseArbain = () => {
    setShowArbain(false);
    lastFocusedRef.current?.focus?.();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-white focus:text-emerald-900 focus:border focus:border-emerald-300 focus:rounded px-4 py-2">Skip to content</a>
      <Navbar onDonateClick={onOpenDonate} onArbainClick={onOpenArbain} />
      
      <main id="main-content">
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

      {/* Donation Modal */}
      {showDonate && (
        <div role="dialog" aria-modal="true" aria-labelledby="donate-title" aria-describedby="donate-desc" className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={onCloseDonate} />
          <div ref={donateRef} tabIndex={-1} className="relative bg-white max-w-md w-11/12 md:w-full rounded-2xl shadow-2xl border border-emerald-100 p-6 outline-none">
            <button aria-label="Close" onClick={onCloseDonate} className="absolute top-3 right-3 text-slate-500 hover:text-slate-700">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <h3 id="donate-title" className="text-xl font-bold text-slate-900">Support the Cause of Allah</h3>
            </div>
            <p id="donate-desc" className="text-slate-600 mb-5">
              Help us continue teaching the Qur’an and Sunnah upon the understanding of the Salaf. Your donation sustains classes, materials, and students in need.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-sm text-emerald-900 mb-4">
              <div className="flex items-center gap-2 font-semibold text-emerald-800 mb-2"><i className="fa-solid fa-building-columns"></i> Bank Transfer Details</div>
              <div className="grid grid-cols-1 gap-2">
                <div><span className="font-semibold">Account Number:</span> 8054282302</div>
                <div><span className="font-semibold">Account Name:</span> Tajudeen Lateef Adeshina</div>
                <div><span className="font-semibold">Bank Name:</span> OPAY</div>
              </div>
            </div>
            <button
              onClick={onCloseDonate}
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-5 py-3 rounded-lg shadow">
              Close
            </button>
            <p className="text-xs text-slate-400 mt-3 text-center">May Allah reward you abundantly.</p>
          </div>
        </div>
      )}

      {/* Arba'in Group Modal */}
      {showArbain && (
        <div role="dialog" aria-modal="true" aria-labelledby="arbain-title" aria-describedby="arbain-desc" className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={onCloseArbain} />
          <div ref={arbainRef} tabIndex={-1} className="relative bg-white max-w-md w-11/12 md:w-full rounded-2xl shadow-2xl border border-emerald-100 p-6 outline-none">
            <button aria-label="Close" onClick={onCloseArbain} className="absolute top-3 right-3 text-slate-500 hover:text-slate-700">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <i className="fa-solid fa-book"></i>
              </div>
              <h3 id="arbain-title" className="text-xl font-bold text-slate-900">Arba’in an-Nawawiyyah Study Group</h3>
            </div>
            <p id="arbain-desc" className="text-slate-600 mb-5">
              Join the Daily Explanation of the Forty Hadiths group. We study Imam an-Nawawi’s Arba’in with references, benefits, and practical application.
            </p>
            <a
              href="https://chat.whatsapp.com/HIligvX6Z758yycU1qe7NP"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold px-5 py-3 rounded-lg shadow">
              Join the Daily Explanation Group
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <p className="text-xs text-slate-400 mt-3 text-center">Free to join. All are welcome.</p>
          </div>
        </div>
      )}

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 bg-emerald-800 hover:bg-emerald-900 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default App;
