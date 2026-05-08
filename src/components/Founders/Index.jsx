import { useRef, useEffect } from "react";
import UnderLine from '../Underline/Index';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founders() {
  const sectionRef = useRef(null);
  const maskRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo('.founders-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.founders-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      });
      // Image panel
      gsap.fromTo(maskRef.current, { opacity: 0, x: -60 }, {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: maskRef.current, start: 'top 88%', toggleActions: 'play none none reset' }
      });
      // Text items stagger
      gsap.fromTo('.founder-text', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: textRef.current, start: 'top 88%', toggleActions: 'play none none reset' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-[6vw] pb-[10vw] md:pb-[2vw]">
       {/* Standard Site Section Header */}
       <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] pt-[6vw] md:pt-[0vw] mb-[8vw]">
            <div className="left">
                <div className="md:pl-[14vw]">
                    <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
                        <h2>06</h2>
                    </div>             
                </div>
            </div>
            <div className="right w-full">
                <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
                    <h1 className="founders-heading text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase cursor-default">
                        The Founders
                    </h1>
                </div>
                <UnderLine marginBottom='0vw' marginTop='1vw' />
            </div>
        </div>

       <div className="w-full px-[6vw] md:px-[14vw] mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          
          {/* Parallax Image Left */}
          <div className="w-full md:w-[45%] aspect-[4/5] relative overflow-hidden bg-black rounded-lg" ref={maskRef}>
             <div 
               ref={imgRef}
               className="w-full h-[120%] absolute top-[-10%] left-0"
             >
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                 alt="Founders Group" 
                 className="w-full h-full object-cover"
               />
             </div>
             {/* Subtle Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />
          </div>

          {/* Bio Typography Right */}
          <div className="w-full md:w-[55%] flex flex-col justify-center" ref={textRef}>
             <span className="founder-text font-[PlinaReg] text-[12px] uppercase tracking-widest text-[#F63D18] mb-6 font-bold block">
               Meet the Team
             </span>
             <h2 className="founder-text font-[PlinaReg] text-[40px] md:text-[56px] leading-[1.1] mb-8 text-black uppercase">
               The Vision <br />
               <span className="font-[silkSerif] normal-case text-zinc-500">Behind It All.</span>
             </h2>

             <div className="flex flex-col gap-5">
                <p className="founder-text font-[PlinaReg] text-[20px] text-black leading-[1.5] border-l-2 border-[#F63D18] pl-4">
                   &quot;Our vision is to provide the highest quality digital experiences — no compromises, no shortcuts.&quot;
                </p>
                <p className="founder-text font-sans text-[16px] text-zinc-600 leading-[1.7] mt-2">
                   We are a collective of passionate creators, engineers, and strategists. We thrive on creative challenges, blending technical precision with imaginative thinking to build work that actually means something.
                </p>
                <p className="founder-text font-sans text-[16px] text-zinc-600 leading-[1.7]">
                   When we&apos;re not building or analyzing, we&apos;re constantly exploring new horizons — because discipline in life and discipline in work are the same thing.
                </p>
             </div>

             <div className="founder-text mt-8 flex flex-wrap gap-2">
                 {['Creative Strategy', 'AI & ML', 'Data Analytics', 'Design Systems', 'WebGL', 'Full-Stack Eng'].map(tag => (
                   <span key={tag} className="bg-gray-100 text-black px-4 py-2 text-[11px] uppercase tracking-wider font-bold rounded-full border border-gray-200">
                     {tag}
                   </span>
                 ))}
             </div>

             <div className="founder-text mt-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-8">
                <div>
                   <h4 className="font-[silkSerif] text-[22px] text-black font-bold">Founders</h4>
                   <span className="font-[PlinaReg] text-[12px] uppercase text-zinc-500 tracking-widest block mt-1">Agency founded 2024</span>
                </div>
                <div>
                   <h4 className="font-[silkSerif] text-[22px] text-black font-bold">Global Team</h4>
                   <span className="font-[PlinaReg] text-[12px] uppercase text-zinc-500 tracking-widest block mt-1">Based Worldwide</span>
                </div>
             </div>
          </div>

       </div>
    </section>
  );
}
