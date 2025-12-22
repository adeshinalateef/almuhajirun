
import React from 'react';

const About: React.FC = () => {
  const manhajPoints = [
    "The Qur’an and authentic Sunnah",
    "The understanding of the Companions and early scholars",
    "Giving precedence to ‘Aqeedah before other sciences",
    "Gradual learning (التدرج في طلب العلم)",
    "Combining memorization with understanding",
    "Teaching knowledge that leads to action and reform",
    "Avoiding innovations, extremism, and blind following"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Why Al-Muhaajirun Was Established</h2>
            <div className="prose prose-emerald lg:prose-lg text-slate-600">
              <p className="mb-4">
                In many communities, Islamic learning has become rushed—focused on memorization, titles, or language without firm foundations.
              </p>
              <p className="mb-6 font-medium text-emerald-900">
                Al-Muhaajirun Institute was established to revive <span className="underline decoration-amber-500 decoration-2">authentic Islamic learning</span>, beginning with sound ‘Aqeedah, correct understanding, and gradual development.
              </p>
              <p>Our goal is not numbers, but upright Muslims who worship Allah upon knowledge and clarity.</p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-bullseye text-amber-600"></i> Our Mission
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  To teach Islam upon correct ‘Aqeedah and authentic Sunnah, as understood by the Salaf, nurturing individuals with beneficial knowledge and proper manners.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-eye text-emerald-700"></i> Our Vision
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  To build a trusted center of Islamic learning and da‘wah that produces grounded Muslims and serves as a source of beneficial knowledge and lasting sadaqah jāriyah.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <i className="fa-solid fa-mosque text-9xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Our Educational Manhaj</h3>
            <ul className="space-y-4">
              {manhajPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300">
                  <div className="mt-1 w-5 h-5 bg-emerald-500 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-white">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="text-lg font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-white/10 italic text-emerald-400 text-sm">
              “This knowledge is religion, so look carefully from whom you take your religion.”
              <span className="block text-white font-bold mt-2">— Muḥammad ibn Sīrīn (رحمه الله)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
