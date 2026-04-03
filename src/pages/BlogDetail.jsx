import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, ChevronLeft, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-44 flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-bold text-gray-950 mb-4">Article not found</h2>
        <Link
          to="/blog"
          className="text-blue-600 font-bold text-[13px] hover:underline flex items-center gap-2 tracking-widest"
        >
          <ArrowLeft size={16} /> Back to journal
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-blue-100/60 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50 blur-[100px] rounded-full" />

      {/* Success Toast */}
      <div
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${
          copied ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gray-950 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <CheckCircle2 size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold">Link copied</span>
            <span className="text-[10px] text-gray-400">Ready to share</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-400 hover:text-blue-600 transition-colors tracking-widest mb-12 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to journal
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-400 text-[10px] font-bold tracking-widest flex items-center gap-2">
              <Clock size={12} className="text-blue-600" /> {post.readTime} read
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-950  leading-[1.1] mb-12">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-8 border-y border-gray-100 py-8">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                <img
                  loading="lazy"
                  src={`https://i.pravatar.cc/150?u=${post.author.split(' ')[0]}`}
                  alt={post.author}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-950 mb-0.5">{post.author}</p>
                <p className="text-[11px] font-medium text-gray-400 flex items-center gap-2 tracking-wider">
                  <Calendar size={10} className="text-blue-600" /> {post.date}
                </p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer border border-transparent hover:border-blue-100"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="rounded-[32px] overflow-hidden bg-gray-100 shadow-xl border border-gray-100 max-w-3xl mx-auto">
            <img
              loading="lazy"
              src={post.image}
              alt={post.title}
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer CTA */}
          <div className="mt-20 pt-16 border-t border-gray-100 text-center">
            <div className="bg-gray-50 rounded-[40px] p-10 md:p-16 relative overflow-hidden border border-gray-100">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 mx-auto mb-8">
                  <Sparkles size={28} />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-gray-950 mb-6 ">
                  Did this article help you?
                </h3>

                <p className="text-gray-500 mb-10 max-w-md mx-auto text-sm md:text-base font-medium">
                  Read more helpful tips and guides about keeping your home appliances in perfect condition.
                </p>

                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gray-950 text-white rounded-xl font-bold text-[13px] hover:bg-blue-600 transition-all shadow-xl active:scale-95 group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to all posts
                </Link>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] -mr-32 -mt-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Styling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-content h3 {
              font-size: 1.5rem;
              font-weight: 800;
              color: #111827;
              margin-top: 4rem;
              margin-bottom: 1.5rem;
              letter-spacing: -0.025em;
            }
            .blog-content p {
              margin-bottom: 1.5rem;
              line-height: 1.8;
              font-size: 1.05rem;
            }
            .blog-content ul {
              margin-bottom: 2rem;
              list-style-type: none;
            }
            .blog-content li {
              margin-bottom: 0.75rem;
              padding-left: 1.5rem;
              position: relative;
              font-size: 1.05rem;
            }
            .blog-content li::before {
              content: "";
              width: 6px;
              height: 6px;
              background-color: #2563eb;
              border-radius: 9999px;
              position: absolute;
              left: 0;
              top: 0.75rem;
            }
          `,
        }}
      />
    </div>
  );
};

export default BlogDetail;