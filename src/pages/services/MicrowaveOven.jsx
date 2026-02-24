import ServiceLayout from '../../components/ServiceLayout';
import { Microwave } from 'lucide-react';

const MicrowaveOvenPage = () => (
  <ServiceLayout 
    title="Microwave Oven"
    desc="Magnetron & high-voltage circuitry fix"
    longDesc="Precision microwave appliance for the modern kitchen. We specialize in high-voltage transformer restoration, magnetron diagnostics, and sophisticated touch-panel circuit repairs for all countertop and built-in convection models."
    icon={<Microwave size={24} />}
    image="/micro.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Radiation safe restoration</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            A malfunctioning microwave requires extreme care caution. Our appliance repairs utilize electromagnetic leak detectors and high-voltage discharge protocols to ensure your unit is carely sound and perfectly safe for culinary use.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our microwave services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Wave systems</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Magnetron output restoration",
                  "High-voltage diode analysis",
                  "Capacitor safety discharge",
                  "Waveguide cover replacement"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Mechanical & logic</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Touch panel kernel repair",
                  "Turntable motor alignment",
                  "Door safety switch sync",
                  "Convection fan restoration"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Safety-first protocol</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Microwaves contain high-voltage components that can be lethal even when unplugged. Our master appliance repairs follow strict ISO safety standards, ensuring every unit passes a rigorous radiation leak test before being cleared for operation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Convection", val: "Appliance" },
              { label: "Solo micro", val: "Diagnostics" },
              { label: "OEM parts", val: "Guaranteed" },
              { label: "Leak test", val: "Deployment" }
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

export default MicrowaveOvenPage;





