/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResultsGallery } from './components/ResultsGallery';
import { WhyTrustUs } from './components/WhyTrustUs';
import { IntermediateCta } from './components/IntermediateCta';
import { HowItWorks } from './components/HowItWorks';
import { ProtocolsAndBackstage } from './components/ProtocolsAndBackstage';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GalleryItem } from './data/expertData';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [lightboxList, setLightboxList] = useState<GalleryItem[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleOpenLightbox = (item: GalleryItem, allItems: GalleryItem[]) => {
    setLightboxItem(item);
    setLightboxList(allItems);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxItem(null);
  };

  return (
    <div id="landing-page-root" className="min-h-screen bg-[#fbf9f5] text-stone-900 flex flex-col font-sans selection:bg-amber-300 selection:text-stone-950">
      {/* Top Banner Tag */}
      <div id="top-announcement" className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 px-4 text-center text-xs text-amber-950 font-medium">
        <span className="font-bold text-amber-700">✨ Primeira Consulta Gratuita:</span> Avaliação individual com Dra. Nathália &amp; Dr. Vonil em Poços de Caldas.
      </div>

      <main className="flex-1">
        {/* 1. HERO (primeira dobra) */}
        <HeroSection />

        {/* 2. BLOCO “QUEM SOU EU” (autoridade pessoal) */}
        <AboutSection />

        {/* 3. BLOCO “RESULTADOS REAIS” (prova visual forte) */}
        <ResultsGallery onOpenLightbox={handleOpenLightbox} />

        {/* 4. BLOCO “POR QUE CONFIAR EM MIM / EM NÓS?” */}
        <WhyTrustUs />

        {/* 5. CTA INTERMEDIÁRIO (repetir CTA) */}
        <IntermediateCta />

        {/* 6. BLOCO “COMO FUNCIONA A PRIMEIRA CONSULTA” */}
        <HowItWorks />

        {/* 7. BLOCO “MAIS PROVAS” (expert + bastidores + protocolos) */}
        <ProtocolsAndBackstage onOpenLightbox={handleOpenLightbox} />

        {/* 8. CTA FINAL (decisão) */}
        <FinalCta />
      </main>

      {/* 9. RODAPÉ SIMPLES */}
      <Footer />

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={isLightboxOpen}
        item={lightboxItem}
        items={lightboxList}
        onClose={handleCloseLightbox}
        onSelect={(item) => setLightboxItem(item)}
      />

      {/* FLOATING WHATSAPP BUTTON (MOBILE FIRST) */}
      <FloatingWhatsApp />
    </div>
  );
}
