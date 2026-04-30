import { useState, useEffect } from "react";
import { MessageSquare, Menu, X, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setIsMenuOpen(false);

    if (path.startsWith("/#")) {
      const targetId = path.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: targetId } });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Guides", path: "/guides" },
    { name: "Steps", path: "/steps" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path.startsWith("/#")) return false;
    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled
          ? "border-zinc-200 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
          : "border-zinc-100"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[76px]">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center shrink-0"
          >
            <img
              src="/logo.avif"
              alt="YouMailEngine logo"
              className="h-17 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-50 border border-zinc-100 rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`relative px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-zinc-600 hover:text-blue-700 hover:bg-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center justify-end">
            <button
              onClick={() => handleNavClick("/contact")}
              className="group inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full text-[14px] font-bold transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-11 h-11 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-zinc-100 transition-all duration-300 ${
          isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl text-left font-semibold transition ${
                isActive(link.path)
                  ? "bg-blue-50 text-blue-700"
                  : "text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              {link.name}
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
          ))}

          <button
            onClick={() => handleNavClick("/contact")}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-4 rounded-2xl font-bold"
          >
            <MessageSquare className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;