import ServiceLayout from '../../components/ServiceLayout';
import { Cpu } from 'lucide-react';

const OtherAppliancesPage = () => (
  <ServiceLayout 
    title="Other Appliances"
    desc="Specialized multi-device care support"
    longDesc="Expert appliance for your entire appliance ecosystem. From precision mixer motor restoration to sophisticated digital iron circuitry, we provide certified care solutions for all essential household machines."
    icon={<Cpu size={24} />}
    image="/others.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Universal appliance support</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            Every device in your home deserves master-level attention. Our laboratory is equipped to handle specialized repairs for smaller but critical household units, ensuring they return to their original care operational standards.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our other appliance services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Small motor systems</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Mixer/grinder motor rewinding",
                  "Vacuum suction optimization",
                  "Air purifier filter restoration",
                  "Fan bearing high-speed tuning"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Heating & control</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Steam iron thermal logic",
                  "Electric kettle auto-off fix",
                  "Toaster element synchronization",
                  "Induction cooktop PCB repair"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Certified multi-brand lab</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            We maintain an extensive inventory of specialized micro-components and original spare parts for hundreds of models. Our goal is to extend the lifecycle of your entire appliance portfolio through sustainable care maintenance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Multi-fix", val: "Appliance" },
              { label: "Micro-logic", val: "Diagnostics" },
              { label: "OEM spares", val: "Guaranteed" },
              { label: "Eco-repair", val: "Deployment" }
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

export default OtherAppliancesPage;





