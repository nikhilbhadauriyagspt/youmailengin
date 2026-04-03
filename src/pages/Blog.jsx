import {
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const BlogCard = ({ post, featured = false }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className={`group flex flex-col h-full ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8 items-stretch' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gray-100 border border-gray-100 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-blue-600/10 ${
          featured ? 'rounded-[36px] aspect-[16/10] lg:aspect-auto lg:h-full' : 'rounded-[28px] aspect-[4/3]'
        }`}
      >
        <img
          loading="lazy"
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-gray-900 shadow-sm">
            <Sparkles size={13} className="text-blue-600" />
            {featured ? 'Featured article' : 'Latest insight'}
          </span>
        </div>
      </div>

      <div className={`flex flex-col flex-grow ${featured ? 'justify-center pt-8 lg:pt-0' : 'px-1 pt-6'}`}>
        <div className="flex items-center flex-wrap gap-4 text-gray-400 text-[11px] font-bold mb-4 tracking-[0.16em] uppercase">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-blue-600" />
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-blue-600" />
            {post.readTime}
          </span>
        </div>

        <h3
          className={`font-black text-gray-950 leading-tight transition-colors duration-300 group-hover:text-blue-600 ${
            featured ? 'text-2xl md:text-4xl mb-5' : 'text-xl md:text-2xl mb-4'
          }`}
        >
          {post.title}
        </h3>

        <p
          className={`text-gray-500 font-medium leading-7 ${
            featured ? 'text-sm md:text-base mb-8 max-w-xl' : 'text-sm mb-7 line-clamp-3'
          }`}
        >
          {post.excerpt}
        </p>

        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] font-bold text-gray-400 tracking-[0.18em] uppercase">
            Read article
          </span>

          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const encode = (data) =>
      Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', email }),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setEmail('');
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
      });
  };

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-32 pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-100/60 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-blue-50 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
            <BookOpen size={14} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
              Our Blog
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-950  leading-[1.05] mb-6">
            Driver Insights for <span className="text-blue-600 italic"> Modern Systems.</span>
          </h1>

          <p className="text-gray-500 text-sm md:text-base font-medium leading-7 max-w-2xl mx-auto">
            Read useful tips, practical guides, and everyday insights to help you
            maintain appliances smarter and keep your home running smoothly.
          </p>
        </div>

        {/* Featured + Grid */}
        {featuredPost && (
          <div className="mb-14">
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {remainingPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Newsletter */}
        <div className="relative rounded-[36px] md:rounded-[48px] border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 md:p-14 lg:p-20 overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.15)]">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/5 blur-[100px] rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 mb-6 shadow-sm">
              <Sparkles size={14} />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Stay Updated
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-950  mb-6">
              Join our <span className="text-blue-600 italic">newsletter.</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base font-medium mb-10 leading-7 max-w-xl mx-auto">
              Get fresh appliance care tips, useful guides, and occasional updates
              delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-950 text-sm font-medium outline-none focus:border-blue-600 transition-all shadow-sm placeholder:text-gray-400"
              />

              <button
                disabled={isSubmitting}
                className="bg-gray-950 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl shadow-gray-950/10"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {isSuccess && (
              <p className="mt-6 text-[12px] font-bold text-blue-600 tracking-[0.14em] uppercase flex items-center justify-center gap-2">
                <CheckCircle2 size={15} />
                Successfully enrolled
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;