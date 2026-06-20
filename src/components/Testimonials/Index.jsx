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
              <h2>06</h2>
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
              avatar: '/images/harshal.png',
              text: '"The team\'s understanding of Google Ads and local search marketing is exceptional. They consistently delivered measurable results and helped us achieve a strong return on our advertising spend. Highly recommended for any business looking to increase walk-in customers."',
              name: 'Harshal Patil',
              title: 'BBQ Earth'
            },
            {
              avatar: '/images/mounil.png',
              text: '"Footfall Metrics completely changed the way we look at marketing. Instead of focusing on vanity metrics, they helped us bring actual customers through our doors. The increase in footfall and revenue was visible within the first few months."',
              name: 'Mounil Majethia',
              title: 'Krave'
            },
            {
              avatar: '/images/shasank.png',
              text: '"What sets Footfall Metrics apart is their focus on business outcomes. Their campaigns not only improved our visibility online but also translated into real customer visits and higher sales. They have been a valuable growth partner for our brand."',
              name: 'Shasank',
              title: '46 Ounces Brewgarden'
            },
            {
              avatar: '/images/nishikanth.png',
              text: '"The team understood local restaurant marketing exceptionally well. From keyword targeting to campaign optimization, every decision was focused on increasing dine-in customers and measurable sales."',
              name: 'Nishikanth Neerati',
              title: 'Bharathiya'
            },
            {
              avatar: '/images/anna.png',
              text: '"We were struggling to attract new customers consistently. Their Google and Meta Ads strategy significantly improved our visibility and brought in a steady flow of walk-ins."',
              name: 'Anna Alberqueque',
              title: 'Factory Bar & Kitchen'
            },
            {
              avatar: '/images/nawal.png',
              text: '"Professional, responsive, and highly result-oriented. The team focuses on business outcomes, not vanity metrics, and that\'s exactly what we were looking for in a marketing partner."',
              name: 'Nawal Kerawalla',
              title: 'Karl Residency'
            },
            {
              avatar: '/images/rohit.png',
              text: '"We had worked with agencies before, but Footfall Metrics was the first team that connected ad performance directly to walk-ins and sales growth."',
              name: 'Rohit Parakar',
              title: 'Kake Da Hotel'
            },
            {
              avatar: '/images/reynold.png',
              text: '"Within the first month, we saw a noticeable increase in dine-in customers. Footfall Metrics combines creative strategy with strong ad execution."',
              name: 'Reynold Abranches',
              title: 'Terra Goa'
            },
            {
              avatar: '/images/lalit.png',
              text: '"What stood out was their ability to optimize campaigns continuously. They treated our ad budget like their own and focused on generating real business outcomes."',
              name: 'Lalit Jain',
              title: 'The Great Indian Buffet'
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </p>
      </div>
    </div>
  )
}

export default Testimonials
