import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { guidesData } from '../data/guidesData.jsx';
import { 
  ArrowLeft, 
  ChevronRight, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  ArrowUpRight,
  Share2,
  Bookmark
} from 'lucide-react';
import SEO from '../components/SEO';

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guidesData.find(g => g.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!guide) return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center p-10 bg-white rounded-[2.5rem] shadow-xl border border-zinc-100">
        <h1 className="text-3xl font-serif text-zinc-900 mb-4">Guide not found</h1>
        <p className="text-zinc-500 mb-8">The resource you are looking for doesn't exist or has been moved.</p>
        <Link 
          to="/guides" 
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all guides
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={guide.title} 
        description={guide.shortDesc} 
      />
      {/* Article Header / Hero */}
      <section className="relative pt-32 pb-16 bg-zinc-50/50 overflow-hidden border-b border-zinc-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex items-center gap-2 text-[12px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-10">
            <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/guides" className="hover:text-blue-800 transition-colors">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-400 truncate max-w-[200px] md:max-w-none">{guide.title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${guide.bg.replace('50', '100')} ${guide.color} shadow-sm border border-white`}>
                  {React.cloneElement(guide.icon, { className: "w-7 h-7 stroke-[1.5]" })}
                </div>
                <span className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest">In-depth Article</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-[1.15] mb-6">
                {guide.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed">
                {guide.shortDesc}
              </p>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
            
            {/* Body Content */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Problem Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif text-zinc-900">Understanding the Issue</h2>
                </div>
                <div className="bg-zinc-50/70 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/20 rounded-bl-full" />
                  <p className="text-[17px] md:text-[18px] text-zinc-600 leading-[1.8] font-light">
                    {guide.problem}
                  </p>
                </div>
              </div>

              {/* Steps Section */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif text-zinc-900">Recommended Steps</h2>
                </div>
                
                <div className="space-y-6">
                  {guide.steps.map((step, index) => (
                    <div 
                      key={index} 
                      className="group bg-white rounded-[2rem] p-8 border border-zinc-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
                    >
                      <div className="flex items-start gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-lg font-bold text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-[16px] md:text-[17px] text-zinc-500 leading-relaxed font-light">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Info className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-serif text-zinc-900">Summary</h2>
                </div>
                <div className="bg-zinc-900 p-10 md:p-14 rounded-[3rem] text-white relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2" />
                  <p className="text-xl md:text-2xl font-serif text-blue-50 leading-relaxed italic relative z-10">
                    "{guide.conclusion}"
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-16 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                <Link 
                  to="/guides" 
                  className="inline-flex items-center gap-3 text-zinc-900 font-bold hover:text-blue-600 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Explore more resources
                </Link>
                
              </div>

            </div>

            {/* Sidebar / Related */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                
                {/* Contact Card */}
                <div className="bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Still stuck?</h3>
                    <p className="text-zinc-600 mb-8 leading-relaxed text-[15px] font-light">
                      If these steps didn't resolve your issue, our team can provide personalized help.
                    </p>
                    <Link 
                      to="/contact" 
                      className="flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-800 text-white py-4.5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Related Resources */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Related Guides</h4>
                    <Link to="/guides" className="text-[11px] font-bold text-blue-600 uppercase hover:underline">View All</Link>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {guidesData.filter(g => g.id !== guide.id).slice(0, 4).map(related => (
                      <Link 
                        key={related.id} 
                        to={`/guides/${related.id}`}
                        className="group flex flex-col p-6 rounded-[2rem] bg-white border border-zinc-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${related.bg} ${related.color} border border-white group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                            {React.cloneElement(related.icon, { className: "w-5 h-5 stroke-[1.5]" })}
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <h5 className="text-[16px] font-bold text-zinc-900 group-hover:text-blue-700 transition-colors line-clamp-1">{related.title}</h5>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GuideDetail;
