import React from 'react';
import { CONSULTATION_STEPS, EXPERT_INFO } from '../data/expertData';
import { MessageCircle, Calendar, UserCheck, ArrowRight } from 'lucide-react';

const stepIcons = [MessageCircle, Calendar, UserCheck];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 bg-stone-50/70 border-y border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-300 shadow-2xs">
            Passo a Passo Simples
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 font-serif tracking-tight mt-3">
            Como funciona a sua primeira consulta com a gente?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-700">
            Processo ágil, acolhedor e sem burocracias. Em apenas 3 passos você dá o primeiro passo para o seu novo sorriso:
          </p>
        </div>

        {/* 3 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {CONSULTATION_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || MessageCircle;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl p-6 bg-white border border-amber-100 flex flex-col justify-between shadow-md shadow-amber-900/5 hover:border-amber-300 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-amber-600 font-serif">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-stone-950 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-amber-100">
                  <span className="inline-block text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    ✓ {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 rounded-2xl p-4 sm:p-5 bg-amber-50 border border-amber-300 text-center flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <p className="text-xs sm:text-sm text-amber-950 text-left">
            ✨ <strong className="font-bold text-amber-900">Lembre-se:</strong> A primeira consulta é 100% gratuita, sem nenhum compromisso. Você só faz o procedimento se se sentir 100% seguro(a).
          </p>
          <a
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-stone-950 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 px-4 py-2.5 rounded-xl transition whitespace-nowrap shadow-md shadow-amber-500/20"
          >
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
