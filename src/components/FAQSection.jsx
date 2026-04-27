import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Mail Yaga an official email provider support?",
      answer: "No, Mail Yaga is an independent technical support provider. We are not affiliated with, endorsed by, or partnered with any email service providers like Gmail, Outlook, or Yahoo. We provide expert technical assistance for users who need help navigating these platforms."
    },
    {
      question: "How long does it take to resolve an issue?",
      answer: "Most common email issues like synchronization errors or configuration problems are resolved within 24-48 hours of submitting your request. Complex recovery cases may take longer depending on the specific security protocols of your provider."
    },
    {
      question: "Do you offer a refund if the issue isn't fixed?",
      answer: "Yes, we have a clear Return Policy. If our technical team is unable to provide the service you paid for, or if there's a technical error in billing, you are eligible for a refund. Please refer to our Return Policy page for full details."
    },
    {
      question: "Is my personal data safe with your team?",
      answer: "Absolutely. We follow strict security best practices and never ask for your passwords directly. We guide you through the process securely, ensuring your personal information and privacy are protected at every step."
    },
    {
      question: "Which email providers do you support?",
      answer: "We provide technical assistance for all major email platforms, including Gmail, Outlook, Yahoo Mail, AOL, iCloud, and custom IMAP/SMTP corporate email configurations."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white w-full font-sans">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <p className="text-blue-800 font-semibold tracking-[0.2em] uppercase text-[12px]">Common Questions</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">
                Frequently Asked <span className="text-blue-800">Questions.</span>
              </h2>
              <p className="text-zinc-600 text-[18px] leading-relaxed">
                Can't find the answer you're looking for? Reach out to our support team for personalized assistance.
              </p>
            </div>
            
            <Link to="/contact" className="inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-xl">
              <MessageCircle className="w-5 h-5" />
              Ask a Specific Question
            </Link>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'bg-zinc-50 border-zinc-200 shadow-sm' : 'bg-white border-zinc-100 hover:border-zinc-200'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left group"
                >
                  <span className={`text-[18px] font-bold transition-colors ${openIndex === index ? 'text-blue-800' : 'text-zinc-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-zinc-200 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-blue-800 border-blue-800 text-white rotate-180' : 'text-zinc-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 text-zinc-600 leading-relaxed text-[16px]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
