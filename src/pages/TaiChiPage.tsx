import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ChevronRight, ArrowLeft, MessageCircle, Sparkles, Scroll, HeartPulse } from 'lucide-react';

interface TaiChiPageProps {
  navigate: (path: string) => void;
}

// Custom authentic Chinese-style SVG icons matching the screenshot
const MeditatorIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 text-amber-400">
    {/* Head */}
    <circle cx="32" cy="14" r="6" />
    {/* Body / Torso / Arms in Lotus Meditation */}
    <path d="M32 22 c-4 0 -7 2 -9 5 c-2 3 -4 8 -5 14 c-1 2 0 4 2 4 c2 0 4 -2 5 -4 c1 -3 2 -7 4 -9 c0 4 1 10 2 13 c-3 2 -8 4 -12 6 c-3 1 -4 4 -3 6 c1 2 3 2 6 1 c4 -1 9 -3 15 -3 c6 0 11 2 15 3 c3 1 5 1 6 -1 c1 -2 0 -5 -3 -6 c-4 -2 -9 -4 -12 -6 c1 -3 2 -9 2 -13 c2 2 3 6 4 9 c1 2 3 4 5 4 c2 0 3 -2 2 -4 c-1 -6 -3 -11 -5 -14 c-2 -3 -5 -5 -9 -5 Z" />
    {/* Crossed Legs base */}
    <ellipse cx="32" cy="54" rx="20" ry="4" opacity="0.3" />
  </svg>
);

const BonsaiIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 text-amber-400">
    {/* Foliage Clouds */}
    <circle cx="38" cy="16" r="9" />
    <circle cx="28" cy="22" r="7" />
    <circle cx="44" cy="26" r="8" />
    <circle cx="20" cy="30" r="7" />
    <circle cx="34" cy="30" r="8" />
    {/* Bonsai Trunk & Branches */}
    <path d="M32 32 c-3 2 -8 4 -9 7 c-1 3 0 6 2 8 h14 c2 -2 3 -5 2 -8 c-1 -4 -4 -6 -6 -9 c2 -3 4 -6 6 -8 c0 -1 -1 -2 -2 -1 c-2 2 -4 4 -6 7 Z" />
    {/* Bonsai Pot */}
    <path d="M18 47 h28 l-3 7 h-22 Z" />
    <rect x="16" y="45" width="32" height="3" rx="1" />
    <rect x="22" y="54" width="4" height="2" />
    <rect x="38" y="54" width="4" height="2" />
  </svg>
);

const IncenseIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 text-amber-400">
    {/* Incense Smoke Wisps */}
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
    {/* Incense Sticks */}
    <line x1="28" y1="18" x2="30" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="16" x2="34" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Burner Censer Base */}
    <path d="M16 43 h32 l-4 8 h-24 Z" />
    <rect x="14" y="41" width="36" height="3" rx="1" />
    <ellipse cx="32" cy="51" rx="12" ry="2" opacity="0.3" />
  </svg>
);

const YinYangIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 text-amber-400">
    {/* Yin Yang Outer Circle */}
    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" />
    {/* Dark Side */}
    <path
      d="M32 4 A28 28 0 0 1 32 60 A14 14 0 0 1 32 32 A14 14 0 0 0 32 4 Z"
      fill="currentColor"
    />
    {/* Upper Small Dot */}
    <circle cx="32" cy="18" r="4" fill="currentColor" />
    {/* Lower Inverted Dot */}
    <circle cx="32" cy="46" r="4" fill="#0a0a0a" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const TaiChiPage: React.FC<TaiChiPageProps> = ({ navigate }) => {
  return (
    <div id="tai-chi-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Tai Chi Chuan Page */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder with overlay */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/taichi-hero.jpg"
            alt="Tai Chi Chuan Tradicional"
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
            <span className="text-amber-400">Tai Chi Chuan</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Meditação em Movimento & Arte Marcial Interna</span>
            </div>

            {/* Title with Shojumaru Chinese Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Tai Chi Chuan
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Harmonia entre corpo e mente, movimentação de energia vital e equilíbrio interior através de movimentos suaves e conscientes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Sections - Directly on background without boxed containers */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* 1. O QUE É? (Imagem acima, título abaixo, texto abaixo)                   */}
        {/* ========================================================================= */}
        <motion.section
          id="taichi-oque-e"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Imagem ACIMA com Animação Flutuante Suave e Sem Bordas */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
          >
            <ImagePlaceholder
              src="/images/subpages/taichi-oquee.jpg"
              alt="O que é Tai Chi Chuan - Meditação em Movimento"
              aspectRatio="aspect-[21/9]"
              caption="Prática suave, consciente e harmonização do fluxo de energia corporal"
            />
          </motion.div>

          {/* Section Header ABAIXO da Imagem */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                O que é?
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Arte Marcial Interna & Respiração Consciente</span>
            </div>
          </div>

          {/* Texto ABAIXO do Cabeçalho - Direto no background */}
          <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
              Tai Chi Chuan é uma arte marcial chinesa praticada com movimentos lentos e em silêncio, proporcionando a movimentação da energia do corpo e estimulando a consciência corporal, a concentração e a tranquilidade.
            </p>
            <p>
              Ele combina exercícios corporais milenares conhecidos como chi kung e tao yin, que envolvem a respiração, a concentração e os preceitos da Medicina Tradicional Chinesa.
            </p>
            <p>
              O Tai Chi Chuan é também conhecido como meditação em movimento, e é muito realizado tanto como um esporte de defesa pessoal, mas também para fins terapêuticos, pois seus exercícios trazem benefícios como corrigir a postura, o equilíbrio e a força, além de harmonizar as emoções e combater doenças mentais como ansiedade e depressão.
            </p>
            <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
              Os movimentos no Tai Chi Chuan são circulares. Quando combinados com um ritmo respiratório, levam a um alongamento do corpo e consequente relaxamento do mesmo.
            </p>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. HISTÓRIA (Imagem à Esquerda, Texto à Direita)                         */}
        {/* ========================================================================= */}
        <motion.section
          id="taichi-historia"
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
              <span className="text-xs font-mono text-gray-400 tracking-wider">Filosofia Taoísta, Família Yang & Equilíbrio Yin-Yang</span>
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
                    src="/images/subpages/taichi-historia.jpg"
                    alt="História do Tai Chi Chuan e Mestres da Família Yang"
                    aspectRatio="aspect-[4/3]"
                    caption="Linhagem Yang Lu Chan, Mestre Yang Cheng Fu e a sabedoria Taoísta"
                  />
                </motion.div>

                {/* Destaque filosófico */}
                <div className="border-l-2 border-amber-500 pl-4 py-1 text-xs text-gray-300 space-y-1">
                  <div className="font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-shojumaru text-sm">
                    ☯ Equilíbrio Yin e Yang
                  </div>
                  <p>
                    A busca pela harmonia entre forças opostas complementares para cultivar a energia vital "KI".
                  </p>
                </div>
              </div>
            </div>

            {/* Escrita à Direita - Direto no background */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                O Tai Chi Chuan tem, em seus princípios, traços da filosofia Taoísta e da Alquimia Chinesa. Foi “fundado” pela Família Yang, mais precisamente por Yang Lu Chan, um chinês que viveu entre 1789 e 1872. Mas o grande responsável que difundiu o Tai Chi Chuan da Família Yang por toda a China, foi o Mestre Yang Cheng Fu, que viveu entre 1883 e 1936. O estilo Yang tem 103 posturas diferentes.
              </p>
              <p>
                Tendo como base a filosofia Taoísta, o Tai Chi Chuan busca o equilíbrio entre o Yin e o Yang, o que gera a energia "KI", que é a energia vital de todo ser vivo. Yin e Yang são os extremos opostos de energia.
              </p>
              <p>
                Num exemplo um tanto grosseiro, claridade e escuridão seriam os extremos Yang e Yin da energia luminosa. São indissociáveis e ao mesmo tempo contrários. O ideal seria encontrar o equilíbrio entre eles.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. BENEFÍCIOS DA PRÁTICA (Texto, Imagem, e 4 Tópicos com Ícones do Print) */}
        {/* ========================================================================= */}
        <motion.section
          id="taichi-beneficios"
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
                Benefícios da Prática
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Saúde Integral, Longevidade & Bem-Estar</span>
            </div>
          </div>

          {/* Texto de Benefícios */}
          <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
              Existem muitas formas de tai chi, com as mãos livres ou com armas, como espada, leque ou sabre. O estilo mais antigo é o Estilo Chen e entre os mais populares estão os estilos Yang e Pai Lin.
            </p>
            <p>
              Como tem ação sobre o sistema nervoso central, é benéfico inclusive para os sistemas: digestivo, eliminatórios, respiratórios e imunológicos. Por esses motivos é sinônimo de longevidade em alguns países.
            </p>
            <p>
              Por envolver a arte marcial, a saúde e a meditação, o Tai Chi Chuan é, atualmente, praticado pelo mundo todo, sobretudo no ocidente, e é inclusive aplicado na medicina oriental, no tratamento de reumatismos, artroses, bursites, artrites e no equilíbrio da pressão arterial.
            </p>
            <p className="text-amber-300 font-medium">
              Na China, é comum as pessoas praticarem o Tai Chi Chuan nas praças, no período da manhã. Pode ser praticado por qualquer pessoa, inclusive às pessoas na terceira idade.
            </p>
          </div>

          {/* Imagem Abaixo do Texto com Animação Flutuante */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-xl shadow-2xl shadow-black/80 my-8"
          >
            <ImagePlaceholder
              src="/images/subpages/taichi-beneficios.jpg"
              alt="Benefícios da Prática do Tai Chi Chuan"
              aspectRatio="aspect-[21/9]"
              caption="Prática tradicional matinal ao ar livre para revitalização integral da saúde"
            />
          </motion.div>

          {/* Introdução aos 4 Tópicos do Print */}
          <div className="text-center pt-4 pb-2">
            <h3 className="text-lg sm:text-2xl font-bold text-amber-300 tracking-wide font-display">
              A prática de Tai Chi Chuan traz vários benefícios para a saúde:
            </h3>
          </div>

          {/* 4 TÓPICOS COM ÍCONES EXATAMENTE COMO NO PRINT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-4">
            
            {/* 1. BENEFÍCIOS FÍSICOS */}
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
                  <span>Aumentar a vitalidade, com mais disposição e energia para o dia-a-dia;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Fortalecer os músculos;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Diminuir a tensão muscular;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Melhorar a flexibilidade das articulações;</span>
                </li>
              </ul>
            </motion.div>

            {/* 2. BENEFÍCIOS MENTAIS */}
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
                  <span>Aliviar o estresse e combater a depressão;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Equilibrar as emoções;</span>
                </li>
              </ul>
            </motion.div>

            {/* 3. HARMONIA */}
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
                HARMONIA
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 text-center font-normal leading-relaxed">
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Estimular o convívio social;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Aumentar a concentração;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Promover a paz interior e harmonia;</span>
                </li>
              </ul>
            </motion.div>

            {/* 4. EQUILÍBRIO */}
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
                EQUILÍBRIO
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 text-center font-normal leading-relaxed">
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Melhorar o equilíbrio;</span>
                </li>
                <li className="flex items-start justify-center gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Estimula o sistema nervoso e imunológico.</span>
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
            id="cta-schedule-taichi"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de Tai Chi Chuan</span>
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
