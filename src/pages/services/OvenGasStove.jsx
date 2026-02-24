import ServiceLayout from '../../components/ServiceLayout';
import { Flame } from 'lucide-react';

const OvenGasStovePage = () => (
  <ServiceLayout 
    title="Oven & Gas Stove"
    desc="Thermal calibration & safety appliance"
    longDesc="Precision heat management for the professional home kitchen. We specialize in digital thermostat calibration, high-performance burner cleaning, and leak-proof gas line restoration for all premium cooking ranges."
    icon={<Flame size={24} />}
    image="/Ove.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Controlled combustion expertise</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            Cooking appliances require absolute safety protocols. Whether it's an uneven flame or a digital oven control failure, our master appliance repairs utilize electronic gas sniffers and thermal probes to ensure your kitchen remains a safe high-performance environment.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our cooking services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Gas & burner systems</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Burner port micro-cleaning",
                  "Igniter electrode sync",
                  "Gas valve leak diagnostics",
                  "Regulator flow normalization"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Oven logic & heat</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Thermostat sensor calibration",
                  "Heating element restoration",
                  "Control board (PCB) fix",
                  "Door seal & hinge tuning"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">The safety shield</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            We exclusively use original manufacturer seals and thermal-resistant components. Every service includes a mandatory 5-point gas safety check to ensure zero PPM leakage at all connection nodes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Gas range", val: "Appliance" },
              { label: "Built-in oven", val: "Diagnostics" },
              { label: "OEM parts", val: "Guaranteed" },
              { label: "Safety run", val: "Deployment" }
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

export default OvenGasStovePage;





