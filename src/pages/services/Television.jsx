import ServiceLayout from '../../components/ServiceLayout';
import { Monitor } from 'lucide-react';

const TelevisionPage = () => (
  <ServiceLayout 
    title="Television"
    desc="Advanced display & logic board repair"
    longDesc="Precision appliance for high-resolution entertainment. We specialize in LED/OLED panel restoration, backlight synchronization, and complex motherboard circuit repairs for all premium smart TV brands."
    icon={<Monitor size={24} />}
    image="/tv.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Crystal clear appliance</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            Your TV is a complex processing unit. Whether it's a distorted panel or a complete power failure, our appliance repairs utilize infrared BGA rework stations to restore your visual experience to its original factory clarity.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our display services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Optical systems</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Backlight array restoration",
                  "Panel refresh diagnostics",
                  "Color calibration optimization",
                  "Filter & diffuser alignment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[13px] font-bold text-gray-500 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 transition-all group-hover/item:scale-150" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Logic & input</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Motherboard component rework",
                  "HDMI & input node repair",
                  "Software kernel restoration",
                  "Power supply unit tuning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[13px] font-bold text-gray-500 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 transition-all group-hover/item:scale-150" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Precision handling</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Fragile display panels require absolute atmospheric control and specialized vacuum tools. We ensure your television is processed in a lint-free care environment to prevent internal pixel contamination.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "OLED/QLED", val: "Expertise" },
              { label: "4K / 8K", val: "Diagnostics" },
              { label: "Original", val: "Components" },
              { label: "Safe transport", val: "Protocol" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 text-center hover:bg-white hover:shadow-2xl hover:shadow-orange-600/5 transition-all duration-500 group">
                <div className="text-orange-600 font-bold text-[11px] uppercase mb-3 tracking-[0.2em]">{item.label}</div>
                <div className="text-gray-950 font-black text-[15px] uppercase tracking-tight">{item.val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    }
  />
);

export default TelevisionPage;





