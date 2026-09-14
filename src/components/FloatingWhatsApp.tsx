import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { EXPERT_INFO } from '../data/expertData';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 250px down
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-3 sm:bottom-5 left-3 right-3 sm:left-auto sm:right-5 z-40 flex items-center justify-end max-w-sm ml-auto animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="w-full bg-white/95 backdrop-blur-md border border-amber-300 p-2 sm:p-2.5 rounded-2xl shadow-2xl shadow-stone-900/15 flex items-center justify-between gap-2.5">
        <a
          id="floating-whatsapp-action"
          href={EXPERT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold px-3.5 py-2.5 rounded-xl transition duration-200 active:scale-95 shadow-md shadow-amber-500/20"
        >
          <div className="relative shrink-0">
            <MessageCircle className="w-5 h-5 fill-current text-stone-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-800 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-800 rounded-full" />
          </div>
          <div className="text-left leading-tight">
            <span className="block text-xs font-black uppercase tracking-wider text-stone-950">
              1ª Consulta Gratuita
            </span>
            <span className="block text-[11px] font-semibold text-stone-900">
              Falar no WhatsApp agora
            </span>
          </div>
        </a>

        {/* Small dismiss button */}
        <button
          id="floating-whatsapp-dismiss"
          onClick={() => setIsDismissed(true)}
          aria-label="Ocultar botão flutuante"
          className="p-2 text-stone-400 hover:text-stone-700 hover:bg-amber-50 rounded-lg transition shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
