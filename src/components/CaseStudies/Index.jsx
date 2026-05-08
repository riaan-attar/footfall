import UnderLine from '../Underline/Index';

const cases = [
  {
    tag: 'Brand Strategy',
    title: 'Empowering a D2C fashion brand to 4× its monthly revenue',
    excerpt:
      'A mid-sized athleisure label was struggling with inconsistent brand voice and poor ad performance. We rebuilt their identity from the ground up — from positioning to paid social creative — and turned it into a conversion machine.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    color: '#1a1a2e',
    textLight: true,
  },
  {
    tag: 'Product Design',
    title: 'Streamlining remote hiring with a marketplace platform',
    excerpt:
      'Struggling to find the perfect software development partner? Our client cuts through the noise. The platform connects businesses with elite development firms, ensuring a perfect match for your project.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    color: '#F63D18',
    textLight: true,
  },
  {
    tag: 'Web Experience',
    title: 'Building a premium digital presence for a luxury real estate firm',
    excerpt:
      'The client needed a website that matched the exclusivity of their properties. We delivered an immersive, animation-first experience that positioned them as the definitive luxury brand in their market.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6d5fab2c?auto=format&fit=crop&w=800&q=80',
    color: '#f0ede6',
    textLight: false,
  },
  {
    tag: 'Growth Marketing',
    title: 'Scaling a SaaS startup from 0 to 12,000 users in 90 days',
    excerpt:
      'A seed-stage SaaS tool had a strong product but zero traction. We architected a full-funnel growth strategy — content, SEO, referral loops, and targeted paid acquisition — that delivered compound growth from day one.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    color: '#0f172a',
    textLight: true,
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-white py-[6vw]">
      {/* Section Header */}
      <div className="sm:flex gap-[5vw] w-full px-[4vw] sm:px-[4vw] mb-[6vw]">
        <div className="left">
          <div className="sm:pl-[14vw]">
            <div className="font-[silkSerif] text-[4.6vw] sm:text-[2.6vw] sm:leading-[4vw]">
              <h2>08</h2>
            </div>
          </div>
        </div>
        <div className="right w-full">
          <div className="aboutHeading overflow-hidden pb-[3vw] sm:pb-0">
            <h1 className="text-[8vw] leading-[10vw] tracking-tighter sm:text-[6vw] font-[PlinaReg] sm:leading-[6vw] sm:tracking-normal uppercase">
              Case Studies
            </h1>
          </div>
          <UnderLine marginBottom="0vw" marginTop="1vw" />
        </div>
      </div>

      {/* Case Study Cards — Alternating Layout */}
      <div className="px-[4vw] sm:px-[6vw] flex flex-col gap-[3vw]">
        {cases.map((study, i) => (
          <article
            key={i}
            className={`group relative w-full rounded-2xl overflow-hidden sm:flex ${
              i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
            style={{ backgroundColor: study.color }}
          >
            {/* Image Half — explicit aspect-ratio so Locomotive Scroll knows height before img loads */}
            <div className="relative w-full sm:w-1/2 overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Half */}
            <div
              className={`relative w-full sm:w-1/2 flex flex-col justify-center px-[8vw] py-[10vw] sm:px-[5vw] sm:py-[4vw] ${
                study.textLight ? 'text-white' : 'text-zinc-900'
              }`}
            >
              {/* Tag */}
              <span
                className="inline-block mb-[4vw] sm:mb-[1.5vw] px-3 py-1 rounded-full text-[3vw] sm:text-[.75vw] uppercase tracking-widest font-bold border"
                style={{
                  borderColor: study.textLight ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)',
                  color: study.textLight ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)',
                }}
              >
                {study.tag}
              </span>

              {/* Title */}
              <h2
                className="font-[PlinaReg] text-[6vw] leading-[7vw] sm:text-[2.4vw] sm:leading-[3vw] mb-[4vw] sm:mb-[2vw] uppercase tracking-tight"
              >
                {study.title}
              </h2>

              {/* Excerpt */}
              <p
                className="font-sans text-[3.5vw] sm:text-[.9vw] leading-[5.5vw] sm:leading-[1.6vw] sm:max-w-[90%]"
                style={{ opacity: study.textLight ? 0.75 : 0.65 }}
              >
                {study.excerpt}
              </p>

              {/* CTA */}
              <div className="mt-[6vw] sm:mt-[2.5vw] flex items-center gap-[2vw] sm:gap-[.8vw]">
                <span
                  className="font-[PlinaReg] uppercase tracking-widest text-[3.5vw] sm:text-[.85vw] font-bold transition-all group-hover:gap-[1.2vw]"
                  style={{ opacity: study.textLight ? 0.9 : 0.8 }}
                >
                  Read More
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke={study.textLight ? '#fff' : '#111'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
