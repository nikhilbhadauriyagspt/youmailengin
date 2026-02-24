import { Zap, Mail, MapPin, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  const footerLinks = {
    company: [
      { name: 'About us', path: '/about' },
      { name: 'Latest blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Washing machine', path: '/service/washing-machine' },
      { name: 'Refrigerator', path: '/service/refrigerator' },
      { name: 'Air conditioner', path: '/service/air-conditioner' },
      { name: 'Television', path: '/service/television' },
      { name: 'Water purifier', path: '/service/water-purifier' },
      { name: 'Microwave oven', path: '/service/microwave-oven' },
      { name: 'Kitchen chimney', path: '/service/kitchen-chimney' },
      { name: 'Dishwasher', path: '/service/dishwasher' },
      { name: 'Coffee maker', path: '/service/coffee-maker' },
      { name: 'Oven & gas stove', path: '/service/oven-stove' },
      { name: 'Clothes dryer', path: '/service/clothes-dryer' },
      { name: 'Other appliances', path: '/service/other-appliances' },
    ],
    support: [
      { name: 'Privacy policy', path: '/privacy-policy' },
      { name: 'Terms of service', path: '/terms-of-service' },
      { name: 'Refund policy', path: '/refund-policy' },
      { name: 'Cookie policy', path: '/cookie-policy' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ]
  };

  return (
    <footer className="relative bg-white pt-20 pb-10 border-t border-gray-100 w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-4 group mb-10">
              <img src="/logo-rok.png" alt="Appliance Rookies" className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
            </Link>
            <p className="text-gray-400 text-[15px] font-medium leading-relaxed max-w-sm mb-10">
              Your trusted partner for high-quality appliance repairs. We deliver precision and reliability to every home since 2026.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@appliancerookies.shop" className="text-sm font-bold text-gray-950 hover:text-orange-600 transition-colors">info@appliancerookies.shop</a>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <p className="text-sm font-bold text-gray-950 leading-tight pt-2">
                  2066 Fairview Ave, Prattville, AL 36066, USA
                </p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-orange-600 font-bold text-[13px] transition-colors flex items-center gap-1 group">
                      {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-orange-600 font-bold text-[13px] transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-orange-600 font-bold text-[13px] transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-6">
                   <Sparkles size={18} className="text-orange-600" />
                   <h3 className="text-gray-950 text-sm font-black uppercase tracking-widest">Newsletter</h3>
                 </div>
                 <form onSubmit={handleSubscribe} className="space-y-4">
                   <input 
                     required
                     type="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter your email" 
                     className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-gray-950 text-[13px] font-bold outline-none focus:border-orange-600 transition-all placeholder:text-gray-300"
                   />
                   <button 
                     disabled={isSubmitting}
                     className="w-full bg-gray-950 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-[13px] transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 group/btn shadow-xl shadow-black/5"
                   >
                     {isSubmitting ? '...' : <>Join now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" /></>}
                   </button>
                 </form>
                 {isSuccess && (
                   <p className="mt-4 text-[10px] font-bold text-orange-600 uppercase tracking-widest flex items-center gap-2">
                     <CheckCircle2 size={14} /> Successfully enrolled
                   </p>
                 )}
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-10">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
               <ShieldCheck size={18} className="text-orange-600" />
               <span className="text-[10px] font-bold text-gray-950 uppercase tracking-widest">SSL secured</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
              &copy; {currentYear} Appliance Rookies. built with precision.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
