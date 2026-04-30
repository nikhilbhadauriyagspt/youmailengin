import { BookOpen, Shield, Lightbulb, Zap, ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: BookOpen,
    title: "Easy Email Guides",
    desc: "Simple articles that explain email basics, settings, inbox features, and common terms in a clear way.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Privacy Awareness",
    desc: "Helpful information about safe email habits, account protection, spam awareness, and privacy-friendly usage.",
    color: "emerald",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    desc: "Real examples and easy explanations to help readers understand how email works in daily life.",
    color: "amber",
  },
  {
    icon: Zap,
    title: "Quick Understanding",
    desc: "Short and focused content made for readers who want clear answers without confusing technical language.",
    color: "rose",
  },
];

const colorMap = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100",
};

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#f7f8fb] py-20 lg:py-28 border-y border-zinc-100"
    >
      <div className="absolute top-16 left-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <p className="text-blue-700 font-bold tracking-[0.25em] uppercase text-[12px] mb-5">
                About Us
              </p>

              <p className="text-base md:text-[17px] text-zinc-600 leading-[2] max-w-xl">
                This website is created to share simple and useful information
                about email. Here, readers can learn how email works, what
                different settings mean, and how to use email more confidently
                in everyday digital life.
              </p>
            </div>

            <div className="space-y-5">
              {features.slice(0, 2).map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-5 bg-white/80 backdrop-blur-sm border border-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`w-13 h-13 min-w-13 rounded-2xl border flex items-center justify-center ${colorMap[item.color]}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-zinc-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[430px] border-[10px] border-blue-600/15 rounded-[2.5rem]" />
            </div>

            <div className="relative z-10 w-full max-w-[360px] bg-white rounded-[3rem] shadow-[0_30px_80px_rgba(15,23,42,0.12)] p-8 text-center border border-zinc-100">
              <div className="mx-auto mb-8 w-24 h-24 rounded-[2rem] bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                <Mail className="w-11 h-11" />
              </div>

              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Learn Email in a Simple Way
              </h3>

              <p className="text-zinc-600 text-[15px] leading-relaxed">
                Explore clear, beginner-friendly email information written for
                normal users, not technical experts.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif text-zinc-900 leading-[1.08] mb-8">
              Clear email <br />
              information for <br />
              <span className="text-blue-700">everyday users.</span>
            </h2>

            <p className="text-zinc-600 text-[16px] leading-relaxed max-w-xl mb-8">
              Our content explains email topics in a simple, honest, and
              practical way. From inbox basics to privacy awareness, every guide
              is written to help readers understand email without confusion.
            </p>
      
            <button 
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-3 bg-[#ae1f35] hover:bg-[#97182c] text-white px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 cursor-pointer"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-10 space-y-5">
              {features.slice(2, 4).map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div
                      className={`w-11 h-11 min-w-11 rounded-2xl border flex items-center justify-center ${colorMap[item.color]}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-zinc-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-zinc-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;