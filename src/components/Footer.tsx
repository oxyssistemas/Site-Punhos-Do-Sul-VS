import React from 'react';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { SITE_INFO, MODALITIES_NAV, INDIVIDUAL_NAV_ITEMS } from '../data/siteData';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNav = (path: string) => {
    if (path.startsWith('#') || path.startsWith('/#')) {
      const targetId = path.replace(/^\/?#/, '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-red-950 text-gray-400">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SITE_INFO.logoPlaceholder}
                alt="Logo Academia Punhos Do Sul"
                className="w-11 h-11 object-contain rounded-full border border-amber-500/60 p-0.5 bg-black/60 shadow-lg"
              />
              <div>
                <span className="font-chinese text-lg font-bold text-amber-400 tracking-wider uppercase block leading-tight">
                  Punhos Do Sul
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase font-chinese">
                  Kung Fu Shaolin
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              {SITE_INFO.subtitle}. Tradição, disciplina e respeito através do verdadeiro Kung Fu Shaolin.
            </p>
            <div className="pt-2 text-xs text-gray-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{SITE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{SITE_INFO.displayPhone}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Modalidades */}
          <div>
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-amber-400 mb-4 border-b border-red-900/30 pb-2">
              Modalidades
            </h4>
            <ul className="space-y-2 text-xs">
              {MODALITIES_NAV.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    • {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Mestres & Tradições */}
          <div>
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-amber-400 mb-4 border-b border-red-900/30 pb-2">
              Destaques & Mestres
            </h4>
            <ul className="space-y-2 text-xs">
              {INDIVIDUAL_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="hover:text-amber-400 transition-colors text-left font-semibold text-gray-300"
                  >
                    • {item.name}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav('/filosofia')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  • Filosofia Marcial (Wude)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/#juramentos')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  • Juramentos e Virtudes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes Sociais & Contato */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-amber-400 mb-4 border-b border-red-900/30 pb-2">
              Redes Sociais
            </h4>
            <p className="text-xs text-gray-400">
              Siga nossos canais oficiais para acompanhar novidades, eventos e apresentações.
            </p>
            <div className="flex items-center gap-3">
              <a
                id="footer-whatsapp"
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-neutral-800 hover:border-emerald-500"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="footer-instagram"
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-neutral-800 hover:border-pink-500"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                id="footer-facebook"
                href={SITE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-neutral-800 hover:border-blue-500"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/></svg>
              </a>
              <a
                id="footer-tiktok"
                href={SITE_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-950 hover:text-cyan-400 text-gray-300 flex items-center justify-center transition-all border border-neutral-800 hover:border-cyan-400"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47c1.78-1.78 2.18-4.48 2.18-6.46V7.81a8.3 8.3 0 0 0 3.59.88V6.69z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 py-6 px-4 sm:px-6 lg:px-8 bg-black/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-300">
          <p id="footer-copyright">{SITE_INFO.copyright}</p>
          <a
            id="footer-developer-credit"
            href={SITE_INFO.agencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors underline underline-offset-2"
          >
            {SITE_INFO.developerCredit}
          </a>
        </div>
      </div>
    </footer>
  );
};
