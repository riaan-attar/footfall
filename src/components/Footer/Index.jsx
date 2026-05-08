import { useRef } from 'react';
import AnimatedLink from '../AnimatedLink'
import UnderLine from '../Underline/Index'
import styles from './Style.module.css'

const data = [
    { title: "Dribbble"},
    {title: "Behance"},
    {title: "Instagram"},
    {title: "Facebook"},
    {title: "Twitter"},
    {title: "YouTube"},
]

function Footer() {
  const footerRef = useRef(null);

  return (
    <div ref={footerRef}>
        <div className="page6 relative sm:flex gap-[5vw] w-full px-[4vw] py-[5vw]
            sm:px-[4vw] mt-[4vw] "
        >
            <div className="left">
                <div className=" sm:pl-[14vw] ">
                    <div className="font-[silkSerif] text-[4.6vw] 
                        sm:text-[2.6vw] sm:leading-[4vw]"
                    >
                        <h2>07</h2>
                    </div>             
                </div>
            </div>
            
            <div className="w-full right font-[PlinaReg]">
                <div>
                    <div className="aboutHeading flex items-center overflow-hidden pb-[3vw] sm:pb-0">
                        <h1 className={`footText ${styles.footText} text-[9vw] leading-[10vw] tracking-tighter 
                            sm:text-[6.8vw] sm:leading-[7vw] sm:tracking-normal
                            uppercase`}
                        >
                            let&apos;s create
                        </h1>
                        <div className="ml-[4vw] w-[8vw] sm:ml-[3vw] sm:w-[6vw]">
                            <svg className="entry-title__arrow" viewBox="0 0 118 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M57.295 75.1963L56.5879 74.4892L55.8808 75.1963L56.5879 75.9034L57.295 75.1963ZM77.0457 55.4457L77.7528 56.1528L79.4599 54.4457L77.0457 54.4457L77.0457 55.4457ZM72.3742 90.2755L71.6671 90.9826L72.3742 91.6897L73.0813 90.9826L72.3742 90.2755ZM117.513 45.1371L118.22 45.8442L118.927 45.1371L118.22 44.4299L117.513 45.1371ZM102.433 30.0578L103.141 29.3507L102.433 28.6431L101.726 29.3512L102.433 30.0578ZM102.433 30.0585L101.726 30.7656L102.433 31.4732L103.14 30.7651L102.433 30.0585ZM72.3743 9.86531e-07L73.0814 -0.707106L72.3743 -1.41421L71.6672 -0.707106L72.3743 9.86531e-07ZM57.2951 15.0792L56.588 14.3721L55.8809 15.0792L56.588 15.7863L57.2951 15.0792ZM76.3363 34.1205L76.3363 35.1205L78.7506 35.1205L77.0434 33.4134L76.3363 34.1205ZM-4.50306e-05 34.1205L-4.50525e-05 33.1205L-1.00005 33.1205L-1.00005 34.1205L-4.50306e-05 34.1205ZM-4.45646e-05 55.4457L-1.00004 55.4457L-1.00004 56.4457L-4.45427e-05 56.4457L-4.45646e-05 55.4457ZM58.0021 75.9034L77.7528 56.1528L76.3385 54.7386L56.5879 74.4892L58.0021 75.9034ZM73.0813 89.5684L58.0021 74.4892L56.5879 75.9034L71.6671 90.9826L73.0813 89.5684ZM116.806 44.4299L71.6671 89.5684L73.0813 90.9826L118.22 45.8442L116.806 44.4299ZM101.726 30.765L116.806 45.8442L118.22 44.4299L103.141 29.3507L101.726 30.765ZM103.14 30.7651L103.141 30.7645L101.726 29.3512L101.725 29.3519L103.14 30.7651ZM103.14 29.3514L73.0814 -0.707106L71.6672 0.707108L101.726 30.7656L103.14 29.3514ZM71.6672 -0.707106L56.588 14.3721L58.0022 15.7863L73.0814 0.707108L71.6672 -0.707106ZM56.588 15.7863L75.6292 34.8276L77.0434 33.4134L58.0022 14.3721L56.588 15.7863ZM76.3363 33.1205L-4.50525e-05 33.1205L-4.50088e-05 35.1205L76.3363 35.1205L76.3363 33.1205ZM-1.00005 34.1205L-1.00004 55.4457L0.999955 55.4457L0.999955 34.1205L-1.00005 34.1205ZM-4.45427e-05 56.4457L77.0457 56.4457L77.0457 54.4457L-4.45864e-05 54.4457L-4.45427e-05 56.4457Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <UnderLine marginBottom='5vw' marginTop='4vw' />
                </div>

                {/* New 2-Column Footer Layout */}
                <div className="sm:flex sm:gap-[10vw] items-start justify-between">
                    
                    {/* Left Column: Onboarding Form */}
                    <div className="form-col w-full sm:w-[55%] mb-[16vw] sm:mb-0">
                        <form className="flex flex-col gap-[8vw] sm:gap-[3vw]" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-field flex flex-col gap-[2vw] sm:gap-[1vw]">
                                <label className="text-zinc-500 text-[3.5vw] sm:text-[.9vw] uppercase tracking-widest font-semibold">Name / Company</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe @ Brand" 
                                    className="w-full bg-transparent border-b border-zinc-300 py-2 sm:py-3 text-[5vw] sm:text-[1.8vw] focus:outline-none focus:border-[#F63D18] transition-colors placeholder:text-zinc-300" 
                                />
                            </div>
                            <div className="form-field flex flex-col gap-[2vw] sm:gap-[1vw]">
                                <label className="text-zinc-500 text-[3.5vw] sm:text-[.9vw] uppercase tracking-widest font-semibold">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="hello@example.com" 
                                    className="w-full bg-transparent border-b border-zinc-300 py-2 sm:py-3 text-[5vw] sm:text-[1.8vw] focus:outline-none focus:border-[#F63D18] transition-colors placeholder:text-zinc-300" 
                                />
                            </div>
                            <div className="form-field flex flex-col gap-[2vw] sm:gap-[1vw]">
                                <label className="text-zinc-500 text-[3.5vw] sm:text-[.9vw] uppercase tracking-widest font-semibold">Project Details</label>
                                <textarea 
                                    rows="3" 
                                    placeholder="Tell us about your vision..." 
                                    className="w-full bg-transparent border-b border-zinc-300 py-2 sm:py-3 text-[5vw] sm:text-[1.8vw] focus:outline-none focus:border-[#F63D18] transition-colors resize-none placeholder:text-zinc-300"
                                ></textarea>
                            </div>
                            <div className="form-field mt-[4vw] sm:mt-[1vw]">
                                <button 
                                    type="submit" 
                                    className="group relative overflow-hidden bg-black text-white px-[8vw] py-[4vw] sm:px-[3vw] sm:py-[1.2vw] rounded-full text-[4vw] sm:text-[1.1vw] uppercase tracking-widest hover:bg-[#F63D18] transition-colors duration-300"
                                >
                                    <span className="relative z-10 font-semibold">Send Request</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Existing Contact Info */}
                    <div className="contact-col w-full sm:w-[35%] flex flex-col gap-[12vw] sm:gap-[6vw]">
                        <div className="contact-section space-y-[2vw] sm:space-y-[1vw]">
                            <h3 className="text-zinc-500 text-[3.5vw] sm:text-[.9vw] uppercase tracking-widest font-semibold mb-[4vw] sm:mb-[2vw]">Socials</h3>
                            {data.map((item, index) => {
                                return (
                                    <div key={index} 
                                        className='relative flex flex-col text-[5.4vw] leading-[6vw] 
                                        sm:text-[1.6vw] sm:leading-[1.8vw]'
                                    >
                                        <AnimatedLink title={item.title} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="contact-section space-y-[2vw] sm:space-y-[1vw]">
                            <h3 className="text-zinc-500 text-[3.5vw] sm:text-[.9vw] uppercase tracking-widest font-semibold mb-[4vw] sm:mb-[2vw]">Address</h3>
                            <h2 className="text-[5.4vw] leading-[6vw] sm:text-[1.6vw] sm:leading-[1.8vw]">Skovorody 5</h2>
                            <h2 className="text-[5.4vw] leading-[6vw] sm:text-[1.6vw] sm:leading-[1.8vw]">61057 Kharkiv</h2>
                            <h2 className="text-[5.4vw] leading-[6vw] sm:text-[1.6vw] sm:leading-[1.8vw]">Ukraine</h2>
                        </div>
                        <div className="contact-section space-y-[2vw] sm:space-y-[1vw]">
                            <h3 className="text-zinc-500 text-[3.5vw] sm:text-[.9vw] uppercase tracking-widest font-semibold mb-[4vw] sm:mb-[2vw]">Say Hi!</h3>
                            <h2 className="text-[5.8vw] leading-[6vw] sm:text-[1.6vw] sm:leading-[1.8vw] underline decoration-1 underline-offset-[6px] hover:text-[#F63D18] transition-colors cursor-pointer">
                                info@footfallmarketing.com
                            </h2>
                        </div>
                    </div>
                </div>

                <UnderLine marginBottom='2vw' marginTop='8vw' />
                <h5 className="sm:text-[.9vw] pt-[3vw] sm:pt-0 pb-[2vw] text-zinc-500 font-semibold tracking-wider">Footfall Marketing &copy; 2024</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer
