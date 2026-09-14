import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { EXPERT_INFO, HERO_IMAGE } from '../data/expertData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-amber-200/40 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Mini-Header with Location & Trust Tag */}
        <div className="flex items-center justify-between gap-2 border-b border-amber-900/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-sm shadow-amber-500" />
            <span className="text-xs font-semibold tracking-wide text-stone-700 uppercase">
              Atendimento Exclusivo em Poços de Caldas
            </span>
          </div>
          <a
            href={EXPERT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600 hover:text-amber-700 transition font-medium"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Jardim Quisisana</span>
          </a>
        </div>

        {/* Main Hero Container */}
        <div className="flex flex-col items-center text-center">
          {/* Expert Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Dra. Nathália &amp; Dr. Vonil • Realizze Implantes</span>
          </div>

          {/* Headline in 1st person */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-950 leading-[1.18] max-w-3xl font-serif">
            Bem-vindo(a) à <span className="text-amber-700">Realizze Implantes</span>. Somos especialistas em devolver seu sorriso e sua autoestima.
          </h1>

          {/* Subheadline oriented to benefit and security */}
          <p className="mt-4 text-base sm:text-lg text-stone-700 max-w-2xl leading-relaxed font-sans">
            Recupere dentes fixos, a segurança de mastigar qualquer alimento e a alegria de sorrir em fotos. Técnicas modernas de <strong className="text-stone-900 font-semibold">Carga Imediata</strong>, <strong className="text-stone-900 font-semibold">All-on-four</strong> e <strong className="text-stone-900 font-semibold">Zigomático</strong> sem dor e sem enxertos desnecessários.
          </p>

          {/* Specialties Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-stone-700">
            {EXPERT_INFO.specialties.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 rounded-md bg-white border border-amber-200/80 text-stone-800 font-medium shadow-2xs"
              >
                ✓ {spec}
              </span>
            ))}
          </div>

          {/* Large Expert Photo (Hero) */}
          <div className="mt-7 w-full max-w-md sm:max-w-lg relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-amber-400/30 via-transparent to-amber-200/20 blur-md group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-3xl overflow-hidden bg-white border border-amber-200/70 shadow-2xl shadow-amber-900/10">
              <img
                src={HERO_IMAGE}
                alt="Dra. Nathália e Dr. Vonil - Realizze Implantes"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition duration-500"
              />
              
              {/* Floating Overlay Badge on Photo */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-stone-200/90 rounded-2xl p-3 text-left flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-stone-900">
                      Atendimento 100% com a Gente
                    </h2>
                    <p className="text-[11px] sm:text-xs text-stone-600 font-medium">
                      Sem estagiários. Nós acompanhamos cada etapa.
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-bold text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-md border border-amber-300">
                  Poços de Caldas
                </span>
              </div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mt-8 w-full max-w-md flex flex-col items-center">
            <a
              id="hero-whatsapp-cta"
              href={EXPERT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-base sm:text-lg px-6 py-4 rounded-2xl shadow-xl shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 border border-amber-400/60 text-[10px] font-extrabold uppercase tracking-wider shadow">
                1ª Consulta Gratuita
              </span>
              <MessageCircle className="w-6 h-6 fill-current text-stone-950 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-center font-bold">Agendar primeira consulta gratuita no WhatsApp</span>
            </a>

            {/* Microtext below button */}
            <p className="mt-2.5 text-xs text-stone-600 flex items-center justify-center gap-2 font-medium">
              <span>Resposta rápida</span>
              <span>•</span>
              <span className="text-amber-800 font-bold">Sem compromisso</span>
              <span>•</span>
              <span>Vagas limitadas no mês</span>
            </p>

            {/* Trust highlights checklist */}
            <div className="mt-5 grid grid-cols-2 gap-2 text-left w-full text-xs text-stone-700">
              <div className="flex items-center gap-1.5 bg-white border border-amber-100 p-2.5 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-medium">Avaliação completa e honesta</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-amber-100 p-2.5 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-medium">Técnicas sem dor e sem enxerto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
