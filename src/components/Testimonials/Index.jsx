import CircularGallery from '../CircularGallery/Index'
import UnderLine from '../Underline/Index'

function Testimonials() {
  return (
    <div className="testimonialsSection testimonials-section relative w-full pt-[2vw] pb-[0vw] overflow-hidden flex flex-col items-center">
        <div className="sm:flex gap-[5vw] w-full px-[4vw] sm:px-[4vw]">
            <div className="left">
                <div className="sm:pl-[14vw]">
                    <div className="font-[silkSerif] text-[4.6vw] sm:text-[2.6vw] sm:leading-[4vw]">
                        <h2>05</h2>
                    </div>             
                </div>
            </div>
            <div className="right w-full">
                <div className="aboutHeading overflow-hidden pb-[3vw] sm:pb-0">
                    <h1 className="text-[8vw] leading-[10vw] tracking-tighter sm:text-[6vw] font-[PlinaReg] sm:leading-[6vw] sm:tracking-normal uppercase">
                        Testimonials
                    </h1>
                </div>
                <UnderLine marginBottom='0vw' marginTop='1vw' />
            </div>
        </div>
        
        <div className="w-full flex justify-center items-center mt-4" style={{ height: '480px', position: 'relative' }}>
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
    </div>
  )
}

export default Testimonials
