import ServiceLayout from '../../components/ServiceLayout';
import { Refrigerator } from 'lucide-react';

const RefrigeratorPage = () => (
  <ServiceLayout 
    title="Refrigerator"
    desc="Master cooling & compressor diagnostics"
    longDesc="Expert thermal appliance for all major brands. We specialize in compressor restoration, precision gas charging, thermostat calibration, and high-efficiency seal replacements using 100% genuine components."
    icon={<Refrigerator size={24} />}
    image="/refrigerator.png"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Preserving your freshness</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            Your refrigerator is the critical center of your kitchen. When cooling fails or strange mechanical noises occur, immediate professional attention is vital. Our appliance repairs specialize in single-door, double-door, and premium side-by-side care systems.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our refrigerator services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Cooling architecture</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Compressor torque restoration",
                  "Evaporator coil de-icing",
                  "Gas pressure normalization",
                  "Condenser fan tuning"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Precision control</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Thermostat sensor calibration",
                  "Defrost cycle optimization",
                  "Logic board (pcb) repair",
                  "Internal lighting systems"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Diagnostic expertise</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            We utilize advanced thermal imaging and pressure gauges to detect micro-leaks and electrical faults that conventional inspections miss. This ensures a permanent appliance fix rather than a temporary patch.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Side-by-Side", val: "Appliance" },
              { label: "Double door", val: "Diagnostics" },
              { label: "Gas flow", val: "Guaranteed" },
              { label: "90-Day", val: "Deployment" }
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

export default RefrigeratorPage;





