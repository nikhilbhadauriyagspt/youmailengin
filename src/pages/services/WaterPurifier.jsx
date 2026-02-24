import ServiceLayout from '../../components/ServiceLayout';
import { Droplets } from 'lucide-react';

const WaterPurifierPage = () => (
  <ServiceLayout 
    title="Water Purifier"
    desc="RO filtration & membrane appliance"
    longDesc="Ensure absolute molecular purity for your drinking water. We provide specialized RO membrane restoration, multi-stage filter replacement, and precision booster pump repairs for all leading purification brands."
    icon={<Droplets size={24} />}
    image="/water.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Molecular level restoration</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            Your purifier is the primary defense against water-borne biological and chemical contaminants. Our master appliance repairs utilize digital TDS meters and pressure sensors to ensure your system meets clinical safety standards.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our water purifier services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Filtration cycle</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "RO membrane pore cleaning",
                  "Sediment filter replacement",
                  "Activated carbon restoration",
                  "Mineral cartridge balancing"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Hydraulic power</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Booster pump torque test",
                  "Solenoid valve diagnostics",
                  "Automatic cut-off calibration",
                  "Flow restrictor normalization"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">TDS precision control</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Total Dissolved Solids (TDS) management is an appliance task. We calibrate your membranes based on your local water source source profile, ensuring the perfect biological balance for safe and healthy consumption.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "TDS check", val: "Appliance" },
              { label: "UV logic", val: "Diagnostics" },
              { label: "OEM filter", val: "Guaranteed" },
              { label: "Pure H2O", val: "Deployment" }
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

export default WaterPurifierPage;





