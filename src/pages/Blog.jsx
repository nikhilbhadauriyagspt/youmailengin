import { ArrowRight, Clock, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 1. Header Section: Centered & Refined */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
            <span className="text-[11px] font-bold text-orange-600 tracking-[0.3em] uppercase">
              Our blog
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-[56px] font-black text-gray-950 tracking-tight leading-[1.1] mb-6">
            Insights for the <br />
            <span className="text-orange-600 italic">modern home.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Read helpful tips, guides, and news about keeping your home appliances in perfect condition.
          </p>
        </div>

        {/* 2. Unified Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col h-full">
              {/* Card Image Area */}
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100 mb-8 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-orange-600/10 group-hover:-translate-y-1">
                <img loading="lazy" src={post.image} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" alt={post.title} />
                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 transition-colors duration-500" />
              </div>
              
              {/* Card Content Area */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-orange-600" /> {post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-200" />
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-orange-600" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-[22px] font-bold text-gray-950 mb-4 leading-tight transition-colors group-hover:text-orange-600">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Read article</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. Minimal Newsletter */}
        <div className="bg-gray-50 rounded-[48px] p-10 md:p-20 relative overflow-hidden text-center border border-gray-100 shadow-xl shadow-black/[0.02]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 blur-[80px]" />
          
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight mb-6">
              Join our <span className="text-orange-600 italic">newsletter.</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium mb-10 leading-relaxed">
              Get the latest appliance repair tips and exclusive offers sent directly to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 bg-white border border-gray-200 rounded-xl px-6 py-4 text-gray-950 text-[13px] font-medium focus:border-orange-600 outline-none transition-all shadow-sm placeholder:text-gray-400"
              />
              <button 
                disabled={isSubmitting}
                className="bg-gray-950 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-[13px] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 group shadow-xl shadow-gray-950/10"
              >
                {isSubmitting ? '...' : <>Subscribe <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>}
              </button>
            </form>
            
            {isSuccess && (
              <p className="mt-6 text-[11px] font-bold text-orange-600 uppercase tracking-widest flex items-center justify-center gap-2">
                <CheckCircle2 size={14} /> Successfully enrolled
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;




