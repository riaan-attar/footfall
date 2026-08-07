import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const IMPACT_CONFIGS = {
  india: {
    title: "our impact in india",
    description: "We don't just run ads; we build revenue engines. Here is the tangible impact we've delivered for our partners in India.",
    spendStat: { label: "Revenue Generated", prefix: "₹", value: 5, suffix: "Cr+", isFloat: true },
    achievements: [
      { label: "Avg. ROAS Increase", prefix: "", value: 10, suffix: "x", isFloat: false },
      { label: "Active Clients", prefix: "", value: 40, suffix: "+", isFloat: false },
      { label: "Years of Experience", prefix: "", value: 8, suffix: "+", isFloat: false },
    ]
  },
  global: {
    title: "our impact globally",
    description: "Driving growth across international borders. Here is our global performance metrics overview.",
    spendStat: { label: "Revenue Generated", prefix: "$", value: 5, suffix: "M+", isFloat: true },
    achievements: [
      { label: "Avg. ROAS Increase", prefix: "", value: 10, suffix: "x", isFloat: false },
      { label: "Active Clients", prefix: "", value: 40, suffix: "+", isFloat: false },
      { label: "Years of Experience", prefix: "", value: 8, suffix: "+", isFloat: false },
    ]
  }
};

const Impact = () => {
  const containerRef = useRef(null);
  const statsBlockRef = useRef(null);
  const numbersRef = useRef(null);

  // Initialize timezone check: default to 'india' if timezone is Asia/Kolkata, else 'global'
  const [region, setRegion] = useState(() => {
    try {
      const isIndiaTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Kolkata';
      return isIndiaTimezone ? 'india' : 'global';
    } catch (e) {
      return 'global';
    }
  });

  // Double check with a fast geolocation service fallback chain
  useEffect(() => {
    const detectCountry = async () => {
      const endpoints = [
        { url: 'https://api.country.is', getCountry: (data) => data.country },
        { url: 'https://ipapi.co/json/', getCountry: (data) => data.country_code },
        { url: 'https://freeipapi.com/api/json', getCountry: (data) => data.countryCode },
        { url: 'https://ipwho.is/', getCountry: (data) => data.country_code }
      ];

      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint.url);
          if (!res.ok) continue;
          const data = await res.json();
          const country = endpoint.getCountry(data);
          if (country) {
            setRegion(country === 'IN' ? 'india' : 'global');
            break; // Successfully detected, stop the chain
          }
        } catch (err) {
          // Silent fallback to next endpoint in list
        }
      }
    };

    detectCountry();
  }, []);

  const config = IMPACT_CONFIGS[region] || IMPACT_CONFIGS.global;
  const { title: achievementsTitle, description: achievementsDescription, spendStat, achievements } = config;

  useGSAP(() => {
    // 1. Counter function
    function runCounter(el, target, isFloat) {
      el.innerHTML = isFloat ? '0.0' : '0';
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.innerHTML = isFloat ? obj.val.toFixed(1) : Math.floor(obj.val);
        },
      });
    }

    // 2. Counters setup
    const elements = gsap.utils.toArray('.achievement-number', containerRef.current);
    elements.forEach((el) => {
      const target = parseFloat(el.dataset.target);
      const isFloat = el.dataset.float === 'true';

      ScrollTrigger.create({
        trigger: numbersRef.current,
        start: 'top 80%',
        onEnter: () => runCounter(el, target, isFloat),
        onEnterBack: () => runCounter(el, target, isFloat),
      });
    });

    // 3. Scroll reveal for the overall stats block
    if (statsBlockRef.current) {
      gsap.fromTo(
        statsBlockRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsBlockRef.current,
            start: 'top 88%',
            toggleActions: 'play none none reset',
          },
        }
      );
    }
  }, { scope: containerRef, dependencies: [region] });

  return (
    <section ref={containerRef} className="w-full bg-white px-[6vw] md:px-[4vw] pt-0 pb-12 md:pt-0 md:pb-16">
      <div ref={statsBlockRef} className="impact-stats-block relative overflow-hidden rounded-xl bg-gray-100 p-7 md:p-16">
        
        {/* Header container with title and dynamic toggle switch */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-[PlinaReg] uppercase tracking-tight font-bold text-black">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-zinc-500 font-sans">
              {achievementsDescription}
            </p>
          </div>
          
          {/* Toggle pill selector */}
          <div className="flex items-center justify-center bg-zinc-200/80 p-1 rounded-full w-fit self-center md:self-start z-10 pointer-events-auto border border-zinc-300/40">
            <button 
              onClick={() => setRegion('global')} 
              className={`px-5 py-1.5 text-xs font-bold uppercase rounded-full transition-all duration-300 ${region === 'global' ? 'bg-black text-white shadow-md' : 'text-zinc-600 hover:text-black'}`}
            >
              Global
            </button>
            <button 
              onClick={() => setRegion('india')} 
              className={`px-5 py-1.5 text-xs font-bold uppercase rounded-full transition-all duration-300 ${region === 'india' ? 'bg-black text-white shadow-md' : 'text-zinc-600 hover:text-black'}`}
            >
              India
            </button>
          </div>
        </div>

        {/* Stats Content Grid */}
        <div ref={numbersRef} className="mt-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:flex md:gap-12">
            {achievements.map((item, idx) => (
              <div
                className="flex flex-col gap-2 text-center md:text-left"
                key={item.label + idx}
              >
                <span className="font-[silkSerif] text-4xl font-bold md:text-5xl text-black flex justify-center md:justify-start">
                  {item.prefix && <span>{item.prefix}</span>}
                  <span className="achievement-number" data-target={item.value} data-float={item.isFloat}>0</span>
                  {item.suffix && <span>{item.suffix}</span>}
                </span>
                <p className="text-sm md:text-base font-sans text-zinc-600 uppercase tracking-wide font-bold mt-2">{item.label}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-2 text-center md:text-right md:items-end md:border-l md:border-gray-300 md:pl-12">
            <span className="font-[silkSerif] text-5xl font-bold md:text-7xl text-black flex justify-center md:justify-end">
              {spendStat.prefix && <span>{spendStat.prefix}</span>}
              <span className="achievement-number" data-target={spendStat.value} data-float={spendStat.isFloat}>0</span>
              {spendStat.suffix && <span>{spendStat.suffix}</span>}
            </span>
            <p className="text-sm md:text-base font-sans text-zinc-600 uppercase tracking-wide font-bold mt-2">{spendStat.label}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impact;
