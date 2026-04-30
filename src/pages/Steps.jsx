import React from 'react';
import { Search, BookOpen, ListChecks, ShieldCheck, ChevronRight, ArrowRight, Sparkles, Target, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Steps = () => {
  const navigate = useNavigate();
  
  const learningSteps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Discover Your Topic",
      description: "Browse our extensive collection of email guides. Whether it's setting up a new account, understanding IMAP/POP3, or learning about encryption, start with what interests you most.",
      color: "blue"
    },
    {
      number: "02",
      icon: <BookOpen className="w-8 h-8" />,
      title: "Absorb Simple Insights",
      description: "Our guides are stripped of technical jargon. Read through clear, everyday explanations designed to make complex digital concepts feel like second nature.",
      color: "emerald"
    },
    {
      number: "03",
      icon: <ListChecks className="w-8 h-8" />,
      title: "Follow the Blueprint",
      description: "Use our step-by-step checklists to apply your new knowledge. Each guide provides actionable points that you can test in your own inbox immediately.",
      color: "amber"
    },
    {
      number: "04",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Master Your Inbox",
      description: "Achieve digital confidence. Recognize security threats, organize your communication efficiently, and use email as a powerful tool for your personal and professional life.",
      color: "rose"
    }
  ];

  const colorMap = {
    blue: "bg-blue-50 text-blue-600 border-blue-100 shadow-blue-100/50",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-100/50",
    amber: "bg-amber-50 text-amber-600 border-amber-100 shadow-amber-100/50",
    rose: "bg-rose-50 text-rose-600 border-rose-100 shadow-rose-100/50",
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Steps" 
        description="Follow our clear, step-by-step roadmap to master your email inbox and improve your digital communication skills."
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[13px] font-bold text-blue-600 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Learning Path</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-5xl font-serif text-zinc-900 leading-[1.1] mb-8">
              Your step-by-step <span className="text-blue-700 italic">roadmap</span> to email mastery.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
              We've broken down the complex world of digital communication into four simple, actionable stages. Follow the path to become an email expert.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Visualization */}
      <section className="py-20 bg-zinc-50/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {learningSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative bg-white border border-zinc-100 rounded-[3rem] p-10 lg:p-14 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border-2 ${colorMap[step.color]} transition-transform group-hover:scale-110 duration-500`}>
                    {step.icon}
                  </div>
                  <span className="text-6xl font-serif text-zinc-100 group-hover:text-blue-50 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-zinc-900 mb-6 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  {step.description}
                </p>
                
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4" />
                Why it works
              </div>
              <h2 className="text-4xl font-serif text-zinc-900 mb-8 leading-tight">
                Designed for the <span className="text-blue-700">modern learner.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-2">Micro-Learning</h4>
                    <p className="text-zinc-600">Complex topics are divided into small, manageable chunks that take less than 5 minutes to understand.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-2">Instant Application</h4>
                    <p className="text-zinc-600">Every step includes a "Try This Now" section to help you practice what you've just learned in your own inbox.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="relative p-1 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-[3rem]">
                <div className="bg-white rounded-[2.8rem] p-8 md:p-12 border border-white/50 shadow-2xl">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Ready to begin?</h3>
                  <div className="space-y-4 mb-10">
                    {[
                      "Unlimited access to all guides",
                      "Simplified security checklists",
                      "Privacy-first learning materials",
                      "Regularly updated content"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-zinc-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate("/guides")}
                    className="w-full bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all active:scale-[0.98] shadow-xl shadow-blue-200"
                  >
                    Explore All Guides
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
