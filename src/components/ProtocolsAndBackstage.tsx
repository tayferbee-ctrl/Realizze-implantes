import React, { useState } from 'react';
import { PROTOCOLS_GALLERY, BACKSTAGE_PHOTOS, GalleryItem } from '../data/expertData';
import { ZoomIn, Eye, Shield, Users } from 'lucide-react';

interface ProtocolsAndBackstageProps {
  onOpenLightbox: (item: GalleryItem, allItems: GalleryItem[]) => void;
}

export const ProtocolsAndBackstage: React.FC<ProtocolsAndBackstageProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'protocolos' | 'bastidores'>('protocolos');
  const [displayCount, setDisplayCount] = useState<number>(6);

  const currentItems = activeTab === 'protocolos' ? PROTOCOLS_GALLERY : BACKSTAGE_PHOTOS;
  const visibleItems = currentItems.slice(0, displayCount);
  const hasMore = displayCount < currentItems.length;

  return (
    <section id="mais-provas" className="py-12 sm:py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparência &amp; Rotina Clínica</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 font-serif tracking-tight">
            Mais Provas: Nossos Protocolos e Bastidores
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-700">
            Veja a precisão de cada etapa cirúrgica, os materiais utilizados e nosso acompanhamento individualizado com cada paciente em Poços de Caldas.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 bg-amber-100/60 border border-amber-200/80 rounded-2xl shadow-2xs">
            <button
              id="tab-protocolos-btn"
              onClick={() => {
                setActiveTab('protocolos');
                setDisplayCount(6);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'protocolos'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 font-extrabold shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Protocolos &amp; Acompanhamento ({PROTOCOLS_GALLERY.length})</span>
            </button>
            <button
              id="tab-bastidores-btn"
              onClick={() => {
                setActiveTab('bastidores');
                setDisplayCount(6);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'bastidores'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 font-extrabold shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Dra. Nathália &amp; Dr. Vonil ({BACKSTAGE_PHOTOS.length})</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, currentItems)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-amber-100 hover:border-amber-400 shadow-md shadow-amber-900/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 sm:p-3">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-[11px] sm:text-xs font-semibold line-clamp-1">
                      {item.title}
                    </span>
                    <span className="p-1 rounded-full bg-amber-500 text-stone-950 shrink-0 ml-1">
                      <ZoomIn className="w-3 h-3" />
                    </span>
                  </div>
                  {item.caption && (
                    <p className="text-[10px] text-stone-300 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Caption Pill */}
              <div className="p-2 sm:p-2.5 bg-white border-t border-amber-100 flex items-center justify-between text-[11px]">
                <span className="text-stone-800 font-semibold truncate">
                  {item.caption || item.title}
                </span>
                <span className="text-amber-800 text-[10px] font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Ampliar
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-6 text-center">
            <button
              id="ver-mais-protocolos-btn"
              onClick={() => setDisplayCount(currentItems.length)}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-stone-800 hover:text-amber-900 border border-amber-300 text-xs sm:text-sm font-semibold transition active:scale-95 shadow-xs"
            >
              Ver todas as fotos desta categoria
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
