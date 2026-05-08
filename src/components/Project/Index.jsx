import styles from './Style.module.css'
import UnderLine from '../Underline/Index'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef} from 'react'
import hoverEffect from 'hover-effect'

gsap.registerPlugin(ScrollTrigger);

function Project() {
  let wrappers = useRef();
  let wrapper3 = useRef();
  let wrapper2 = useRef();
  let wrapper4 = useRef();
  let wrapper5 = useRef();
  let wrapper6 = useRef();

  useEffect(() => {
    if (window.matchMedia("(min-width: 1068px)").matches) {
      new hoverEffect({
        parent: wrappers.current,
        intensity: 0.6,
        imagesRatio: 360/288,
        image1: '/images/image3.png',
        image2: '/images/olga.jpg',
        displacementImage: '/images/14.jpg'
      })
  
      new hoverEffect({
        parent: wrapper3.current,
        intensity: 0.4,
        imagesRatio: 360/320,
        image1: '/images/image1.jpg',
        image2: '/images/image2.jpg',
        displacementImage: '/images/14.jpg'
      })
  
      new hoverEffect({
        parent: wrapper2.current,
        intensity: 0.5,
        imagesRatio: 360/320,
        image1: '/images/Ochi.png',
        image2: '/images/eyes.png',
        displacementImage: '/images/14.jpg'
      })
      new hoverEffect({
        parent: wrapper4.current,
        intensity: 0.5,
        imagesRatio: 360/320,
        image1: '/images/lax.png',
        image2: '/images/Laxer2.png',
        displacementImage: '/images/14.jpg'
      })
  
      new hoverEffect({
        parent: wrapper5.current,
        intensity: 0.5,
        imagesRatio: 360/288,
        image1: '/images/flow.png',
        image2: '/images/flow2.png',
        displacementImage: '/images/14.jpg'
      })
  
      new hoverEffect({
        parent: wrapper6.current,
        intensity: 0.5,
        imagesRatio: 360/320,
        image1: '/images/last.png',
        image2: '/images/last2.png',
        displacementImage: '/images/14.jpg'
      })
    } 
  }, []);

  


  useEffect(() => {
    const circleIn = document.querySelector(".page3Circle");
    // const circlePara = document.querySelector(".circleInpara");

    circleIn.addEventListener('mouseenter', () => {
      gsap.to(".circleIn", { scale: 1, transformOrigin: "center center" });
    });
    circleIn.addEventListener('mouseleave', () => {
      gsap.to(".circleIn", { scale: 0, transformOrigin: "center center" });
    });
    circleIn.addEventListener('mouseenter', () => {
      gsap.to(".circleInpara", { scale: 1, transformOrigin: "center center", delay: 0.3});
    });
    circleIn.addEventListener('mouseleave', () => {
      gsap.to(".circleInpara", { scale: 0, transformOrigin: "center center" });
    });
  })

  useEffect(() => {
    const circleIn = document.querySelector(".button2");
    // const circlePara = document.querySelector(".circleInpara");

    circleIn.addEventListener('mouseenter', () => {
      gsap.to(".circleIn2", { scale: 1, transformOrigin: "center center" });
    });
    circleIn.addEventListener('mouseleave', () => {
      gsap.to(".circleIn2", { scale: 0, transformOrigin: "center center" });
    });
    circleIn.addEventListener('mouseenter', () => {
      gsap.to(".circleInpara2", { scale: 1, transformOrigin: "center center", delay: 0.3});
    });
    circleIn.addEventListener('mouseleave', () => {
      gsap.to(".circleInpara2", { scale: 0, transformOrigin: "center center" });
    });
  })
  
  useEffect(() => {
    const circleIn = document.querySelector(".button3");
    // const circlePara = document.querySelector(".circleInpara");

    circleIn.addEventListener('mouseenter', () => {
      gsap.to(".circleIn3", { scale: 1, transformOrigin: "center center" });
    });
    circleIn.addEventListener('mouseleave', () => {
      gsap.to(".circleIn3", { scale: 0, transformOrigin: "center center" });
    });
    circleIn.addEventListener('mouseenter', () => {
      gsap.to(".circleInpara3", { scale: 1, transformOrigin: "center center", delay: 0.3});
    });
    circleIn.addEventListener('mouseleave', () => {
      gsap.to(".circleInpara3", { scale: 0, transformOrigin: "center center" });
    });
  })

  // ── Scroll-reveal for project items ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading
      gsap.fromTo('.project-heading', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.project-heading', start: 'top 88%', toggleActions: 'play none none reset' }
      });
      // Each project column fades in with stagger
      gsap.fromTo('.project-col-reveal', { opacity: 0, y: 80 }, {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.project-col-reveal', start: 'top 88%', toggleActions: 'play none none reset' }
      });
    });
    return () => ctx.revert();
  }, []);
  

  return (
    <div 
      className="page3 relative w-full min-h-[100vh] 
      px-[6vw] py-[4vw]
      md:px-[4vw] md:py-[10vw]"
    >
        <div  
          className=' flex flex-row items-baseline gap-[4vw] md:gap-[5vw] '
        >
          <div className="left">
            <div className=" md:pl-[14vw] ">
                <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0
                    md:text-[2.6vw] md:leading-[4vw]"
                >
                    <h2>02</h2>
                </div>             
            </div>
          </div>
          <div className="w-full right">
            <div 
              className="aboutHeading overflow-hidden pb-[4vw] md:pb-0 "
            >
              <h1 className="project-heading text-[12vw] leading-[12vw] tracking-tighter md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal uppercase cursor-default">
                our Projects
              </h1>
            </div>
            {/*Line animation */}
            <UnderLine marginBottom='4vw' marginTop='4vw' />
          </div>  
        </div>
        {/* Project container 1st row*/}
        <div 
          className="mt-[2vw] w-full flex flex-col md:flex-row 
          items-start gap-12 md:gap-8 pt-[6vw] md:pt-0"
        >
          {/* Image*/}
          <div className="project-col-reveal firstCol w-full md:w-[22%] "
            >
            <div className='md:mb-[1.6vw]'>
              <h2 className='text-[8vw] mb-[4vw] md:mb-0 md:text-[2vw] font-[PlinaReg] uppercase 
                md:tracking-tight md:leading-[2vw]'
              >
                Olga prudka
              </h2>
            </div>
              <div id="imageContainer"
                ref={wrappers} 
                className={`imageContainer ${styles.imageContainer} md:ml-0 
                w-full h-[120vw]
                md:w-[20vw] md:h-[25vw] relative overflow-hidden `}
              > 
                <img src='https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800' alt="image1"
                  className="inline-block md:hidden w-full h-full object-cover"  
                />
                {/* <img src="https://obys.agency/wp-content/uploads/2023/08/Olga_Prudka_2.png" 
                  alt="image1" className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
                />   */}
              </div>
            <div className=' flex mt-[7vw] md:mt-[1.6vw] font-[PlinaReg] text-[3vw]  
              md:text-[.8vw] items-start justify-between 
              gap-8 border-b-[1px] border-black pb-[6vw] md:pb-[1.6vw]'
            >
              <h5 className='whitespace-'>Logo design, Website design, Development</h5>
              <h5>2023</h5>  
            </div> 
          </div>
          {/* Image*/}
          <div className="project-col-reveal secondCol w-full md:w-2/5">
            <div className='md:mb-[1.6vw]'>
              <h2 className='text-[8vw] mt-[4vw] md:mt-0 mb-[4vw] md:mb-0 md:text-[2vw] font-[PlinaReg] 
              uppercase md:tracking-tight md:leading-[2vw]'>aim</h2>
            </div>
            <div  
              id="imageContainer"
              ref={wrapper3} 
              className={`imageContainer ${styles.imageContainer} md:ml-0 w-full h-[100vw]
              md:w-[36vw] md:h-[40vw] relative overflow-hidden `}
            > 
              <img src='https://images.unsplash.com/photo-1481481600674-e9314d4ce14f?auto=format&fit=crop&w=800' alt="image1"
                className="inline-block md:hidden w-full h-full object-cover"  
              />
                {/* <img src="https://obys.agency/wp-content/uploads/2023/08/Olga_Prudka_2.png" 
                  alt="image1" className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
                />  */}
            </div>             
            <div className='flex mt-[7vw] md:mt-[1.6vw] font-[PlinaReg] text-[3vw] md:text-[.8vw] items-start justify-between 
              border-b-[1px] border-black pb-[6vw] md:pb-[1.6vw]'
            >
              <h5>Logo design, Website design, Development</h5>
              <h5>2024</h5>  
            </div>
          </div>
          {/* button*/}
          <div className="thirdCol hidden md:inline-block relative ">
            <div className={`page3Circle ${styles.page3Circle}  relative w-[22vw] h-[22vw] border 
              rounded-full mt-[26vw] ml-[8vw] flex items-center justify-center`}
            >
              <svg className="button__arrow" width="20%" viewBox="0 0 91 118" fill="none">
                  <path d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z" fill="currentColor"></path>
              </svg>
              <div 
                className={`circleIn ${styles.circleIn} absolute w-[100%] h-[100%] scale-0 rounded-full flex items-center justify-center top-0 
                left-0 bg-[#F63D18] text-[#fff]`}
              >
                <p className={`circleInpara ${styles.circleInpara} font-[PlinaReg] text-center text-[.9vw] scale-0 w-[70%]`}>
                  We are thrilled to have you on board. We hope you enjoy the projects 🧡
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project container 2nd row */}
        <div className="secondRow mt-[12vw] md:mt-[2vw] w-full flex flex-col md:flex-row items-start gap-12 md:gap-8">
          {/* button*/}
          <div className="firstCol hidden md:inline-block relative">
            <div className=' mt-[0vw] ml-[0vw] relative'>
              <div className={`button2 ${styles.button2} relative w-[20vw] h-[20vw] border rounded-full `} data-hover-text="">
                <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45'>
                <svg className="button__arrow" width="6vw" height="6vw" viewBox="0 0 91 118" fill="none">
                  <path d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z" fill="currentColor"></path>
                </svg>
                </span>
                <div 
                  className={`circleIn2 ${styles.circleIn2} absolute w-[100%] h-[100%] scale-0 rounded-full flex items-center justify-center top-0 
                  left-0 bg-[#F63D18] text-[#fff]`}
                >
                  <p className={`circleInpara2 ${styles.circleInpara2} text-center font-[PlinaReg] text-[.9vw] scale-0 w-[70%]`}>
                  It will make you WOW! 😉
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image*/}
          <div className="secondCol w-full md:w-2/5 md:mt-[4vw] ">
            <div className='md:mb-[1.6vw]'>
              <h2 className='text-[8vw] mt-[4vw] md:mt-0 mb-[4vw] md:mb-0 md:text-[2vw] font-[PlinaReg] uppercase md:tracking-tight md:leading-[2vw]'>Ochi</h2>
            </div>
            <div id="imageContainer"
              ref={wrapper2}
              className={`imageContainer ${styles.imageContainer} md:ml-0 
              w-full h-[100vw]
              md:w-[36vw] md:h-[40vw] relative overflow-hidden `}
            > 
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800" alt="image1"
                 className="inline-block md:hidden w-full h-full object-cover"  
              />
              {/* <img src="https://obys.agency/wp-content/uploads/2022/06/OCHI_2-1.png" 
                alt="image1" className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
              />  */}
            </div>
            <div className='flex mt-[7vw] md:mt-[1.6vw] font-[PlinaReg] text-[3vw] 
              md:text-[.8vw] items-start justify-between 
              gap-8 border-b-[1px] border-black  pb-[6vw] md:pb-[1.6vw]'
            >
              <h5 className=''>Website design, Development</h5>
              <h5>2022</h5>  
            </div> 
          </div>
          {/* Image*/}
          <div className="thirdCol w-full">
            <div className='md:mb-[1.6vw]'>
                <h2 className='text-[8vw] mt-[4vw] md:mt-0 mb-[4vw] md:mb-0 md:text-[2vw] 
                  font-[PlinaReg] capitalize md:tracking-tight md:leading-[2vw]'
                >
                  David Laxer
                </h2>
              </div>
              <div 
                id="imageContainer"
                ref={wrapper4}
                className={`imageContainer ${styles.imageContainer} md:ml-0 w-full h-[100vw]
                md:w-[30vw] md:h-[38vw] relative overflow-hidden `}
              > 
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800" alt="image1"
                  className="inline-block md:hidden w-full h-full object-cover"  
                />
                {/* <img src="https://obys.agency/wp-content/uploads/2023/08/Laxer_2.png" 
                  alt="image1" className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
                />  */}
              </div>
              <div className='flex mt-[7vw] md:mt-[1.6vw] font-[PlinaReg] text-[3vw] 
                md:text-[.8vw] items-start justify-between 
                border-b-[1px] border-black  pb-[6vw] md:pb-[1.6vw]'
              >
                <h5>Website design, Development</h5>
                <h5>2023</h5>  
              </div>
          </div>
        </div>

        {/* Project container 3rd row */}
        <div className="secondRow mt-[12vw] md:mt-[2vw] w-full flex flex-col md:flex-row items-start gap-12 md:gap-8 ">
          {/* Image*/}
          <div className="thirdFirstCol w-full md:w-[22%] md:-mt-[10vw] ">
            <div className='md:mb-[1.6vw]'>
              <h2 className='text-[8vw] mt-[4vw] md:mt-0 mb-[4vw] md:mb-0 md:text-[2vw] 
                font-[PlinaReg] uppercase md:tracking-tight md:leading-[2vw]'
              >Eminente</h2>
            </div>
            <div 
              id="imageContainer"
              ref={wrapper5}
              className={`imageContainer ${styles.imageContainer} md:ml-0 w-full h-[120vw]
              md:w-[20vw] md:h-[25vw] relative overflow-hidden `}
            > 
              <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800" alt="image1"
                 className="inline-block md:hidden w-full h-full object-cover"  
              />
              {/* <img src="https://obys.agency/wp-content/uploads/2023/11/%C3%89minente-_img1-x2.png" 
                alt="image1" className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
              />  */}
            </div>
            <div className='flex mt-[7vw] md:mt-[1.6vw] font-[PlinaReg] text-[3vw] 
              md:text-[.8vw] items-start justify-between 
              gap-8 border-b-[1px] border-black pb-[6vw] md:pb-[1.6vw]'
            >
              <h5 className=''>Logo design, Website design, Development</h5>
              <h5>2023</h5>  
            </div> 
          </div>
          {/* button*/}
          <div className="thirdSecondCol w-2/5">
            <div className=' mt-[30vw] ml-[14vw] hidden md:inline-block relative'>
              <div className={`button3  relative w-[22vw] h-[22vw] border rounded-full `} data-hover-text="">
                <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90'>
                <svg className="button__arrow" width="6vw" height="6vw" viewBox="0 0 91 118" fill="none">
                  <path d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z" fill="currentColor"></path>
                </svg>
                </span>
                <div 
                  className={`circleIn3 ${styles.circleIn3} absolute w-[100%] h-[100%] scale-0 rounded-full flex items-center justify-center top-0 
                  left-0 bg-[#F63D18] text-[#fff]`}
                >
                  <p className={`circleInpara3 ${styles.circleInpara3} text-center font-[PlinaReg] text-[.9vw] scale-0 w-[70%]`}>
                  We like its color palette 🎨
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image*/}
          <div className="thirdThirdCol w-full md:mt-[8vw]">
            <div className='md:mb-[1.6vw]'>
                <h2 className='text-[8vw] mt-[4vw] md:mt-0 mb-[4vw] md:mb-0 md:text-[2vw] font-[PlinaReg] uppercase md:tracking-tight md:leading-[2vw]'>Makhno</h2>
              </div>
              <div id="imageContainer"
              ref={wrapper6}
                className={`imageContainer ${styles.imageContainer} md:ml-0 realtive w-full h-[100vw]
                md:w-[30vw] md:h-[38vw] relative overflow-hidden `}
              > 
                <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800" alt="image1"
                  className="inline-block md:hidden w-full h-full object-cover"  
                />
                {/* <img src="https://obys.agency/wp-content/uploads/2023/12/Makhno_Hover.png" 
                  alt="image1" className="absolute top-0 left-0 opacity-0 w-full h-full object-cover"
                />  */}
              </div>
              <div className='flex  mt-[7vw] md:mt-[1.6vw] font-[PlinaReg] text-[3vw] md:text-[.8vw] items-start justify-between 
                border-b-[1px] border-black pb-[6vw] md:pb-[1.6vw]'
              >
                <h5>Website design, Development</h5>
                <h5>2023</h5>  
              </div>
          </div>
        </div>
    </div>
  )
}

export default Project
