import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const LatestBlogs = () => {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-40 bg-white" id="insights">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section: Centered & Refined */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
            <span className="text-[11px] font-bold text-orange-600 tracking-[0.3em] uppercase">
              Our blog
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
            Latest repair <span className="text-orange-600 italic">insights.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Read helpful tips and news about keeping your home appliances in perfect condition.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
              to={`/blog/${post.id}`} 
              className="group flex flex-col h-full"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-gray-100 mb-8 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-orange-600/10 group-hover:-translate-y-1">
                <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
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
                
                <div className="mt-auto inline-flex items-center gap-2 text-gray-950 font-bold text-[12px] transition-all group-hover:text-orange-600 group-hover:gap-3">
                  Read article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <Link to="/blog" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-950 text-gray-950 font-bold text-[13px] hover:bg-gray-950 hover:text-white transition-all rounded-xl active:scale-95 group">
            View all posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestBlogs;




