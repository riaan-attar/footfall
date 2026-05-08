
import styles from './Style.module.css'
import logo from '../../assets/image/f.svg'
import { motion, useMotionValue } from 'framer-motion'

function Navbar() {
  const data = [
    { title: 'Home',        target: '.page1' },
    { title: 'Works',       target: '.page3' },
    { title: 'About',       target: '.page4' },
    { title: 'Testimonials',target: '.testimonialsSection' },
    { title: 'Contact',     target: '.page6' },
  ]

  const mapRange = (
    inputLower,
    inputUpper,
    outputLower,
    outputUpper,
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  const setTransform = (item, event, x, y) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(1, bounds.width, -2, 2)(relativeX)
    const yRange = mapRange(1, bounds.height, -2, 2)(relativeY)
    x.set(xRange * 10)
    y.set(yRange * 10)
  }

  const handleNavClick = (target) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`w-full sticky top-0 z-50 ${styles.navbarWrapper}`}>
      <div className="header 
        flex sm:items-center justify-between 
        px-[4vw] py-[3vw]
        sm:px-[3vw] sm:py-[1.2vw]"
      >
        <div className="first flex items-center gap-[2.2vw]">
          <div>
            <svg className="menu-opener__square" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect y="10" width="2" height="2" fill="currentColor"></rect>
              <rect y="5" width="2" height="2" fill="currentColor"></rect>
              <rect width="2" height="2" fill="currentColor"></rect>
              <rect x="5" y="10" width="2" height="2" fill="currentColor"></rect>
              <rect x="5" y="5" width="2" height="2" fill="currentColor"></rect>
              <rect x="5" width="2" height="2" fill="currentColor"></rect>
              <rect x="10" y="10" width="2" height="2" fill="currentColor"></rect>
              <rect x="10" y="5" width="2" height="2" fill="currentColor"></rect>
              <rect x="10" width="2" height="2" fill="currentColor"></rect>
            </svg>
          </div>
          <div className="logo">
            <img src={logo} alt="Footfall Logo" className={styles.brand_svg} />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className='navLinks hidden sm:flex items-center gap-[0.2vw]'>
          {data.map((item, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            return (
              <motion.button
                onPointerMove={(event) => {
                  const el = event.currentTarget;
                  setTransform(el, event, x, y)
                }}
                onPointerLeave={() => {
                  x.set(0)
                  y.set(0)
                }}
                onClick={() => handleNavClick(item.target)}
                style={{ x, y }}
                key={index}
                className={`${styles.navBtn} px-[1.1vw] py-[0.6vw] text-[0.85vw] uppercase tracking-widest font-semibold cursor-pointer border-none bg-transparent`}
              >
                <span className={`${styles.navText}`}>{item.title}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Mobile: logo right + hamburger implied by dots on left */}
        <div className="mobileContact sm:hidden">
          <a
            href="tel:+919999999999"
            className={styles.mobileCallBtn}
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

