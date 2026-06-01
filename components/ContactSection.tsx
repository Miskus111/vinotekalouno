import type { ReactNode } from 'react'
import { openingHours as hours } from '@/lib/data'
import { FacebookIcon as FacebookBadge } from '@/components/icons'

export default function ContactSection() {
  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="section-padding bg-white">
      <div className="container-inner">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3" data-animate>Kontakt</p>
          <h2 id="contact-heading" className="section-title" data-animate data-delay="100">
            Najděte nás v Louňovicích
          </h2>
          <p className="text-wine-500 mt-4 max-w-lg mx-auto leading-relaxed" data-animate data-delay="200">
            Jsme snadno dostupní z Říčan i Prahy. Těšíme se na vaši návštěvu.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-14">

          {/* Contact info + hours — 2 cols */}
          <div className="md:col-span-2 space-y-10">

            {/* Contact details */}
            <div data-animate>
              <h3 className="font-serif text-xl text-wine-900 mb-5">Kontaktní údaje</h3>
              <address className="not-italic space-y-4">
                <ContactItem icon={<LocationIcon />} label="Adresa">
                  <a
                    href="https://maps.google.com/?q=Kutnohorsk%C3%A1+98%2C+Lou%C5%88ovice%2C+25162"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-900 hover:text-wine-600 transition-colors"
                  >
                    Kutnohorská 98<br />
                    Louňovice, 251 62
                  </a>
                </ContactItem>

                <ContactItem icon={<PhoneIcon />} label="Telefon">
                  <a
                    href="tel:+420776669961"
                    className="text-wine-900 hover:text-wine-600 transition-colors"
                  >
                    +420 776 669 961
                  </a>
                </ContactItem>

                <ContactItem icon={<MailIcon />} label="E-mail">
                  <a
                    href="mailto:zuzina.vavrova@seznam.cz"
                    className="text-wine-900 hover:text-wine-600 transition-colors break-all"
                  >
                    zuzina.vavrova@seznam.cz
                  </a>
                </ContactItem>

                <ContactItem icon={<FacebookBadge />} label="Facebook">
                  <a
                    href="https://www.facebook.com/vinotekapohodicka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-900 hover:text-wine-600 transition-colors"
                  >
                    facebook.com/vinotekapohodicka
                  </a>
                </ContactItem>
              </address>
            </div>

            {/* Opening hours */}
            <div data-animate data-delay="100">
              <h3 className="font-serif text-xl text-wine-900 mb-5">Otevírací doba</h3>
              <dl>
                {hours.map(({ day, time, open }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-3 border-b border-wine-100 last:border-0"
                  >
                    <dt className="text-wine-700 text-sm">{day}</dt>
                    <dd className={`text-sm font-medium ${open ? 'text-wine-900' : 'text-wine-400'}`}>
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-wine-400">
                * Otevírací doba se může o svátcích lišit. Sledujte nás na Facebooku.
              </p>
            </div>

          </div>

          {/* Map — 3 cols */}
          <div className="md:col-span-3" data-animate data-delay="200">
            <div className="relative w-full h-[440px] rounded-sm overflow-hidden shadow-md border border-wine-200">
              <iframe
                src="https://maps.google.com/maps?q=Kutnohorsk%C3%A1+98%2C+Lou%C5%88ovice%2C+25162&output=embed&z=15"
                title="Mapa – Vinotéka Pohodička, Kutnohorská 98, Louňovice"
                aria-label="Interaktivní mapa s polohou vinotéky Pohodička v Louňovicích"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-wine-500 text-center">
              Kutnohorská 98, Louňovice, 251 62 &nbsp;·&nbsp;{' '}
              <a
                href="https://maps.google.com/?q=Kutnohorsk%C3%A1+98%2C+Lou%C5%88ovice%2C+25162"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-wine-600 transition-colors"
              >
                Otevřít v Google Mapách
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-wine-400 shrink-0" aria-hidden="true">{icon}</span>
      <div>
        <p className="text-xs text-wine-400 mb-0.5 font-medium uppercase tracking-wide">{label}</p>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  )
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

