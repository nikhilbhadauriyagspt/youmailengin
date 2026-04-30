import React, { useState } from 'react';
import { Mail, MessageSquare, Send, ChevronRight, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "info@youmailengine.com",
      desc: "Response within 24 hours",
      color: "blue"
    },
   
  ];

  return (
    <div className="bg-zinc-50 min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with YouMailEngine for email guide suggestions, feedback, or any questions you have about our platform."
      />
      {/* Header */}
      <section className="bg-white pt-32 pb-20 border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[13px] font-bold text-blue-600 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-5xl lg:text-5xl font-serif text-zinc-900 leading-[1.1] mb-6">
            Let's start a <span className="text-blue-700 italic">conversation.</span>
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
            Have a question, feedback, or a topic suggestion? We're here to listen and help you on your digital journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Side: Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-8">Get in touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-6 p-8 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm transition-hover hover:shadow-md">
                      <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-wider mb-1">{item.title}</h4>
                        <p className="text-xl font-bold text-zinc-900 mb-1">{item.value}</p>
                        <p className="text-sm text-zinc-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-700 rounded-[3rem] p-10 text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
                <h3 className="text-2xl font-bold mb-4">Want to learn more?</h3>
                <p className="text-blue-50/80 mb-8 leading-relaxed">
                  Join our community and get the latest email guides and security tips delivered to your inbox.
                </p>
                <Link to="/guides" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-blue-50 active:scale-95">
                  Browse All Guides
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[3rem] border border-zinc-100 p-8 md:p-14 shadow-xl shadow-zinc-200/50">
                {isSubmitted ? (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h3>
                    <p className="text-zinc-500 text-lg max-w-md mx-auto">
                      Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Your Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 ml-1">Subject</label>
                      <input 
                        required
                        type="text" 
                        placeholder="How can we help?"
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 ml-1">Message</label>
                      <textarea 
                        required
                        rows="6"
                        placeholder="Write your message here..."
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl p-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-xl shadow-zinc-200"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
