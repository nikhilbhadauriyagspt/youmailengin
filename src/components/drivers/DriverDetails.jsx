import React from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, Zap } from 'lucide-react';

const DriverDetails = ({ title, subheading, content, items, dark = false }) => {
  return (
    <section className={`py-24 md:py-32 ${dark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <div className={`inline-flex items-center gap-2 px-3 py-1 ${dark ? 'bg-blue-600/10 text-blue-400' : 'bg-blue-50 text-blue-600'} rounded-full mb-6`}>
            <Zap size={14} />
            <span className="text-[10px] font-black  tracking-widest">{subheading}</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-black   mb-6`}>
            {title}
          </h2>
          <p className={`${dark ? 'text-zinc-400' : 'text-zinc-500'} text-sm md:text-base font-medium leading-relaxed  tracking-wide`}>
            {content}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-8 md:p-12 rounded-[2rem] border transition-all duration-500 hover:-translate-y-1 ${
                dark 
                ? 'bg-zinc-900/50 border-zinc-800 hover:border-blue-600/50 hover:bg-zinc-900' 
                : 'bg-zinc-50 border-zinc-100 hover:border-blue-600/20 hover:bg-white hover:shadow-2xl hover:shadow-black/[0.02]'
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                   <h3 className={`text-xl font-bold   mb-2 ${dark ? 'text-white' : 'text-zinc-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-[13px] font-medium leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {item.content}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${dark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600 text-white'}`}>
                  <CheckCircle2 size={20} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-zinc-200/10">
                <div>
                  <h4 className={`text-[10px] font-black  tracking-widest mb-4 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>Core Features</h4>
                  <ul className="space-y-3">
                    {item.why.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold  tracking-wide opacity-80">
                        <div className="w-1 h-1 rounded-full bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={`text-[10px] font-black  tracking-widest mb-4 ${dark ? 'text-red-400' : 'text-red-600'}`}>Failure Signs</h4>
                  <ul className="space-y-3">
                    {item.signs.map((sign, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold  tracking-wide opacity-80">
                        <AlertTriangle size={12} className={dark ? 'text-red-400' : 'text-red-600'} />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverDetails;
