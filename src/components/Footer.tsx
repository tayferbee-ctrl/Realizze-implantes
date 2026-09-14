import React from 'react';
import { EXPERT_INFO } from '../data/expertData';
import { Instagram, MessageCircle, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-[#f4efe6] border-t border-amber-900/10 text-stone-600 py-10 pb-28 sm:pb-12 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-amber-900/10 text-center md:text-left">
          {/* Brand & Expert Identity */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-stone-950 font-serif">
              {EXPERT_INFO.name}
            </h3>
            <p className="text-amber-800 text-xs mt-0.5 font-semibold">
              {EXPERT_INFO.profession} • {EXPERT_INFO.tagline}
            </p>
            <p className="text-stone-600 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{EXPERT_INFO.address}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-instagram-link"
              href={EXPERT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Realizze Implantes"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-amber-50 text-stone-800 hover:text-pink-600 border border-amber-200 shadow-2xs transition font-medium"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span className="text-xs font-semibold">{EXPERT_INFO.instagramHandle}</span>
            </a>

            <a
              id="footer-whatsapp-link"
              href={EXPERT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Realizze Implantes"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-amber-50 text-stone-800 hover:text-amber-800 border border-amber-200 shadow-2xs transition font-medium"
            >
              <MessageCircle className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal / Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 text-center sm:text-left">
          <p>
            © {currentYear} Realizze Implantes • Dra. Nathália &amp; Dr. Vonil. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1 text-stone-500">
            <span>Feito com</span>
            <Heart className="w-3 h-3 text-amber-600 fill-current" />
            <span>para transformar o seu sorriso em Poços de Caldas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
