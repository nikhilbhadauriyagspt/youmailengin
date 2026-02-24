import { X, Send, ShieldCheck, Clock, User, Phone, MessageSquare, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const BookingModal = ({ isOpen, onClose, serviceTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      body: encode({ "form-name": "booking", ...data, serviceTitle })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-gray-950/40 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        
        {/* Left Info Panel */}
        <div className="md:w-1/3 bg-gray-950 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/20 blur-[80px] -mr-24 -mt-24" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-600/20">
              <Sparkles size={24} />
            </div>
            <h2 className="text-3xl font-black leading-tight mb-6 uppercase tracking-tighter">
              Friendly <br /> repair <br /> <span className="text-orange-500 italic font-medium">support.</span>
            </h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Our experts are ready to fix your machine and get it working perfectly again.
            </p>
          </div>

          <div className="relative z-10 space-y-6 pt-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500">
                <Clock size={20} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest">Fast 60 min help</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500">
                <ShieldCheck size={20} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest">Full 3-month guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex-1 p-8 md:p-12 relative bg-white">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all active:scale-90"
          >
            <X size={20} />
          </button>

          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-950">Booking received!</h3>
              <p className="text-gray-500 text-sm font-medium mt-2">We will contact you very soon to confirm.</p>
            </div>
          ) : (
            <div>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-950 tracking-tight mb-1">Request a fix</h3>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">For: <span className="text-orange-600">{serviceTitle}</span></p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your name</label>
                    <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus-within:border-orange-600 focus-within:bg-white transition-all">
                      <User size={18} className="text-gray-300" />
                      <input required name="fullName" type="text" className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-gray-900 placeholder:text-gray-300" placeholder="John Smith" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone number</label>
                    <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus-within:border-orange-600 focus-within:bg-white transition-all">
                      <Phone size={18} className="text-gray-300" />
                      <input required name="phone" type="tel" className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-gray-900 placeholder:text-gray-300" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email address</label>
                  <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus-within:border-orange-600 focus-within:bg-white transition-all">
                    <Mail size={18} className="text-gray-300" />
                    <input required name="email" type="email" className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-gray-900 placeholder:text-gray-300" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">What is the problem?</label>
                  <div className="flex items-start gap-3 px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus-within:border-orange-600 focus-within:bg-white transition-all">
                    <MessageSquare size={18} className="text-gray-300 mt-1" />
                    <textarea required name="issue" rows="3" className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-gray-900 placeholder:text-gray-300 resize-none" placeholder="Tell us a little about what's wrong..."></textarea>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gray-950 text-white rounded-xl font-bold text-[13px] hover:bg-orange-600 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-gray-950/10 group"
                >
                  {isSubmitting ? 'Processing...' : <>Confirm my booking <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;




