import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import ScrollAnimator from '@/components/ScrollAnimator'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
})

const siteUrl = 'https://www.vinoteka-pohodicka.cz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vinotéka Pohodička – Vína s duší v Louňovicích',
    template: '%s | Vinotéka Pohodička',
  },
  description:
    'Pečlivě vybraná moravská a zahraniční vína, sýry a delikatesy v Louňovicích. Osobní přístup, přímé vztahy s vinaři, vinotéka i vinný bar v jednom.',
  keywords: [
    'vinotéka', 'vína', 'Louňovice', 'moravská vína', 'zahraniční vína',
    'sýry', 'delikatesy', 'vinný bar', 'Mukařov', 'víno', 'vinotéka Pohodička',
  ],
  authors: [{ name: 'Vinotéka Pohodička s.r.o.' }],
  creator: 'Vinotéka Pohodička s.r.o.',
  publisher: 'Vinotéka Pohodička s.r.o.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vinotéka Pohodička – Vína s duší v Louňovicích',
    description:
      'Pečlivě vybraná moravská a zahraniční vína, sýry a delikatesy. Osobní přístup, přímé vztahy s vinaři.',
    url: siteUrl,
    siteName: 'Vinotéka Pohodička',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vinotéka Pohodička v Louňovicích – výběr moravských a zahraničních vín',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinotéka Pohodička – Vína s duší v Louňovicích',
    description:
      'Pečlivě vybraná moravská a zahraniční vína, sýry a delikatesy v Louňovicích.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#organization`,
  name: 'Vinotéka Pohodička',
  alternateName: 'Vinotéka Pohodička s.r.o.',
  url: siteUrl,
  telephone: '+420776669961',
  email: 'zuzina.vavrova@seznam.cz',
  description:
    'Pečlivě vybraná moravská a zahraniční vína, sýry a delikatesy. Vinotéka i vinný bar v jednom, osobní přístup a přímé vztahy s vinaři.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kutnohorská 98',
    addressLocality: 'Louňovice',
    postalCode: '251 62',
    addressCountry: 'CZ',
    addressRegion: 'Středočeský kraj',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.9347,
    longitude: 14.7542,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '13:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://www.facebook.com/vinotekapohodicka/'],
  image: `${siteUrl}/og-image.jpg`,
  priceRange: '$$',
  currenciesAccepted: 'CZK',
  paymentAccepted: 'Hotovost, platební karta',
  hasMap: `https://maps.google.com/?q=Kutnohorská+98,+Louňovice,+251+62`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#6B2437" />
      </head>
      <body>
        <ScrollAnimator />
        {children}
      </body>
    </html>
  )
}
