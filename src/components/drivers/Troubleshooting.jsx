import React from 'react';
import {
  Settings,
  ArrowRight,
  ShieldAlert,
  Zap,
  Wifi,
  Speaker,
  Camera,
  Printer,
  Bluetooth,
  CheckCircle2,
  Cpu,
  Search,
  MonitorSmartphone,
} from 'lucide-react';

const ProblemCard = ({ title, icon: Icon, desc }) => (
  <div className="group rounded-[28px] border border-zinc-200 bg-white p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.18)]">
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shrink-0">
        <Icon size={24} />
      </div>

      <div className="min-w-0">
        <h4 className="text-base md:text-lg font-bold text-zinc-900 mb-1 leading-snug">
          {title}
        </h4>
        <p className="text-sm text-zinc-500 leading-6">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const StepCard = ({ id, title, desc, icon: Icon, isLast }) => (
  <div className="relative flex gap-5">
    <div className="relative flex flex-col items-center shrink-0">
      <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center shadow-lg shadow-zinc-900/10">
        <Icon size={22} />
      </div>
      {!isLast && <div className="w-px h-full bg-gradient-to-b from-blue-200 via-zinc-200 to-transparent mt-3" />}
    </div>

    <div className="pb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold mb-3">
        Step {id}
      </div>
      <h3 className="text-lg md:text-xl font-black text-zinc-900 mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-[15px] text-zinc-500 leading-7 max-w-lg">
        {desc}
      </p>
    </div>
  </div>
);

const Troubleshooting = ({ onAction }) => {
  const steps = [
    {
      id: '01',
      title: 'System Architecture Check',
      desc: 'Identify whether the issue is related to internal laptop hardware, desktop components, or connected external devices before selecting the correct driver path.',
      icon: Cpu,
    },
    {
      id: '02',
      title: 'Configuration & Version Sync',
      desc: 'Verify your operating system version and device compatibility so the selected driver matches the system environment and avoids communication conflicts.',
      icon: MonitorSmartphone,
    },
    {
      id: '03',
      title: 'Exact Module Analysis',
      desc: 'Review hardware IDs and component details to locate the precise manufacturer-specific driver required for stable performance and correct functionality.',
      icon: Search,
    },
  ];

  const problems = [
    {
      title: 'Audio Output',
      icon: Speaker,
      desc: 'Missing sound, distorted playback, or microphone issues caused by unstable audio drivers.',
    },
    {
      title: 'Screen Lag',
      icon: Zap,
      desc: 'Display stutter, flicker, or poor graphics response linked to outdated display drivers.',
    },
    {
      title: 'Wi-Fi Signal',
      icon: Wifi,
      desc: 'Weak connection, disconnections, or no wireless access due to network driver issues.',
    },
    {
      title: 'Bluetooth Sync',
      icon: Bluetooth,
      desc: 'Pairing failures, unstable syncing, or wireless accessory communication drops.',
    },
    {
      title: 'Printer Latency',
      icon: Printer,
      desc: 'Slow print response, queue delays, or printer offline errors during command transfer.',
    },
    {
      title: 'Camera Failure',
      icon: Camera,
      desc: 'Black screen, poor camera detection, or app access issues from webcam driver conflicts.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-zinc-50/70 border-b border-zinc-100">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-5">
            <Settings size={14} />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase">
              Identification Hub
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900  mb-5 leading-tight">
            How to <span className="text-blue-600">Identify Driver Needs</span>
          </h2>

          <p className="text-zinc-500 text-sm md:text-base font-medium leading-7">
            A cleaner and more reliable way to understand hardware communication issues,
            compatibility conflicts, and performance bottlenecks before they become bigger problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Left Steps */}
          <div className="lg:col-span-5 rounded-[32px] border border-zinc-200 bg-white p-6 md:p-8 xl:p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">3-Step Process</p>
                <p className="text-xs text-zinc-500">Find the right direction before fixing the issue</p>
              </div>
            </div>

            <div>
              {steps.map((step, idx) => (
                <StepCard
                  key={step.id}
                  id={step.id}
                  title={step.title}
                  desc={step.desc}
                  icon={step.icon}
                  isLast={idx === steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right Problem Area */}
          <div className="lg:col-span-7 rounded-[32px] border border-zinc-200 bg-zinc-950 p-6 md:p-8 xl:p-10 text-white shadow-[0_25px_80px_-35px_rgba(0,0,0,0.4)] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.22em] mb-2">
                    Common Issue Signals
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black ">
                    Communication Failures
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-400/20 text-red-300 text-xs font-bold rounded-full">
                  <ShieldAlert size={14} />
                  Critical Signals
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                {problems.map((item, index) => (
                  <ProblemCard
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    desc={item.desc}
                  />
                ))}
              </div>

              <div className="mt-8 md:mt-10 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <p className="text-sm text-zinc-300 leading-7 max-w-2xl">
                  When software bridges fail to connect properly, devices may stop responding,
                  lose performance, or become unstable across the system.
                </p>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;