import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData.jsx';
import { ChevronRight, ArrowUpRight, MailCheck } from 'lucide-react';
import SEO from '../components/SEO';

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
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Guides" 
        description="Browse our comprehensive library of simple email guides, security tips, and inbox management resources."
      />
      {/* Simplified Hero Section - Matches Homepage Style */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-zinc-50/50">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-100/30 rounded-full blur-3xl" />
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <MailCheck className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-bold tracking-[0.16em] uppercase text-[11px]">
                Guides & Resources
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif text-zinc-900 mb-6 leading-tight">
              Simple guides to understand <span className="text-blue-700">email better.</span>
            </h1>
            
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-2xl">
              Explore our full collection of clear, human-friendly email articles. Learn about basics, 
              security, and inbox management without confusing technical words.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid - Exact Match to ServicesSection Cards */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {guidesData.map((service, index) => (
              <Link
                key={index}
                id={service.id}
                to={`/guides/${service.id}`}
                className="group relative min-h-[300px] rounded-[2rem] bg-white border border-zinc-100 p-7 lg:p-8 shadow-sm hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={`w-16 h-16 rounded-3xl flex items-center justify-center border transition-all duration-300 ${service.bg} ${service.color} group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600`}
                    >
                      {React.cloneElement(service.icon, {
                        className: "w-7 h-7 stroke-[2]",
                      })}
                    </div>

                    <div className="w-11 h-11 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                    </div>
                  </div>

                  <div className="mb-7">
                    <span className="inline-block text-[12px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-4">
                      Guide {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl lg:text-2xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[15px] text-zinc-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[14px] font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
                      Read guide
                    </span>

                    <span className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Bottom Section */}
      <section className="py-20 px-6 lg:px-16 border-t border-zinc-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-zinc-900 mb-6">
            Need help with a different topic?
          </h2>
          <p className="text-zinc-600 mb-10 max-w-xl mx-auto">
            If you have an email question that we haven't covered yet, let us know 
            and we'll create a new guide for you.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
          >
            Suggest a Topic
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Guides;
