import { useRef, useState, useEffect } from "react";
import UnderLine from '../Underline/Index';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What makes Footfall Metrics the leading restaurant advertising agency?",
    answer: "As a premier digital marketing agency for restaurants, we focus exclusively on verified walk-ins and table bookings rather than vanity impressions. Our specialized team deploys high-converting Google Ads for restaurants, targeted Facebook ads for restaurants, and local SEO to turn online searches into paying diners."
  },
  {
    question: "How do restaurant ads on Facebook and Instagram drive actual footfall?",
    answer: "Our restaurant ads on Facebook and Instagram leverage pinpoint geotargeting around your venue, enticing culinary video creatives, and local store-visit objectives. By reaching hungry diners within your immediate delivery and dining radius, we convert casual social media scrollers into seated guests."
  },
  {
    question: "Why should restaurant marketing firms prioritize Google Ads for restaurants?",
    answer: "When potential customers search for 'best restaurants near me', 'places to eat', or specific cuisines, Google Ads for restaurants place your brand at the exact top of search and Google Maps results. This captures high-intent diners at the exact moment they are deciding where to eat."
  },
  {
    question: "How do you measure ROI compared to other marketing companies for restaurants?",
    answer: "Unlike traditional marketing companies for restaurants that report only impressions and clicks, we measure real business metrics: cost per table reservation, direct inquiry cost, return on ad spend (ROAS), and verified footfall growth directly attributed to our advertising campaigns."
  }
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      });
      gsap.fromTo('.faq-item', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.faq-list', start: 'top 85%', toggleActions: 'play none none reset' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white pt-[6vw] pb-[10vw] md:pb-[6vw]">
      {/* Standard Site Section Header */}
      <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] pt-[6vw] md:pt-[0vw] mb-[8vw]">
        <div className="left">
          <div className="md:pl-[14vw]">
            <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
              <h2>08</h2>
            </div>
          </div>
        </div>
        <div className="right w-full">
          <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
            <h1 className="faq-heading text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase cursor-default">
              FAQ
            </h1>
          </div>
          <UnderLine marginBottom='0vw' marginTop='1vw' />
        </div>
      </div>

      <div className="faq-list w-full px-[6vw] md:px-[20vw] mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`faq-item border-b border-zinc-200 py-6 cursor-pointer group`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center gap-6">
                <h3 className={`font-[PlinaReg] text-[20px] md:text-[24px] uppercase transition-colors duration-300 ${isOpen ? 'text-[#F63D18]' : 'text-black group-hover:text-zinc-600'}`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#F63D18] bg-[#F63D18] text-white rotate-180' : 'border-zinc-300 text-zinc-400 group-hover:border-zinc-500'}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out`}
                style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
              >
                <p className="font-sans text-zinc-600 text-[16px] leading-[1.6] pt-4 pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
