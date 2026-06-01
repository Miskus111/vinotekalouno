import { FacebookIcon } from '@/components/icons'

export default function FacebookSection() {
  return (
    <section
      id="facebook"
      aria-labelledby="facebook-heading"
      className="section-padding bg-wine-100"
    >
      <div className="container-inner">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <p className="section-label mb-3" data-animate>Sledujte nás</p>
            <h2
              id="facebook-heading"
              className="section-title mb-5"
              data-animate
              data-delay="100"
            >
              Novinky na{' '}
              <span className="text-wine-600">Facebooku</span>
            </h2>
            <p className="text-wine-500 leading-relaxed mb-8" data-animate data-delay="200">
              Nové přírůstky do sortimentu, pozvánky na degustace, sezónní tipy na výběr
              a všechno, co se v Pohodičce děje – to vše najdete na naší Facebook stránce.
              Přidejte se k nám!
            </p>
            <div className="flex flex-wrap gap-3" data-animate data-delay="300">
              <a
                href="https://www.facebook.com/vinotekapohodicka/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2.5"
              >
                <FacebookIcon className="w-4 h-4 shrink-0" />
                Sledovat na Facebooku
              </a>
            </div>
          </div>

          {/* Facebook card */}
          <div data-animate data-delay="200">
            <div className="bg-white rounded-sm shadow-sm border border-wine-200 overflow-hidden">

              {/* Card header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-wine-100">
                <div
                  className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <FacebookIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-wine-900 text-sm leading-tight">Vinotéka Pohodička</p>
                  <p className="text-wine-500 text-xs">Vinotéka & vinný bar · Louňovice</p>
                </div>
                <a
                  href="https://www.facebook.com/vinotekapohodicka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs bg-[#1877F2] hover:bg-[#1565D8] text-white font-medium px-4 py-1.5 rounded-sm transition-colors"
                  aria-label="Sledovat Vinotéku Pohodička na Facebooku"
                >
                  Sledovat
                </a>
              </div>

              {/* Sample post preview */}
              <div className="px-5 py-5">
                <p className="text-wine-700 text-sm leading-relaxed mb-4">
                  🍷 <strong>Nové přírůstky!</strong> Právě dorazila čerstvá várka moravských
                  přírodních vín přímo od vinařů, které jsme navštívili minulý týden.
                  Přijďte ochutnat ještě dnes – zásoby jsou omezené!
                </p>
                <div className="flex items-center gap-4 text-xs text-wine-400 border-t border-wine-100 pt-3">
                  <span className="flex items-center gap-1">
                    <ThumbIcon className="w-3.5 h-3.5" />
                    Líbí se mi
                  </span>
                  <span className="flex items-center gap-1">
                    <CommentIcon className="w-3.5 h-3.5" />
                    Komentovat
                  </span>
                  <span className="flex items-center gap-1">
                    <ShareIcon className="w-3.5 h-3.5" />
                    Sdílet
                  </span>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="bg-wine-50 px-5 py-3 border-t border-wine-100 text-center">
                <a
                  href="https://www.facebook.com/vinotekapohodicka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine-600 text-xs font-medium hover:underline"
                >
                  Zobrazit všechny příspěvky →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


function ThumbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
    </svg>
  )
}

function CommentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  )
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  )
}
