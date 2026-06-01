import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&h=800&fit=crop&q=80',
    alt: 'Červené víno nalévané do sklenice',
  },
  {
    src: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=700&h=470&fit=crop&q=80',
    alt: 'Sýrový talíř s hroznovým vínem a krekry',
  },
  {
    src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=700&h=470&fit=crop&q=80',
    alt: 'Sklenice červeného vína na venkovním stole',
  },
  {
    src: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=700&h=470&fit=crop&q=80',
    alt: 'Přilévání bílého vína do sklenice',
  },
  {
    src: 'https://images.unsplash.com/photo-1504279577054-acfeccf8239e?w=700&h=470&fit=crop&q=80',
    alt: 'Vinohrady v letním slunci',
  },
  {
    src: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=700&h=470&fit=crop&q=80',
    alt: 'Výběr lahví červených a bílých vín na polici',
  },
]

const [imgTall, img1, img2, imgWide, img4, img5] = images

const hoverOverlay = 'absolute inset-0 bg-wine-900/0 group-hover:bg-wine-900/15 transition-colors duration-300'
const imgClass = 'object-cover transition-transform duration-500 group-hover:scale-105'

export default function Gallery() {
  return (
    <section id="galerie" aria-labelledby="gallery-heading" className="section-padding bg-white">
      <div className="container-inner">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3" data-animate>Atmosféra</p>
          <h2 id="gallery-heading" className="section-title" data-animate data-delay="100">
            Nahlédněte k nám
          </h2>
          <p className="text-wine-500 mt-4 max-w-lg mx-auto" data-animate data-delay="200">
            Příjemná atmosféra, pečlivě vybraný sortiment a vždy přívětivá obsluha.
          </p>
        </div>

        {/*
          Asymmetric 3-col grid:
          Row 1: [tall ×1] [img1] [img2]
          Row 2: [tall]   [wide ×2     ]
          Row 3: [img4]   [img5] [     ] ← last cell intentionally empty; img5 uses col-span-2 to fill
        */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          data-animate
          data-delay="200"
          role="list"
          aria-label="Galerie fotografií vinotéky"
        >
          {/* Tall portrait — spans 2 rows on md+ */}
          <div
            className="col-span-1 md:row-span-2 relative overflow-hidden rounded-sm group min-h-[220px] md:aspect-[3/4]"
            role="listitem"
          >
            <Image
              src={imgTall.src}
              alt={imgTall.alt}
              fill
              className={imgClass}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className={hoverOverlay} aria-hidden="true" />
          </div>

          {/* img1 */}
          <div
            className="col-span-1 relative overflow-hidden rounded-sm group aspect-[4/3]"
            role="listitem"
          >
            <Image src={img1.src} alt={img1.alt} fill className={imgClass} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
            <div className={hoverOverlay} aria-hidden="true" />
          </div>

          {/* img2 */}
          <div
            className="col-span-1 relative overflow-hidden rounded-sm group aspect-[4/3]"
            role="listitem"
          >
            <Image src={img2.src} alt={img2.alt} fill className={imgClass} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
            <div className={hoverOverlay} aria-hidden="true" />
          </div>

          {/* Wide landscape — spans 2 cols on md */}
          <div
            className="col-span-2 relative overflow-hidden rounded-sm group aspect-[16/7]"
            role="listitem"
          >
            <Image src={imgWide.src} alt={imgWide.alt} fill className={imgClass} sizes="(max-width: 768px) 100vw, 66vw" loading="lazy" />
            <div className={hoverOverlay} aria-hidden="true" />
          </div>

          {/* img4 */}
          <div
            className="col-span-1 relative overflow-hidden rounded-sm group aspect-[4/3]"
            role="listitem"
          >
            <Image src={img4.src} alt={img4.alt} fill className={imgClass} sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" />
            <div className={hoverOverlay} aria-hidden="true" />
          </div>

          {/* img5 — spans 2 cols to fill the last row on md */}
          <div
            className="col-span-1 md:col-span-2 relative overflow-hidden rounded-sm group aspect-[4/3] md:aspect-[8/3]"
            role="listitem"
          >
            <Image src={img5.src} alt={img5.alt} fill className={imgClass} sizes="(max-width: 768px) 50vw, 66vw" loading="lazy" />
            <div className={hoverOverlay} aria-hidden="true" />
          </div>
        </div>

        <p className="text-center text-wine-400 text-sm mt-6">
          Navštivte nás — atmosféru musíte zažít osobně.
        </p>

      </div>
    </section>
  )
}
