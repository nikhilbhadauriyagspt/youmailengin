import { ShieldCheck, Lock, Eye, AlertCircle, ChevronRight } from 'lucide-react';

const SecurityTips = () => {
  const tips = [
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Use Two-Factor Authentication (2FA)",
      desc: "Enable 2FA on every account. Even if someone gets your password, they can't get in without the second code from your phone."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Check Your Recovery Info",
      desc: "Ensure your recovery email and phone number are up to date. This is the only way to get back in if you forget your password."
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Beware of Phishing",
      desc: "Always check the sender's actual email address. Official providers will never ask for your password via an email link."
    }
  ];

  return (
    <section className="py-24 bg-white w-full font-sans">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Headline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Security First
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">
              Protect Your <span className="text-blue-800">Email Identity.</span>
            </h2>
            <p className="text-zinc-600 text-[18px] leading-relaxed">
              Email is the key to your digital life. Use these professional tips to ensure your accounts stay locked and secure against unauthorized access.
            </p>
          </div>

          {/* Right: Tips List */}
          <div className="lg:col-span-7 grid md:grid-cols-1 gap-6">
            {tips.map((tip, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-800 shadow-sm group-hover:bg-blue-800 group-hover:text-white transition-all">
                  {tip.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-[18px] font-bold text-zinc-900 group-hover:text-blue-800 transition-colors">{tip.title}</h3>
                  <p className="text-[14.5px] text-zinc-600 leading-relaxed font-normal">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityTips;
