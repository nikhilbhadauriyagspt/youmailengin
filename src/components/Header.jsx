import { useState, useEffect } from 'react';
import { 
  Zap, Wrench, ChevronDown, Menu, X, 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const services = [
    { id: "washing-machine", title: "Washing Machine", desc: "Drum & motor repair", icon: <WashingMachine size={18} /> },
    { id: "refrigerator", title: "Refrigerator", desc: "Cooling & compressor fix", icon: <Refrigerator size={18} /> },
    { id: "air-conditioner", title: "Air Conditioner", desc: "Gas refilling & PCB fix", icon: <Snowflake size={18} /> },
    { id: "television", title: "Television", desc: "Display & audio fix", icon: <Monitor size={18} /> },
    { id: "water-purifier", title: "Water Purifier", desc: "RO filter replacement", icon: <Droplets size={18} /> },
    { id: "microwave-oven", title: "Microwave Oven", desc: "Magnetron & panel fix", icon: <Microwave size={18} /> },
    { id: "kitchen-chimney", title: "Kitchen Chimney", desc: "Deep cleaning & motor fix", icon: <Fan size={18} /> },
    { id: "dishwasher", title: "Dishwasher", desc: "Pump & leakage repair", icon: <Waves size={18} /> },
    { id: "coffee-maker", title: "Coffee Maker", desc: "Heater & pump service", icon: <Coffee size={18} /> },
    { id: "oven-stove", title: "Oven & Gas Stove", desc: "Burner & ignition repair", icon: <Flame size={18} /> },
    { id: "clothes-dryer", title: "Clothes Dryer", desc: "Heating & belt repair", icon: <Wind size={18} /> },
    { id: "other-appliances", title: "Other Appliances", desc: "Mixers, irons & more", icon: <Cpu size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative px-5 py-2.5 text-[14px] font-bold tracking-tight transition-all duration-500 rounded-full flex items-center ${
      isActive ? 'text-orange-600 bg-orange-50/80' : 'text-gray-500 hover:text-gray-950 hover:bg-gray-50'
    }`;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
      <div className="w-full px-6 lg:px-12">
        <div className={`relative flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] min-h-[64px] shadow-none border-none ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl py-3 px-10 rounded-2xl' 
            : 'bg-white/40 backdrop-blur-md py-4 px-10 rounded-3xl'
        }`}>
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group flex-shrink-0 relative z-10">
            <img src="/logo-rok.png" alt="Appliance Rookies" className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
          </Link>

          {/* Navigation Section (Centered) */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <nav className={`flex items-center gap-1 px-1 py-1 rounded-full border-none shadow-none transition-all duration-700 ${
              isScrolled ? 'bg-transparent' : 'bg-white/50 p-1.5'
            }`}>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
                  {link.name}
                </Link>
              ))}
              
              <div className="relative h-full" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className={`flex items-center gap-1.5 text-[14px] font-bold tracking-tight px-5 py-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isDropdownOpen ? 'text-orange-600 bg-orange-50/80' : 'text-gray-500 hover:text-gray-950 hover:bg-gray-50'
                }`}>
                  Services 
                  <ChevronDown size={14} className={`transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'
                }`}>
                  <div className="bg-white border border-gray-100 rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] w-[900px] flex overflow-hidden text-left p-2">
                    <div className="flex-[2.5] p-10">
                      <div className="flex items-center mb-10 border-b border-gray-50 pb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Our specializations</h3>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                        {services.map((item, idx) => (
                          <Link key={idx} to={`/service/${item.id}`} onClick={() => setIsDropdownOpen(false)} className="group/item flex items-center gap-5 p-3 rounded-2xl hover:bg-gray-50/80 transition-all">
                            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-white text-gray-400 group-hover/item:text-orange-600 transition-all rounded-xl shadow-sm border border-gray-50">
                              {item.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[13px] font-bold text-gray-900 uppercase tracking-tight group-hover/item:text-orange-600">{item.title}</span>
                              <span className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mt-0.5">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 bg-gray-950 rounded-[24px] p-10 flex flex-col justify-between m-1 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/20 blur-[80px] -mr-24 -mt-24" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-orange-600 text-white flex items-center justify-center mb-8 rounded-xl shadow-lg">
                          <Wrench size={22} />
                        </div>
                        <h4 className="text-2xl font-black text-white leading-[1.1] mb-6 tracking-tighter uppercase">
                          Emergency <br /> 
                          Repair <span className="text-orange-500 italic">24/7.</span>
                        </h4>
                        <p className="text-gray-400 text-[10px] font-medium leading-relaxed uppercase tracking-wider mb-10">
                          Certified appliance repairs available for same-day home visits.
                        </p>
                      </div>
                      <button 
                        onClick={() => { setIsModalOpen(true); setIsDropdownOpen(false); }}
                        className="w-full py-4 bg-white text-gray-950 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-4 group/btn cursor-pointer rounded-xl shadow-lg"
                      >
                        Book Now <ArrowRight size={14} className="group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Action Button Section */}
          <div className="flex items-center gap-6 relative z-10">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block px-10 py-4 bg-orange-600 text-white text-[12px] font-black uppercase tracking-[0.2em] hover:bg-gray-950 transition-all duration-500 cursor-pointer rounded-tr-[24px] rounded-bl-[24px] rounded-tl-lg rounded-br-lg shadow-xl shadow-orange-600/10 active:scale-95"
            >
              Book Now
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-xl border-none transition-all ${isMenuOpen ? 'bg-orange-600 text-white' : 'bg-white text-gray-950'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 h-screen bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-32 pb-10 px-10 h-full flex flex-col">
          <div className="space-y-8 mb-16">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-4xl font-black uppercase tracking-tighter text-gray-950 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex-1 overflow-y-auto mb-10">
            <h5 className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.5em] mb-10">Popular Services</h5>
            <div className="grid grid-cols-1 gap-8">
              {services.slice(0, 6).map((item, idx) => (
                <Link key={idx} to={`/service/${item.id}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[13px] font-bold text-gray-950 uppercase tracking-widest">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <button 
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              className="w-full py-6 bg-orange-600 text-white font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-orange-600/20"
            >
              Book appliance care
            </button>
            <a href="tel:+15550000000" className="w-full py-6 border-2 border-gray-950 text-gray-950 font-black text-[12px] uppercase tracking-[0.3em] text-center rounded-2xl">
              Call Support
            </a>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance Repair" 
      />
    </header>
  );
};

export default Header;




