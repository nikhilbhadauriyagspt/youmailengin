import { MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompactCTA = () => {
  return (
    <section className="py-12 bg-white w-full font-sans border-t border-zinc-50">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="max-w-md mx-auto bg-zinc-900 rounded-[2rem] p-8 text-center text-white shadow-2xl relative overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-2xl transition-all group-hover:bg-blue-600/20"></div>
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Email <span className="text-blue-500">Mastery.</span>
            </h3>
            <p className="text-zinc-300 text-[15px] leading-relaxed">
              Explore our latest guides and master your digital workflow today.
            </p>
            <Link 
              to="/guides" 
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-white hover:text-zinc-900 text-white px-8 py-3.5 rounded-2xl text-[14px] font-bold transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              Explore All Guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactCTA;
