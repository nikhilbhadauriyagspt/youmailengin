import ServiceLayout from '../../components/ServiceLayout';
import { Snowflake } from 'lucide-react';

const AirConditionerPage = () => (
  <ServiceLayout 
    title="Air Conditioner"
    desc="Gas refilling & pcb circuit diagnostics"
    longDesc="Experience superior thermal regulation once again. Our certified HVAC appliance repairs specialize in precision gas refilling, advanced PCB circuit repairs, and deep chemical decontamination for all split and window systems."
    icon={<Snowflake size={24} />}
    image="/air.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Elite cooling restoration</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            When thermal efficiency drops, immediate care intervention is required. We don't just fix symptoms; we optimize your unit's entire thermodynamic cycle to ensure peak performance and reduced energy consumption.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our AC services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Thermal systems</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Precision gas charging (R32/R410)",
                  "Compressor efficiency tuning",
                  "Deep chemical jet cleaning",
                  "Evaporator coil restoration"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Electrical logic</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Logic board (pcb) diagnostics",
                  "Sensor & relay replacement",
                  "Capacitor & fan motor fix",
                  "Advanced wiring calibration"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Care superiority</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Handling fragile HVAC components requires specialized vacuum pumps and digital manifold gauges. We ensure your system is sealed and pressurized to exact factory specifications for long-term reliability.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Split AC", val: "Appliance" },
              { label: "Window AC", val: "Diagnostics" },
              { label: "Gas Flow", val: "Guaranteed" },
              { label: "Thermal", val: "Deployment" }
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

export default AirConditionerPage;





