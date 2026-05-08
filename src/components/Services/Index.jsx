import UnderLine from '../Underline/Index';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Google Ads Acceleration",
      description: "Capture high-intent traffic with hyper-targeted search and shopping campaigns. We architect Google Ads structures that maximize ROAS by focusing purely on profitable revenue generation.",
      color: "#F63D18" // Red accent
    },
    {
      id: "02",
      title: "Meta & Social Scaling",
      description: "Scale your customer acquisition with data-driven creative testing on Facebook and Instagram. We build full-funnel ad sequences that turn cold audiences into loyal, repeat buyers.",
      color: "#1a1a2e" // Dark blue/black accent
    },
    {
      id: "03",
      title: "Conversion Rate Optimization",
      description: "Traffic is useless if it doesn't convert. We ruthlessly test your landing pages, offers, and checkout flows to squeeze maximum revenue out of every click.",
      color: "#f0ede6" // Light grey accent
    },
    {
      id: "04",
      title: "Advanced Tracking & Analytics",
      description: "No more guessing. We implement robust server-side tracking and custom attribution models so you know exactly which campaigns are driving true margin.",
      color: "#0f172a" // Deep slate accent
    }
  ];

  return (
    <section id="services" className="w-full bg-white pt-[6vw] md:pt-[4vw] pb-0 px-[6vw] md:px-[4vw] text-black overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full mb-[4vw]">
        <div className="left">
          <div className="md:pl-[14vw]">
            <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
              <h2>02</h2>
            </div>
          </div>
        </div>
        <div className="right w-full">
          <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
            <h1 className="text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase">
              Our Services
            </h1>
          </div>
          <UnderLine marginBottom="0vw" marginTop="1vw" />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-between gap-[6vw] md:gap-[4vw]">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative w-full md:w-[calc(50%-2vw)] lg:w-[calc(25%-3vw)] flex flex-col justify-between min-h-[300px] md:min-h-[400px] p-[6vw] md:p-[2.5vw] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-zinc-200 bg-gray-50 hover:bg-white hover:shadow-lg"
          >
            {/* Background Hover Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0"
              style={{ backgroundColor: service.color }}
            ></div>
            
            <div className="relative z-10">
              <span 
                className="font-[silkSerif] text-[10vw] md:text-[3vw] leading-none mb-6 block transition-colors duration-500 text-[#F63D18]"
              >
                {service.id}
              </span>
              <h3 className="font-[PlinaReg] text-[7vw] md:text-[1.8vw] leading-[8vw] md:leading-[2.2vw] uppercase tracking-tight mb-[4vw] md:mb-[1.5vw] text-black">
                {service.title}
              </h3>
              <p className="font-sans text-[4vw] md:text-[1vw] text-zinc-600 leading-relaxed md:leading-[1.6vw] group-hover:text-black transition-colors duration-300">
                {service.description}
              </p>
            </div>
            
            {/* Decorative arrow */}
            <div className="relative z-10 mt-[6vw] md:mt-0 flex justify-end">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#F63D18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
