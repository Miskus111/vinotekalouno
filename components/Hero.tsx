import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Úvodní sekce"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        {/* Layered overlay: warm dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-wine-900/75 via-wine-800/65 to-wine-900/85" />
        {/* Subtle warm vignette */}
        <div className="absolute inset-0 bg-radial-gradient" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26,12,12,0.4) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">

        {/* Eyebrow */}
        <p className="section-label text-wine-400 mb-5 animate-fade-in hero-line-1">
          Vinotéka &amp; vinný bar · Louňovice
        </p>

        {/* Main headline */}
        <h1 className="font-serif leading-[1.1] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-white animate-fade-in hero-line-2">
            Víno
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-wine-300 italic animate-fade-in hero-line-3">
            s duší.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in hero-line-4">
          Pečlivě vybraná moravská a zahraniční vína, sýry a delikatesy.
          S osobním přístupem a přímými vztahy s vinaři.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in hero-line-4">
          <a href="#sortiment" className="btn-primary">
            Náš sortiment
          </a>
          <a href="#kontakt" className="btn-ghost-light">
            Jak nás najdete
          </a>
        </div>
      </div>

      {/* Scroll cue — decorative only, excluded from AT */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center" aria-hidden="true">
        <span className="text-white/50 animate-bounce-slow cursor-default">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </div>
    </section>
  )
}
