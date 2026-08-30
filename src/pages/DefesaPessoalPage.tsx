import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import {
  ChevronRight,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Flame,
  Zap,
  Target,
  Eye,
  Brain,
  Crosshair,
  Lock,
  Swords,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface DefesaPessoalPageProps {
  navigate: (path: string) => void;
}

interface TechniqueItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
  accentColor: string;
  gradientBg: string;
  borderColor: string;
  hoverBorder: string;
  glowColor: string;
  badgeClass: string;
  iconBg: string;
  iconColor: string;
  titleColor: string;
}

const TECHNIQUES: TechniqueItem[] = [
  {
    title: 'Técnicas de Soco',
    desc: 'Golpes precisos em pontos vitais, bloqueios diretos e contra-ataques velozes com os punhos.',
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    tag: 'Ataque & Defesa',
    accentColor: '#f97316',
    gradientBg: 'from-orange-950/50 via-neutral-900/80 to-red-950/30',
    borderColor: 'border-orange-900/40',
    hoverBorder: 'hover:border-orange-500/80',
    glowColor: 'bg-orange-500/20',
    badgeClass: 'bg-orange-950/80 text-orange-300 border-orange-700/50',
    iconBg: 'bg-orange-950/60 border-orange-800/50',
    iconColor: 'text-orange-400',
    titleColor: 'group-hover:text-orange-400'
  },
  {
    title: 'Técnicas de Chutes',
    desc: 'Golpes baixos, chutes rápidos e alavancas para desestabilizar a base do agressor a média distância.',
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    tag: 'Distância & Impacto',
    accentColor: '#06b6d4',
    gradientBg: 'from-cyan-950/50 via-neutral-900/80 to-blue-950/30',
    borderColor: 'border-cyan-900/40',
    hoverBorder: 'hover:border-cyan-400/80',
    glowColor: 'bg-cyan-500/20',
    badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/50',
    iconBg: 'bg-cyan-950/60 border-cyan-800/50',
    iconColor: 'text-cyan-400',
    titleColor: 'group-hover:text-cyan-400'
  },
  {
    title: 'Técnicas de Torções',
    desc: 'Manipulação de punhos, cotovelos e dedos (Chin Na) para controle imediato com o mínimo esforço físico.',
    icon: <Lock className="w-6 h-6 text-emerald-400" />,
    tag: 'Chin Na (Alavancas)',
    accentColor: '#10b981',
    gradientBg: 'from-emerald-950/50 via-neutral-900/80 to-teal-950/30',
    borderColor: 'border-emerald-900/40',
    hoverBorder: 'hover:border-emerald-400/80',
    glowColor: 'bg-emerald-500/20',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50',
    iconBg: 'bg-emerald-950/60 border-emerald-800/50',
    iconColor: 'text-emerald-400',
    titleColor: 'group-hover:text-emerald-400'
  },
  {
    title: 'Técnicas de Projeções',
    desc: 'Uso do peso e da própria força do agressor para derrubá-lo ao solo com rapidez e segurança.',
    icon: <Target className="w-6 h-6 text-purple-400" />,
    tag: 'Desequilíbrio',
    accentColor: '#a855f7',
    gradientBg: 'from-purple-950/50 via-neutral-900/80 to-indigo-950/30',
    borderColor: 'border-purple-900/40',
    hoverBorder: 'hover:border-purple-400/80',
    glowColor: 'bg-purple-500/20',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-700/50',
    iconBg: 'bg-purple-950/60 border-purple-800/50',
    iconColor: 'text-purple-400',
    titleColor: 'group-hover:text-purple-400'
  },
  {
    title: 'Técnicas de Imobilizações',
    desc: 'Travamentos articulares no chão e de pé para neutralizar a ação de ameaça sem necessidade de violência excessiva.',
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    tag: 'Controle Total',
    accentColor: '#f59e0b',
    gradientBg: 'from-amber-950/50 via-neutral-900/80 to-yellow-950/30',
    borderColor: 'border-amber-900/40',
    hoverBorder: 'hover:border-amber-400/80',
    glowColor: 'bg-amber-500/20',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-700/50',
    iconBg: 'bg-amber-950/60 border-amber-800/50',
    iconColor: 'text-amber-400',
    titleColor: 'group-hover:text-amber-400'
  },
  {
    title: 'Técnicas de Estrangulamento',
    desc: 'Pressões controladas no fluxo respiratório ou carotídeo para cessar agressões extremas instantaneamente.',
    icon: <Crosshair className="w-6 h-6 text-rose-400" />,
    tag: 'Neutralização',
    accentColor: '#f43f5e',
    gradientBg: 'from-rose-950/50 via-neutral-900/80 to-pink-950/30',
    borderColor: 'border-rose-900/40',
    hoverBorder: 'hover:border-rose-400/80',
    glowColor: 'bg-rose-500/20',
    badgeClass: 'bg-rose-950/80 text-rose-300 border-rose-700/50',
    iconBg: 'bg-rose-950/60 border-rose-800/50',
    iconColor: 'text-rose-400',
    titleColor: 'group-hover:text-rose-400'
  },
  {
    title: 'Técnicas de Quebramento',
    desc: 'Aplicação contundente de impacto ou alavanca estrutural em articulações em situações de risco letal.',
    icon: <Flame className="w-6 h-6 text-red-400" />,
    tag: 'Impacto Estrutural',
    accentColor: '#ef4444',
    gradientBg: 'from-red-950/60 via-neutral-900/80 to-orange-950/30',
    borderColor: 'border-red-900/40',
    hoverBorder: 'hover:border-red-500/80',
    glowColor: 'bg-red-500/25',
    badgeClass: 'bg-red-950/80 text-red-300 border-red-700/50',
    iconBg: 'bg-red-950/60 border-red-800/50',
    iconColor: 'text-red-400',
    titleColor: 'group-hover:text-red-400'
  },
  {
    title: 'Defesa Contra Arma Branca',
    desc: 'Desarmes precisos contra facas, bastões e lâminas, esquivas de linha de corte e controle do membro armado.',
    icon: <Swords className="w-6 h-6 text-sky-400" />,
    tag: 'Desarme & Esquiva',
    accentColor: '#38bdf8',
    gradientBg: 'from-sky-950/50 via-neutral-900/80 to-indigo-950/30',
    borderColor: 'border-sky-900/40',
    hoverBorder: 'hover:border-sky-400/80',
    glowColor: 'bg-sky-500/20',
    badgeClass: 'bg-sky-950/80 text-sky-300 border-sky-700/50',
    iconBg: 'bg-sky-950/60 border-sky-800/50',
    iconColor: 'text-sky-400',
    titleColor: 'group-hover:text-sky-400'
  },
  {
    title: 'Defesa Contra Arma de Fogo',
    desc: 'Princípios de saída da linha de tiro, controle de cano a curta distância e desarme sob estresse controlado.',
    icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
    tag: 'Alto Risco & Retenção',
    accentColor: '#dc2626',
    gradientBg: 'from-red-950/70 via-neutral-900/80 to-rose-950/40',
    borderColor: 'border-red-800/50',
    hoverBorder: 'hover:border-red-400/90',
    glowColor: 'bg-red-600/30',
    badgeClass: 'bg-red-950/90 text-red-200 border-red-600/60',
    iconBg: 'bg-red-950/70 border-red-700/60',
    iconColor: 'text-red-400',
    titleColor: 'group-hover:text-red-300'
  },
];

export const DefesaPessoalPage: React.FC<DefesaPessoalPageProps> = ({ navigate }) => {
  return (
    <div id="defesa-pessoal-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Defesa Pessoal */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/defesa-hero.jpg"
            alt="Treinamento de Defesa Pessoal no Kung Fu"
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        {/* Ambient Martial Glow */}
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
            <span className="text-amber-400">Defesa Pessoal</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Proteção Eficaz, Agilidade e Autoconfiança</span>
            </div>

            {/* Title with Shojumaru Chinese Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Defesa Pessoal
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Técnicas reais e estratégias ancestrais para salvaguardar sua integridade física e emocional contra qualquer tipo de ameaça.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* 1. INTRODUÇÃO E CONCEITO FUNDAMENTAL (Texto e Imagem Flutuante)           */}
        {/* ========================================================================= */}
        <motion.section
          id="defesa-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                A Defesa Pessoal no Kung Fu
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Estratégias Contra Ataques Armados e Desarmados</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto à Esquerda */}
            <div className="lg:col-span-7 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                No Kung Fu, a defesa pessoal é uma parte importante do treinamento. Existem diversas técnicas e estratégias para se defender de ataques, tanto desarmados quanto armados.
              </p>
              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Utilizando essas técnicas, uma pessoa que está se defendendo será capaz de bloquear agressões e imobilizar o oponente em pouco tempo, conseguindo fugir da situação mesmo se houver grande diferença no aspecto físico.
              </p>
            </div>

            {/* Imagem à Direita com Efeito Flutuante e Sem Bordas */}
            <div className="lg:col-span-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src="/images/subpages/defesa-aplicacao.jpg"
                  alt="Aplicação prática de Defesa Pessoal e Alavancas"
                  aspectRatio="aspect-[4/3]"
                  caption="Aplicação de alavancas e desequilíbrios para neutralizar o agressor"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. GRADE DE TÉCNICAS DE DEFESA PESSOAL                                    */}
        {/* ========================================================================= */}
        <motion.section
          id="defesa-tecnicas"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Técnicas de Defesa Pessoal
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Arsenal Técnico Ancestral Aplicado à Sobrevivência Moderna</span>
            </div>
          </div>

          <p className="text-gray-300 text-base sm:text-lg">
            Algumas das principais técnicas e disciplinas de defesa pessoal incluem:
          </p>

          {/* Grid de Técnicas com Animações Coloridas Individuais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {TECHNIQUES.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.25, ease: "easeOut" } 
                }}
                className={`group relative bg-gradient-to-br ${tech.gradientBg} p-6 rounded-2xl border ${tech.borderColor} ${tech.hoverBorder} transition-all duration-300 shadow-xl shadow-black/60 overflow-hidden cursor-pointer`}
              >
                {/* Dynamic Colored Ambient Glow on Hover */}
                <div
                  className={`absolute -top-12 -right-12 w-36 h-36 ${tech.glowColor} rounded-full blur-2xl opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 pointer-events-none`}
                />
                
                {/* Subtle animated border highlight line */}
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-30 group-hover:opacity-100 transition-opacity"
                  style={{ color: tech.accentColor }}
                />

                <div className="relative z-10 flex items-center justify-between mb-4">
                  {/* Icon container with pulsing color ring */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className={`w-14 h-14 rounded-xl ${tech.iconBg} flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Colorful Category Badge */}
                  <span className={`text-[10px] font-bold uppercase font-mono tracking-wider px-3 py-1 rounded-full border shadow-sm ${tech.badgeClass}`}>
                    {tech.tag}
                  </span>
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className={`text-lg sm:text-xl font-bold text-gray-100 ${tech.titleColor} transition-colors font-shojumaru tracking-wider`}>
                    {tech.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {tech.desc}
                  </p>
                </div>

                {/* Bottom colored accent bar */}
                <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 group-hover:text-gray-200 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.accentColor }} />
                    <span className="tracking-wider uppercase font-medium">Defesa Prática</span>
                  </span>
                  <span className="font-mono text-xs font-semibold" style={{ color: tech.accentColor }}>
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Imagem Central Flutuante */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-xl shadow-2xl shadow-black/80 my-8"
          >
            <ImagePlaceholder
              src="/images/subpages/defesa-treinamento.jpg"
              alt="Treinamento com armas e desarmes de Defesa Pessoal"
              aspectRatio="aspect-[21/9]"
              caption="Prática sob supervisão: desarmes, tempo de reação e controle da distância de combate"
            />
          </motion.div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. ALÉM DO FÍSICO: MENTE, CONSCIÊNCIA E CONTROLE EMOCIONAL                 */}
        {/* ========================================================================= */}
        <motion.section
          id="defesa-consciencia"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Aspecto Psicológico & Emocional
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Avaliação de Cenário, Calma & Prevenção de Conflitos</span>
            </div>
          </div>

          {/* Grid Layout: Imagem à Esquerda, Texto à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src="/images/subpages/defesa-mental.jpg"
                  alt="Postura mental e percepção situacional no Kung Fu"
                  aspectRatio="aspect-[4/3]"
                  caption="A mente calma é a primeira linha de defesa contra qualquer perigo"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                É importante lembrar que a defesa pessoal não se resume apenas às técnicas de luta. Ela envolve também a capacidade de avaliar a situação, identificar possíveis ameaças, manter a calma e evitar conflitos desnecessários.
              </p>
              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Portanto, o treinamento de defesa pessoal no Kung Fu abrange não apenas o aspecto físico, mas também o emocional e psicológico.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-neutral-900/60 border border-red-900/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-shojumaru">
                    <Eye className="w-4 h-4 text-amber-400" />
                    <span>Consciência Situacional</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Leitura antecipada de ambientes, postura de alerta relaxado e detecção precoce de riscos.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-900/60 border border-red-900/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-shojumaru">
                    <Brain className="w-4 h-4 text-amber-400" />
                    <span>Domínio Emocional</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Controle do reflexo de pânico, clareza sob estresse e desescalada verbal de agressões.
                  </p>
                </div>
              </div>
            </div>
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
            id="cta-schedule-defesa"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de Defesa Pessoal</span>
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
