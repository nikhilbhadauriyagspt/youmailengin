import React from "react";
import {
  Search,
  BookOpen,
  ListChecks,
  ShieldCheck,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search />,
      title: "Choose Your Topic",
      description:
        "Start with the email topic you want to understand, such as inbox basics, settings, privacy, or safe email habits.",
    },
    {
      icon: <BookOpen />,
      title: "Read the Guide",
      description:
        "Each guide is written in simple language so you can understand the meaning without technical confusion.",
    },
    {
      icon: <ListChecks />,
      title: "Follow Key Points",
      description:
        "Go through the important points one by one and learn how email features are used in everyday life.",
    },
    {
      icon: <ShieldCheck />,
      title: "Use Email Smarter",
      description:
        "Apply what you learn to recognize spam, manage your inbox better, and use email with more confidence.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#101f46] px-6 py-16 md:px-12 lg:px-20 text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.45),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_34%)]" />

          

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-5">
              
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/75">
                How To Use Our Guides
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5">
              Understand email guides in a{" "}
              <span className="text-blue-300">simple way.</span>
            </h2>

            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              Our email guides are made for normal readers. You can choose a
              topic, read easy explanations, and understand useful email habits
              without needing technical knowledge.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white/8 border border-white/10 rounded-[2rem] p-7 text-left backdrop-blur-sm hover:bg-white/12 transition-all duration-300"
              >
                

                <div className="relative mb-8 w-16 h-16 rounded-2xl bg-white text-blue-700 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                  {React.cloneElement(step.icon, {
                    className: "w-7 h-7 stroke-[2]",
                  })}
                </div>

                <h3 className="text-xl font-bold mb-4">{step.title}</h3>

                <p className="text-sm leading-7 text-white/72">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;