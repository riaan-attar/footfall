import UnderLine from '../Underline/Index'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: '46 Ounces', src: '/images/logo/46ounces.png' },
  { name: 'Shiv Sagar', src: '/images/logo/shivsagar.png' },
  { name: 'BBQ Earth', src: '/images/logo/BBQ Earth Logo.png' },
  { name: 'Bharathiya', src: '/images/logo/Bharathiya Logo.png' },
  { name: 'Factory Bar & Kitchen', src: '/images/logo/Factory Bar Logo.png' },
  { name: 'Kake Da Hotel', src: '/images/logo/kake-da-logo-newlogo.png' },
  { name: 'Karl Residency', src: '/images/logo/Karl logo.png' },
  { name: 'Kuubera', src: '/images/logo/Kuubera Logo.png' },
  { name: 'Miya Kebab', src: '/images/logo/Miya Kebab Logo.png' },
  { name: 'Pav Bhaji Panda', src: '/images/logo/Pav Bhaji Panda Logo.png' },
  { name: 'Terra Goa', src: '/images/logo/Terra Logo.png' },
  { name: 'TGIB', src: '/images/logo/TGIB Logo.png' }
];

function Project() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading
      gsap.fromTo('.project-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.project-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="page3 relative w-full px-[6vw] py-[2vw] md:px-[4vw] md:py-[4vw]"
    >
        <div className='flex flex-row items-baseline gap-[4vw] md:gap-[5vw]'>
          <div className="left">
            <div className="md:pl-[14vw]">
                <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
                    <h2>02</h2>
                </div>             
            </div>
          </div>
          <div className="w-full right">
            <div className="aboutHeading overflow-hidden pb-[2vw] md:pb-0">
              <h1 className="project-heading text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase cursor-default">
                brands we served
              </h1>
            </div>
            <UnderLine marginBottom='2vw' marginTop='2vw' />
          </div>  
        </div>

        {/* Brand Logos Grid */}
        <div className="brand-card-grid grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-10 mt-[3vw]">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center h-[30vw] md:h-[10vw] relative group cursor-pointer"
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="max-h-[75%] max-w-[90%] object-contain opacity-100 group-hover:opacity-0 group-hover:scale-75 transition-all duration-300 ease-out" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="font-[PlinaReg] text-[3.8vw] md:text-[1.2vw] uppercase tracking-widest text-[#F63D18] font-bold text-center">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Project;
