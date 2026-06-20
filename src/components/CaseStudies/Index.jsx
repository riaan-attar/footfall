import UnderLine from '../Underline/Index';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    tag: 'Brand Strategy',
    title: 'MIYA KEBABS',
    excerpt:
      "Miya Kebabs represents one of Footfall Metrics' most successful long-term growth stories. We partnered with the brand during its early stages when it operated a single outlet in Mumbai. Over the next three years, we worked closely with the founders to build brand awareness and drive customer acquisition through a combination of Google Ads, Meta Ads, influencer collaborations, and continuous performance marketing optimization. Our campaigns focused on increasing local visibility, strengthening brand recall, and generating consistent footfall across locations. As the brand grew, so did its presence. From a single outlet, Miya Kebabs expanded to five outlets across Mumbai and Pune, supported by sustained marketing efforts and a strong digital presence. Today, the brand continues to achieve exceptional results, with Google Ads consistently delivering over 20x ROAS month after month. Miya Kebabs stands as a testament to how data-driven performance marketing can help transform a local restaurant into a recognized regional brand.",
    image: '/images/miyakebabs.png',
    color: '#1a1a2e',
    textLight: true,
    stats: [
      { value: '400%', label: 'Revenue Growth' },
      { value: 'More than 20x', label: 'increase in ROAS' },
      { value: '1 to 6 Outlets', label: 'in 3 years' },
    ]
  },
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
        scrollTrigger: { trigger: '.case-card', start: 'top 88%', toggleActions: 'play none none reset' }
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
              <h2>09</h2>
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
      <div className="px-[6vw] md:px-[6vw] flex flex-col gap-[6vw] md:gap-[3vw]">
        {cases.map((study, i) => (
          <article
            key={i}
            className={`case-card group relative w-full rounded-2xl overflow-hidden flex flex-col md:flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            style={{ backgroundColor: study.color }}
          >
            {/* Image Half — explicit aspect-ratio so Locomotive Scroll knows height before img loads */}
            <div className="relative w-full md:w-1/2 overflow-hidden" style={{ aspectRatio: '4/3' }}>
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
              className={`relative w-full md:w-1/2 flex flex-col justify-center px-[8vw] py-[12vw] md:px-[5vw] md:py-[4vw] ${study.textLight ? 'text-white' : 'text-zinc-900'
                }`}
            >
              {/* Stats Block */}
              {study.stats && (
                <div className="flex flex-row flex-wrap items-center gap-[6vw] md:gap-[3vw] mb-[6vw] md:mb-[3vw] pb-[4vw] md:pb-[2vw] border-b"
                  style={{ borderColor: study.textLight ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
                >
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="font-[PlinaReg] text-[7vw] md:text-[2vw] leading-none font-bold">
                        {stat.value}
                      </span>
                      <span
                        className="font-sans text-[2.5vw] md:text-[0.7vw] uppercase tracking-widest font-semibold"
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
                className="inline-block self-start mb-[4vw] md:mb-[1.5vw] px-3 py-1 rounded-full text-[3vw] md:text-[.75vw] uppercase tracking-widest font-bold border"
                style={{
                  borderColor: study.textLight ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)',
                  color: study.textLight ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)',
                }}
              >
                {study.tag}
              </span>

              {/* Title */}
              <h2
                className="font-[PlinaReg] text-[8vw] leading-[9vw] md:text-[2.4vw] md:leading-[3vw] mb-[4vw] md:mb-[2vw] uppercase tracking-tight"
              >
                {study.title}
              </h2>

              {/* Excerpt */}
              <p
                className="font-sans text-[3.5vw] md:text-[.9vw] leading-[5.5vw] md:leading-[1.6vw] md:max-w-[90%]"
                style={{ opacity: study.textLight ? 0.75 : 0.65 }}
              >
                {study.excerpt}
              </p>

              {/* CTA */}
              <div className="mt-[6vw] md:mt-[2.5vw] flex items-center gap-[2vw] md:gap-[.8vw]">
                <span
                  className="font-[PlinaReg] uppercase tracking-widest text-[3.5vw] md:text-[.85vw] font-bold transition-all group-hover:gap-[1.2vw]"
                  style={{ opacity: study.textLight ? 0.9 : 0.8 }}
                >
                  Read More
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke={study.textLight ? '#fff' : '#111'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="w-full bg-white border-t border-zinc-100 px-[6vw] md:px-[4vw] pt-[6vw] pb-0 md:pt-[2vw] md:pb-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h5 className="text-[3vw] md:text-[.8vw] text-zinc-400 font-semibold tracking-widest uppercase">
            Footfall Metrics &copy; 2024
          </h5>
          <h5 className="text-[3vw] md:text-[.8vw] text-zinc-400 font-semibold tracking-widest uppercase flex items-center gap-2">
            Developed by
            <a href="https://riaanattar.me" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#F63D18] transition-colors underline decoration-1 underline-offset-4 font-bold">
              Riaan Attar
            </a>
          </h5>
        </div>
      </div>
    </section>
  );
}
