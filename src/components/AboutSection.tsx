import React from 'react';
import { EXPERT_PHOTOS, EXPERT_INFO } from '../data/expertData';
import { Award, UserCheck, Heart, Sparkles, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const aboutPhoto = EXPERT_PHOTOS[0]; // https://i.imgur.com/yIZdl4a.png

  return (
    <section id="quem-somos" className="py-12 sm:py-16 bg-white border-y border-amber-900/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Photo Column */}
          <div className="w-full md:w-5/12 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-stone-50 border border-amber-200/80 shadow-xl shadow-amber-900/5">
              <img
                src={aboutPhoto}
                alt="Dra. Nathália e Dr. Vonil em atendimento"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="p-3.5 bg-white border-t border-amber-100 text-center">
                <p className="text-xs font-bold text-amber-800">
                  Dra. Nathália &amp; Dr. Vonil
                </p>
                <p className="text-[11px] text-stone-600 font-medium">
                  Cirurgiões Especialistas em Implantes &amp; Protocolo
                </p>
              </div>
            </div>
          </div>

          {/* Text Column - 1st Person Human Copy */}
          <div className="w-full md:w-7/12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
              <UserCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Autoridade &amp; Cuidado Pessoal</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-stone-950 font-serif tracking-tight leading-snug">
              Muito prazer! Não somos uma franquia impessoal: somos quem vai realmente cuidar de você.
            </h2>

            <div className="mt-4 space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Sabemos o quanto a perda de dentes ou o uso de próteses móveis afeta a vida de alguém: o medo de mastigar alimentos duros, a vergonha de sorrir em público e a frustração de ouvir que seu caso “não tem jeito”.
              </p>
              <p>
                Criamos a <strong className="text-stone-900 font-semibold">Realizze Implantes</strong> com um propósito claro: entregar a você o tratamento mais moderno e seguro da implantodontia mundial, com o carinho e a proximidade que você merece.
              </p>
            </div>

            {/* Bullets with personal differentiators */}
            <div className="mt-6 space-y-3.5 border-t border-amber-100 pt-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-950">
                    Você fala e se consulta diretamente com a gente
                  </h3>
                  <p className="text-xs text-stone-600 font-normal">
                    Desde o diagnóstico até o último parafuso do seu novo sorriso, você está nas mãos dos dois especialistas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-950">
                    Técnicas modernas sem enxerto doloroso
                  </h3>
                  <p className="text-xs text-stone-600 font-normal">
                    Com All-on-four e implantes zigomáticos, reabilitamos casos com pouco osso com máxima previsibilidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-950">
                    Respeito ao seu medo e ao seu tempo
                  </h3>
                  <p className="text-xs text-stone-600 font-normal">
                    Ambiente calmo, anestesia sem desconforto e explicações claras antes de qualquer decisão.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Badge */}
            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center gap-3 text-xs text-stone-600">
              <Award className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                Consultório preparado em Poços de Caldas para seu total conforto e segurança.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
