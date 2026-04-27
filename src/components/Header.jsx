import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/#about' },
    { name: 'All Guides', path: '/guides' },
    { name: 'Services', path: '/#services' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'FAQ', path: '/#faq' },
  ];

  return (
    <header className="bg-white border-b border-zinc-100 sticky top-0 z-50 w-full font-sans">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.avif" alt="Mail Yaga logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[14px] text-zinc-600 hover:text-blue-800 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-5 py-2 rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-all active:scale-95"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-600 p-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 py-4 px-6 space-y-3 shadow-lg font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-[14px] text-zinc-700 py-2 font-medium"

              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center bg-blue-800 text-white px-6 py-3 rounded-lg text-[13px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
