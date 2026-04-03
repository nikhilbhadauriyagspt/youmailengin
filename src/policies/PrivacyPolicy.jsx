import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
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
              Privacy Center
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-tight mb-6 tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Last updated: April 4, 2026</p>
        </div>

        <div className="space-y-12 text-zinc-600 leading-relaxed text-[15px]">
          <section className="space-y-6">
            <p>
              This Privacy Notice for <strong>All About Drivers</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Visit our website at <a href="http://allaboutdrivers.shop/" className="text-blue-600 font-bold hover:underline">http://allaboutdrivers.shop/</a> or any website of ours that links to this Privacy Notice</li>
              <li>Use All About Drivers. At All About Drivers, we focus on technical accuracy and timely service. Our business is built on providing diagnostic clarity and performing repairs that aim to extend the lifecycle of your household appliances. We serve residential clients with a commitment to maintaining standard operating procedures.</li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p>
              Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@allaboutdrivers.shop" className="text-blue-600 font-bold">info@allaboutdrivers.shop</a>.
            </p>
          </section>

          <section className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100">
            <h2 className="text-xl font-black text-zinc-900 uppercase mb-8 tracking-tight">SUMMARY OF KEY POINTS</h2>
            <div className="space-y-6 text-sm">
              <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
              <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
              <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
              <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
              <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information.</p>
              <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-black text-zinc-900 uppercase tracking-tight">TABLE OF CONTENTS</h2>
            <nav className="flex flex-col gap-3 text-sm font-bold text-blue-600 uppercase tracking-widest">
              <a href="#1" className="hover:underline">1. WHAT INFORMATION DO WE COLLECT?</a>
              <a href="#2" className="hover:underline">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
              <a href="#3" className="hover:underline">3. WHAT LEGAL BASES DO WE RELY ON?</a>
              <a href="#4" className="hover:underline">4. WHEN AND WITH WHOM DO WE SHARE?</a>
              <a href="#5" className="hover:underline">5. COOKIES AND TRACKING TECHNOLOGIES</a>
              <a href="#6" className="hover:underline">6. HOW LONG DO WE KEEP YOUR INFO?</a>
              <a href="#7" className="hover:underline">7. HOW DO WE KEEP YOUR INFO SAFE?</a>
              <a href="#8" className="hover:underline">8. DO WE COLLECT FROM MINORS?</a>
              <a href="#9" className="hover:underline">9. WHAT ARE YOUR PRIVACY RIGHTS?</a>
              <a href="#10" className="hover:underline">10. CONTROLS FOR DO-NOT-TRACK</a>
              <a href="#11" className="hover:underline">11. US SPECIFIC PRIVACY RIGHTS</a>
              <a href="#12" className="hover:underline">12. UPDATES TO THIS NOTICE</a>
              <a href="#13" className="hover:underline">13. CONTACT US ABOUT THIS NOTICE</a>
              <a href="#14" className="hover:underline">14. REVIEW, UPDATE, OR DELETE DATA</a>
            </nav>
          </section>

          <div className="space-y-16">
            <section id="1" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">1. WHAT INFORMATION DO WE COLLECT?</h3>
              <p className="font-bold text-zinc-900 uppercase text-sm tracking-widest">Personal information you disclose to us</p>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <p><strong>Personal Information Provided by You.</strong> The personal information we collect may include names, phone numbers, and email addresses. We do not process sensitive information.</p>
              
              <p className="font-bold text-zinc-900 uppercase text-sm tracking-widest mt-8">Information automatically collected</p>
              <p>We automatically collect certain information when you visit, use, or navigate the Services (such as IP address, browser characteristics, operating system, and location data). This information is primarily needed to maintain the security and operation of our Services.</p>
            </section>

            <section id="2" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
              <p>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information to deliver and facilitate delivery of services to the user.</p>
            </section>

            <section id="3" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">3. WHAT LEGAL BASES DO WE RELY ON?</h3>
              <p>We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
            </section>

            <section id="4" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
              <p>We may share information in specific situations such as Business Transfers (merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company).</p>
            </section>

            <section id="5" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
              <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. We also use Google Analytics to track and analyze the use of the Services.</p>
            </section>

            <section id="6" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
            </section>

            <section id="7" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
              <p>We aim to protect your personal information through a system of organizational and technical security measures. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
            </section>

            <section id="8" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">8. DO WE COLLECT INFORMATION FROM MINORS?</h3>
              <p>We do not knowingly collect data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction.</p>
            </section>

            <section id="9" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">9. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
              <p>Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>
            </section>

            <section id="10" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
              <p>Most web browsers include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized, so we do not currently respond to DNT browser signals.</p>
            </section>

            <section id="11" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
              <p>If you are a resident of Ohio and other listed states, you may have the right to request access to and receive details about the personal information we maintain about you, correct inaccuracies, or delete your personal information.</p>
            </section>

            <section id="12" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">12. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
              <p>Yes, we will update this notice as necessary to stay compliant with relevant laws. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice.</p>
            </section>

            <section id="13" className="p-10 bg-zinc-900 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black uppercase mb-6 tracking-tight">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
              <p className="text-zinc-400 mb-8 text-sm uppercase tracking-widest leading-loose">
                If you have questions or comments about this notice, you may email us at <strong className="text-white underline">info@allaboutdrivers.shop</strong> or contact us by post at:
              </p>
              <address className="not-italic text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                All About Drivers<br />
                130 S Fillmore St, Corinth, MS 38834, United States
              </address>
            </section>

            <section id="14" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight border-b border-zinc-100 pb-4">14. REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT</h3>
              <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
