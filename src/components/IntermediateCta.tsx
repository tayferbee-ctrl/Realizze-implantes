import React from 'react';
import { MessageCircle, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { EXPERT_INFO } from '../data/expertData';

export const IntermediateCta: React.FC = () => {
  return (
    <section id="cta-intermediario" className="py-10 sm:py-14 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-amber-50/90 via-white to-amber-50/60 border border-amber-200/90 shadow-xl shadow-amber-900/5 text-center">
          {/* Subtle top accent */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Primeiro Passo Sem Riscos</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-950 font-serif tracking-tight max-w-xl mx-auto">
            Tem receio de sentir dor, de não ter osso ou de o tratamento ser complicado?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-700 max-w-lg mx-auto leading-relaxed">
            Você não precisa decidir nada agora. Nossa primeira consulta foi pensada exatamente para ouvir sua história, avaliar seus exames e mostrar com clareza o que é viável para o seu caso — com carinho, respeito e sem nenhum compromisso financeiro.
          </p>

          <div className="mt-6 flex flex-col items-center">
            <a
              id="intermediate-whatsapp-cta"
              href={EXPERT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>Agendar Minha Primeira Consulta Gratuita</span>
            </a>

            <p className="mt-2.5 text-xs text-stone-600 flex items-center justify-center gap-2 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Conversa rápida no WhatsApp • Sem compromisso</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
