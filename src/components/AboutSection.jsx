import { ShieldCheck, Target, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50 w-full font-sans text-zinc-900">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Images/Graphics */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl group-hover:bg-blue-600/10 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-white shadow-2xl shadow-blue-900/10 transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
                alt="Our professional team" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20">
                <p className="text-white text-lg font-medium italic">"Precision in every diagnosis, clarity in every solution."</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-blue-800 font-semibold tracking-[0.2em] uppercase text-[12px]">Our Core Mission</p>
              <h2 className="text-4xl md:text-4xl font-semibold leading-[1.1] tracking-tight">
                Dedicated to <span className="text-blue-800">Technical Excellence.</span>
              </h2>
              <p className="text-[18px] text-zinc-600 leading-relaxed font-normal">
                At Mail Yaga, we believe that technical support is more than just fixing errors—it's about restoring your digital confidence. We approach every email challenge with the same rigor and specialized knowledge as industrial maintenance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-200/50">
                <div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-semibold text-zinc-900 mb-4">Secure Support</h3>
                <p className="text-[16px] text-zinc-600 leading-relaxed font-normal">
                  Your privacy is our priority. We follow strict security protocols to ensure your data remains protected during every session.
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-200/50">
                <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-semibold text-zinc-900 mb-4">Accurate Diagnostics</h3>
                <p className="text-[16px] text-zinc-600 leading-relaxed font-normal">
                  We use calibrated tools and deep technical knowledge to identify the root cause of issues, not just the symptoms.
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-200/50">
                <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-semibold text-zinc-900 mb-4">Swift Resolution</h3>
                <p className="text-[16px] text-zinc-600 leading-relaxed font-normal">
                  We value your time. Our streamlined support process is designed to get you back to your digital life as quickly as possible.
                </p>
              </div>

              <div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-200/50">
                <div className="w-12 h-12 bg-orange-50 text-orange-700 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-semibold text-zinc-900 mb-4">Human Experts</h3>
                <p className="text-[16px] text-zinc-600 leading-relaxed font-normal">
                  No automated scripts or bots. You'll always interact with a real person dedicated to solving your specific problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
