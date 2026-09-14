import React, { useState } from 'react';
import { RESULTS_GALLERY, GalleryItem } from '../data/expertData';
import { ZoomIn, Sparkles, MessageCircle } from 'lucide-react';

interface ResultsGalleryProps {
  onOpenLightbox: (item: GalleryItem, allItems: GalleryItem[]) => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({ onOpenLightbox }) => {
  const [displayCount, setDisplayCount] = useState<number>(6);
  const hasMore = displayCount < RESULTS_GALLERY.length;

  return (
    <section id="resultados" className="py-12 sm:py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Casos Reais &amp; Transformações</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 font-serif tracking-tight">
            Sorrisos que transformaram vidas e devolveram a liberdade de mastigar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-700">
            Veja algumas das reabilitações conduzidas por nós com técnicas de implantes dentários, prótese fixa tipo protocolo e carga imediata.
          </p>
          <p className="text-xs text-stone-500 mt-1">
            Toque em qualquer foto para ampliar em detalhes.
          </p>
        </div>

        {/* Results Grid - Responsive 2-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {RESULTS_GALLERY.slice(0, displayCount).map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, RESULTS_GALLERY)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-amber-200/70 hover:border-amber-400 shadow-md shadow-amber-900/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />

                {/* Hover / Tap overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 sm:p-3">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-[11px] sm:text-xs font-semibold line-clamp-1">
                      {item.title}
                    </span>
                    <span className="p-1 rounded-full bg-amber-500 text-stone-950 shrink-0 ml-1">
                      <ZoomIn className="w-3 h-3" />
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Mobile bottom tag */}
              <div className="p-2 sm:p-2.5 bg-white border-t border-amber-100 flex items-center justify-between text-[11px]">
                <span className="text-stone-800 font-semibold truncate">
                  Caso #{index + 1}
                </span>
                <span className="text-amber-800 text-[10px] font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Ver foto
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-6 text-center">
            <button
              id="ver-mais-resultados-btn"
              onClick={() => setDisplayCount(RESULTS_GALLERY.length)}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-stone-800 hover:text-amber-900 border border-amber-300 text-xs sm:text-sm font-semibold transition active:scale-95 shadow-xs"
            >
              Carregar todas as {RESULTS_GALLERY.length} fotos de resultados
            </button>
          </div>
        )}

        {/* Discreto Aviso Obrigatório */}
        <div className="mt-6 text-center">
          <p className="text-xs text-stone-500 italic">
            * Resultados podem variar de pessoa para pessoa. Cada arcada dentária possui particularidades anatômicas e biológicas avaliadas individualmente em consulta presencial.
          </p>
        </div>
      </div>
    </section>
  );
};
