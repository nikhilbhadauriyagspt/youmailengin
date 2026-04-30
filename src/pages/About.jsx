import {
  BookOpen,
  Shield,
  Lightbulb,
  Zap,
  Mail,
  CheckCircle2,
  Users,
  Target,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Easy Email Guides",
      desc: "Simple articles that explain email basics, settings, inbox features, and common terms in a clear way.",
    },
    {
      icon: Shield,
      title: "Privacy Awareness",
      desc: "Helpful information about safe email habits, account protection, spam awareness, and privacy-friendly usage.",
    },
    {
      icon: Lightbulb,
      title: "Practical Learning",
      desc: "Real examples and easy explanations to help readers understand how email works in daily life.",
    },
    {
      icon: Zap,
      title: "Quick Understanding",
      desc: "Short and focused content made for readers who want clear answers without confusing technical language.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To make email topics easier to understand through clear and simple educational content.",
    },
    {
      icon: Users,
      title: "For Everyone",
      desc: "Our guides are written for students, professionals, beginners, and everyday email users.",
    },
    {
      icon: Rocket,
      title: "Always Improving",
      desc: "We keep improving our content so readers can learn email topics in a more useful way.",
    },
  ];

  return (
    <main className="bg-white pt-24 pb-20">
      <SEO 
        title="About" 
        description="Learn about You Mail Engine and our mission to provide clear, human-friendly email information for everyday users."
      />
      {/* Heading */}
      <section className="px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto text-center mb-14">
          <div className="flex justify-center mb-4">
            <Mail className="w-8 h-8 text-blue-700" />
          </div>

          <p className="font-serif italic text-blue-700 text-lg mb-2">
            Learn with clarity
          </p>

          <h1 className="text-3xl md:text-4xl tracking-[0.1em] font-serif text-zinc-950">
            About <span className="text-blue-700 italic">You Mail Engine</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-600 leading-8">
            You Mail Engine is an informational website made to explain email topics in
            a simple, human, and easy-to-understand way.
          </p>
        </div>
      </section>

      {/* Blog Style Layout */}
      <section className="px-6 lg:px-10">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12">
          {/* Left Big Post */}
          <div>
            <div className="border border-dashed border-zinc-300 p-3 mb-6">
              <div className="bg-blue-50 min-h-[310px] flex items-center justify-center">
                <div className="text-center px-8">
                  <Mail className="w-20 h-20 text-blue-700 mx-auto mb-5" />
                  <h2 className="text-3xl md:text-4xl font-serif text-zinc-950 leading-tight">
                    Making email simple for everyone.
                  </h2>
                </div>
              </div>
            </div>

            <h2 className="text-xl  font-serif  text-zinc-950 mb-5">
              Our Story
            </h2>

            <p className="text-zinc-700 leading-8 mb-8">
              Email is part of everyday digital life, but many people still find
              its settings, features, and safety terms confusing. You Mail Engine was
              created to make these topics easier to understand through simple
              guides, clear explanations, and practical learning content.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 mb-7">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-700" />
                Informational Guides
              </span>

              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-700" />
                Privacy Awareness
              </span>

              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-700" />
                Beginner Friendly
              </span>
            </div>

            <button
              onClick={() => navigate("/guides")}
              className="inline-flex items-center gap-2 text-blue-700 font-black uppercase text-sm tracking-wide hover:gap-3 transition-all"
            >
              Explore Guides
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Small Posts */}
          <div className="space-y-10">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="grid grid-cols-[150px_1fr] gap-7 items-start"
                >
                  <div className="border border-dashed border-zinc-300 p-3">
                    <div className="h-[125px] bg-zinc-50 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-blue-700" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-black font-serif  text-zinc-950 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-zinc-700 leading-7 mb-4">
                      {item.desc}
                    </p>

                    <button 
                      onClick={() => navigate("/guides")}
                    className="inline-flex items-center gap-2 text-blue-700 text-xs font-black uppercase tracking-wide">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 lg:px-10 mt-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-serif italic text-blue-700 text-lg mb-2">
              What we believe
            </p>
            <h2 className="text-2xl md:text-4xl font-serif tracking-[0.15em]  text-zinc-950">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="border border-dashed border-zinc-300 p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-700" />
                  </div>

                  <h3 className="text-lg font-black font-serif  text-zinc-950 mb-4">
                    {value.title}
                  </h3>

                  <p className="text-zinc-600 text-[15px] leading-7">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 mt-20">
        <div className="max-w-[1000px] mx-auto border border-dashed border-zinc-300 p-10 text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-zinc-950 mb-5">
            Learn email at your own pace.
          </h2>

          <p className="text-zinc-600 leading-8 max-w-2xl mx-auto mb-8">
            Browse our email guides and understand useful topics like inbox
            basics, privacy habits, safe usage, and common email features.
          </p>

          <button
            onClick={() => navigate("/guides")}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 font-bold uppercase text-sm tracking-wide transition"
          >
            Explore All Guides
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;