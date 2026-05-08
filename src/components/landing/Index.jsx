// import { useGSAP } from "@gsap/react"
// import { useEffect } from "react"
// import Navbar from "../Navbar/Index"
import styles from './Style.module.css'
import Lanyard from '../Lanyard/Index'
import Ballpit from '../Ballpit/Index'
import { useState, useEffect } from 'react'

function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContactScroll = () => {
    const footer = document.querySelector('.page6');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=" page1  w-full">
      {/* Navbar */}

      {/* Landing Page */}
      <div
        className="w-full relative min-h-screen"
      >
        {/* Lanyard - top right corner */}
        {!isMobile && (
          <div className="hidden sm:block absolute top-0 right-0 z-10" style={{ width: '40vw', height: '100vh', pointerEvents: 'auto' }}>
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        )}

        {/* Ballpit Background */}
        {!isMobile && (
          <div style={{ position: 'absolute', top: 0, left: 0, overflow: 'hidden', height: '100vh', width: '100%', zIndex: 1 }}>
            <Ballpit
              count={40}
              gravity={0}
              friction={0.9975}
              wallBounce={0.95}
              followCursor={true}
              colors={[0xff6600, 0xffaa00, 0xff3366, 0x9933ff, 0x00ccff]}
            />
          </div>
        )}

        <div
          className="relative px-[4vw] py-[16vw]
          sm:py-[3vw] sm:px-[18vw] space-y-2
          sm:flex sm:flex-row sm:items-start sm:gap-16 z-20 pointer-events-none"
        >
          <div
            className={`firstword ${styles.firstword} font-[silkSerif] text-[5vw] sm:text-[3.6vw] 
            sm:leading-[6vw] pointer-events-auto`}
          >
            <h4>
              01
            </h4>
          </div>
          <div className="text-[10vw] leading-[10vw] tracking-tighter
            sm:text-[6vw] uppercase font-[PlinaReg] sm:leading-[6vw] sm:tracking-normal pointer-events-auto"
          >
            <div className={`hero ${styles.hero}`} id="hero1">
              <h1>
                We Design
              </h1>
            </div>
            <div className={`hero ${styles.hero}`} id="hero2">
              <h1>
                Unique</h1>
            </div>
            <div className={`hero ${styles.hero} relative z-[999] `} id="hero3">
              <h2 className="">Web</h2>
              <h3>/</h3>
              <h2>Graphic</h2>
            </div>
            <div className={`hero ${styles.hero}`} id="hero4">
              <h1>Experience</h1>
            </div>

            {/* CTA Buttons */}
            <div className={`${styles.ctaButtons} flex flex-row gap-[3vw] sm:gap-[1.2vw] mt-[6vw] sm:mt-[2.5vw]`}>
              <button
                id="hero-contact-btn"
                onClick={handleContactScroll}
                className={styles.ctaBtnPrimary}
              >
                <span>Contact Us</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <a
                id="hero-call-btn"
                href="tel:+919999999999"
                className={styles.ctaBtnOutline}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.45-1.45a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

