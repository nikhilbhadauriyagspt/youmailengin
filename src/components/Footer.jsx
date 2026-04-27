import { Mail, ShieldCheck, ArrowRight, ExternalLink, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-zinc-700 pt-12 pb-12 border-t border-zinc-100 w-full font-sans">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block">
              <img src="/logo.avif" alt="Mail Yaga logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-[17px] leading-relaxed font-normal text-zinc-600 max-w-md">
              Your reliable partner for resolving everyday email challenges. We specialize in account recovery and technical configuration to keep your digital communication seamless.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-zinc-900 text-[15px] font-bold uppercase tracking-[0.2em] mb-10 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-700"></span>
            </h3>
            <ul className="space-y-5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/#about' },
                { name: 'All Guides', path: '/guides' },
                { name: 'Services', path: '/#services' },
                { name: 'How It Works', path: '/#how-it-works' },
                { name: 'FAQ', path: '/#faq' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center gap-3 hover:text-blue-700 transition-all text-[16px] font-medium text-zinc-600">
                    <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-blue-700 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="text-zinc-900 text-[15px] font-bold uppercase tracking-[0.2em] mb-10 relative inline-block">
              Get Support
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-700"></span>
            </h4>
            <div className="space-y-8">
              <p className="text-[16px] text-zinc-600 leading-relaxed">Need immediate assistance? Our experts are standing by to help you resolve any issue.</p>
              
              <div className="space-y-5">
                <a href="mailto:info@mailyaga.shop" className="flex items-center gap-5 p-5 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform shadow-sm">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-500 mb-0.5">Email Assistance</p>
                    <p className="text-zinc-900 font-bold text-[16px]">info@mailyaga.shop</p>
                  </div>
                </a>

                <Link to="/contact" className="flex items-center justify-center gap-3 bg-blue-700 hover:bg-zinc-900 text-white w-full py-5 rounded-3xl text-[16px] font-bold transition-all shadow-lg shadow-blue-200 hover:shadow-none">
                  <MessageSquare className="h-5 w-5" />
                  Request Support Form
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Bar: Policies */}
        <div className="py-10 border-y border-zinc-100">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4 text-[14px]">
            {[
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Terms of Service', path: '/terms-of-service' },
              { name: 'Cookie Policy', path: '/cookie-policy' },
              { name: 'Return Policy', path: '/refund-policy' },
              { name: 'Disclaimer', path: '/disclaimer' }
            ].map((policy) => (
              <Link key={policy.name} to={policy.path} className="text-zinc-600 hover:text-blue-700 font-semibold transition-colors">
                {policy.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Final Copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[13px] font-medium">
            © {currentYear} Mail Yaga. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-bold uppercase tracking-widest">
            <span>Secure</span>
            <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
            <span>Encrypted</span>
            <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
            <span>Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
