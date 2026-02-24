import ServiceLayout from '../../components/ServiceLayout';
import { Waves } from 'lucide-react';

const DishwasherPage = () => (
  <ServiceLayout 
    title="Dishwasher"
    desc="Precision pump & drainage restoration"
    longDesc="Appliance repaired hygiene for your culinary environment. We specialize in high-pressure pump diagnostics, spray arm calibration, and comprehensive thermal sanitation system repairs for all high-end dishwasher units."
    icon={<Waves size={24} />}
    image="/dish.png"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Automated hygiene appliance</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            A malfunctioning dishwasher is a breakdown in your kitchen's sanitary protocol. Our appliance repairs address complex water circulation issues and thermal failures to ensure your systems restore items to medical-grade cleanliness.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our dishwasher services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Hydraulic power</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Circulation pump diagnostics",
                  "Spray arm node clearing",
                  "Inlet valve synchronization",
                  "Drainage logic restoration"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Thermal logic</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Heating element calibration",
                  "Thermal sensor diagnostics",
                  "Control board (pcb) repair",
                  "Dispenser unit tuning"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Precision performance</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Dishwashers utilize complex water-softening units and high-temperature cycles. We utilize digital flow-meters to verify that your unit is consuming optimal resources while delivering maximum care performance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "High temp", val: "Appliance" },
              { label: "Auto cycle", val: "Diagnostics" },
              { label: "OEM pump", val: "Guaranteed" },
              { label: "Hygiene", val: "Deployment" }
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

export default DishwasherPage;





