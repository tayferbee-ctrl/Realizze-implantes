import React from 'react';
import { MessageCircle, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { EXPERT_INFO } from '../data/expertData';

export const FinalCta: React.FC = () => {
  return (
    <section id="cta-final" className="py-14 sm:py-20 relative overflow-hidden bg-white border-t border-amber-900/10">
      {/* Background glow accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 via-amber-200/20 to-transparent pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-7 sm:p-12 bg-gradient-to-b from-amber-50/80 via-white to-amber-100/40 border border-amber-300 shadow-2xl shadow-amber-900/10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-5 shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Sua Decisão Definitiva para Voltar a Sorrir</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-stone-950 font-serif tracking-tight max-w-2xl mx-auto leading-tight">
            Não adie mais o prazer de mastigar com segurança e sorrir sem constrangimento.
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-700 max-w-xl mx-auto leading-relaxed">
            Nós, <strong className="text-stone-950">Dra. Nathália &amp; Dr. Vonil</strong>, estamos esperando por você na <strong className="text-stone-950">Realizze Implantes</strong> em Poços de Caldas para desenhar o plano ideal para a sua boca.
          </p>

          {/* Value Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-stone-800">
            <span className="flex items-center gap-1.5 bg-white border border-amber-200 px-3 py-1.5 rounded-xl shadow-2xs font-medium">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              1ª Consulta 100% Gratuita
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-amber-200 px-3 py-1.5 rounded-xl shadow-2xs font-medium">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              Sem Compromisso
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-amber-200 px-3 py-1.5 rounded-xl shadow-2xs font-medium">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              Resposta Rápida no WhatsApp
            </span>
          </div>

          {/* Main WhatsApp CTA */}
          <div className="mt-8 flex flex-col items-center">
            <a
              id="final-whatsapp-cta"
              href={EXPERT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-base sm:text-xl px-8 py-5 rounded-2xl shadow-2xl shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0 text-stone-950" />
              <span className="font-extrabold">Quero Agendar Minha Primeira Consulta Gratuita</span>
            </a>

            <p className="mt-3 text-xs text-stone-600 font-medium">
              Clique no botão acima para abrir a conversa direta com a nossa equipe no WhatsApp.
            </p>
          </div>

          {/* Location micro card */}
          <div className="mt-8 pt-6 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-stone-600">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              {EXPERT_INFO.address}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
