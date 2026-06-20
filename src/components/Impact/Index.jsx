import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  const achievementsTitle = "Our Impact in Numbers";
  const achievementsDescription = "We don't just run ads; we build revenue engines. Here is the tangible impact we've delivered for our partners.";
  const achievements = [
    { label: "Ad Spend Managed", prefix: "₹", value: 8.3, suffix: "Cr+", isFloat: true },
    { label: "Avg. ROAS Increase", prefix: "", value: 10, suffix: "x", isFloat: false },
    { label: "Active Clients", prefix: "", value: 40, suffix: "+", isFloat: false },
    { label: "Years of Experience", prefix: "", value: 8, suffix: "+", isFloat: false },
  ];

  const numbersRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.achievement-number');

    elements.forEach((el, index) => {
      const target = achievements[index].value;
      const isFloat = achievements[index].isFloat;

      ScrollTrigger.create({
        trigger: numbersRef.current,
        start: 'top 80%',
        onEnter: () => runCounter(el, target, isFloat),
        onEnterBack: () => runCounter(el, target, isFloat),
      });
    });

    function runCounter(el, target, isFloat) {
      el.innerHTML = isFloat ? '0.0' : '0';
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          el.innerHTML = isFloat ? obj.val.toFixed(1) : Math.floor(obj.val);
        },
      });
    }

    // Scroll reveal for the stats block
    gsap.fromTo(
      '.impact-stats-block',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.impact-stats-block',
          start: 'top 88%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-white px-[6vw] md:px-[4vw] pt-0 pb-12 md:pt-0 md:pb-16">
      <div className="impact-stats-block relative overflow-hidden rounded-xl bg-gray-100 p-7 md:p-16">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-[PlinaReg] uppercase tracking-tight font-bold text-black">
            {achievementsTitle}
          </h2>
          <p className="max-w-xl text-zinc-500 font-sans">
            {achievementsDescription}
          </p>
        </div>
        <div ref={numbersRef} className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between">
          {achievements.map((item, idx) => (
            <div
              className="flex flex-col gap-2 text-center md:text-left"
              key={item.label + idx}
            >
              <span className="font-[silkSerif] text-4xl font-bold md:text-5xl text-black flex justify-center md:justify-start">
                {item.prefix && <span>{item.prefix}</span>}
                <span className="achievement-number">0</span>
                {item.suffix && <span>{item.suffix}</span>}
              </span>
              <p className="text-sm md:text-base font-sans text-zinc-600 uppercase tracking-wide font-bold mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
