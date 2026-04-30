import React, { useState } from 'react';
import { ChevronDown, Info, HelpCircle, MessageSquare, Search, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "General",
      question: "Is YouMailEngine an official email provider?",
      answer: "No. YouMailEngine is an independent educational platform. We are not affiliated with email service provider. Our mission is strictly to provide clear, actionable information about how to use these services effectively."
    },
    {
      category: "Learning",
      question: "What can I learn from this website?",
      answer: "We cover everything from the absolute basics (how to send an email) to advanced topics like setting up custom domains, understanding encryption, and identifying sophisticated phishing attempts. Our content is designed to be accessible for all skill levels."
    },
    {
      category: "Technical",
      question: "Do I need technical knowledge to read these guides?",
      answer: "Absolutely not. We specialize in 'Human-to-Human' explanations. We take complex technical specifications and translate them into simple concepts that anyone can understand and apply."
    },
    {
      category: "Privacy",
      question: "Are all guides free to read?",
      answer: "Yes, 100%. Access to all our educational materials is completely free. We believe that digital literacy and privacy knowledge should be available to everyone without barriers."
    },
    {
      category: "Updates",
      question: "How often is the content updated?",
      answer: "The digital world moves fast, and so do we. We review our primary guides monthly and update them whenever a major service provider changes their interface or security protocols."
    },
    {
      category: "Contact",
      question: "Can I suggest a topic for a new guide?",
      answer: "We love hearing from our readers! If there's an email-related topic you're struggling with, please use our contact form to let us know. Your suggestion might become our next featured guide."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-zinc-50 min-h-screen">
      <SEO 
        title="FAQ" 
        description="Find answers to common questions about YouMailEngine, our email guides, and how we help you improve your digital skills."
      />
      {/* Header Section */}
      <section className="bg-white pt-32 pb-20 border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-2 text-[13px] font-bold text-blue-600 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-blue-800 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="text-5xl lg:text-5xl font-serif text-zinc-900 leading-[1.1] mb-6">
                Common <span className="text-blue-700 italic">questions.</span>
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
                Everything you need to know about the platform and how we help you master your digital communication.
              </p>
            </div>
            
            <div className="relative">
              
             
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`group bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? "border-blue-200 shadow-xl shadow-blue-50/50" 
                      : "border-zinc-100 hover:border-blue-100 hover:shadow-md"
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-8 py-7 flex items-center justify-between text-left"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{faq.category}</span>
                      <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? "text-blue-700" : "text-zinc-900 group-hover:text-blue-600"}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-blue-700 text-white rotate-180 shadow-lg shadow-blue-200" : "bg-zinc-50 text-zinc-400"}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-8 pb-8 pt-2">
                      <div className="h-px bg-zinc-100 mb-6" />
                      <p className="text-zinc-600 text-[17px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-zinc-200">
              <HelpCircle className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">No answers found</h3>
              <p className="text-zinc-500">Try searching for something else or contact us directly.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-[1000px] mx-auto bg-zinc-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Still have a question?</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              Our team is always happy to help. Send us your query and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all active:scale-[0.98]"
              >
                Contact Us
              </Link>
              <Link 
                to="/guides" 
                className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
