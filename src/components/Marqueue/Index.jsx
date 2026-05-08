import styles from './Style.module.css'
import UnderLine from '../Underline/Index'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Marqueue() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.marqueue-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.marqueue-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      })
      gsap.fromTo('.marqueue-rows', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.marqueue-rows', start: 'top 88%', toggleActions: 'play none none reset' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])


  return (
    <div ref={sectionRef}>
        {/* We Work With heading — same layout as Testimonials */}
        <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] pt-[6vw] md:pt-[4vw]">
            <div className="left">
                <div className="md:pl-[14vw]">
                    <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
                        <h2>04</h2>
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

        <div className="page5 w-full  px-[4vw] mt-[3vw] md:px-[3vw] relative">
            {/* Repeating row */}
            <div className="marqueue-rows">
              <div 
                className={`elem whitespace-nowrap text-[9.6vw] leading-[12vw] 
                md:text-[7vw] md:leading-[7.6vw] 
                flex items-center uppercase font-[PlinaReg] 
                ${styles.elem}`}
              >
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  Sport 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black `}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  Fashion 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  technology 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  Fashion 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  technology 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  sport 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
              </div>

              <div 
                className={`elem2 whitespace-nowrap text-[9.6vw] leading-[12vw] 
                md:text-[7vw] md:leading-[7.6vw] 
                flex items-center uppercase font-[PlinaReg] 
                ${styles.elem2}`}
              >
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  beauty
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  real estate
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  architecture 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  beauty 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  real estate 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  architecture 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
              </div>
              <div 
                className={`elem whitespace-nowrap text-[9.6vw] leading-[12vw] 
                md:text-[7vw] md:leading-[7.6vw] 
                flex items-center uppercase font-[PlinaReg] 
                ${styles.elem}`}
              >
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  partners
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  travel
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  science 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  partners 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  travel 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  science 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
              </div>

              <div 
                className={`elem2 whitespace-nowrap text-[9.6vw] leading-[12vw] 
                md:text-[7vw] md:leading-[7.6vw] 
                flex items-center uppercase font-[PlinaReg] 
                ${styles.elem2}`}
              >
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  hotels
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  music
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  automotive
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  hotels 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw]`}>
                  music 
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
                <h1 className={`${styles.elemh1} flex items-center gap-[3vw] font-[silkSerif] `}>
                  automotive
                  <div className={`${styles.dash} w-[8vw] h-[1vw] md:w-[5vw] md:h-[.5vw] border-[1px] border-black`}></div>
                </h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Marqueue
