import React from 'react';
import { HelpCircle, ChevronDown, Plus } from 'lucide-react';

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`group border-b border-zinc-100 transition-all duration-500 ${isOpen ? 'bg-zinc-50/50' : 'bg-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 px-4 md:px-8 text-left transition-all"
      >
        <span className={`text-sm md:text-base font-black   transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-zinc-900 group-hover:text-blue-600'}`}>
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white rotate-45' : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white'}`}>
          <Plus size={16} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 md:px-8 pb-8">
          <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed font-medium  tracking-wide opacity-80 max-w-3xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What are the main driver categories?", a: "The main categories include essential (core hardware), hardware-specific (internal components), peripheral (external devices), and advanced (firmware and security) drivers." },
    { q: "Which drivers are most important?", a: "Chipset, Graphics, Audio, and Network drivers are critical for standard operation, hardware coordination, and overall system stability." },
    { q: "Why are drivers called translators?", a: "They translate complex operating system commands into specific electrical signals and instructions that hardware components can execute." },
    { q: "Can a connected device work without a driver?", a: "In most cases, no. Even if detected, the device will likely have limited functionality, poor performance, or show constant system errors." },
    { q: "Do laptops need different drivers than desktops?", a: "Yes. Laptops require specialized support for touchpads, integrated power management, cooling profiles, and specialized wireless modules." },
    { q: "What happens if a driver is missing?", a: "The hardware may fail to be detected, experience major performance lag, produce incorrect output, or crash the entire system with kernel errors." }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full mb-6">
            <HelpCircle size={14} />
            <span className="text-[12px] font-bold  uppercase">Knowledge Base</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900   mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed  tracking-wide">
            Everything you need to know about the software layers that empower your hardware.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto border-t border-zinc-100">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
