import ServiceLayout from '../../components/ServiceLayout';
import { WashingMachine } from 'lucide-react';

const WashingMachinePage = () => (
  <ServiceLayout 
    title="Washing Machine"
    desc="Precision drum & motor appliance"
    longDesc="Our master appliance repairs specialize in complete restoration for both front-load and top-load systems. From complex logic board failures to mechanical drum vibrations, we ensure factory-grade performance with every fix."
    icon={<WashingMachine size={24} />}
    image="/washing.png"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Expert laundry solutions</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            A malfunctioning washing machine disrupts the essential rhythm of your home. Our diagnostic process identifies the root cause of leaks, motor failures, and drainage issues across all premium models, including top-load and high-efficiency front-load units.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our laundry services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Mechanical systems</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Drum & bearing restoration",
                  "Vibration & suspension tuning",
                  "Seal & gasket replacement",
                  "Transmission & belt repair"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Control & electronics</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Logic board (pcb) diagnostics",
                  "Pressure switch calibration",
                  "Drainage pump extraction",
                  "Thermal regulation repair"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Care quality assurance</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Every component we use is a 100% original manufacturer spare. Our appliance repairs undergo rigorous multi-point training to maintain care superiority across brands like Samsung, LG, and Bosch.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Top load", val: "Appliance" },
              { label: "Front load", val: "Diagnostics" },
              { label: "OEM parts", val: "Guaranteed" },
              { label: "Rapid sync", val: "Deployment" }
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

export default WashingMachinePage;





