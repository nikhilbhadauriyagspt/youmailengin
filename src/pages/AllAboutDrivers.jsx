import React, { useMemo, useState } from 'react';
import CategoryOverview from '../components/drivers/CategoryOverview';
import Troubleshooting from '../components/drivers/Troubleshooting';
import FAQSection from '../components/drivers/FAQSection';
import { blogPosts } from '../blogData';
import {
  Info,
  AlertTriangle,
  ArrowRight,
  Cpu,
  Monitor,
  HardDrive,
  Printer,
  ShieldCheck,
  ChevronRight,
  Wifi,
  Volume2,
  Keyboard,
  ScanLine,
  Webcam,
  Usb,
  Zap,
  Settings,
  Bluetooth,
  MemoryStick,
  Layers3,
  CheckCircle2,
  Calendar,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AllAboutDrivers = () => {
  const [activeType, setActiveType] = useState('essential');
  const latestBlogs = blogPosts.slice(0, 3);

  const essentialItems = [
    {
      title: 'Chipset Driver',
      content: 'Controls communication between the motherboard, processor, memory, and core ports.',
      why: ['System Stability', 'Hardware Detection', 'Port Control'],
      signs: ['Unknown Device', 'USB Error', 'System Lag'],
    },
    {
      title: 'Graphics Driver',
      content: 'Manages display output, resolution, rendering, and visual performance.',
      why: ['Better Display', 'Smooth Rendering', 'Video Support'],
      signs: ['Flicker', 'Low Resolution', 'Visual Crash'],
    },
    {
      title: 'Audio Driver',
      content: 'Handles speakers, headphones, microphones, and sound routing.',
      why: ['Clear Sound', 'Mic Access', 'Port Detection'],
      signs: ['No Sound', 'Static Noise', 'Mic Issue'],
    },
    {
      title: 'Network Driver',
      content: 'Connects network hardware with the operating system for internet access.',
      why: ['Internet Access', 'Stable Connection', 'Device Communication'],
      signs: ['No Wi-Fi', 'Frequent Disconnect', 'Slow Network'],
    },
  ];

  const hardwareItems = [
    {
      title: 'Storage Controller',
      content: 'Manages communication between the system and SSD or HDD devices.',
      why: ['Fast Boot', 'Drive Detection', 'Data Handling'],
      signs: ['Boot Error', 'Missing Drive', 'Slow Loading'],
    },
    {
      title: 'USB Driver',
      content: 'Supports device detection and response for USB-connected hardware.',
      why: ['Device Detection', 'Fast Transfer', 'Power Support'],
      signs: ['Unknown Device', 'Port Not Working', 'Connection Fail'],
    },
    {
      title: 'Bluetooth Driver',
      content: 'Enables pairing and communication with wireless accessories.',
      why: ['Wireless Audio', 'File Transfer', 'Accessory Pairing'],
      signs: ['No Pairing', 'Drop Issue', 'Connection Lag'],
    },
    {
      title: 'Keyboard / Touchpad Driver',
      content: 'Controls input behavior, gestures, and key response on laptops.',
      why: ['Smooth Input', 'Gesture Support', 'Accurate Control'],
      signs: ['Keys Not Working', 'Gesture Missing', 'Input Delay'],
    },
  ];

  const peripheralItems = [
    {
      title: 'Printer Driver',
      content: 'Converts files into printer-ready instructions for accurate output.',
      why: ['Print Quality', 'Layout Accuracy', 'Printer Features'],
      signs: ['Printer Offline', 'Print Error', 'Queue Problem'],
    },
    {
      title: 'Scanner Driver',
      content: 'Supports scanning, device connection, and file capture functions.',
      why: ['Clear Scan', 'Device Sync', 'Format Support'],
      signs: ['Scanner Not Found', 'Poor Scan', 'Scan Failed'],
    },
    {
      title: 'Webcam Driver',
      content: 'Handles camera access, video feed quality, and app compatibility.',
      why: ['Clear Video', 'Camera Access', 'Stable Feed'],
      signs: ['Black Screen', 'Camera Missing', 'Laggy Feed'],
    },
    {
      title: 'Monitor Driver',
      content: 'Improves resolution handling, refresh rates, and display compatibility.',
      why: ['Correct Resolution', 'Better Refresh', 'Display Accuracy'],
      signs: ['Blur Screen', 'Wrong Resolution', 'Display Flicker'],
    },
  ];

  const advancedItems = [
    {
      title: 'BIOS / UEFI',
      content: 'Supports hardware initialization and low-level system startup.',
      why: ['Boot Control', 'Hardware Init', 'Core Setup'],
      signs: ['No Boot', 'Power Loop', 'Freeze'],
    },
    {
      title: 'Security Driver',
      content: 'Supports TPM, encryption, and secure hardware communication.',
      why: ['Secure Access', 'Data Protection', 'Safe Boot'],
      signs: ['TPM Error', 'Security Warning', 'Access Issue'],
    },
    {
      title: 'Power Management Driver',
      content: 'Controls battery behavior, sleep mode, and power efficiency.',
      why: ['Battery Control', 'Sleep Support', 'Thermal Balance'],
      signs: ['Battery Drain', 'Wake Issue', 'Heat Problem'],
    },
    {
      title: 'Advanced Display Support',
      content: 'Refines display sync, output stability, and graphics coordination.',
      why: ['Visual Stability', 'Better Sync', 'Output Control'],
      signs: ['Screen Tear', 'Ghosting', 'Color Issue'],
    },
  ];

  const driverTypes = useMemo(
    () => [
      {
        id: 'essential',
        label: 'Essential Drivers',
        short: 'Core system drivers',
        icon: Cpu,
        items: essentialItems,
      },
      {
        id: 'hardware',
        label: 'Hardware Drivers',
        short: 'Internal device control',
        icon: HardDrive,
        items: hardwareItems,
      },
      {
        id: 'peripheral',
        label: 'Peripheral Drivers',
        short: 'External device support',
        icon: Printer,
        items: peripheralItems,
      },
      {
        id: 'advanced',
        label: 'Advanced Drivers',
        short: 'Low-level & security layer',
        icon: ShieldCheck,
        items: advancedItems,
      },
    ],
    []
  );

  const activeGroup = driverTypes.find((item) => item.id === activeType);

  const getCardIcon = (title) => {
    const map = {
      'Chipset Driver': Cpu,
      'Graphics Driver': Monitor,
      'Audio Driver': Volume2,
      'Network Driver': Wifi,
      'Storage Controller': MemoryStick,
      'USB Driver': Usb,
      'Bluetooth Driver': Bluetooth,
      'Keyboard / Touchpad Driver': Keyboard,
      'Printer Driver': Printer,
      'Scanner Driver': ScanLine,
      'Webcam Driver': Webcam,
      'Monitor Driver': Monitor,
      'BIOS / UEFI': Cpu,
      'Security Driver': ShieldCheck,
      'Power Management Driver': Zap,
      'Advanced Display Support': Settings,
    };

    return map[title] || Cpu;
  };

  const whyPoints = [
    {
      title: 'System Communication',
      description: 'Drivers help the operating system and hardware exchange instructions correctly.',
      icon: Cpu,
    },
    {
      title: 'Performance Support',
      description: 'Proper drivers improve response, stability, and smoother device behavior.',
      icon: Zap,
    },
    {
      title: 'Compatibility',
      description: 'They help hardware work properly with your system environment.',
      icon: ShieldCheck,
    },
    {
      title: 'Feature Access',
      description: 'Many device settings and functions depend on the correct driver.',
      icon: Settings,
    },
  ];

  const warningSigns = [
    'Device not detected',
    'Audio or microphone issues',
    'Screen flicker or low resolution',
    'Printer or scanner errors',
    'Wi-Fi or Bluetooth problems',
    'Random hardware instability',
  ];

  return (
    <div className="bg-white">
      <CategoryOverview onAction={() => {}} />

      {/* Why Drivers Matter */}
      <section className="py-20 md:py-24 bg-[#f7f8fa] border-y border-zinc-100 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100/60 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-sky-100/70 rounded-full blur-3xl"></div>

                <div className="relative p-6 md:p-8 ">
                  <img
                    src="/why-drivers-matter.png"
                    alt="Technology driver support illustration"
                    className="w-full h-auto max-h-[720px] mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6">
              <div className="mb-6">
                <p className="text-blue-600 text-[13px] font-semibold mb-3">Why Drivers Matter</p>
                <h2 className="text-[32px] md:text-[48px] font-bold text-zinc-900 leading-[1.1] tracking-[-0.03em] mb-5">
                  Drivers Keep Hardware And Software Connected
                </h2>
                <p className="text-zinc-600 text-[15px] md:text-[16px] leading-8 mb-4">
                  Device drivers help your operating system understand how connected hardware should
                  behave. They support printers, graphics cards, audio devices, network adapters,
                  scanners, webcams, and other components.
                </p>
                <p className="text-zinc-600 text-[15px] md:text-[16px] leading-8">
                  Without the correct driver, a device may not work properly, some features may stay
                  limited, and performance can become unstable.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {whyPoints.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-[24px] bg-white border border-zinc-200/70 p-5 shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                        <Icon size={22} className="text-blue-600" />
                      </div>
                      <h3 className="text-[18px] font-semibold text-zinc-900 mb-2">{item.title}</h3>
                      <p className="text-zinc-600 text-[14px] leading-7">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Categories */}
      <section id="category" className="py-20 md:py-24 bg-white border-b border-zinc-100">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left selector */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-5">
                    <Layers3 size={14} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                      Driver Categories
                    </span>
                  </div>

                  <h2 className="text-[30px] md:text-[42px] font-bold text-zinc-900 leading-[1.12] tracking-[-0.03em] mb-5">
                    Explore Driver Types
                  </h2>

                  <p className="text-zinc-600 text-[15px] md:text-[16px] leading-8 mb-7">
                    Select a category to view the most important driver types in a cleaner layout.
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-zinc-900 transition-all"
                  >
                    Contact Now
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="space-y-4">
                  {driverTypes.map((type) => {
                    const Icon = type.icon;
                    const isActive = activeType === type.id;

                    return (
                      <button
                        key={type.id}
                        onClick={() => setActiveType(type.id)}
                        className={`w-full text-left rounded-[24px] border p-5 transition-all duration-300 ${
                          isActive
                            ? 'bg-blue-600 border-blue-600 text-white shadow-[0_18px_40px_-24px_rgba(37,99,235,0.45)]'
                            : 'bg-[#f8f9fb] border-zinc-200/70 text-zinc-900 hover:border-blue-200 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                              isActive ? 'bg-white/15' : 'bg-white'
                            }`}
                          >
                            <Icon
                              size={22}
                              className={isActive ? 'text-white' : 'text-blue-600'}
                            />
                          </div>

                          <div>
                            <h3 className="text-[18px] font-semibold mb-1">{type.label}</h3>
                            <p
                              className={`text-[14px] leading-6 ${
                                isActive ? 'text-blue-50/90' : 'text-zinc-500'
                              }`}
                            >
                              {type.short}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right cards */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="grid md:grid-cols-2 gap-6">
                {activeGroup?.items.map((item, index) => {
                  const Icon = getCardIcon(item.title);

                  return (
                    <div
                      key={index}
                      className="group relative rounded-[30px] bg-[#f8f9fb] border border-zinc-200/70 p-6 md:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-30px_rgba(0,0,0,0.14)]"
                    >
                      <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-blue-100/40"></div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-200/40"></div>

                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
                          <Icon size={24} className="text-blue-600" />
                        </div>

                        <h4 className="text-[24px] font-semibold text-zinc-900 mb-3 leading-snug tracking-[-0.02em]">
                          {item.title}
                        </h4>

                        <p className="text-[15px] text-zinc-600 leading-8 mb-6">
                          {item.content}
                        </p>

                        <div className="space-y-5">
                          <div>
                            <h5 className="text-[12px] font-bold uppercase tracking-[0.18em] text-blue-600 mb-3">
                              Why It Matters
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {item.why.map((point, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-[13px] font-medium text-blue-700 border border-blue-100"
                                >
                                  <ChevronRight size={14} />
                                  {point}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-[12px] font-bold uppercase tracking-[0.18em] text-rose-500 mb-3">
                              Common Signs
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {item.signs.map((point, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-[13px] font-medium text-zinc-700 border border-zinc-200"
                                >
                                  <AlertTriangle size={14} className="text-amber-500" />
                                  {point}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Troubleshooting onAction={() => {}} />
      <FAQSection />

      {/* Latest Blogs Section */}
      <section className="py-20 md:py-24 bg-[#f7f8fa] border-t border-zinc-100">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="mb-12 text-center">
            <p className="text-blue-600 text-[13px] font-semibold mb-3 uppercase tracking-widest">Our Blogs</p>
            <h2 className="text-[32px] md:text-[42px] font-bold text-zinc-900 leading-tight mb-4">Latest <span className="text-blue-600"> Insights & Updates</span></h2>
            <p className="text-zinc-500 text-[15px] max-w-2xl mx-auto">Stay informed about driver compatibility, system maintenance, and device performance optimization.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-white rounded-[32px] border border-zinc-200/70 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-[12px] font-medium text-zinc-400">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 uppercase tracking-tight leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-7 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-[13px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Analysis <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-blue-600 transition-all shadow-xl shadow-black/5 active:scale-95"
            >
              Explore Full  Blogs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllAboutDrivers;
