import { Mail, Send, ArrowRight, MapPin, Globe, CheckCircle2, Phone } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      e.target.reset();
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden" id="contact-hub">
      {/* Success Toast */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-950 text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-6">
          <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">Message sent!</span>
            <span className="text-xs text-gray-400 mt-0.5">We will call you very soon.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section: Centered & Refined */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
            <span className="text-[11px] font-bold text-orange-600 tracking-[0.3em] uppercase">
              Get in touch
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-6">
            We are here to <span className="text-orange-600 italic">help you.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Have a question or need someone to fix your machine? Our team is ready to give you the best support.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Info Side (Left) */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-orange-600/5">
               <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center text-orange-500 mb-6 transition-transform duration-500 group-hover:scale-110">
                 <Mail size={22} />
               </div>
               <h3 className="text-lg font-bold text-gray-950 mb-1">Send an email</h3>
               <p className="text-gray-400 text-[12px] font-medium mb-4 uppercase tracking-wider">We usually reply within 2 hours.</p>
               <a href="mailto:info@appliancerookies.shop" className="text-base font-bold text-orange-600 hover:text-gray-950 transition-colors">info@appliancerookies.shop</a>
            </div>

            <div className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-orange-600/5">
               <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-600 mb-6 border border-gray-100 transition-transform duration-500 group-hover:scale-110">
                 <MapPin size={22} />
               </div>
               <h3 className="text-lg font-bold text-gray-950 mb-1">Visit our office</h3>
               <span className="text-[14px] font-bold text-gray-950 leading-relaxed uppercase">2066 Fairview Ave, Prattville,<br />AL 36066, USA</span>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="w-full lg:w-2/3 bg-white border border-gray-100 rounded-[48px] p-8 md:p-12 lg:p-16 shadow-xl shadow-black/[0.02]">
             <form className="space-y-10" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full name</label>
                    <input 
                      required
                      name="fullName"
                      type="text" 
                      className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-600/20 outline-none transition-all font-medium text-gray-950 placeholder:text-gray-300" 
                      placeholder="John Smith" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-600/20 outline-none transition-all font-medium text-gray-950 placeholder:text-gray-300" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone number</label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-600/20 outline-none transition-all font-medium text-gray-950 placeholder:text-gray-300" 
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Describe your problem</label>
                  <textarea 
                    required
                    name="message"
                    rows="4" 
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-600/20 outline-none transition-all font-medium text-gray-950 resize-none placeholder:text-gray-300" 
                    placeholder="Tell us a little about what is wrong..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-10 pt-4">
                  <button 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto py-5 px-12 bg-gray-950 text-white rounded-xl font-bold text-[13px] hover:bg-orange-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;




