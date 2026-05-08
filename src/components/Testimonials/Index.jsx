import CircularGallery from '../CircularGallery/Index'
import UnderLine from '../Underline/Index'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonials-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      })
      gsap.fromTo('.testimonials-gallery', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonials-gallery', start: 'top 88%', toggleActions: 'play none none reset' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={sectionRef} className="testimonialsSection testimonials-section relative w-full pt-[2vw] pb-[0vw] overflow-hidden flex flex-col items-center">
        <div className="flex flex-row items-baseline gap-[4vw] md:gap-[5vw] w-full px-[6vw] md:px-[4vw] pt-[6vw] md:pt-[0vw]">
            <div className="left">
                <div className="md:pl-[14vw]">
                    <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0 md:text-[2.6vw] md:leading-[4vw]">
                        <h2>05</h2>
                    </div>             
                </div>
            </div>
            <div className="right w-full">
                <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
                    <h1 className="testimonials-heading text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase cursor-default">
                        Testimonials
                    </h1>
                </div>
                <UnderLine marginBottom='0vw' marginTop='1vw' />
            </div>
        </div>
        
        <div className="testimonials-gallery w-full flex justify-center items-center mt-4" style={{ height: '480px', position: 'relative' }}>
          <CircularGallery 
            items={[
              { 
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', 
                text: '"The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!"',
                name: 'Patrick Nawrocki',
                title: 'UX Manager at Superhabits'
              },
              { 
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', 
                text: '"Their attention to detail and animations are second to none. The new design system completely elevated our brand presence and converted more users than we ever thought possible. A true masterpiece of digital engineering!"',
                name: 'Sarah Jenkins',
                title: 'Product Lead at FinTech'
              },
              { 
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop', 
                text: '"The creative direction and development speed was phenomenal. I cannot recommend them enough for anyone looking to build a high-end, premium digital experience. Exceeded expectations in every single way!"',
                name: 'Michael Chen',
                title: 'CEO at Elevate Inc.'
              }
            ]}
            bend={1} 
            borderRadius={0.05} 
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden w-full px-[6vw] flex justify-end mt-[12vw] mb-[8vw]">
          <p className="font-[PlinaReg] text-[3vw] uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            swipe to see more 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-bounce-x">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </p>
        </div>
    </div>
  )
}

export default Testimonials
