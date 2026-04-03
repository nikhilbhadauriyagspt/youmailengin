import {
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  const footerLinks = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Disclaimer', path: '/disclaimer' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
    ],
  };

  return (
    <footer className="bg-white pt-20 md:pt-24 pb-12 border-t border-zinc-100">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-4 group mb-8">
              <img
                src="/logo-rok.png"
                alt="All About Drivers"
                className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="text-zinc-600 text-[15px] leading-8 max-w-sm mb-8">
              A clear and approachable destination for understanding device drivers,
              updates, compatibility, and connected hardware behavior.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:info@allaboutdrivers.shop"
                  className="text-[15px] text-zinc-700 hover:text-blue-600 transition-colors"
                >
                  info@allaboutdrivers.shop
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <MapPin size={18} />
                </div>
                <span className="text-[15px] text-zinc-700">
                  130 S Fillmore St, Corinth, MS 38834, United States
                </span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.22em] mb-6">
                Navigation
              </h4>

              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zinc-500 hover:text-zinc-900 font-medium text-[14px] transition-all flex items-center gap-2 group"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.22em] mb-6">
                Governance
              </h4>

              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zinc-500 hover:text-zinc-900 font-medium text-[14px] transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-50 rounded-[2rem] p-6 md:p-12 border border-zinc-100">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-blue-600" />
                  <h3 className="text-zinc-900 text-[11px] font-bold uppercase tracking-[0.18em]">
                    Tech Sync
                  </h3>
                </div>

                <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-5 items-center">
                  {/* Left Content */}
                  <div>
                    <p className="text-zinc-600 text-[14px] leading-7">
                      Stay updated with simple driver tips, device insights, and useful
                      tech awareness.
                    </p>

                    {isSuccess && (
                      <p className="mt-3 text-[12px] font-medium text-blue-600 flex items-center gap-2">
                        <CheckCircle2 size={14} />
                        Subscription Active
                      </p>
                    )}
                  </div>

                  {/* Right Form */}
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 sm:items-center"
                  >
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-900 text-[14px] font-medium outline-none focus:border-blue-600 transition-all placeholder:text-zinc-400"
                    />

                    <button
                      disabled={isSubmitting}
                      className="shrink-0 bg-zinc-900 hover:bg-blue-600 text-white px-6 py-4 rounded-2xl font-medium text-[14px] transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 group/btn shadow-lg shadow-black/5"
                    >
                      {isSubmitting ? (
                        '...'
                      ) : (
                        <>
                          Join Network
                          <ArrowRight
                            size={10}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck size={18} className="text-blue-600" />
            <span className="text-[14px] font-medium text-zinc-700">SSL Secured</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-zinc-400 text-[13px] font-medium">
              &copy; {currentYear} All About Drivers. Precision Architecture.
            </p>
          </div>
        </div>

        {/* Final Disclaimer */}
        <div className="mt-12 pt-8 border-t border-zinc-50 text-center">
          <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest leading-loose">
            Disclaimer - For Informational only. No software installation or distribution.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;