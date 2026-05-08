import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UnderLine from '../Underline/Index'


gsap.registerPlugin(ScrollTrigger);

function About() {


    useGSAP(() => {
    gsap.from('.aboutHeading h1', {
        y: 120,
    })
    gsap.from('.aboutText h2', {
        y: 50,
        stagger: 0.1,

    })
    gsap.from('.rightText h5', {
        opacity: 0,
        stagger: 0.1
    })

    })

  return (
    <div className="page4 relative flex flex-row items-baseline gap-[4vw] md:gap-[5vw]  w-full  px-[6vw] py-[6vw]
        md:px-[4vw] md:pt-[6vw] md:pb-[2vw]
    ">
        <div className="left">
            <div className=" md:pl-[14vw] ">
                <div className="font-[silkSerif] text-[8vw] mb-0 md:mb-0
                    md:text-[2.6vw] md:leading-[4vw]"
                >
                    <h2>03</h2>
                </div>             
            </div>
        </div>
        <div className="right">
            <div className="">
                <div className="aboutHeading overflow-hidden pb-[3vw] md:pb-0">
                    <h1 className="text-[12vw] leading-[12vw] tracking-tighter
                        md:text-[6vw] font-[PlinaReg] md:leading-[6vw] md:tracking-normal
                        uppercase"
                    >
                        About Footfall Marketing
                    </h1>
                </div>
                {/* <div 
                    className="underline mt-[6vw] mb-[11vw] w-0 h-[.25vw] 
                    md:h-[.01vw] md:mt-[3.8vw] md:mb-[5vw] bg-white"
                ></div> */}

                {/*Line animation */}
                {/* <div 
                className={`line ${styles.line} relative mt-[6vw] mb-[11vw] w-full h-[.25vw] 
                md:h-[.01vw] md:mt-[4vw] md:mb-[5vw] `}
                >
                    <div 
                        className={`box ${styles.box}`} 
                        onMouseMove={manageMouseMove}
                        onMouseLeave={manageMouseLeave}
                    >
                    </div>
                    <svg className='w-full h-[100px] absolute -top-[50px]'>
                        <path ref={path} className={`path1 ${styles.path1}`} ></path>
                    </svg>
                </div> */}
                <UnderLine marginBottom='4vw' marginTop='4vw' />
                <div 
                    className="md:w-2/4 text-[7vw] md:text-[1.8vw] tracking-normal leading-[8vw] md:leading-[2.2vw] font-[PlinaReg] pt-[8vw] md:pt-0"
                >
                    <div className="aboutText overflow-hidden"><h2>Our agency is about people who</h2></div>
                    <div className="aboutText overflow-hidden"><h2>love creating designing and</h2></div>
                    <div className="aboutText overflow-hidden"><h2>developing wow projects. In the</h2></div>
                    <div className="aboutText overflow-hidden"><h2>same time we are boutique</h2></div>
                    <div className="aboutText overflow-hidden"><h2>agency that is more than the</h2></div>
                    <div className="aboutText overflow-hidden"><h2>collective. We learn and grow, win</h2></div>
                    <div className="aboutText overflow-hidden"><h2>and celebrate together.</h2></div>
                    
                </div>
                <div className="relative flex flex-col mt-8 md:flex-row md:mt-16 gap-8 ">
                    <div className=" order-2 md:order-1  md:w-1/2">
                        <img className="" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" alt="image"/>
                    </div>
                    <div 
                        className="rightText order-1 md:order-2 w-full md:w-1/5 text-[5vw] md:text-[.9vw] font-[PlinaReg] leading-[7vw] md:leading-[1.4vw] text-zinc-600"
                    >
                        <h5 className="mb-8">We are happy to present our new website and updated version of Footfall Marketing. As before we are open for new projects worldwide!</h5>
                        <h5>
                            Would you like to have award winning site or unique branding style, please say hi to our manager —info@footfallmarketing.com.
                            And we will help you with the pleasure.
                        </h5>
                    </div>
                    {/* blue Image */}
                    <div className="order-3 w-full
                        px-[6vw] pt-[6vw] pb-[12vw] mt-[4vw] md:mt-0
                        md:relative md:self-end md:-mt-[10vw]
                        md:w-[34vw] md:px-[3vw] md:py-[2vw] font-[PlinaReg]
                        bg-[#F63D18] md:z-10"
                    >
                        <div className="row flex items-start md:items-center justify-between 
                            border-b-[.9px]
                             border-white py-[5vw]
                            md:py-[2vw]"
                        >
                            <h3 className=" md:text-[1.4vw] whitespace-nowrap text-[5vw]">Awwwards x16</h3>
                            <p className="w-1/2  tracking-normal 
                                text-[4vw] leading-[5vw] 
                                md:w-2/4 md:text-[.8vw] md:leading-[.9vw]
                                "
                            >
                                SOTM, SOTD and Honrable Mentions
                            </p>
                        </div>
                        <div className="row flex items-start md:items-center justify-between py-[5vw]
                        border-b-[.9px] border-white md:py-[2vw]">
                            <h3 className="text-[5vw] md:text-[1.4vw] ">Red Dot Award x1</h3>
                            <p className="w-1/2 md:w-2/4 md:text-[.8vw] md:leading-[.9vw] tracking-normal text-[4vw] 
                            leading-[5vw] ">Best of the Best</p>
                        </div>
                        <div className="row flex items-start md:items-center justify-between py-[5vw] 
                        border-b-[.9px] border-white md:py-[2vw]">
                            <h3 className="md:text-[1.4vw] text-[5vw]">FWA x11</h3>
                            <p className="w-1/2 md:w-2/4 md:text-[.8vw] md:leading-[.9vw] tracking-normal text-[4vw] leading-[5vw]">FWA of the Day</p>
                        </div>
                        <div className="row flex items-start md:items-center justify-between py-[5vw]
                         border-b-[.9px] border-white md:py-[2vw]">
                            <h3 className="md:text-[1.4vw] text-[5vw]">CSSDA x23</h3>
                            <p className="w-1/2 md:w-2/4 md:text-[.8vw] md:leading-[.9vw] tracking-normal text-[4vw] leading-[5vw]">WOTM WOTD and UI, UX Inovation</p>
                        </div>
                        <div className="row flex items-start md:items-center justify-between  border-b-[.9px] py-[5vw]
                         border-white md:py-[2vw]">
                            <h3 className="md:text-[1.4vw] text-[5vw]">Behance x25</h3>
                            <p className="w-1/2 md:w-2/4 md:text-[.8vw] md:leading-[.9vw] tracking-normal text-[4vw] leading-[5vw]">Interaction, Graphic Design</p>
                        </div>
                    </div>        
                </div>
                {/* Line animation */}
                <UnderLine  marginBottom='1vw' marginTop='3vw'  />
            </div>
        </div>
    </div>
  )
}

export default About
