import React from 'react';

const programs = [
  {
    title: "1. Student of Knowledge",
    subtitle: "For serious learners seeking strong foundations",
    description: "Memorization combined with explanation and understanding, following the methodology of the Salaf.",
    focus: ["Sound 'Aqeedah", "Qur'an with understanding", "Basic Arabic", "Classical texts (mutūn)", "Fiqh of worship", "Manners of seeking knowledge"],
    icon: "fa-book-open-reader",
    color: "emerald"
  },
  {
    title: "2. Regular Madrasah",
    subtitle: "For children and general students",
    description: "Structured Islamic education focusing on building correct belief, proper worship, and Islamic character.",
    focus: ["Qur'an reading", "Basic 'Aqeedah", "Fiqh of daily worship", "Islamic manners"],
    icon: "fa-graduation-cap",
    color: "blue"
  },
  {
    title: "3. Busy Mothers & Fathers",
    subtitle: "For working adults with limited time",
    description: "Tailored lessons for parents and working individuals who desire to learn their religion despite busy schedules.",
    focus: ["Essentials of 'Aqeedah", "Correct worship", "Daily practice mistakes", "Islamic family guidance"],
    icon: "fa-briefcase",
    color: "amber"
  },
  {
    title: "4. Da'wah & Community",
    subtitle: "Extending knowledge beyond the classroom",
    description: "Actively working to benefit the wider Muslim community through projects and development.",
    focus: ["Public lectures", "Mosque building", "Madrasah development", "Learning resources", "10 minutes reminder after Subh", "Fiqh and 'Aqeedah every Saturday and Sunday after Subh"],
    icon: "fa-hand-holding-heart",
    color: "slate"
  }
];

const Features: React.FC = () => {
  const handleEnrollment = (programTitle: string) => {
    const message = `I would like to enroll in: ${programTitle}`;
    const whatsappUrl = `https://wa.me/2348054282302?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-800 font-bold tracking-widest uppercase text-sm mb-4">Educational Offerings</h2>
          <p className="text-4xl font-extrabold text-slate-900">Our Structured Programs</p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-800 text-3xl group-hover:bg-emerald-800 group-hover:text-white transition-all flex-shrink-0">
                  <i className={`fa-solid ${prog.icon}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{prog.title}</h3>
                  <p className="text-emerald-700 font-semibold text-sm mb-4">{prog.subtitle}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{prog.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    {prog.focus.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handleEnrollment(prog.title)}
                    className="w-full bg-emerald-800 text-white py-3 rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-user-plus text-sm"></i>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
