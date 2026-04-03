import React, { useEffect } from 'react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-44 pb-24 font-sans">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Simple Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-blue-600 rounded-full" />
            <span className="text-[11px] font-black text-blue-600 tracking-[0.3em] uppercase">
              Legal Notice
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-tight mb-6 tracking-tighter">
            Disclaimer
          </h1>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Last updated: April 4, 2026</p>
        </div>

        <div className="space-y-12 text-zinc-600 leading-relaxed text-[15px]">
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">General Disclaimer</h2>
            <p>
              The information provided by <strong>All About Drivers</strong> ("we," "us," or "our") on <a href="http://allaboutdrivers.shop" className="text-blue-600 font-bold hover:underline">http://allaboutdrivers.shop</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Professional Disclaimer</h2>
            <p>
              The Site cannot and does not contain technical advice that guarantees specific hardware outcomes. The information is provided for general informational and educational purposes only and is not a substitute for professional technical consultation. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professional engineers or certified technicians.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">External Links Disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
            </p>
          </section>

          <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white">
            <h2 className="text-xl font-black uppercase mb-6 tracking-tight">Contact Information</h2>
            <p className="text-zinc-400 mb-8 text-sm uppercase tracking-widest leading-loose">
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at:
            </p>
            <a href="mailto:info@allaboutdrivers.shop" className="text-white text-lg font-black underline uppercase tracking-widest">
              info@allaboutdrivers.shop
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
