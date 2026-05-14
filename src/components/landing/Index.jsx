import styles from './Style.module.css'
import GlobeViewer from '../GlobeViewer/Index'
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
      {/* Landing Page */}
      <div
        className="w-full relative min-h-screen overflow-hidden"
      >
        {/* D3 Globe - right side (desktop) / Background (mobile) */}
        <div
          className="flex absolute z-0 items-center justify-center pointer-events-none sm:pointer-events-auto"
          style={{
            top: isMobile ? '10%' : 0,
            right: 0,
            width: isMobile ? '100vw' : '44vw',
            height: '100%',
            paddingBottom: isMobile ? '0' : '8%',
            opacity: isMobile ? 0.3 : 1, // Make it a subtle background on mobile
          }}
        >
          <GlobeViewer size={isMobile ? window.innerWidth * 1.2 : 400} />
        </div>

        <div
          className="relative px-[6vw] pt-[25vw] pb-[6vw]
          md:py-[6vw] md:px-[12vw] 
          flex flex-col md:flex-row md:items-start md:gap-16 z-20 pointer-events-none"
        >
          <div
            className={`firstword ${styles.firstword} font-[silkSerif] text-[8vw] md:text-[3.6vw] 
            md:leading-[6vw] pointer-events-auto mb-4 md:mb-0`}
          >
            <h4>
              01
            </h4>
          </div>
          <div className="text-[13vw] leading-[13vw] tracking-tighter
            md:text-[6vw] uppercase font-[PlinaReg] md:leading-[6.5vw] md:tracking-normal pointer-events-auto"
          >
            <div className={`hero ${styles.hero}`} id="hero1">
              <h1>We Design</h1>
            </div>
            <div className={`hero ${styles.hero}`} id="hero2">
              <h1>Unique</h1>
            </div>
            <div className={`hero ${styles.hero} relative z-[999] `} id="hero3">
              <h2 className="mr-[2vw] md:mr-0">Web</h2>
              <h3 className="hidden md:inline-block">/</h3>
              <h2 className="md:ml-0">Graphic</h2>
            </div>
            <div className={`hero ${styles.hero}`} id="hero4">
              <h1>Experience</h1>
            </div>

            {/* CTA Buttons */}
            <div className={`${styles.ctaButtons} flex flex-col md:flex-row gap-[4vw] md:gap-[1.2vw] mt-[10vw] md:mt-[3vw] items-start`}>
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
