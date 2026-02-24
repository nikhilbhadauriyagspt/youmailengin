import ServiceLayout from '../../components/ServiceLayout';
import { Wind } from 'lucide-react';

const ClothesDryerPage = () => (
  <ServiceLayout 
    title="Clothes Dryer"
    desc="Thermal regulation & drum belt restoration"
    longDesc="Appliance repaired drying performance for all weather conditions. Our appliance repairs specialize in high-temperature sensor calibration, drive belt restoration, and multi-stage heating element repairs for vented and heat-pump dryer systems."
    icon={<Wind size={24} />}
    image="/clothes.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Precision thermal cycle</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            A dryer is a high-energy appliance that requires absolute care precision to prevent fabric damage or fire risks. We utilize digital thermal probes to ensure your unit reaches and maintains optimal care drying temperatures.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our dryer services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Heating systems</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Heating element restoration",
                  "Thermal fuse replacement",
                  "High-limit thermostat check",
                  "Airflow duct de-linting"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Drive & logic</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Drum belt & roller tuning",
                  "Idler pulley realignment",
                  "Moisture sensor calibration",
                  "Control board (PCB) repair"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Safety certification</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Dryers are responsible for a significant number of home fire incidents due to lint buildup and thermal failures. Every repair includes a comprehensive safety check of the internal chassis and exhaust ventilation system.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Vent care", val: "Appliance" },
              { label: "Heat pump", val: "Diagnostics" },
              { label: "OEM belt", val: "Guaranteed" },
              { label: "Safe run", val: "Deployment" }
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

export default ClothesDryerPage;





