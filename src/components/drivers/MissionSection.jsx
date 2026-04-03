import React from 'react';
import { Info, Zap, Quote } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-24 md:py-40 bg-white border-b border-zinc-50 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 rounded-full mb-8">
            <Info size={14} className="text-blue-600" />
            <span className="text-[12px] font-bold  uppercase">Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-zinc-900   mb-10 leading-[0.9]">
            Understanding Your <span className="text-blue-600 italic font-serif">Digital Pulse.</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed  tracking-wide max-w-2xl mx-auto">
            Bridging the gap between physical hardware and digital intelligence through precision-engineered software layers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-10 -left-10 text-blue-600/10 pointer-events-none">
              <Quote size={120} />
            </div>
            <div className="relative z-10 space-y-10">
              <p className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight  ">
                Device drivers are the vital translators that move your experience from <span className="text-blue-600">confusion to confidence.</span>
              </p>
              <div className="space-y-6 text-zinc-500 text-sm md:text-base leading-relaxed font-medium  tracking-wide opacity-80">
                <p>At ALL ABOUT DRIVERS, we demystify the technical complexity of the hardware ecosystem. Our mission is to ensure every software bridge in your system operates at its absolute peak potential.</p>
                <p>We believe that true technological empowerment starts with understanding the small, silent layers that make your hardware work in perfect harmony.</p>
              </div>
              <div className="flex items-center gap-4 pt-10 border-t border-zinc-100">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xl shadow-blue-600/20">
                   <Zap size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black  tracking-widest text-zinc-900">Technical Excellence</span>
                  <span className="text-[10px] font-bold  tracking-widest text-zinc-400">The Drivers Specialist Team</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl group-hover:bg-blue-600/10 transition-all duration-700" />
              <div className="relative bg-zinc-950 p-12 md:p-20 rounded-[3.5rem] text-white shadow-2xl shadow-black/20">
                <h3 className="text-2xl md:text-3xl font-black  mb-10  leading-none">Driver <br />Awareness</h3>
                <div className="space-y-8">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium  tracking-wide">
                      Whether you are a basic home user or managing a professional studio, driver knowledge empowers you to maintain a healthy, reliable computer system.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-[10px] font-black  tracking-widest text-blue-400">
                      <span>System Efficiency</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
