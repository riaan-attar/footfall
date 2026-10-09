import UnderLine from '../Underline/Index';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    tag: 'Legacy Continued',
    title: 'Kake Da Hotel',
    excerpt:
      "Kake Da Hotel is one of India's most iconic restaurant brands, with a legacy spanning over 90 years and its flagship outlet located in Connaught Place, Delhi. Footfall Metrics manages performance marketing for four of their Mumbai outlets. Our strategy combined Google Ads, Meta Ads, and influencer collaborations to drive awareness and increase footfall. Through carefully planned influencer campaigns, we promoted corporate lunch offerings and kitty party bookings while simultaneously running high-intent Google Ads campaigns to capture customers actively searching for dining options. The result was a significant increase in customer visits and bookings, delivering an impressive 8x return on ad spend (ROAS) across campaigns.",
    image: '/images/kakedahotel.png',
    color: '#F63D18',
    textLight: true,
    stats: [
      { value: '8x ROAS', label: 'Achieved' },
      { value: '50%', label: 'Increase in Kitty & Corporate Bookings' },
      { value: '20%', label: 'Revenue Growth' },
      { value: 'Multiple', label: 'Outlets' },
    ]
  },
  {
    tag: 'Maximum Control',
    title: 'Bharathiya',
    excerpt:
      "Located in Hyderabad's Financial District, Bharathiya is a popular restaurant known for its authentic cuisine and strong local presence. When Footfall Metrics partnered with Bharathiya, the restaurant was primarily running Google Smart Campaigns, which offered limited control over targeting and optimization. We transitioned the account to fully manual Google Ads campaigns, allowing us to build dedicated strategies for different dayparts and customer intents. Separate campaigns were created for breakfast, lunch, thalis, snacks, and dinner, ensuring that the right message reached the right audience at the right time. Alongside Google Ads, we leveraged Meta Ads to generate bulk catering enquiries for corporate and social events. This structured approach resulted in a remarkable 9x ROAS while also creating an additional revenue stream through catering orders.",
    image: '/images/bharathiya.png',
    color: '#f0ede6',
    textLight: false,
    stats: [
      { value: '100%', label: 'control over Ads' },
      { value: '40%', label: 'high intent leads' },
      { value: '20%', label: 'increase in Catering orders' },
    ]
  },
  {
    tag: 'Maximized Walk-ins',
    title: '46 Ounces',
    excerpt:
      "46 Ounces Brewgarden and 46 Ounces Brewhouse are among Bangalore's most recognized brewery brands, with their flagship presence in the bustling Electronic City area. Our focus was centered on Google Ads, where we deployed aggressive search campaigns to capture customers actively looking for breweries, pubs, and dining destinations. We also strategically targeted competitor search terms to increase visibility among high-intent audiences considering alternative venues. With a strong advertising budget and continuous optimization, the campaigns delivered exceptional performance, generating approximately 13x ROAS while driving substantial footfall and revenue growth for the brand.",
    image: '/images/46ounces.jpg',
    color: '#0f172a',
    textLight: true,
    stats: [
      { value: '13x', label: 'ROAS' },
      { value: '15%', label: 'Revenue Growth' },
      { value: '120%', label: 'increase in New Customers' },
      { value: 'Multiple', label: 'Outlets' },
    ]
  },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.casestudies-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.casestudies-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      });
      gsap.fromTo('.case-card', { opacity: 0, y: 80 }, {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.15,
        clearProps: 'transform',
        scrollTrigger: { trigger: '.case-card', start: 'top 88%', toggleActions: 'play none none none' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="case-studies" className="w-full bg-white pt-[6vw] pb-0">
      {/* Section Header */}
      <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] mb-[6vw]">
        <div className="left">
          <div className="md:pl-[14vw]">
            <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
              <h2>03</h2>
            </div>
          </div>
        </div>
        <div className="right w-full">
          <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
            <h1 className="casestudies-heading text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase cursor-default">
              Case Studies
            </h1>
          </div>
          <UnderLine marginBottom="0vw" marginTop="1vw" />
        </div>
      </div>

      {/* Case Study Cards — Alternating Layout */}
      <div className="px-[6vw] md:px-[6vw] flex flex-col gap-[15vh] md:gap-[25vh] pb-[20vh]">
        {cases.map((study, i) => (
          <article
            key={i}
            className={`case-card sticky group relative w-full rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            style={{
              backgroundColor: study.color,
              top: `calc(6vh + ${i * 26}px)`
            }}
          >
            {/* Image Half */}
            <div className="relative w-full md:w-1/2 h-[160px] sm:h-[220px] md:h-auto md:min-h-[380px] overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Half */}
            <div
              className={`relative w-full md:w-1/2 flex flex-col justify-center p-5 sm:p-6 md:px-[4vw] md:py-[2.5vw] ${study.textLight ? 'text-white' : 'text-zinc-900'
                }`}
            >
              {/* Stats Block */}
              {study.stats && (
                <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-5 md:gap-[2.2vw] mb-3 sm:mb-4 md:mb-[1.5vw] pb-2.5 sm:pb-3 md:pb-[1vw] border-b"
                  style={{ borderColor: study.textLight ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
                >
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <span className="font-[PlinaReg] text-xl sm:text-2xl md:text-[1.8vw] leading-none font-bold">
                        {stat.value}
                      </span>
                      <span
                        className="font-sans text-[9px] sm:text-[11px] md:text-[0.7vw] uppercase tracking-widest font-semibold"
                        style={{ opacity: study.textLight ? 0.7 : 0.6 }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tag */}
              <span
                className="inline-block self-start mb-2 md:mb-[0.8vw] px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] sm:text-xs md:text-[.72vw] uppercase tracking-widest font-bold border"
                style={{
                  borderColor: study.textLight ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)',
                  color: study.textLight ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)',
                }}
              >
                {study.tag}
              </span>

              {/* Title */}
              <h2
                className="font-[PlinaReg] text-xl sm:text-2xl md:text-[2.2vw] md:leading-[2.6vw] mb-2 md:mb-[0.8vw] uppercase tracking-tight"
              >
                {study.title}
              </h2>

              {/* Excerpt */}
              <p
                className="font-sans text-xs sm:text-sm md:text-[.88vw] leading-relaxed md:leading-[1.55vw] md:max-w-[95%]"
                style={{ opacity: study.textLight ? 0.75 : 0.65 }}
              >
                {study.excerpt}
              </p>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
