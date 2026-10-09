import UnderLine from '../Underline/Index';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.fromTo('.services-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      });
      // Cards stagger reveal
      gsap.fromTo('.service-card', { opacity: 0, y: 70 }, {
        opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.service-card', start: 'top 88%', toggleActions: 'play none none reset' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const services = [
    {
      id: "01",
      title: "GOOGLE ADS Management",
      description: "Drive footfall, direct bookings, and high-intent leads through strategically targeted Google Ads campaigns.",
      bullets: [
        "Footfall Generation",
        "Hotel & Resort Bookings",
        "Search Ads",
        "Google Maps Promotions",
        "Hotel & Resort Dining Bookings",
        "Lead Generation Campaigns"
      ],
      color: "#F63D18"
    },
    {
      id: "02",
      title: "META ADS MANAGEMENT",
      description: "Scale awareness, walk-ins, and customer acquisition through high-performing Facebook & Instagram advertising campaigns.",
      bullets: [
        "Restaurant Ads on Facebook & Instagram",
        "Store Visit & Walk-in Campaigns",
        "Hyperlocal Dining Demographics",
        "Lead Generation Ads",
        "Awareness Campaigns",
        "Retargeting Campaigns",
        "Hyperlocal Advertising"
      ],
      color: "#1a1a2e"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="w-full bg-white pt-[2vw] md:pt-[1.5vw] pb-0 px-[6vw] md:px-[4vw] text-black overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full mb-[4vw]">
        <div className="left">
          <div className="md:pl-[14vw]">
            <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
            </div>
          </div>
        </div>
        <div className="right w-full">
          <div className="services-heading aboutHeading overflow-hidden pb-[3vw] md:pb-0">
              <h1 
                className="text-[9vw] leading-[10vw] tracking-tighter
                md:text-[6vw] font-[PlinaReg] md:leading-[6vw] 
                md:tracking-normal
                uppercase cursor-default"
              >Our Services
            </h1>
          </div>
          <UnderLine marginBottom="0vw" marginTop="1vw" />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-between gap-[6vw] md:gap-[4vw]">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group relative w-full md:w-[calc(50%-2vw)] flex flex-col justify-between min-h-[300px] md:min-h-[400px] p-[6vw] md:p-[4vw] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-zinc-200 bg-gray-50 hover:bg-white hover:shadow-lg"
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
              <h3 className="font-[PlinaReg] text-[7vw] md:text-[2.2vw] leading-[8vw] md:leading-[2.6vw] uppercase tracking-tight mb-[4vw] md:mb-[2vw] text-black">
                {service.title}
              </h3>
              <p className="font-sans text-[4.5vw] md:text-[1.2vw] text-zinc-600 leading-relaxed md:leading-[1.8vw] group-hover:text-black transition-colors duration-300 mb-[4vw] md:mb-[2vw]">
                {service.description}
              </p>
              
              {service.bullets && (
                <ul className="list-none space-y-2 md:space-y-3">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-zinc-700 group-hover:text-black transition-colors duration-300 text-[4vw] md:text-[1.1vw]">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 text-[#F63D18] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Decorative arrow */}
            <div className="relative z-10 mt-[8vw] md:mt-[4vw] flex justify-end">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#F63D18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
