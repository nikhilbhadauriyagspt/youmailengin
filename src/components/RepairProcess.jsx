import { Search, CalendarCheck, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const RepairProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Select service",
      desc: "Pick the machine that needs fixing.",
      icon: <Search size={22} />
    },
    {
      id: "02",
      title: "Book timing",
      desc: "Choose a time that works for you.",
      icon: <CalendarCheck size={22} />
    },
    {
      id: "03",
      title: "Expert repair",
      desc: "We fix it using original parts.",
      icon: <Wrench size={22} />
    },
    {
      id: "04",
      title: "Full guarantee",
      desc: "Enjoy peace of mind for 3 months.",
      icon: <ShieldCheck size={22} />
    }
  ];

  return (
    <section id="repair-process" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Section Header: Centered & Refined */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
            <span className="text-[11px] font-bold text-orange-600 tracking-[0.3em] uppercase">
              The workflow
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            How we <span className="text-orange-600 italic">restore</span> order.
          </h2>
        </div>

        {/* Process Grid: Simple & Bold */}
        <div className="relative">
          {/* Horizontal Decorative Line (Desktop) */}
          <div className="absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gray-100 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group text-center flex flex-col items-center">
                
                {/* Step Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-8 transition-all duration-500 group-hover:border-orange-600 group-hover:shadow-2xl group-hover:shadow-orange-600/10 group-hover:-translate-y-1">
                  <div className="text-gray-400 transition-colors duration-500 group-hover:text-orange-600">
                    {step.icon}
                  </div>
                  {/* ID Marker */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gray-950 text-white text-[10px] font-bold flex items-center justify-center border-4 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Step Text */}
                <div className="space-y-3">
                  <h3 className="text-[18px] font-bold text-gray-950 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[180px] mx-auto">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Action: Centered Simple Button */}
        <div className="mt-24 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-950 text-white font-bold text-[13px] hover:bg-orange-600 transition-all rounded-xl shadow-xl shadow-gray-950/5 active:scale-95 group"
          >
            Book appliance care now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance repair" 
      />
    </section>
  );
};

export default RepairProcess;



