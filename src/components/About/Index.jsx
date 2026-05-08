import UnderLine from '../Underline/Index';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const description = "We are a data-driven marketing collective dedicated to building performance engines that empower e-commerce and local businesses to dominate their markets. With deep expertise in Google Ads, Meta Ads, and full-funnel CRO, we craft scalable strategies that turn clicks into measurable revenue.";
  
  const mainImage = {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    alt: "Data Analysis and Strategy",
  };
  const secondaryImage = {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    alt: "Performance Marketing Dashboard",
  };
  
  const breakout = {
    title: "Performance over promises",
    description: "Providing aggressive growth strategies, precise ad spend management, and transparent ROI reporting.",
    buttonText: "View Case Studies",
    buttonUrl: "#",
  };

  const companies = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google Ads" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", alt: "Meta Ads" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google Ads" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", alt: "Meta Ads" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
  ];

  const achievementsTitle = "Our Impact in Numbers";
  const achievementsDescription = "We don't just run ads; we build revenue engines. Here is the tangible impact we've delivered for our partners.";
  const achievements = [
    { label: "Ad Spend Managed", prefix: "$", value: 5, suffix: "M+", isFloat: false },
    { label: "Avg. ROAS Increase", prefix: "", value: 3.2, suffix: "x", isFloat: true },
    { label: "Active Clients", prefix: "", value: 40, suffix: "+", isFloat: false },
    { label: "Years of Experience", prefix: "", value: 8, suffix: "+", isFloat: false },
  ];

  const numbersRef = useRef(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.achievement-number');
    
    elements.forEach((el, index) => {
      const target = achievements[index].value;
      const isFloat = achievements[index].isFloat;
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: numbersRef.current,
          start: "top 80%", // trigger when the top of the container is 80% down the viewport
          once: true,
        },
        onUpdate: () => {
          el.innerHTML = isFloat ? obj.val.toFixed(1) : Math.floor(obj.val);
        }
      });
    });
  }, { scope: numbersRef });

  const contentSections = [
    {
      title: "Our Vision",
      content: "For years, the process of scaling a business online has been clouded by vanity metrics and opaque agency practices. Today, businesses need absolute clarity on where their budget is going and what return it's generating.\n\nWhat if you could scale your revenue predictably without burning cash on unproven tactics? With Footfall Metrics, you can. We strip away the fluff and focus entirely on performance-driven outcomes.\n\nWe believe that every brand deserves a growth partner that treats their budget like its own.",
    },
    {
      title: "Our Approach",
      content: "Our agency has been architecting ad accounts and conversion funnels for years, focusing on efficiency and margin expansion in every campaign. We know that the best marketing strategies are rooted in data, not guesswork.\n\nWe initially developed our tracking and optimization systems for high-growth startups, and now we bring that enterprise-level rigor to all our partners. We are proud to offer strategies that are aggressive, measurable, and highly profitable.\n\nOur team is made up of obsessive media buyers and creative strategists who are passionate about building campaigns that dominate.",
    },
  ];

  return (
    <section className="w-full bg-white pt-[6vw] pb-[6vw] md:pt-[6vw] md:pb-[2vw]">
      {/* Existing Original Header Structure */}
      <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] mb-[8vw]">
        <div className="left">
          <div className="md:pl-[14vw]">
            <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
              <h2>03</h2>
            </div>             
          </div>
        </div>
        <div className="right w-full">
          <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
            <h1 className="text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase">
              About Footfall Marketing
            </h1>
          </div>
          <UnderLine marginBottom='0vw' marginTop='1vw' />
        </div>
      </div>

      <div className="w-full px-[6vw] md:px-[4vw] mx-auto">
        <div className="mb-14 flex flex-col gap-5 lg:w-2/3">
          <p className="text-lg font-sans text-zinc-500 md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-gray-100 p-7 md:w-1/2 lg:w-auto">
              <div>
                <p className="mb-2 text-xl font-[PlinaReg] uppercase tracking-tight font-bold text-black">{breakout.title}</p>
                <p className="text-zinc-500 font-sans">{breakout.description}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('case-studies');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mr-auto inline-block px-6 py-3 border border-zinc-300 rounded-md font-[PlinaReg] uppercase tracking-widest text-xs font-bold text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                {breakout.buttonText}
              </button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>

        {companies && (
          <div className="py-8 md:py-16 overflow-hidden w-full relative">
            <div className="flex w-max animate-marquee">
              {/* Double mapping for infinite scroll effect */}
              {[...companies, ...companies].map((company, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 md:px-12">
                  <img
                    src={company.src}
                    alt={company.alt}
                    className="h-7 md:h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            {/* Fades for marquee edges */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        )}

        <div className="relative overflow-hidden rounded-xl bg-gray-100 p-7 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-[PlinaReg] uppercase tracking-tight font-bold text-black">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-zinc-500 font-sans">
              {achievementsDescription}
            </p>
          </div>
          <div ref={numbersRef} className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between">
            {achievements.map((item, idx) => (
              <div
                className="flex flex-col gap-2 text-center md:text-left"
                key={item.label + idx}
              >
                <span className="font-[silkSerif] text-4xl font-semibold md:text-5xl text-black flex justify-center md:justify-start">
                  {item.prefix && <span>{item.prefix}</span>}
                  <span className="achievement-number">0</span>
                  {item.suffix && <span>{item.suffix}</span>}
                </span>
                <p className="text-sm md:text-base font-sans text-zinc-600 uppercase tracking-wide font-bold mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {contentSections && contentSections.length > 0 && (
          <div className="mx-auto grid max-w-5xl gap-16 py-24 md:py-28 md:grid-cols-2 md:gap-28">
            {contentSections.map((section, idx) => (
              <div key={section.title + idx}>
                <h2 className="mb-5 text-4xl font-[PlinaReg] uppercase font-bold tracking-tight text-black">{section.title}</h2>
                <p className="text-lg leading-relaxed whitespace-pre-line text-zinc-500 font-sans">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
