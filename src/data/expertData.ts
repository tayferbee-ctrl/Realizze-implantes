export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'resultado' | 'protocolo' | 'bastidor';
  caption?: string;
}

export interface DifferenceCard {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: 'UserCheck' | 'Sparkles' | 'ShieldCheck' | 'Clock' | 'HeartHandshake' | 'Smile';
}

export const EXPERT_INFO = {
  name: 'Realizze Implantes Dra. Nathália & Dr. Vonil',
  shortName: 'Dra. Nathália & Dr. Vonil',
  profession: 'Implantes e Protocolo',
  tagline: 'Especialistas em devolver sorrisos e autoestima',
  specialties: ['Carga Imediata', 'All-on-four', 'Zigomático'],
  city: 'Poços de Caldas - MG',
  address: 'Av. Fosco Pardini 2073, Jardim Quisisana, Poços de Caldas - MG, CEP 37701-608',
  mapsUrl: 'https://maps.google.com/?q=Av.+Fosco+Pardini+2073,+Jardim+Quisisana,+Poços+de+Caldas+-+MG',
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=5535991679229&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20minha%20primeira%20consulta%20gratuita%20de%20implantes.&type=phone_number&app_absent=0&utm_source=ig',
  instagramUrl: 'https://www.instagram.com/realizzeimplantes/?hl=pt_BR',
  instagramHandle: '@realizzeimplantes',
  phoneDisplay: '(35) 99167-9229',
};

// FOTO PRINCIPAL (HERO)
export const HERO_IMAGE = 'https://i.imgur.com/7ExoDvd.png';

// FOTOS DO EXPERT (AUTORIDADE E BASTIDORES)
export const EXPERT_PHOTOS = [
  'https://i.imgur.com/yIZdl4a.png',
  'https://i.imgur.com/yUMP4lD.png',
];

// PROVAS SOCIAIS / ANTES E DEPOIS / RESULTADOS
// Você pode adicionar novos links diretamente neste array!
export const RESULTS_GALLERY: GalleryItem[] = [
  { id: 'res-1', url: 'https://i.imgur.com/yUMP4lD.png', title: 'Transformação de Sorriso', category: 'resultado', caption: 'Reabilitação completa com protocolo fixo' },
  { id: 'res-2', url: 'https://i.imgur.com/0vbPZcH.png', title: 'Resultado e Segurança', category: 'resultado', caption: 'Devolução da função mastigatória e estética natural' },
  { id: 'res-3', url: 'https://i.imgur.com/GpavIzj.png', title: 'Harmonia e Estética', category: 'resultado', caption: 'Alinhamento, cor e proporção perfeitos' },
  { id: 'res-4', url: 'https://i.imgur.com/G0LIHwH.png', title: 'Autoestima Restaurada', category: 'resultado', caption: 'Adeus ao desconforto de próteses móveis' },
  { id: 'res-5', url: 'https://i.imgur.com/dF3gMnX.png', title: 'Sorriso Natural', category: 'resultado', caption: 'Técnica personalizada para cada formato facial' },
  { id: 'res-6', url: 'https://i.imgur.com/9qCFsib.png', title: 'Carga Imediata', category: 'resultado', caption: 'Novo sorriso com rapidez e precisão' },
  { id: 'res-7', url: 'https://i.imgur.com/ZqxL6KV.png', title: 'Reabilitação Oral', category: 'resultado', caption: 'Planejamento digital e acabamento minucioso' },
  { id: 'res-8', url: 'https://i.imgur.com/VfS61O2.png', title: 'Antes e Depois Real', category: 'resultado', caption: 'Paciente voltou a sorrir com total confiança' },
  { id: 'res-9', url: 'https://i.imgur.com/Cw2E4VO.png', title: 'Elegância e Função', category: 'resultado', caption: 'Protocolo superior e inferior com fixação segura' },
  { id: 'res-10', url: 'https://i.imgur.com/XDBo3WG.png', title: 'Caso de Alta Complexidade', category: 'resultado', caption: 'Solução definitiva para perda dentária severa' },
  { id: 'res-11', url: 'https://i.imgur.com/yY4nAiF.png', title: 'Transformação Concluída', category: 'resultado', caption: 'Mais de 10 anos de rejuvenescimento no olhar e sorriso' },
];

// PROTOCOLOS / ACOMPANHAMENTO INDIVIDUAL E PERSONALIZADO
// Você pode adicionar novos links diretamente neste array!
export const PROTOCOLS_GALLERY: GalleryItem[] = [
  { id: 'prot-1', url: 'https://i.imgur.com/CGVAvOK.png', title: 'Acompanhamento Individual', category: 'protocolo', caption: 'Atendimento exclusivo em cada consulta' },
  { id: 'prot-2', url: 'https://i.imgur.com/oEre403.png', title: 'Planejamento Personalizado', category: 'protocolo', caption: 'Análise minuciosa de cada arcada dentária' },
  { id: 'prot-3', url: 'https://i.imgur.com/sQ5MvbF.png', title: 'Protocolo Estruturado', category: 'protocolo', caption: 'Materiais biocompatíveis e tecnologia de ponta' },
  { id: 'prot-4', url: 'https://i.imgur.com/iag5b54.png', title: 'Cuidado em Cada Detalhe', category: 'protocolo', caption: 'Ambiente aconchegante focado na sua tranquilidade' },
  { id: 'prot-5', url: 'https://i.imgur.com/V9TMFaz.png', title: 'Execução de Alta Precisão', category: 'protocolo', caption: 'Equipe especializada do início ao pós-operatório' },
  { id: 'prot-6', url: 'https://i.imgur.com/TKQCQ25.png', title: 'Evolução e Conforto', category: 'protocolo', caption: 'Recuperação acompanhada de perto sem dor' },
  { id: 'prot-7', url: 'https://i.imgur.com/mGbyjuZ.png', title: 'Atenção aos Resultados', category: 'protocolo', caption: 'Ajustes finos para mastigação perfeita' },
  { id: 'prot-8', url: 'https://i.imgur.com/zk1NRMy.png', title: 'Dedicação Integral', category: 'protocolo', caption: 'Você não é apenas um número, é nossa prioridade' },
  { id: 'prot-9', url: 'https://i.imgur.com/ZG5cCZp.png', title: 'Celebração da Nova Fase', category: 'protocolo', caption: 'A alegria de ver o paciente sorrindo novamente' },
];

// FOTOS DE BASTIDORES & AUTORIDADE DO EXPERT
export const BACKSTAGE_PHOTOS: GalleryItem[] = [
  { id: 'back-1', url: 'https://i.imgur.com/7ExoDvd.png', title: 'Dra. Nathália & Dr. Vonil', category: 'bastidor', caption: 'Prontos para cuidar do seu sorriso' },
  { id: 'back-2', url: 'https://i.imgur.com/yIZdl4a.png', title: 'Atendimento Pessoal', category: 'bastidor', caption: 'Você é atendido diretamente por nós' },
  { id: 'back-3', url: 'https://i.imgur.com/yUMP4lD.png', title: 'Compromisso com o Paciente', category: 'bastidor', caption: 'Acompanhamento humano do diagnóstico à alta' },
];

// DIFERENCIAIS ("POR QUE CONFIAR EM NÓS")
export const DIFFERENTIALS: DifferenceCard[] = [
  {
    id: 'diff-1',
    title: 'Atendimento Direto com a Gente',
    description: 'Aqui você não é atendido por intermediários ou estagiários rotativos. Nós, Dra. Nathália e Dr. Vonil, cuidamos pessoalmente de cada consulta, cirurgia e revisão.',
    badge: '100% Pessoal',
    iconName: 'UserCheck',
  },
  {
    id: 'diff-2',
    title: 'Avaliação Clara, Honesta e Sem Surpresas',
    description: 'Falamos a verdade sobre a real necessidade do seu caso. Você entende exatamente cada etapa, sem termos técnicos difíceis e com total transparência.',
    badge: 'Transparência',
    iconName: 'ShieldCheck',
  },
  {
    id: 'diff-3',
    title: 'Dentes Fixos em Tempo Recorde (Carga Imediata)',
    description: 'Utilizamos técnicas avançadas para que você volte a sorrir e mastigar sem precisar esperar meses desdentado ou com dentaduras instáveis.',
    badge: 'Agilidade',
    iconName: 'Clock',
  },
  {
    id: 'diff-4',
    title: 'Expertise em Casos Complexos (All-on-4 e Zigomático)',
    description: 'Já ouviu que você "não tem osso suficiente"? Somos especialistas em alternativas consagradas que dispensam enxertos ósseos dolorosos e demorados.',
    badge: 'Casos Complexos',
    iconName: 'Sparkles',
  },
  {
    id: 'diff-5',
    title: 'Conforto Máximo e Zero Sofrimento',
    description: 'Protocolos de anestesia moderna e controle rigoroso de dor e ansiedade. Nosso consultório é pensado para que você se sinta seguro e relaxado.',
    badge: 'Sem Medo',
    iconName: 'Smile',
  },
  {
    id: 'diff-6',
    title: 'Acompanhamento Próximo e Humanizado',
    description: 'Nosso contato não termina após o procedimento. Você tem nosso canal direto de WhatsApp para tirar dúvidas e receber apoio durante toda a cicatrização.',
    badge: 'Pós-operatório',
    iconName: 'HeartHandshake',
  },
];

// PASSOS DA PRIMEIRA CONSULTA
export const CONSULTATION_STEPS = [
  {
    step: '01',
    title: 'Toque no WhatsApp',
    description: 'Envie uma mensagem rápida com apenas um clique. Nossa equipe responderá em minutos para encontrar o melhor horário para você.',
    highlight: 'Sem formulários chatos',
  },
  {
    step: '02',
    title: 'Visita Individual em Poços de Caldas',
    description: 'Você será recebido(a) com calma e um café quentinho em nosso endereço na Av. Fosco Pardini, sem filas ou ambiente hospitalar impessoal.',
    highlight: 'Ambiente acolhedor',
  },
  {
    step: '03',
    title: 'Avaliação Completa e Plano Ideal',
    description: 'Analisamos detalhadamente a sua saúde bucal, ouvimos seus medos e objetivos, e apresentamos a solução ideal para o seu sorriso.',
    highlight: '100% Gratuita e Sem Compromisso',
  },
];
