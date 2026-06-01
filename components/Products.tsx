import type { ReactNode } from 'react'

interface Category {
  icon: ReactNode
  title: string
  description: string
  examples: string[]
  accentClass: string
}

const categories: Category[] = [
  {
    icon: <GrapeIcon />,
    title: 'Moravská vína',
    description:
      'Přímé vazby na moravské vinaře, pečlivý výběr ročníků. Od klasických odrůd po přírodní a biodynamická vína.',
    examples: ['Welschriesling', 'Müller Thurgau', 'Frankovka', 'Veltlínské zelené'],
    accentClass: 'bg-wine-600 text-white',
  },
  {
    icon: <GlobeIcon />,
    title: 'Zahraniční vína',
    description:
      'Italská, francouzská, španělská a slovenská vína od pečlivě vybraných rodinných vinařství.',
    examples: ['Chianti', 'Rioja', 'Bordeaux', 'Slovenská vína'],
    accentClass: 'bg-wine-700 text-white',
  },
  {
    icon: <CheeseIcon />,
    title: 'Sýry & Uzeniny',
    description:
      'Čerstvé sýry a kvalitní uzeniny pro dokonalý zážitek párování s vínem. Vždy čerstvé, vždy pečlivě vybrané.',
    examples: ['Hermelín', 'Parmazán', 'Prosciutto', 'Salami'],
    accentClass: 'bg-wine-400 text-white',
  },
  {
    icon: <StarIcon />,
    title: 'Delikatesy',
    description:
      'Olivy, paštiky, med, krekry, chutney a vše, co víno potřebuje k plnému zážitku.',
    examples: ['Olivový olej', 'Čokoláda', 'Med', 'Krekry'],
    accentClass: 'bg-wine-800 text-white',
  },
]

export default function Products() {
  return (
    <section id="sortiment" aria-labelledby="products-heading" className="section-padding bg-wine-100">
      <div className="container-inner">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3" data-animate>Sortiment</p>
          <h2 id="products-heading" className="section-title max-w-2xl mx-auto" data-animate data-delay="100">
            Co u nás najdete
          </h2>
          <p className="text-wine-500 mt-4 max-w-lg mx-auto leading-relaxed" data-animate data-delay="200">
            Pečlivě sestavený výběr, který si osobně ochutnáváme a vybíráme.
            Nabízíme jen to, za co ručíme.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <article
              key={cat.title}
              className="group bg-white rounded-sm p-6 lg:p-7 card-hover cursor-default"
              data-animate
              data-delay={`${(i + 1) * 100}`}
            >
              <div className={`inline-flex w-12 h-12 items-center justify-center rounded-sm mb-5 ${cat.accentClass}`}>
                {cat.icon}
              </div>

              <h3 className="font-serif text-xl text-wine-900 mb-2 group-hover:text-wine-600 transition-colors duration-200">
                {cat.title}
              </h3>

              <p className="text-sm text-wine-500 leading-relaxed mb-4">
                {cat.description}
              </p>

              <ul className="flex flex-wrap gap-1.5" aria-label={`Příklady – ${cat.title}`}>
                {cat.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-xs bg-wine-100 text-wine-600 px-2.5 py-1 rounded-sm font-medium"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-12 text-center" data-animate data-delay="300">
          <p className="text-wine-500 text-sm mb-4">
            Sortiment se pravidelně mění. Sledujte novinky na Facebooku.
          </p>
          <a
            href="https://www.facebook.com/vinotekapohodicka/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Sledovat novinky
          </a>
        </div>

      </div>
    </section>
  )
}

function GrapeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="8.5" cy="9"  r="1.5"/>
      <circle cx="12"  cy="7"  r="1.5"/>
      <circle cx="15.5" cy="9" r="1.5"/>
      <circle cx="10"  cy="12" r="1.5"/>
      <circle cx="14"  cy="12" r="1.5"/>
      <circle cx="12"  cy="15" r="1.5"/>
      <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="1.5" fill="none" d="M12 4.5 C12 4.5 14 3 16 4" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5"/>
      <path strokeLinecap="round" d="M12 2.5c-2.5 3-4 6-4 9.5s1.5 6.5 4 9.5m0-19c2.5 3 4 6 4 9.5s-1.5 6.5-4 9.5M2.5 12h19" />
    </svg>
  )
}

function CheeseIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12.5L12 4l10 8.5V20H2v-7.5z" />
      <circle cx="7"  cy="15" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="14" cy="14" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  )
}
