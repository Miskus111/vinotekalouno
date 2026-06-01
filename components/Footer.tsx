import { navLinks } from '@/lib/nav'
import { openingHours } from '@/lib/data'
import { WineGlassIcon, FacebookIcon } from '@/components/icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-wine-900 text-wine-400" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#top"
              className="flex items-center gap-2.5 mb-4 group w-fit"
              aria-label="Vinotéka Pohodička – zpět na začátek stránky"
            >
              <WineGlassIcon className="w-7 h-7 text-wine-400 group-hover:text-wine-300 transition-colors" />
              <span className="font-serif text-xl text-white font-semibold tracking-tight group-hover:text-wine-200 transition-colors">
                Pohodička
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs text-wine-400">
              Vinotéka & vinný bar v Louňovicích. Pečlivě vybraná moravská a zahraniční vína,
              sýry a delikatesy. S osobním přístupem.
            </p>
            <a
              href="https://www.facebook.com/vinotekapohodicka/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-wine-400 hover:text-wine-200 transition-colors group"
              aria-label="Facebook stránka Vinotéky Pohodička (otevře se v novém okně)"
            >
              <FacebookIcon className="w-5 h-5" />
              <span>facebook.com/vinotekapohodicka</span>
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Patička – navigace">
            <h3 className="text-white font-medium text-sm mb-4 tracking-wide uppercase">Navigace</h3>
            <ul className="space-y-2.5 text-sm" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-wine-400 hover:text-wine-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + hours */}
          <div>
            <h3 className="text-white font-medium text-sm mb-4 tracking-wide uppercase">Kontakt</h3>
            <address className="not-italic space-y-2 text-sm text-wine-400">
              <p>Kutnohorská 98<br />Louňovice, 251 62</p>
              <p>
                <a href="tel:+420776669961" className="hover:text-wine-200 transition-colors">
                  +420 776 669 961
                </a>
              </p>
              <p>
                <a href="mailto:zuzina.vavrova@seznam.cz" className="hover:text-wine-200 transition-colors">
                  zuzina.vavrova@seznam.cz
                </a>
              </p>
            </address>

            <div className="mt-5 pt-5 border-t border-wine-800">
              <h3 className="text-white text-xs font-medium tracking-wide uppercase mb-2.5">
                Otevírací doba
              </h3>
              <dl className="text-xs space-y-1.5 text-wine-400">
                {openingHours.map(({ day, time, open }) => (
                  <div key={day} className="flex justify-between">
                    <dt>{day === 'Pondělí – Pátek' ? 'Po – Pá' : day}</dt>
                    <dd className={open ? '' : 'text-wine-600'}>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-wine-800 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-wine-600">
          <p>
            © {year} Vinotéka Pohodička s.r.o.&ensp;·&ensp;Všechna práva vyhrazena.
          </p>
          <p>
            IČO: 04788915&ensp;·&ensp;Louňovice
          </p>
        </div>

      </div>
    </footer>
  )
}
