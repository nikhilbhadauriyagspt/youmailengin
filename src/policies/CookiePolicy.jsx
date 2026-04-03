import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
              Policy Center
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-tight mb-6 tracking-tighter">
            Cookie Policy
          </h1>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Last updated: February 06, 2026</p>
        </div>

        <div className="space-y-12 text-zinc-600 leading-relaxed text-[15px]">
          <section className="space-y-6">
            <p>
              This Cookie Policy explains how <strong>All About Drivers</strong> (“Company,” “we,” “us,” or “our”) uses
              cookies and similar tracking technologies when you visit our website 
              <a href="http://allaboutdrivers.shop/" className="text-blue-600 font-bold hover:underline"> http://allaboutdrivers.shop/</a> (the “Website”). This policy should be read together with our 
              <Link to="/privacy-policy" className="text-blue-600 font-bold hover:underline uppercase"> PRIVACY POLICY</Link> and 
              <Link to="/terms-of-service" className="text-blue-600 font-bold hover:underline uppercase"> TERMS OF SERVICE</Link>.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies help websites function efficiently, enhance user experience, and provide information to website owners about how visitors interact with the site.
            </p>
            <p>Cookies do not give us access to your device or personal files.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">2. How We Use Cookies</h2>
            <p>All About Drivers uses cookies and similar technologies to:</p>
            <ul className="list-disc pl-10 space-y-4">
              <li>Ensure the Website functions properly</li>
              <li>Maintain security and prevent fraudulent activity</li>
              <li>Remember user preferences and settings</li>
              <li>Analyze Website performance and usage patterns</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p>
              Cookies may collect technical information such as IP address, browser type, device information, and browsing behavior, as described in our <Link to="/privacy-policy" className="text-blue-600 font-bold hover:underline uppercase">PRIVACY POLICY</Link>.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">3. Types of Cookies We Use</h2>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="font-black text-zinc-900 uppercase text-sm tracking-widest">a) Essential Cookies</p>
                <p>These cookies are strictly necessary for the Website to operate correctly. They enable core functionality such as security, page navigation, and access to essential features. Without these cookies, the Website may not function properly.</p>
              </div>

              <div className="space-y-3">
                <p className="font-black text-zinc-900 uppercase text-sm tracking-widest">b) Performance and Analytics Cookies</p>
                <p>These cookies help us understand how visitors interact with our Website by collecting aggregated and anonymized information. This allows us to measure performance, identify errors, and improve Website functionality.</p>
              </div>

              <div className="space-y-3">
                <p className="font-black text-zinc-900 uppercase text-sm tracking-widest">c) Functional Cookies</p>
                <p>Functional cookies allow the Website to remember choices you make, such as language preferences or region, to provide a more personalized experience.</p>
              </div>

              <div className="space-y-3">
                <p className="font-black text-zinc-900 uppercase text-sm tracking-widest">d) Advertising and Third-Party Cookies</p>
                <p>
                  We may allow trusted third-party service providers to place cookies on our Website for analytics or advertising purposes. These cookies may be used to deliver relevant advertisements and measure campaign effectiveness, subject to applicable laws and user consent where required as per our <Link to="/privacy-policy" className="text-blue-600 font-bold hover:underline uppercase">PRIVACY POLICY</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">4. Third-Party Tracking Technologies</h2>
            <p>
              We may use third-party services such as Google Analytics to analyze Website usage and traffic patterns. These third parties may use cookies or similar technologies to collect information about your online activities across different websites.
            </p>
            <p>
              You can learn more about Google’s data practices by visiting Google’s Privacy & Terms page or opt out using Google’s opt-out tools, as referenced in our <Link to="/privacy-policy" className="text-blue-600 font-bold hover:underline uppercase">PRIVACY POLICY</Link>.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">5. Your Cookie Choices and Controls</h2>
            <p>
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies or alert you when cookies are being sent.
            </p>
            <p>Please note that disabling cookies may affect certain features or functionality of the Website.</p>
            <p>For more information on managing cookies, visit your browser’s help section.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">6. Do Not Track Signals</h2>
            <p>
              Some browsers offer a “Do Not Track” (DNT) feature. At this time, there is no uniform industry standard for recognizing DNT signals, and All About Drivers does not currently respond to such signals as detailed in our <Link to="/privacy-policy" className="text-blue-600 font-bold hover:underline uppercase">PRIVACY POLICY</Link>.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">7. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. Any updates will be indicated by a revised “Last Updated” date at the top of this policy.
            </p>
          </section>

          <section className="p-10 bg-zinc-900 rounded-[2.5rem] text-white">
            <h2 className="text-xl font-black uppercase mb-6 tracking-tight">8. Contact Us</h2>
            <p className="text-zinc-400 mb-8 text-sm uppercase tracking-widest leading-loose">
              If you have questions or concerns about this Cookie Policy or our use of cookies, you may contact us at:
            </p>
            <address className="not-italic text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              All About Drivers<br />
              130 S Fillmore St, Corinth, MS 38834, United States<br />
              Email: <strong className="text-white underline">info@allaboutdrivers.shop</strong>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
