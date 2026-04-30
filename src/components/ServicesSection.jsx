import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight, MailCheck } from "lucide-react";
import { guidesData } from "../data/guidesData.jsx";

const ServicesSection = () => {
  const displayServices = guidesData.slice(0, 6);

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#f8fafc] py-20 lg:py-28 border-b border-zinc-100"
    >
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-amber-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full mb-5 shadow-sm">
            <MailCheck className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-bold tracking-[0.16em] uppercase text-[11px]">
              Email Learning Resources
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6 leading-tight">
            Simple guides to understand{" "}
            <span className="text-blue-700">email better.</span>
          </h2>

          <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
            Read clear, human-friendly email articles made for everyday users.
            Learn about email basics, settings, privacy, inbox management, and
            safe usage without confusing technical words.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {displayServices.map((service, index) => (
            <Link
              key={index}
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

        <div className="mt-14 flex justify-center">
          <Link
            to="/guides"
            className="group inline-flex items-center gap-3 bg-zinc-900 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-200"
          >
            Browse All Email Guides
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;