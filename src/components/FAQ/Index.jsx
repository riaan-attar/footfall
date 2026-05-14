import { useRef, useState, useEffect } from "react";
import UnderLine from '../Underline/Index';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What specific digital marketing services do you offer for restaurants?",
    answer: "We specialize in end-to-end digital marketing for the F&B industry. This includes highly targeted Google Ads, Meta Ads (Facebook & Instagram) for local reach, SEO optimization to rank on 'near me' searches, and custom website design to showcase your menu and drive direct reservations."
  },
  {
    question: "How long does it take to see an increase in footfall?",
    answer: "With performance marketing (Google & Meta Ads), you can see an initial spike in inquiries and footfall within the first 2-3 weeks. For organic growth (SEO & Content Marketing), we typically start seeing sustainable momentum within 3-4 months."
  },
  {
    question: "Do you only work with restaurants in Nashik?",
    answer: "While we are proudly based in Nashik and have a deep understanding of the local market, we partner with restaurants, cafes, and cloud kitchens across India and globally to help them scale their digital presence."
  },
  {
    question: "How do you measure the success of a campaign?",
    answer: "We focus on real metrics that impact your bottom line: cost per acquisition (CPA), return on ad spend (ROAS), table reservations booked, online orders generated, and overall footfall increase directly attributed to our digital campaigns."
  },
  {
    question: "Can you help redesign our restaurant's website?",
    answer: "Absolutely. We build modern, visually stunning, and conversion-optimized websites that serve as the digital storefront for your restaurant. Our designs integrate seamlessly with reservation systems and online ordering platforms."
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
                        <h2>07</h2>
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
