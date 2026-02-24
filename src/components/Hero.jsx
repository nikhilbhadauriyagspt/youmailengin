import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, Settings } from 'lucide-react';
import BookingModal from './BookingModal';

const slides = [
  {
    id: "01",
    tag: "Expert help for your home",
    title: "Making your",
    highlight: "washing better.",
    desc: "We fix every motor and drum issue using real manufacturer parts so your machine washes perfectly and stays quiet for years to come. Our experts ensure your laundry routine is never interrupted by unexpected breakdowns.",
    image: "/hero-washing.jpg"
  },
  {
    id: "02",
    tag: "Keeping your food fresh",
    title: "Fixing your",
    highlight: "fridge perfectly.",
    desc: "We find the exact cooling problem and refill the gas safely for all top brands to keep your food fresh and healthy. From simple seal changes to complex cooling fixes, we handle everything at your doorstep.",
    image: "/hero-refri.jpg"
  },
  {
    id: "03",
    tag: "Helping you in the kitchen",
    title: "Getting your",
    highlight: "oven working.",
    desc: "We carefully check your heating systems and control buttons to make sure everything is safe to use and works like new. Whether you are baking or cooking, our fast repair service makes sure your kitchen stays the heart of your home.",
    image: "/hero-cook.jpg"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[750px] w-full bg-white flex flex-col pt-[88px] overflow-hidden">
      <div className="flex-grow flex flex-col lg:flex-row relative">
        
        {/* Left: Immersive Visual Area - Seamless Blending */}
        <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-0 bg-white">
          {slides.map((slide, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white via-white/10 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden block" />
            </div>
          ))}
          
          <div className="absolute bottom-12 left-12 hidden md:block z-20">
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Trustworthy help</div>
                <div className="text-xs font-bold text-gray-950 uppercase">Only original parts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Refined Content Area */}
        <div className="w-full lg:w-[45%] flex items-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0 bg-white">
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-orange-600 rounded-full" />
              <span className="text-[11px] font-bold text-orange-600 tracking-[0.2em] uppercase">
                {slides[current].tag}
              </span>
            </div>
            
            <div className="relative min-h-[280px] md:min-h-[320px] mb-8">
              {slides.map((slide, idx) => (
                <div 
                  key={idx}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    idx === current ? 'opacity-100 translate-y-0 relative z-10' : 'opacity-0 translate-y-8 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <h1 className="text-4xl md:text-[56px] lg:text-[64px] font-black text-gray-950 leading-[1.1] mb-8 tracking-tight">
                    {slide.title} <br />
                    <span className="text-orange-600 italic">{slide.highlight}</span>
                  </h1>
                  <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-md">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-gray-950 text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-orange-600 transition-all cursor-pointer flex items-center justify-center gap-3 rounded-xl shadow-xl shadow-gray-950/5"
              >
                Book appliance care <ArrowRight size={18} />
              </button>
              
              <div className="flex items-center gap-2.5">
                {slides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === current ? 'w-10 bg-orange-600' : 'w-4 bg-gray-100 hover:bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Utility Dashboard */}
      <div className="bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center">
            <div className="py-8 flex items-center gap-4">
              <ShieldCheck className="text-orange-600" size={18} />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-gray-950 uppercase tracking-wide">Service guarantee</span>
                <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">3 months of support</span>
              </div>
            </div>
            <div className="py-8 flex items-center gap-4 border-l border-gray-100 md:pl-10">
              <Zap className="text-orange-600" size={18} />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-gray-950 uppercase tracking-wide">Fast help</span>
                <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">Under one hour</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 py-8 border-l border-gray-100 pl-10">
              <Settings className="text-orange-600" size={18} />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-gray-950 uppercase tracking-wide">Real parts</span>
                <span className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">Only original spares</span>
              </div>
            </div>
            <div className="hidden md:flex py-8 pl-10 items-center justify-end">
               <button 
                onClick={() => document.getElementById('repair-solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[10px] font-bold text-gray-950 hover:text-orange-600 transition-colors flex items-center gap-2 uppercase tracking-widest group"
               >
                 Explore solutions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Elite appliance care" 
      />
    </section>
  );
};

export default Hero;




