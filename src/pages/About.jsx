import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section: Clean & Integrated */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1.5px] bg-orange-600" />
                <span className="text-[11px] font-bold text-orange-600 tracking-widest uppercase">
                  Helping homes since 2026
                </span>
              </div>
              
              <h1 className="text-4xl md:text-[56px] lg:text-[64px] font-black text-gray-950 leading-[1.1] tracking-tight mb-8">
                Making your home <br />
                <span className="text-orange-600 italic">work perfectly again.</span>
              </h1>
              
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-12 border-l-2 border-gray-100 pl-8">
                We started Appliance Rookies with one simple goal: to fix your machines the right way. We use better parts, stay honest about prices, and make sure your appliances stay reliable for years to come.
              </p>

              <div className="flex">
                <Link 
                  to="/contact" 
                  className="group relative flex items-center gap-10 py-5 pl-10 pr-5 bg-gray-950 text-white rounded-2xl transition-all duration-500 hover:bg-orange-600 hover:pl-12 shadow-2xl shadow-gray-950/10 active:scale-95"
                >
                  <span className="text-[14px] font-bold tracking-widest uppercase">Talk to our friendly team</span>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-orange-600">
                    <ArrowRight size={22} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden bg-gray-100 shadow-2xl">
                <img loading="lazy" src="/about-mainn.jpg" alt="Our service expertise" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                <div className="absolute inset-0 bg-orange-600/5 mix-blend-multiply" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Values Section: Simple & Balanced */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.1]">
              The pillars of <br /> <span className="text-orange-600 italic">excellence.</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-sm md:text-base font-medium leading-relaxed">
              Our commitment is shown in every machine we fix and every person we help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ValueCard 
              icon={<ShieldCheck size={28} />}
              title="Guaranteed quality"
              desc="We only use 100% original parts coming straight from the makers."
            />
            <ValueCard 
              icon={<Clock size={28} />}
              title="Timely response"
              desc="Our experts aim to be at your doorstep within an hour of your booking."
            />
            <ValueCard 
              icon={<Zap size={28} />}
              title="Expert knowledge"
              desc="Our team always learns the latest ways to fix even the newest appliances."
            />
          </div>
        </div>
      </section>

      {/* 3. Commitment Section: Architectural Info Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            
            {/* Left Content */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1.5px] bg-orange-600" />
                <span className="text-[11px] font-bold text-orange-600 tracking-widest uppercase">Our promise</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-gray-950 mb-12 tracking-tight leading-tight">
                Commitment to <br />
                <span className="text-orange-600 italic">service excellence.</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-10">
                {[
                  { title: 'Quick access to original parts', desc: 'We only use real parts from the makers to keep your machine original.' },
                  { title: 'Clear and honest pricing model', desc: 'We tell you the total cost before we begin, so you know exactly what to expect.' },
                  { title: '3-month full service guarantee', desc: 'Enjoy peace of mind with our complete support after every single repair.' },
                  { title: 'Fully trusted and checked experts', desc: 'Every person on our team is carefully checked and trained for your safety.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 transition-all group-hover:bg-orange-600 group-hover:text-white">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-[16px] font-bold text-gray-950 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="w-full lg:w-[55%] relative flex items-center">
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-[48px] overflow-hidden shadow-2xl border-8 border-gray-50">
                <img src="/about-child2.jpg" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt="Our service quality" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/40 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-white shadow-2xl">
                  <div className="flex flex-col gap-1">
                    <span className="text-orange-600 font-black text-3xl leading-none">100%</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Genuine service</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Journey Section: Minimal Step Process */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-orange-600 font-bold text-[11px] uppercase tracking-widest mb-4 block">The workflow</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight">Our repair journey.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            <TimelineStep 
              step="01"
              title="Quick checkup"
              desc="Our experts use special tools to find the real problem, making sure we fix the root cause instead of just the symptoms."
            />
            <TimelineStep 
              step="02"
              title="Original parts"
              desc="We only use real parts from the makers. This makes sure every piece we change matches your appliance perfectly."
            />
            <TimelineStep 
              step="03"
              title="Expert fixing"
              desc="The repair is done carefully, following all safety rules and the best care steps for your specific brand."
            />
            <TimelineStep 
              step="04"
              title="Quality test"
              desc="Before we leave, we test everything to make sure your machine is working perfectly and is safe for your home."
            />
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section: Simple & Compact */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gray-950 rounded-[32px] p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-black/10">
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                Need a professional fix?
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-medium mb-10 leading-relaxed">
                Join thousands of happy customers who trust Appliance Rookies for their home machine care and support.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-orange-600 text-white font-bold text-[13px] hover:bg-white hover:text-gray-950 transition-all rounded-xl active:scale-95 group">
                Contact us now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] -mr-32 -mt-32" />
          </div>
        </div>
      </section>

    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="p-10 rounded-[32px] bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/[0.02] group">
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-orange-50 text-orange-600 transition-all group-hover:bg-orange-600 group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-950 mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

const TimelineStep = ({ step, title, desc }) => (
  <div className="flex flex-col group">
    <span className="text-4xl font-black text-orange-600/10 mb-4 transition-colors group-hover:text-orange-600/20">{step}</span>
    <h3 className="text-2xl font-bold text-gray-950 mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">{desc}</p>
  </div>
);

export default About;




