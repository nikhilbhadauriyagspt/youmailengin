import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] mt-26 overflow-hidden bg-zinc-100">
      <a href="#category" className="block w-full h-full cursor-pointer group">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/hero-washing.png" 
            alt="Banner" 
            className="w-full h-full object-cover transition-transform duration-1000 "
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5 " />
        </div>
      </a>
    </section>
  );
};

export default Hero;
