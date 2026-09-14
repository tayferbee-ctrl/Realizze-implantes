import React from 'react';
import { DIFFERENTIALS } from '../data/expertData';
import {
  UserCheck,
  ShieldCheck,
  Clock,
  Sparkles,
  Smile,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  UserCheck: UserCheck,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  Sparkles: Sparkles,
  Smile: Smile,
  HeartHandshake: HeartHandshake,
};

export const WhyTrustUs: React.FC = () => {
  return (
    <section id="diferenciais" className="py-12 sm:py-16 bg-stone-50/70 border-y border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Nossos Compromissos Com Você</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 font-serif tracking-tight">
            Por que centenas de pacientes confiam na gente para transformar o sorriso?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-700">
            Você merece ser tratado com transparência, tecnologia de ponta e respeito absoluto ao seu tempo e bem-estar.
          </p>
        </div>

        {/* 6 Differential Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFFERENTIALS.map((diff) => {
            const IconComponent = iconMap[diff.iconName] || ShieldCheck;
            return (
              <div
                key={diff.id}
                className="relative rounded-2xl p-5 bg-white border border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:scale-105 group-hover:bg-amber-200 transition">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {diff.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {diff.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-stone-950 font-sans tracking-tight mb-2">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
