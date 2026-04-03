import {
  ArrowRight,
  ChevronRight,
  Cpu,
  ShieldCheck,
  Sparkles,
  Layers,
  Monitor,
  Printer,
  Wifi,
  Volume2,
  HardDrive,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const topics = [
    { title: 'Driver Basics', icon: Cpu },
    { title: 'Update Awareness', icon: Sparkles },
    { title: 'Compatibility', icon: Layers },
    { title: 'Graphics Devices', icon: Monitor },
    { title: 'Printer Topics', icon: Printer },
    { title: 'Network Drivers', icon: Wifi },
  ];

  const contentBlocks = [
    {
      title: 'Who We Are',
      text: 'All About Drivers is an informational website created to help users better understand device drivers, updates, compatibility, and common driver-related topics through simple, clear, and educational content.',
    },
    {
      title: 'What We Do',
      text: 'We publish easy-to-read informational content around driver basics, update awareness, compatibility guidance, and general troubleshooting knowledge so everyday users can explore these topics with more confidence.',
    },
    {
      title: 'Our Mission',
      text: 'Our mission is to make driver-related information easier to understand for everyday users by reducing confusion and presenting technical topics in a more practical and approachable way.',
    },
    {
      title: 'Our Vision',
      text: 'Our vision is to become a trusted informational destination for users seeking clear and reliable content about device drivers and related support topics.',
    },
  ];

  const audience = [
    'Everyday computer users',
    'Home users trying to understand device behavior',
    'Students learning about system functionality',
    'Office users using connected devices',
    'Readers looking for update information',
  ];

  const devices = [
    'Printers',
    'Graphics cards',
    'Audio devices',
    'Wi-Fi adapters',
    'USB devices',
    'Scanners',
    'Motherboards',
    'Keyboards & Mice',
  ];

  return (
    <div className="bg-[#f7f8fb] min-h-screen pt-28 md:pt-32 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-full mx-auto grid lg:grid-cols-12 gap-14 items-center">
          {/* Left */}
          <div className="lg:col-span-6">
            <p className="text-[13px] uppercase tracking-[0.22em] text-[#c28a2e] font-medium mb-5">
              About
            </p>

            <h1 className="text-[34px] md:text-[46px] lg:text-[54px] leading-[1.08] font-semibold text-zinc-900 mb-7 tracking-[-0.03em]">
              What is <span className="font-bold text-blue-600">All About Drivers?</span>
            </h1>

            <div className="space-y-5 text-zinc-600 text-[15px] md:text-[17px] leading-8 max-w-2xl">
              <p>
                All About Drivers is an informational website dedicated to helping
                users understand drivers, updates, compatibility, and common
                device-related topics through simple, clear, and educational content.
              </p>
              <p>
                Our platform is built for readers who want approachable explanations
                without overly technical language. We focus on awareness, clarity,
                and structured learning around the software layer that helps devices
                communicate properly with operating systems.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3da7f2] text-white text-sm font-medium hover:bg-zinc-900 transition-all"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#3da7f2] text-sm font-medium hover:text-zinc-900 transition-colors"
              >
                Back to Home
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-[520px] mx-auto">
              {topics.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-full border-2 border-[#7b61ff]/70 bg-white flex flex-col items-center justify-center text-center p-5 shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-full border border-[#3da7f2]/30 flex items-center justify-center text-[#4c74ff] mb-3">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <p className="text-[13px] md:text-[14px] font-medium text-zinc-700 leading-5">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="px-6 md:px-12 lg:px-20 mt-20 md:mt-24">
        <div className="max-w-full mx-auto rounded-[32px] bg-white border border-zinc-200/70 p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[13px] uppercase tracking-[0.18em] text-[#3da7f2] font-medium mb-3">
                Informational
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 leading-tight">
                Built for clarity, not confusion.
              </h3>
            </div>

            <div className="md:col-span-2 text-zinc-600 text-[15px] md:text-[16px] leading-8">
              We aim to make driver-related content easier to explore by keeping the
              language readable, the structure organized, and the focus centered on
              awareness, compatibility, and practical understanding.
            </div>
          </div>
        </div>
      </section>

      {/* 4 Blocks */}
      <section className="px-6 md:px-12 lg:px-20 mt-16">
        <div className="max-w-full mx-auto grid md:grid-cols-2 gap-6">
          {contentBlocks.map((item, i) => (
            <div
              key={i}
              className="rounded-[30px] bg-white border border-zinc-200/70 p-7 md:p-9"
            >
              <div className="w-12 h-12 rounded-full border border-[#7b61ff]/40 flex items-center justify-center text-[#4c74ff] mb-5">
                <ShieldCheck size={22} strokeWidth={1.8} />
              </div>

              <h3 className="text-[24px] md:text-[28px] font-semibold text-zinc-900 mb-4 tracking-[-0.02em]">
                {item.title}
              </h3>

              <p className="text-zinc-600 text-[15px] md:text-[16px] leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Drivers Matter */}
      <section className="px-6 md:px-12 lg:px-20 mt-16 md:mt-20">
        <div className="max-w-full mx-auto grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 rounded-[30px] bg-white border border-zinc-200/70 p-7 md:p-9">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[#c28a2e] font-medium mb-3">
              Why Drivers Matter
            </p>

            <h2 className="text-[28px] md:text-[36px] font-semibold text-zinc-900 leading-[1.15] mb-5 tracking-[-0.03em]">
              Drivers help systems and hardware work together.
            </h2>

            <p className="text-zinc-600 text-[15px] md:text-[16px] leading-8">
              Drivers are a key part of how computers and devices function. They help
              operating systems communicate with hardware components so devices can
              perform their intended tasks correctly. Understanding them can help
              users better recognize compatibility issues, update concerns, and common
              device behavior.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-[30px] bg-white border border-zinc-200/70 p-7 md:p-9">
            <h3 className="text-[22px] md:text-[28px] font-semibold text-zinc-900 mb-6 tracking-[-0.02em]">
              Devices commonly connected to driver topics
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {devices.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[20px] bg-[#f7f8fb] border border-zinc-200/60 px-4 py-4 text-[14px] font-medium text-zinc-700 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience + Promise */}
      <section className="px-6 md:px-12 lg:px-20 mt-16 md:mt-20">
        <div className="max-w-full mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-[30px] bg-[#20242c] text-white p-7 md:p-9">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[#69bfff] font-medium mb-4">
              Who It Is For
            </p>

            <h3 className="text-[26px] md:text-[32px] font-semibold leading-tight mb-6 tracking-[-0.02em]">
              A helpful platform for everyday readers.
            </h3>

            <div className="space-y-4">
              {audience.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={15} className="text-[#69bfff]" />
                  </div>
                  <p className="text-zinc-300 text-[15px] leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[30px] bg-white border border-zinc-200/70 p-7 md:p-9">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[#3da7f2] font-medium mb-4">
              What Makes Us Different
            </p>

            <h3 className="text-[26px] md:text-[34px] font-semibold text-zinc-900 leading-tight mb-6 tracking-[-0.03em]">
              We focus on simplicity, structure, and informational value.
            </h3>

            <div className="space-y-5 text-zinc-600 text-[15px] md:text-[16px] leading-8">
              <p>
                All About Drivers is designed to keep information approachable. We
                avoid unnecessary complexity and explain topics in a more readable,
                step-by-step way.
              </p>
              <p>
                Instead of making technical topics feel overwhelming, we aim to help
                readers build awareness and confidence through clear explanations,
                organized sections, and useful educational content.
              </p>
              <p>
                Our goal is not just to present information, but to make that
                information easier to understand and more practical for everyday use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 lg:px-20 mt-16 md:mt-20">
        <div className="max-w-full mx-auto rounded-[34px] bg-white border border-zinc-200/70 p-8 md:p-12 text-center">
          <p className="text-[13px] uppercase tracking-[0.18em] text-[#c28a2e] font-medium mb-4">
            All About Drivers
          </p>

          <h2 className="text-[30px] md:text-[42px] font-semibold text-zinc-900 leading-[1.15] mb-5 tracking-[-0.03em]">
            Explore driver-related topics <br className="hidden md:block" />
            with more ease and clarity.
          </h2>

          <p className="text-zinc-600 text-[15px] md:text-[16px] leading-8 max-w-3xl mx-auto mb-8">
            If you would like to connect with us, share feedback, or explore more
            informational content, visit our contact page and stay connected with
            All About Drivers.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3da7f2] text-white text-sm font-medium hover:bg-zinc-900 transition-all"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;