import { Phone, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ban1.avif" 
          alt="Technical Support Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full py-20 px-6 lg:pl-24 lg:pr-10">
        {/* Left Aligned Content */}
        <div className="max-w-2xl">
         
          
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 tracking-tight">
            Having trouble with your <span className="text-blue-400">Email?</span> We're here to fix it.
          </h1>
          
          <p className="text-[18px] md:text-[20px] text-zinc-100 leading-relaxed font-normal mb-10">
            Email is essential for staying connected, but technical glitches can happen at any time. Whether you can't log in, your emails aren't sending, or you're worried about security, our experts provide clear, step-by-step help to get your inbox back to normal quickly and safely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-xl text-[15px] font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3">
              <Phone className="h-4 w-4" />
              Get Help Now
            </Link>
            <a href="#services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl text-[15px] font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3">
              See What We Do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
