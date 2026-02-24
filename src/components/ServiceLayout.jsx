import { ShieldCheck, Clock, Award, ArrowLeft, CheckCircle2, AlertCircle, Wrench, Zap, ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookingModal from './BookingModal';

const ServiceLayout = ({ title, desc, longDesc, icon, image, extraContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen pt-24">
      
      {/* 1. Refined Hero Section: Immersive & Clean */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-6">
              <Link to="/" className="inline-flex items-center gap-3 px-5 py-2 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-orange-600 transition-all mb-12 group/back shadow-sm">
                <ArrowLeft size={14} className="group-hover/back:-translate-x-1 transition-transform" /> Back to Catalog
              </Link>
              
              <div className="w-14 h-14 bg-gray-950 rounded-2xl flex items-center justify-center text-orange-500 mb-10 shadow-2xl">
                {icon}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter leading-[1] mb-10">
                {title} <br />
                <span className="text-orange-600 italic">Solutions.</span>
              </h1>
              
              <div className="flex items-center gap-4 border-l-2 border-orange-600 pl-8">
                <p className="text-gray-500 font-bold text-[14px] uppercase tracking-widest leading-relaxed max-w-sm">
                  {desc}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-100/20 rounded-bl-full blur-3xl -z-10" />
      </section>

      {/* 2. Content Matrix */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            <div className="lg:col-span-8">
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-orange-600" />
                  <span className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em]">Service Details</span>
                </div>
                <p className="text-xl md:text-3xl font-bold text-gray-950 leading-relaxed tracking-tight">
                  {longDesc}
                </p>
              </div>

              <div className="extra-service-content-matrix mb-24">
                {extraContent}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-12 bg-gray-50 rounded-[40px] border border-gray-100 group transition-all hover:bg-white hover:shadow-2xl">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                    <AlertCircle size={18} className="text-orange-600" /> Resolved Issues
                  </h3>
                  <ul className="space-y-6">
                    {["Performance Drops", "Unusual Noises", "Power Failures", "Leaking Components"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-[12px] font-black text-gray-950 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-12 bg-gray-950 rounded-[40px] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 blur-[80px]" />
                  <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-3 relative z-10">
                    <CheckCircle2 size={18} /> Our Journey
                  </h3>
                  <ul className="space-y-6 relative z-10">
                    {["Deep Diagnostics", "OEM Parts Replace", "Safety Testing", "Cleaning"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-[12px] font-bold text-gray-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={14} className="text-orange-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 sticky top-32">
              <div className="bg-gray-50 rounded-[48px] p-12 relative overflow-hidden border border-gray-100 shadow-2xl shadow-black/[0.02]">
                <h4 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em] mb-12 text-center">Quality Trust</h4>
                
                <div className="space-y-12 mb-16">
                  {[
                    { icon: <Clock size={24} />, label: 'Response', val: '60 Minute arrival' },
                    { icon: <ShieldCheck size={24} />, label: 'Warranty', val: '90 Day Coverage' },
                    { icon: <Award size={24} />, label: 'Parts', val: '100% Genuine OEM' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm border border-gray-100 transition-all group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-orange-600/20">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-[13px] font-black text-gray-950 uppercase tracking-tight italic">{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-6 bg-gray-950 text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all rounded-2xl shadow-2xl shadow-gray-950/10 active:scale-95 flex items-center justify-center gap-4 group"
                >
                  Book Fix Now <ArrowRight size={18} className="group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={title} 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .extra-service-content-matrix h2 {
          font-size: 1.75rem;
          font-weight: 900;
          color: #030712;
          margin-top: 5rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: -0.025em;
        }
        .extra-service-content-matrix h3 {
          font-size: 1.25rem;
          font-weight: 900;
          color: #030712;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .extra-service-content-matrix h4 {
          font-size: 0.8rem;
          font-weight: 900;
          color: #ea580c;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }
        .extra-service-content-matrix p {
          margin-bottom: 2rem;
          color: #6b7280;
          line-height: 1.8;
          font-size: 1.05rem;
          font-weight: 600;
        }
        .extra-service-content-matrix ul {
          margin-bottom: 3rem;
          display: grid;
          grid-template-cols: 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .extra-service-content-matrix ul {
            grid-template-cols: 1fr 1fr;
          }
        }
        .extra-service-content-matrix li {
          color: #111827;
          font-weight: 800;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .extra-service-content-matrix li::before {
          content: "";
          width: 8px;
          height: 2px;
          background-color: #ea580c;
          flex-shrink: 0;
        }
      `}} />
    </div>
  );
};

export default ServiceLayout;




