import React from 'react';

const Support: React.FC = () => {
  const accountNo = "8054282302";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNo);
    alert('Account Number Copied');
  };

  const categories = [
    { name: "Sadaqah for Knowledge", desc: "Covers teaching materials, teacher stipends, and scholarships for deserving students unable to afford Islamic education.", icon: "fa-book" },
    { name: "Sadaqah Jāriyah Projects", desc: "Long-term impact: Mosque and Madrasah development.", icon: "fa-building-columns" },
    { name: "Operational Support", desc: "Essential amenities for continuous Islamic learning.", icon: "fa-gear" }
  ];

  return (
    <section id="support" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-900 via-amber-500 to-emerald-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Sadaqah Jāriyah</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Support Al-Muhaajirun Institute</p>
          <p className="max-w-2xl mx-auto text-slate-600 italic">
            "When a person dies, his deeds end except three: ongoing charity, beneficial knowledge, and a righteous child who prays for him."
            <span className="block font-bold mt-2 text-slate-900">— Ṣaḥīḥ Muslim</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:bg-emerald-50 transition-colors">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-emerald-800 text-xl mx-auto mb-6 shadow-sm border border-slate-100">
                <i className={`fa-solid ${cat.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{cat.name}</h4>
              <p className="text-sm text-slate-500">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Transparency Commitment</h3>
              <p className="text-emerald-100 mb-8 leading-relaxed text-lg">
                All donations are managed with trust (Amanah) and accountability. Regular updates are provided to our supporters regarding project progress and fund allocation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <i className="fa-solid fa-shield-check mr-2"></i> Verified Amanah
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <i className="fa-solid fa-chart-line mr-2"></i> Regular Reports
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900">
              <h4 className="text-xl font-bold mb-4 border-b pb-4 text-emerald-900">Payment Information</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Bank Name</span>
                  <span className="font-bold">Opay</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Account Name</span>
                  <span className="font-bold">Tajudeen Lateef Adeshina</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Account No.</span>
                  <span className="font-bold">{accountNo}</span>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={handleCopy}
                    className="w-full bg-amber-500 text-amber-950 font-bold py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/20"
                  >
                    Copy Account Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
             <i className="fa-solid fa-star-and-crescent text-[15rem] rotate-12"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
