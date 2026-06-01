import Image from 'next/image'

export default function About() {
  return (
    <section id="o-nas" aria-labelledby="about-heading" className="section-padding bg-white">
      <div className="container-inner">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div>
            <p className="section-label mb-3" data-animate>
              Náš příběh
            </p>

            <h2
              id="about-heading"
              className="section-title mb-6"
              data-animate
              data-delay="100"
            >
              Nejsme jen vinotéka.{' '}
              <span className="text-wine-600 italic">Jsme vaše pohoda.</span>
            </h2>

            <div
              className="space-y-4 text-wine-500 text-[17px] leading-[1.75]"
              data-animate
              data-delay="200"
            >
              <p>
                V Pohodičce věříme, že dobrá lahev vína si zaslouží víc než jen rychlý nákup.
                Každé víno v našem sortimentu jsme osobně ochutnali a stojíme za jeho kvalitou.
              </p>
              <p>
                Spolupracujeme přímo s vinaři, které pravidelně navštěvujeme.
                Přinášíme vám tak vína s příběhem&nbsp;– víte přesně, odkud pochází a kdo je vyrobil.
              </p>
              <p>
                Přijďte si k nám sednout, ochutnat a popovídat. Rádi poradíme,
                ať hledáte víno ke slavnostní večeři nebo jen tak na pohodu doma.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8 pt-8 border-t border-wine-200" data-animate data-delay="300">
              <div>
                <p className="font-serif text-3xl text-wine-600 font-semibold">200<span className="text-wine-400">+</span></p>
                <p className="text-sm text-wine-500 mt-1">druhů vín</p>
              </div>
              <div className="w-px bg-wine-200" aria-hidden="true" />
              <div>
                <p className="font-serif text-3xl text-wine-600 font-semibold">10<span className="text-wine-400">+</span></p>
                <p className="text-sm text-wine-500 mt-1">let tradice</p>
              </div>
              <div className="w-px bg-wine-200" aria-hidden="true" />
              <div>
                <p className="font-serif text-3xl text-wine-600 font-semibold">∞</p>
                <p className="text-sm text-wine-500 mt-1">dobrých zážitků</p>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="relative" data-animate data-delay="200">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
                alt="Interiér vinotéky Pohodička – výběr vín na regálech"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              {/* Warm tint overlay */}
              <div className="absolute inset-0 bg-wine-600/5" aria-hidden="true" />
            </div>

            {/* Decorative accent squares */}
            <div className="absolute -bottom-5 -left-5 w-44 h-44 bg-wine-100 rounded-sm -z-10" aria-hidden="true" />
            <div className="absolute -top-5 -right-5 w-28 h-28 border-2 border-wine-200 rounded-sm -z-10" aria-hidden="true" />

            {/* Floating quote badge */}
            <div className="absolute -bottom-4 right-4 bg-white shadow-lg rounded-sm px-5 py-4 max-w-[200px]">
              <p className="font-serif text-sm text-wine-700 leading-snug italic">
                &ldquo;Přijďte ochutnat ještě dřív, než si koupíte.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
