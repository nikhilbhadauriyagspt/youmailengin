import { 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { id: "washing-machine", idx: "01", title: "Washing machine", desc: "Drum & motor repair", icon: <WashingMachine size={24} />, image: "/washing.png" },
  { id: "refrigerator", idx: "02", title: "Refrigerator", desc: "Cooling & compressor fix", icon: <Refrigerator size={24} />, image: "/refrigerator.png" },
  { id: "dishwasher", idx: "03", title: "Dishwasher", desc: "Pump & leakage repair", icon: <Waves size={24} />, image: "/dish.png" },
  { id: "television", idx: "04", title: "Television", desc: "Display & audio fix", icon: <Monitor size={24} />, image: "/tv.jpg" },
  { id: "coffee-maker", idx: "05", title: "Coffee maker", desc: "Heater & pump service", icon: <Coffee size={24} />, image: "/coffee.jpg" },
  { id: "air-conditioner", idx: "06", title: "Air conditioner", desc: "Gas refilling & PCB fix", icon: <Snowflake size={24} />, image: "/air.jpg" },
  { id: "microwave-oven", idx: "07", title: "Microwave oven", desc: "Magnetron & panel fix", icon: <Microwave size={24} />, image: "/micro.jpg" },
  { id: "oven-stove", idx: "08", title: "Oven & gas stove", desc: "Burner & ignition repair", icon: <Flame size={24} />, image: "/Ove.jpg" },
  { id: "water-purifier", idx: "09", title: "Water purifier", desc: "RO filter replacement", icon: <Droplets size={24} />, image: "/water.jpg" },
  { id: "clothes-dryer", idx: "10", title: "Clothes dryer", desc: "Heating & belt repair", icon: <Wind size={24} />, image: "/clothes.jpg" },
  { id: "kitchen-chimney", idx: "11", title: "Kitchen chimney", desc: "Deep cleaning & motor fix", icon: <Fan size={24} />, image: "/Kitchen.jpg" },
  { id: "other-appliances", idx: "12", title: "Other appliances", desc: "Mixers, irons & more", icon: <Cpu size={24} />, image: "/others.jpg" }
];

const RepairSolutions = () => {
  return (
    <section className="py-24 md:py-40 bg-white" id="repair-solutions">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section: Centered & Refined */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
            <span className="text-[11px] font-bold text-orange-600 tracking-[0.3em] uppercase">
              Premium catalog
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            Expert repair <span className="text-orange-600 italic">solutions.</span>
          </h2>
        </div>

        {/* Solutions Grid: Contemporary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 mt-16">
          {solutions.map((item, idx) => (
            <Link 
              key={idx} 
              to={`/service/${item.id}`}
              className="group flex flex-col transition-all duration-500"
            >
              {/* Image Visual with ID Badge */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 mb-8 border border-gray-50 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-orange-600/10 group-hover:-translate-y-1">
                <img 
                  loading="lazy" 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                />
                
                {/* Clean ID Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-white/50">
                  <span className="text-orange-600 font-black text-xs italic">{item.idx}</span>
                </div>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 transition-colors duration-500" />
              </div>

              {/* Text Content Area */}
              <div className="flex flex-col gap-2 px-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-gray-950 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                    <ArrowRight size={16} />
                  </div>
                </div>
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairSolutions;



