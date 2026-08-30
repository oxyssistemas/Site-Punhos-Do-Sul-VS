import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ChevronRight, ArrowLeft, MessageCircle, Sparkles, Scroll, HeartPulse, Activity, Zap, Shield, Sun } from 'lucide-react';

interface ChiKungPageProps {
  navigate: (path: string) => void;
}

// Custom authentic Chinese-style SVG icons matching the aesthetic
const MeditatorIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 text-amber-400">
    <circle cx="32" cy="14" r="6" />
    <path d="M32 22 c-4 0 -7 2 -9 5 c-2 3 -4 8 -5 14 c-1 2 0 4 2 4 c2 0 4 -2 5 -4 c1 -3 2 -7 4 -9 c0 4 1 10 2 13 c-3 2 -8 4 -12 6 c-3 1 -4 4 -3 6 c1 2 3 2 6 1 c4 -1 9 -3 15 -3 c6 0 11 2 15 3 c3 1 5 1 6 -1 c1 -2 0 -5 -3 -6 c-4 -2 -9 -4 -12 -6 c1 -3 2 -9 2 -13 c2 2 3 6 4 9 c1 2 3 4 5 4 c2 0 3 -2 2 -4 c-1 -6 -3 -11 -5 -14 c-2 -3 -5 -5 -9 -5 Z" />
    <ellipse cx="32" cy="54" rx="20" ry="4" opacity="0.3" />
  </svg>
);

const BonsaiIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 text-amber-400">
    <circle cx="38" cy="16" r="9" />
    <circle cx="28" cy="22" r="7" />
    <circle cx="44" cy="26" r="8" />
    <circle cx="20" cy="30" r="7" />
    <circle cx="34" cy="30" r="8" />
    <path d="M32 32 c-3 2 -8 4 -9 7 c-1 3 0 6 2 8 h14 c2 -2 3 -5 2 -8 c-1 -4 -4 -6 -6 -9 c2 -3 4 -6 6 -8 c0 -1 -1 -2 -2 -1 c-2 2 -4 4 -6 7 Z" />
    <path d="M18 47 h28 l-3 7 h-22 Z" />
    <rect x="16" y="45" width="32" height="3" rx="1" />
    <rect x="22" y="54" width="4" height="2" />
    <rect x="38" y="54" width="4" height="2" />
  </svg>
);

const IncenseIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 text-amber-400">
    <path
      d="M26 18 Q23 13 28 8 Q33 13 30 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M40 16 Q44 11 39 6 Q34 11 38 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line x1="28" y1="18" x2="30" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="16" x2="34" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 43 h32 l-4 8 h-24 Z" />
    <rect x="14" y="41" width="36" height="3" rx="1" />
    <ellipse cx="32" cy="51" rx="12" ry="2" opacity="0.3" />
  </svg>
);

const YinYangIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 text-amber-400">
    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
    <path
      d="M32 4 A28 28 0 0 1 32 60 A14 14 0 0 1 32 32 A14 14 0 0 0 32 4 Z"
      fill="currentColor"
    />
    <circle cx="32" cy="18" r="4" fill="currentColor" />
    <circle cx="32" cy="46" r="4" fill="#0a0a0a" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ChiKungPage: React.FC<ChiKungPageProps> = ({ navigate }) => {
  return (
    <div id="chi-kung-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Chi Kung Page */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/chikung-hero.jpg"
            alt="Chi Kung Qi Gong Tradicional"
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        {/* Ambient Martial Glow Effect */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4"
          >
            <button
              id="breadcrumb-home-btn"
              onClick={() => navigate('/')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-gray-300">Modalidades</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-amber-400">Chi Kung (Qi Gong)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Arte Milenar de Cultivo da Energia Vital (氣功)</span>
            </div>

            {/* Title with Shojumaru Chinese Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Chi Kung
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              O domínio do fluxo de energia interior através da respiração consciente, disciplina e harmonização de órgãos vitais.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Sections - Directly on background without boxed containers */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* 1. O QUE É? (Esquerda: Texto, Direita: Imagem)                            */}
        {/* ========================================================================= */}
        <motion.section
          id="chikung-oque-e"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                O que é?
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Significado de Chi Kung ( 氣功 ) & Domínio Energético</span>
            </div>
          </div>

          {/* Grid Layout: Texto à Esquerda (col 1), Imagem à Direita (col 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Escrita à Esquerda - Direto no background */}
            <div className="lg:col-span-7 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                Chi ou Qi ( 氣 ) significa “Energia” e Kung ou Gong ( 功 ) significa “Tempo e Esforço”. Chi Kung ou Qi Gong é definido como “qualquer treinamento ou estudo relativo ao Chi (energia) que requeira tempo de prática e muita disciplina e esforço”.
              </p>
              <p>
                É uma arte que pretende desenvolver o que a tradição chinesa entende por “energia vital”, isto é, o “chi”. Nesse sentido, essa prática diz ser capaz de alterar e controlar o movimento do chi dentro do corpo do praticante e com isso alcançar longevidade física.
              </p>
              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Tem o objetivo levar o equilíbrio de energia aos órgãos, para assim prevenir o indivíduo de fatores externos e/ou internos que venham causar o desequilíbrio.
              </p>
            </div>

            {/* Imagem à Direita com Animação Flutuante Suave e Sem Bordas */}
            <div className="lg:col-span-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src="/images/subpages/chikung-oquee.jpg"
                  alt="O que é Chi Kung Qi Gong"
                  aspectRatio="aspect-[4/3]"
                  caption="Cultivo e circulação consciente da energia vital Chi ( 氣 )"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. HISTÓRIA (Esquerda: Imagem, Direita: Texto)                            */}
        {/* ========================================================================= */}
        <motion.section
          id="chikung-historia"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4 mb-8">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                História
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Origem Milenar & Fundamentos da Tradição Chinesa</span>
            </div>
          </div>

          {/* Grid Layout: Imagem à Esquerda (col 1), Escrita à Direita (col 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Imagem à Esquerda com Animação Flutuante Suave */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="sticky top-28 space-y-4">
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
                >
                  <ImagePlaceholder
                    src="/images/subpages/chikung-historia.jpg"
                    alt="História do Chi Kung Tradicional Chinês"
                    aspectRatio="aspect-[4/3]"
                    caption="Práticas ancestrais para equilíbrio dos meridianos e saúde duradoura"
                  />
                </motion.div>

                {/* Destaque filosófico */}
                <div className="border-l-2 border-amber-500 pl-4 py-1 text-xs text-gray-300 space-y-1">
                  <div className="font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-shojumaru text-sm">
                    氣 功 Tradição Ancestral
                  </div>
                  <p>
                    Milênios de observação dos fluxos naturais de energia na natureza e no corpo humano.
                  </p>
                </div>
              </div>
            </div>

            {/* Escrita à Direita - Direto no background */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                Os primeiros registros escritos sobre o Chi Kung ou Qi Gong datam do período da dinastia Zhou (1046-256 a.C.), onde foram encontrados textos que descreviam práticas de cultivo da energia vital.
              </p>
              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Durante a dinastia Han (206 a.C. – 220 d.C.), o Chi Kung começou a se desenvolver e se diversificar em diferentes escolas e métodos. Nessa época, o Chi Kung estava relacionado às práticas taoístas de cultivo da energia interna, com ênfase na conexão entre o corpo, a mente e o espírito.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. PRÁTICA DO CHI KUNG E BENEFÍCIOS (Texto, Imagem, e Benefícios no Print)*/}
        {/* ========================================================================= */}
        <motion.section
          id="chikung-pratica-beneficios"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Prática do Chi Kung e Benefícios
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Saúde Integral, Respiração Profunda & Medicina Tradicional Chinesa</span>
            </div>
          </div>

          {/* Texto de Prática e Fundamentos */}
          <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
              A prática do Chi Kung é muito simples e ao mesmo tempo muito vigorosa e eficaz. Por meio de movimentos suaves aliados à respiração profunda, é possível direcionar e otimizar o fluxo do Chi com a mente, promovendo a saúde integral do ser humano. Os exercícios e práticas de Chi Kung são ensinados tanto em aulas específicas de Chi Kung como em aulas de Tai Chi Chuan para aprimorar e potencializar os resultados nos treinamentos.
            </p>
            <p>
              A arte do Chi Kung oferece métodos eficazes para o desenvolvimento do corpo, da respiração, da energia vital e do equilíbrio mental. Contendo vários fundamentos da Medicina Tradicional Chinesa, seu objetivo é estimular e aprimorar a circulação da energia vital (Chi) dentro do corpo, contribuindo para a melhoria da saúde e a prevenção de várias doenças.
            </p>
          </div>

          {/* Imagem com Animação Flutuante Suave */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-xl shadow-2xl shadow-black/80 my-8"
          >
            <ImagePlaceholder
              src="/images/subpages/chikung-pratica.jpg"
              alt="Prática e Exercícios do Chi Kung"
              aspectRatio="aspect-[21/9]"
              caption="Harmonização entre respiração profunda, intenção mental e circulação do Chi"
            />
          </motion.div>

          {/* Introdução aos Benefícios */}
          <div className="text-center pt-4 pb-2">
            <h3 className="text-xl sm:text-3xl font-bold text-amber-300 tracking-wide font-display">
              São benefícios do Chi Kung:
            </h3>
          </div>

          {/* 4 TÓPICOS COM ÍCONES EXATAMENTE COMO NO PRINT / PADRÃO ORIENTAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-4">
            
            {/* 1. BENEFÍCIOS FÍSICOS & VITALIDADE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="h-20 flex items-center justify-center">
                <MeditatorIcon />
              </div>
              <h4 className="text-lg sm:text-xl font-bold tracking-wider text-amber-400 font-shojumaru">
                BENEFÍCIOS FÍSICOS
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 text-center font-normal leading-relaxed">
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Aumento da vitalidade, dando mais energia e disposição;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Aumento da flexibilidade e da força muscular, proporcionando um relaxamento muscular em todo o corpo;</span>
                </li>
              </ul>
            </motion.div>

            {/* 2. BENEFÍCIOS MENTAIS & FOCO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="h-20 flex items-center justify-center">
                <BonsaiIcon />
              </div>
              <h4 className="text-lg sm:text-xl font-bold tracking-wider text-amber-400 font-shojumaru">
                BENEFÍCIOS MENTAIS
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 text-center font-normal leading-relaxed">
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Aumento da atenção e concentração mental;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Redução da ansiedade, do estresse e da tensão emocional;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Cultivo da serenidade e da paz de espírito.</span>
                </li>
              </ul>
            </motion.div>

            {/* 3. HARMONIA & SAÚDE INTEGRAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="h-20 flex items-center justify-center">
                <IncenseIcon />
              </div>
              <h4 className="text-lg sm:text-xl font-bold tracking-wider text-amber-400 font-shojumaru">
                HARMONIA E CURA
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 text-center font-normal leading-relaxed">
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Atuação na melhora de artrite, dores de cabeça e coluna, mal-estar, desequilíbrios físicos e emocionais, dificuldade respiratória, tensão muscular e depressão;</span>
                </li>
              </ul>
            </motion.div>

            {/* 4. EQUILÍBRIO & FORTALECIMENTO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="h-20 flex items-center justify-center">
                <YinYangIcon />
              </div>
              <h4 className="text-lg sm:text-xl font-bold tracking-wider text-amber-400 font-shojumaru">
                EQUILÍBRIO E IMUNIDADE
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 text-center font-normal leading-relaxed">
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Prevenção de lesões e quedas por falta de equilíbrio;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Fortalecimento e envio de energia aos órgãos internos, aumentando as defesas naturais do organismo e sua funcionalidade.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </motion.section>

        {/* Back and Booking Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-red-900/30"
        >
          <button
            id="back-home-btn"
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>

          <a
            id="cta-schedule-chikung"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de Chi Kung</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom CTA Banner */}
      <BottomCtaBanner
        title="VENHA HOJE PARA PUNHOS DO SUL"
        buttonText="Clique Aqui E Agende Sua Aula"
      />
    </div>
  );
};
