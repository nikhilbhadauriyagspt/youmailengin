import { useState } from 'react';
import { Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How quickly can you fix my machine?",
    answer: "Most repairs take about 60 to 90 minutes once our worker arrives. We carry most common parts with us to make sure we can finish the job on the same day."
  },
  {
    question: "Are the spare parts original?",
    answer: "Yes, we only use 100% original parts from the brands you trust. This helps your appliance work perfectly for a long time."
  },
  {
    question: "Do I get a guarantee on the repair?",
    answer: "Yes, we give you a full 3-month guarantee on the parts we change and the work we do. This gives you complete peace of mind."
  },
  {
    question: "Can I book a repair for today?",
    answer: "Yes, if you book before noon, we can usually send an expert to your home by the same evening. We prioritize fast help for all our customers."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-40 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header Section: Centered & Simple */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
            <span className="text-[11px] font-bold text-orange-600 tracking-[0.3em] uppercase">
              Help center
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
            Frequently asked <span className="text-orange-600 italic">questions.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Find simple answers to the most common questions about our repair services and process.
          </p>
        </div>

        {/* FAQ Accordion: Minimalist Style */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-b border-gray-100 transition-all duration-500 ${
                openIndex === idx ? 'pb-8 pt-2' : 'py-2'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full py-6 flex items-center justify-between text-left cursor-pointer group"
              >
                <span className={`text-[17px] md:text-[19px] font-bold tracking-tight transition-colors duration-300 ${
                  openIndex === idx ? 'text-orange-600' : 'text-gray-950 group-hover:text-orange-600'
                }`}>
                  {faq.question}
                </span>
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                  openIndex === idx ? 'bg-orange-600 text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-600'
                }`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA: Simple Card */}
        <div className="mt-24 p-8 md:p-12 rounded-[32px] bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-orange-600 shadow-sm">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-950 mb-1">Still have questions?</h3>
                <p className="text-gray-400 text-[13px] font-medium">We are here to help you anytime you need.</p>
              </div>
           </div>
           
           <Link 
             to="/contact" 
             className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 text-white rounded-xl font-bold text-[13px] hover:bg-orange-600 transition-all shadow-xl shadow-gray-950/5 group"
           >
              Contact support <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQ;




