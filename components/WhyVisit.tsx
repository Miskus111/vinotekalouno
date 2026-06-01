import type { ReactNode } from 'react'

interface Reason {
  icon: ReactNode
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    icon: <HeartIcon />,
    title: 'Osobní přístup',
    description:
      'Rádi si s vámi popovídáme a pomůžeme najít víno, které vám bude sedět. Žádné anonymní regály – jsme tady pro vás.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Přímé vztahy s vinaři',
    description:
      'Vína kupujeme přímo u vinařů, které osobně navštěvujeme. Každá lahev má příběh a my ho rádi převyprávíme.',
  },
  {
    icon: <CheckIcon />,
    title: 'Pečlivý výběr',
    description:
      'Každé víno v sortimentu jsme ochutnali. Do regálu jde jen to, co nás přesvědčí – a za co ručíme.',
  },
  {
    icon: <ClockIcon />,
    title: 'Bar i obchod v jednom',
    description:
      'Přijďte ochutnat ještě dřív, než si koupíte. V naší vinotéce si pohodlně sednete a vychutnáte.',
  },
]

export default function WhyVisit() {
  return (
    <section
      id="proc-my"
      aria-labelledby="why-heading"
      className="section-padding bg-wine-800 text-white"
    >
      <div className="container-inner">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label text-wine-400 mb-3" data-animate>
            Proč Pohodička
          </p>
          <h2 id="why-heading" className="section-title-light max-w-2xl mx-auto" data-animate data-delay="100">
            Co nás odlišuje
          </h2>
          <p className="text-wine-300 mt-4 max-w-lg mx-auto leading-relaxed" data-animate data-delay="200">
            Nejsme supermarket s vínem. Jsme malá rodinná vinotéka,
            kde každý zákazník odchází s úsměvem i s dobrou lahví.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="text-center group"
              data-animate
              data-delay={`${(i + 1) * 100}`}
            >
              <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-wine-700/60 text-wine-300 mb-5 transition-all duration-300 group-hover:bg-wine-600 group-hover:scale-110 group-hover:text-white">
                {reason.icon}
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{reason.title}</h3>
              <p className="text-wine-300 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div
          className="mt-16 pt-12 border-t border-wine-700 text-center"
          data-animate
          data-delay="200"
        >
          <blockquote className="font-serif text-2xl sm:text-3xl text-wine-200 italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;Dobrá lahev vína si zaslouží víc než jen rychlý nákup.&rdquo;
          </blockquote>
        </div>

      </div>
    </section>
  )
}

function HeartIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function HandshakeIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m-3 0h10.5M5.25 9v10.5A2.25 2.25 0 007.5 21.75h9a2.25 2.25 0 002.25-2.25V9M9 13.5h6M9 16.5h3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
