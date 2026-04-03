import React from "react";
import {
  Cpu,
  HardDrive,
  Printer,
  ShieldCheck,
  Layers3,
  Monitor,
  Wifi,
  ArrowRight,
} from "lucide-react";
import { Link } from 'react-router-dom';

const FeatureItem = ({ title, desc, color = "bg-blue-600", align = "left" }) => {
  return (
    <div className={`max-w-[320px] ${align === "right" ? "ml-auto text-left" : "text-right"}`}>
      <h3 className="text-[28px] md:text-[30px] font-extrabold text-zinc-900 leading-tight">
        {title}
      </h3>

      <div
        className={`h-[2px] w-10 ${color} rounded-full my-4 ${
          align === "right" ? "" : "ml-auto"
        }`}
      />

      <p className="text-[15px] leading-7 text-zinc-500 font-medium">
        {desc}
      </p>
    </div>
  );
};

const Cube = ({ className = "", color = "bg-blue-500", Icon, iconColor = "text-zinc-700" }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative w-[102px] h-[118px]">
        {/* icon badge */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
          <div className="w-[52px] h-[52px] rounded-full bg-white border-2 border-zinc-200 shadow-sm flex items-center justify-center">
            <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={2.2} />
          </div>
        </div>

        {/* small connector shadow */}
        <div className="absolute left-1/2 top-[43px] -translate-x-1/2 w-10 h-2 rounded-full bg-black/10 blur-[1px]" />

        {/* cube */}
        <div
          className={`absolute left-1/2 bottom-0 -translate-x-1/2 w-[74px] h-[74px] ${color} rotate-45 rounded-[10px] shadow-[0_18px_30px_-18px_rgba(0,0,0,0.25)]`}
        />
      </div>
    </div>
  );
};

const CategoryOverview = ({ onAction = () => {} }) => {
  const leftFeatures = [
    {
      title: "Essential Drivers",
      desc: "Core drivers needed for the system to run properly, including chipset, graphics, audio, and network communication.",
      color: "bg-red-500",
    },
    {
      title: "Hardware Specific",
      desc: "Drivers designed for storage devices, USB controllers, keyboards, mice, and other internal hardware components.",
      color: "bg-yellow-500",
    },
    {
      title: "Peripheral Drivers",
      desc: "Support for external devices like printers, scanners, webcams, speakers, and other connected accessories.",
      color: "bg-emerald-500",
    },
  ];

  const rightFeatures = [
    {
      title: "Advanced Modules",
      desc: "Includes BIOS/UEFI interactions, firmware-level support, display enhancements, and optional performance layers.",
      color: "bg-lime-500",
    },
    {
      title: "Device Security",
      desc: "Security-related control layers that help maintain trusted communication and stable hardware behavior.",
      color: "bg-violet-500",
    },
    {
      title: "Smart Connectivity",
      desc: "Wireless, Bluetooth, and network-oriented driver modules that improve seamless hardware interaction.",
      color: "bg-sky-500",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-20 md:py-24 font-['Poppins'] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-[#c89b3c] uppercase tracking-[0.25em] text-sm md:text-base font-medium mb-4">
            Classification Hub
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900  leading-tight">
            The Four Driver <span className="text-blue-600">Architecture  Types</span>
          </h2>

          <p className="mt-6 text-zinc-500 text-[15px] md:text-[17px] leading-8 font-medium max-w-3xl mx-auto">
            Understand the major categories of device drivers that connect your
            operating system with internal hardware, peripherals, security
            layers, and advanced system modules.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_300px_1fr] gap-10 md:gap-14 items-center">
          {/* Left */}
          <div className="space-y-14">
            {leftFeatures.map((item, idx) => (
              <FeatureItem
                key={idx}
                title={item.title}
                desc={item.desc}
                color={item.color}
                align="left"
              />
            ))}
          </div>

          {/* Center visual */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[320px]">
              {/* Top */}
              <Cube
                className="left-1/2 -translate-x-1/2 top-0"
                color="bg-red-500"
                Icon={Cpu}
                iconColor="text-red-500"
              />

              {/* Middle */}
              <Cube
                className="left-[32px] top-[82px]"
                color="bg-yellow-400"
                Icon={HardDrive}
                iconColor="text-yellow-500"
              />
              <Cube
                className="right-[32px] top-[82px]"
                color="bg-lime-400"
                Icon={ShieldCheck}
                iconColor="text-lime-500"
              />

              {/* Bottom */}
              <Cube
                className="left-0 bottom-0"
                color="bg-emerald-400"
                Icon={Printer}
                iconColor="text-emerald-500"
              />
              <Cube
                className="left-1/2 -translate-x-1/2 bottom-0"
                color="bg-sky-400"
                Icon={Monitor}
                iconColor="text-sky-500"
              />
              <Cube
                className="right-0 bottom-0"
                color="bg-violet-400"
                Icon={Wifi}
                iconColor="text-violet-500"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-14">
            {rightFeatures.map((item, idx) => (
              <FeatureItem
                key={idx}
                title={item.title}
                desc={item.desc}
                color={item.color}
                align="right"
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
  to="/contact"
  className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-sm transition-all hover:bg-blue-600 active:scale-95"
>
  Consult an Expert
  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
</Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryOverview;