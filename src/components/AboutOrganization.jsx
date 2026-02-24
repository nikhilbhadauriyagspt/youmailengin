import { ShieldCheck, ArrowRight, BadgeDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutOrganization = () => {
  return (
    <section className="py-24 md:py-40 bg-white" id="about-hub">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* 1. Left Content Area (Span 7) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[12px] font-black text-orange-600 uppercase tracking-[0.4em]">Who we are</span>
              <div className="h-[1px] w-12 bg-orange-600/30" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tight mb-10 leading-[1.1]">
              Providing professional <br />
              <span className="text-orange-600 italic">appliance solutions.</span>
            </h2>

            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-16">
              At Appliance Rookies, we believe in honest service and taking good care of your home machines. We work hard to make sure every repair is done perfectly the very first time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
              <div className="relative pl-8 border-l-2 border-gray-100 group">
                <div className="absolute -left-[2px] top-0 h-0 w-[2px] bg-orange-600 transition-all duration-700 group-hover:h-full" />
                <div className="text-orange-600 mb-4 transition-transform duration-500 group-hover:scale-110 origin-left">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-[18px] font-bold text-gray-950 mb-2">Skilled team</h4>
                <p className="text-gray-400 text-[15px] font-medium leading-relaxed">Our friendly workers know exactly how to handle and fix your appliances safely.</p>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-100 group">
                <div className="absolute -left-[2px] top-0 h-0 w-[2px] bg-orange-600 transition-all duration-700 group-hover:h-full" />
                <div className="text-orange-600 mb-4 transition-transform duration-500 group-hover:scale-110 origin-left">
                  <BadgeDollarSign size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-[18px] font-bold text-gray-900 mb-2">Clear prices</h4>
                <p className="text-gray-400 text-[15px] font-medium leading-relaxed">We always tell you the price and the fix before we begin, so there are no surprises.</p>
              </div>
            </div>

            {/* Unique CTA Design */}
            <div className="flex">
              <Link 
                to="/contact" 
                className="group relative flex items-center gap-8 py-4 pl-8 pr-4 bg-gray-950 text-white rounded-full transition-all duration-500 hover:bg-orange-600 hover:pl-10 shadow-2xl shadow-gray-950/10"
              >
                <span className="text-[14px] font-bold tracking-widest uppercase">Get in touch with us</span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-950 transition-transform duration-500 group-hover:rotate-[-45deg]">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </div>
          </div>

          {/* 2. Right Visual Area (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
                <img 
                  src="/ac-repair.jpg" 
                  alt="Our specialized care" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
                
                {/* Floating Info Tag */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/50 shadow-xl">
                  <span className="text-[10px] font-black text-gray-950 uppercase tracking-[0.3em]">Premium Service</span>
                </div>
              </div>
              
              {/* Decorative Background Shape */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-50 rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOrganization;




