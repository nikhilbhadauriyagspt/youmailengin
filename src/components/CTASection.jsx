const CTASection = () => {
  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight tracking-tight">
              Need a <span className="text-blue-500">Customized</span> Support Plan?
            </h3>
            <p className="text-zinc-400 mb-12 max-w-3xl mx-auto text-[18px] font-normal leading-relaxed">
              If your technical challenge involves complex enterprise-level architectures or unique synchronization requirements not listed in our standard services, our team can develop a customized support plan tailored to your specific infrastructure.
            </p>
            <a href="#support-form" className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-10 py-4 rounded-xl text-[16px] font-semibold transition-all shadow-xl shadow-blue-900/20 active:scale-95">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
