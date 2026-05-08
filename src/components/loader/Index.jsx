import styles from './Style.module.css'

import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Loader() {

    useEffect(() => {
        var h5timer = document.querySelector('.part1 h5');
        var grow = 0;
        setInterval(function() {
            if(grow < 100) {
                h5timer.innerHTML = grow++;
            } else {
                h5timer.innerHTML = grow;
            }
        },36);
    }, []);
    

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.line h1', {
            y: 150,
            stagger: 0.3,
            duration: 1,
        })
        tl.from('.line h2, h6', {
            opacity: 0,  
        })
        
        tl.to('.loader', {
            opacity: 0,
            duration: 0.2,
            delay: 2.2
        })
        tl.from('.page1', {
            y: 1200,
            opacity: 0,
            duration: 0.4,
            delay: 0.1,
            ease: Power4
        })
        
        tl.to('.loader', {
            display: 'none'
        })
        tl.from('.header', {
            opacity:0
        })
        tl.from('.firstword', {
           opacity: 0
        })
        tl.from('#hero1 h1, #hero2 h1, #hero3 h2, .hero h3, #hero4 h1', {
            y: 180,
            stagger: 0.2,
        })
    }) 
    
  return ( 
    <div>
        <div 
            className="loader w-full h-full bg-[#ffffff] fixed z-[9] font-[PlinaReg] 
            px-[5vw] py-[40vw] leading-[10vw] text-[9vw] tracking-tighter
            md:py-[18vw] md:px-[6vw]  md:leading-[7vw] md:tracking-tight md:text-[7vw]
            xl:text-[5.8vw] xl:leading-[6vw] xl:py-[10vw]"
        >
            <div 
                className={`line ${styles.line} flex flex-col items-start uppercase
                md:flex-row md:items-center md:justify-start gap-[2vw]
                
                `}
            >
                <div 
                    className={`part1 ${styles.part1} flex  gap-[2.5vw]
                    items-center justify-center md:gap-[1vw]
                    font-[silkSerif] text-[8vw] leading-[8vw] tracking-wide 
                    md:items-start
                    md:text-[2.4vw] md:leading-[4.5vw]`}
                >
                    <h5 className='w-[5vw] text-right'>00</h5>
                    <h4>- 100</h4>
                </div>
                <h1>Your</h1>
            </div>
            <div className={`line ${styles.line} uppercase`}>
                <h1>Web Experience</h1>
            </div>
            <div 
                className={` line ${styles.line} flex 
                md:items-center md:justify-start 
                gap-[1.5vw] uppercase`}
            >
                <h1>
                    is loading right
                </h1>
                <h2 className={`animateh2 ${styles.animateh2} text-[5.5vw]`}>
                    Now
                </h2>
            </div>
            <div 
                className={`line ${styles.line}  
                text-[5vw] mt-[14vw] tracking-tight
                md:text-[.8vw] md:tracking-wide leading-[6vw] md:leading-none md:w-[30vw] md:mt-[4vw] 
                flex flex-col md:items-end justify-center`}
            >
                <h6 className='md:w-[5.6vw] md:text-left'>
                    Please wait 
                </h6>
                <h6>
                    a few seconds 
                </h6>
            </div>
        </div>
    </div>
   )
}

export default Loader
