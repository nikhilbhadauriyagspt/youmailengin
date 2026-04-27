import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData.jsx';
import { ArrowRight, ChevronRight, Mail } from 'lucide-react';

const Guides = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 text-blue-800 mb-6">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-zinc-600" />
            <span className="text-zinc-900 font-medium">All Guides</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 mb-6 tracking-tight">
            Comprehensive <span className="text-blue-800">Email Guides.</span>
          </h1>
          <p className="text-zinc-600 text-xl max-w-3xl leading-relaxed">
            Everything you need to know about fixing common email issues, securing your account, and optimizing your inbox performance.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-24">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {guidesData.map((guide) => (
              <div 
                key={guide.id} 
                id={guide.id}
                className="p-10 md:p-12 rounded-[2.5rem] border border-zinc-100 bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500 flex flex-col items-start group"
              >
                <div className={`w-16 h-16 rounded-2xl ${guide.bg} ${guide.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(guide.icon, { className: "w-8 h-8" })}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 tracking-tight">{guide.title}</h2>
                <p className="text-lg text-blue-800 font-medium mb-6">{guide.shortDesc}</p>
                <div className="prose prose-zinc lg:prose-lg text-zinc-700 mb-8 leading-relaxed line-clamp-3">
                  <p>{guide.problem}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-zinc-50 w-full flex items-center justify-between">
                  <Link 
                    to={`/guides/${guide.id}`} 
                    className="flex items-center gap-2 text-blue-800 font-bold hover:gap-4 transition-all"
                  >
                    View Details Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-800 text-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Can't find what you're looking for?</h2>
          <p className="text-blue-50 text-xl mb-12 max-w-2xl mx-auto">
            Our experts are available to help you with any custom email issues or technical hurdles.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-white text-blue-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-100 transition-all shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Talk to an Expert Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Guides;
