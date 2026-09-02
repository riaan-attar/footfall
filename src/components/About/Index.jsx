import UnderLine from '../Underline/Index';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Shared scroll-reveal helper used across the site
export function revealOnScroll(targets, options = {}) {
  const els = gsap.utils.toArray(targets);
  els.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: options.y ?? 50 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.8,
        ease: options.ease ?? 'power3.out',
        delay: options.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 88%',
          toggleActions: 'play none none reset', // re-plays every time section enters
        },
      }
    );
  });
}

const About = () => {
  const description = "At Footfall Metrics, we are a premier restaurant advertising agency and digital marketing agency for restaurants dedicated to turning online searches into real diner visits. As one of the dedicated restaurant marketing firms and marketing companies for restaurants, we focus on the one metric that truly matters—actual footfall. Using high-impact Google Ads for restaurants, Facebook ads for restaurants, and hyperlocal targeting, we specialize in driving verified walk-ins and table reservations to your doors. Simply put, we help dining establishments get discovered, packed, and profitably scaled.";
  
  const mainImage = {
    src: "/images/about_google_ads.jpg",
    alt: "Google Ads Performance Dashboard",
  };
  const secondaryImage = {
    src: "/images/about_meta_ads.png",
    alt: "Meta Ads Campaigns Dashboard",
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

  const sectionRef = useRef(null);

  useGSAP(() => {
    // ── Scroll-reveal for About section elements ──
    const revealItems = [
      { sel: '.about-description', y: 40, delay: 0 },
      { sel: '.about-main-img',    y: 60, delay: 0.1 },
      { sel: '.about-breakout',    y: 50, delay: 0.15 },
      { sel: '.about-secondary-img', y: 60, delay: 0.2 },
      { sel: '.about-companies',   y: 30, delay: 0 },
      { sel: '.about-content-section', y: 50, delay: 0, stagger: 0.15 },
    ];

    revealItems.forEach(({ sel, y, delay, stagger }) => {
      const els = gsap.utils.toArray(sel);
      if (!els.length) return;
      gsap.fromTo(
        els,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          delay,
          stagger: stagger ?? 0,
          scrollTrigger: {
            trigger: els[0],
            start: 'top 88%',
            toggleActions: 'play none none reset',
          },
        }
      );
    });
  }, { scope: sectionRef });

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
    <section ref={sectionRef} className="page4 w-full bg-white pt-[6vw] pb-[6vw] md:pt-[6vw] md:pb-[2vw]">
      {/* Existing Original Header Structure */}
      <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] mb-[8vw]">
        <div className="left">
          <div className="md:pl-[14vw]">
            <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
              <h2>04</h2>
            </div>             
          </div>
        </div>
        <div className="right w-full">
          <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
            <h1 className="text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase cursor-default">
              About Footfall Metrics
            </h1>
          </div>
          <UnderLine marginBottom='0vw' marginTop='1vw' />
        </div>
      </div>

      <div className="w-full px-[6vw] md:px-[4vw] mx-auto">
        <div className="about-description mb-14 flex flex-col gap-5 lg:w-2/3">
          <p className="text-lg font-sans text-zinc-500 md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="about-main-img size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="about-breakout flex flex-col justify-between gap-6 rounded-xl bg-gray-100 p-7 md:w-1/2 lg:w-auto">
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
              className="about-secondary-img min-h-[300px] rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>

        {companies && (
          <div className="about-companies py-8 md:py-16 overflow-hidden w-full relative">
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

        {contentSections && contentSections.length > 0 && (
          <div className="mx-auto grid max-w-5xl gap-12 py-12 md:py-28 md:grid-cols-2 md:gap-28">
            {contentSections.map((section, idx) => (
              <div key={section.title + idx} className="about-content-section">
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
