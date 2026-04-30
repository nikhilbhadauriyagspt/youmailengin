import { useState } from "react";
import { ChevronDown, MessageCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is You Mail Engine an official email provider?",
      answer:
        "No. You Mail Engine is an independent website created for learning purposes. We are not connected to any email company or service. All content is written to help users understand email in a simple way.",
    },
    {
      question: "What can I learn from this website?",
      answer:
        "You can learn how email works, how to use different features, understand settings, and follow safe email habits. Everything is explained in a simple and easy-to-read format.",
    },
    {
      question: "Do I need technical knowledge to read these guides?",
      answer:
        "Not at all. The content is written for normal users. Even if you are a beginner, you can easily understand the topics without any technical background.",
    },
    {
      question: "Are all guides free to read?",
      answer:
        "Yes. All guides and articles available on this website are free to read. The goal is to make email knowledge simple and accessible for everyone.",
    },
    {
      question: "How often is the content updated?",
      answer:
        "We update content from time to time to keep it relevant and easy to understand, especially when email features or interfaces change.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f8fafc] w-full">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            <Info className="w-4 h-4" />
            Common Questions
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-5">
            Simple answers to <span className="text-blue-700">common questions</span>
          </h2>

          <p className="text-zinc-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Find clear and straightforward answers about this website and how to use our email learning guides.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "bg-white border-blue-200 shadow-lg"
                  : "bg-white border-zinc-100 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span
                  className={`text-[16px] md:text-[17px] font-semibold ${
                    openIndex === index ? "text-blue-700" : "text-zinc-900"
                  }`}
                >
                  {faq.question}
                </span>

                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                    openIndex === index
                      ? "bg-blue-700 text-white rotate-180"
                      : "bg-zinc-50 text-zinc-400"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[400px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="h-px bg-zinc-200 mb-5 opacity-50" />
                  <p className="text-zinc-600 text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA (Soft, not support-like) */}
        <div className="mt-16 text-center">
          <div className="bg-zinc-900 rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Want to explore more?
              </h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Browse our guides to learn more about email in a simple way.
              </p>

              <Link
                to="/guides"
                className="inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Explore Guides
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;