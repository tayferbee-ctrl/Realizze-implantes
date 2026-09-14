import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryItem, EXPERT_INFO } from '../data/expertData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, item, items]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  };

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 transition-all duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        aria-label="Fechar visualização"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 transition"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Nav previous button */}
      {items.length > 1 && (
        <button
          id="lightbox-prev-btn"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Foto anterior"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Nav next button */}
      {items.length > 1 && (
        <button
          id="lightbox-next-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Próxima foto"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal content container */}
      <div
        id="lightbox-content-box"
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl flex items-center justify-center max-h-[72vh]">
          <img
            src={item.url}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Caption & CTA */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left bg-stone-900/80 border border-stone-800/80 p-3 sm:p-4 rounded-xl">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              {item.category === 'resultado' ? 'Resultado Real' : item.category === 'protocolo' ? 'Protocolo Personalizado' : 'Expert & Bastidores'}
            </span>
            <p className="text-stone-300 text-sm mt-0.5">{item.caption || item.title}</p>
            <p className="text-[11px] text-stone-400 mt-1 italic">
              Resultados podem variar de pessoa para pessoa.
            </p>
          </div>

          <a
            id="lightbox-whatsapp-cta"
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 text-sm font-bold px-5 py-2.5 rounded-full transition shadow-lg shadow-amber-950/50 whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current text-stone-950" />
            <span>Quero Avaliar Meu Caso</span>
          </a>
        </div>
      </div>
    </div>
  );
};
