import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-zinc-200 py-6 px-6 font-sans">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex w-10 h-10 border border-zinc-200 items-center justify-center text-zinc-900 flex-shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-zinc-900 text-sm font-bold uppercase tracking-wider">Cookie Notice</p>
            <p className="text-zinc-500 text-[14px] leading-relaxed max-w-4xl">
              We use cookies to improve your experience. By using our site, you agree to our use of cookies as described in our 
              <Link to="/cookie-policy" className="text-zinc-900 font-bold ml-1 hover:underline">Cookie Policy</Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 md:flex-none px-6 py-3 text-zinc-400 hover:text-zinc-900 text-[12px] font-bold uppercase tracking-widest border border-zinc-100 transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-zinc-900 text-white px-10 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all whitespace-nowrap"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
