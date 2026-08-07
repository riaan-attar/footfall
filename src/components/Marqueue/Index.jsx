import styles from './Style.module.css';
import UnderLine from '../Underline/Index';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROW1_INDUSTRIES = [
  "Restaurants",
  "Cafes & Bistros",
  "Pubs & Bars",
  "Nightclubs & Lounges",
  "Fine Dining",
  "Gourmet Bakeries",
  "Rooftop Bars",
  "Beach Clubs",
  "Food Trucks"
];

const ROW2_INDUSTRIES = [
  "Spas & Salons",
  "Gyms & Fitness Clubs",
  "Yoga & Pilates Studios",
  "Wellness Retreats",
  "Dental & Medical Clinics",
  "Aesthetic Centers",
  "Nail Salons",
  "Barbershops",
  "Sports Academies"
];

const ROW3_INDUSTRIES = [
  "Boutique Retail",
  "Real Estate Builders",
  "Co-working Spaces",
  "Jewelry Showrooms",
  "Art Galleries",
  "Shopping Malls",
  "Fashion Houses",
  "Concept Stores",
  "Home Decor Outlets"
];

const ROW4_INDUSTRIES = [
  "Hotels & Resorts",
  "Theme Parks",
  "Event Venues",
  "Auto Showrooms",
  "Pet Cafes & Grooming",
  "Bowling Alleys",
  "Trampoline Parks",
  "VR Arcades",
  "Wineries & Vineyards"
];

function Marqueue() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.marqueue-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.marqueue-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      });
      gsap.fromTo('.marqueue-rows', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.marqueue-rows', start: 'top 88%', toggleActions: 'play none none reset' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const renderRowItems = (industries, rowPrefix) => {
    // Render the list twice for a seamless infinite loop
    const doubleList = [...industries, ...industries];
    return doubleList.map((item, idx) => (
      <h1 
        key={`${rowPrefix}-${idx}`} 
        className={`${styles.elemh1} flex items-center gap-[3vw] ${idx % 2 === 1 ? 'font-[silkSerif]' : ''}`}
      >
        {item}
        <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
      </h1>
    ));
  };

  return (
    <div ref={sectionRef}>
      {/* We Work With heading */}
      <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] pt-[6vw] md:pt-[4vw]">
        <div className="left">
          <div className="md:pl-[14vw]">
            <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
              <h2>05</h2>
            </div>
          </div>
        </div>
        <div className="right w-full">
          <div className="overflow-hidden pb-[3vw] md:pb-0">
            <h1 className="marqueue-heading text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase">
              We Work With
            </h1>
          </div>
          <UnderLine marginBottom='0vw' marginTop='1vw' />
        </div>
      </div>

      <div className="page5 w-full px-[4vw] mt-[3vw] md:px-[3vw] relative">
        <div className="marqueue-rows flex flex-col gap-4 overflow-hidden">
          
          {/* Row 1: Hospitality & Dining */}
          <div 
            className={`elem whitespace-nowrap text-[9.6vw] leading-[12vw] 
            md:text-[7vw] md:leading-[7.6vw] 
            flex items-center uppercase font-[PlinaReg] 
            ${styles.elem}`}
          >
            {renderRowItems(ROW1_INDUSTRIES, 'r1')}
          </div>

          {/* Row 2: Wellness, Fitness & Beauty */}
          <div 
            className={`elem2 whitespace-nowrap text-[9.6vw] leading-[12vw] 
            md:text-[7vw] md:leading-[7.6vw] 
            flex items-center uppercase font-[PlinaReg] 
            ${styles.elem2}`}
          >
            {renderRowItems(ROW2_INDUSTRIES, 'r2')}
          </div>

          {/* Row 3: Retail, Real Estate & Lifestyle */}
          <div 
            className={`elem whitespace-nowrap text-[9.6vw] leading-[12vw] 
            md:text-[7vw] md:leading-[7.6vw] 
            flex items-center uppercase font-[PlinaReg] 
            ${styles.elem}`}
          >
            {renderRowItems(ROW3_INDUSTRIES, 'r3')}
          </div>

          {/* Row 4: Entertainment, Travel & Leisure */}
          <div 
            className={`elem2 whitespace-nowrap text-[9.6vw] leading-[12vw] 
            md:text-[7vw] md:leading-[7.6vw] 
            flex items-center uppercase font-[PlinaReg] 
            ${styles.elem2}`}
          >
            {renderRowItems(ROW4_INDUSTRIES, 'r4')}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Marqueue;
