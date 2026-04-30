import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) return;
    setShowToast(true);
    setEmail("");
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleNavClick = (path) => {
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

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Guides", path: "/guides" },
    { name: "Steps", path: "/steps" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const policies = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-of-service" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  return (
    <>
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-white border border-slate-200 px-5 py-4 rounded-xl shadow-lg flex gap-3">
          <Mail className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm font-bold text-slate-900">Subscribed</p>
            <p className="text-xs text-slate-500">You’ll receive email learning updates.</p>
          </div>
        </div>
      )}

      <footer className="w-full bg-white border-t border-slate-100">
        {/* Compact Newsletter */}
        <div className="w-full border-b border-slate-100">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-100 rounded-3xl px-6 lg:px-10 py-6">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-950">
                  Learn email in a simple way
                </h2>
                <p className="text-slate-600 text-sm md:text-[15px] mt-2">
                  Get easy email guides, privacy tips, and useful learning updates.
                </p>
              </div>

              <div className="w-full lg:w-[460px] flex gap-2 bg-white border border-slate-200 rounded-2xl p-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-sm outline-none text-slate-800"
                />

                <button
                  onClick={handleSubscribe}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-bold transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
            <div>
              <button onClick={() => handleNavClick("/")} className="mb-4">
                <img
                  src="/logo.avif"
                  alt="YouMailEngine"
                  width="200"
                  height="72"
                  className="h-18 w-auto object-contain"
                />
              </button>

              <p className="text-slate-600 text-[15px] leading-7 max-w-md">
                YouMailEngine is an informational website that explains email topics,
                features, privacy, and everyday usage in clear, simple language.
              </p>
            </div>

            <div>
              <h3 className="text-slate-950 font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="text-slate-600 hover:text-blue-600 text-sm transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-slate-950 font-bold mb-4">Information</h3>
              <p className="text-slate-600 text-sm leading-7">
                Our guides are written for learning only and help readers
                understand email without technical confusion.
              </p>
            </div>

            <div>
              <h3 className="text-slate-950 font-bold mb-4">Contact</h3>

              <a
                href="mailto:info@youmailengine.com"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm mb-5"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                info@youmailengine.com
              </a>

              <button
                onClick={() => handleNavClick("/guides")}
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Explore Guides
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-5 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} YouMailEngine. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              {policies.map((policy) => (
                <Link
                  key={policy.name}
                  to={policy.path}
                  className="text-sm text-slate-500 hover:text-blue-600 transition"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;