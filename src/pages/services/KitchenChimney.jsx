import ServiceLayout from '../../components/ServiceLayout';
import { Fan } from 'lucide-react';

const KitchenChimneyPage = () => (
  <ServiceLayout 
    title="Kitchen Chimney"
    desc="High-suction motor & deep degreasing"
    longDesc="Restore the air purity of your culinary space. We provide specialized high-torque motor diagnostics, advanced centrifugal fan cleaning, and comprehensive chemical degreasing for all wall-mounted and island chimney systems."
    icon={<Fan size={24} />}
    image="/Kitchen.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Aeronautics in the kitchen</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            Accumulated grease is the primary cause of chimney failure and fire hazards. Our deep-clean protocol utilizes industrial-grade degreasers and ultrasonic cleaning for filters to restore original suction power and operational safety.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our chimney services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Suction dynamics</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Motor bearing restoration",
                  "Centrifugal fan balancing",
                  "Baffle filter ultrasonic clean",
                  "Exhaust duct obstruction fix"
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
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Control & logic</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Touch & gesture sensor repair",
                  "LED lighting array fix",
                  "Control board (PCB) tuning",
                  "Auto-clean logic diagnostics"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Operational efficiency</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            We utilize digital anemometers to measure the exact air-flow velocity at the intake and exhaust nodes. This appliance approach ensures your chimney maintains the required CFM (Cubic Feet per Minute) for an odor-free kitchen environment.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "High suction", val: "Appliance" },
              { label: "Deep clean", val: "Diagnostics" },
              { label: "OEM motor", val: "Guaranteed" },
              { label: "Odor free", val: "Deployment" }
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

export default KitchenChimneyPage;





