import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import {
  ChevronRight,
  ArrowLeft,
  MessageCircle,
  Flame,
  Zap,
  Shield,
  Trophy,
  Activity,
  Scroll,
  Crosshair,
  Sparkles,
  Swords,
  Target
} from 'lucide-react';

interface SandaPageProps {
  navigate: (path: string) => void;
}

interface SandaTechnique {
  name: string;
  trans: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  badgeBg: string;
  borderColor: string;
  glowColor: string;
  hoverBorder: string;
  gradientBg: string;
  iconBg: string;
}

const SANDA_TECHNIQUES: SandaTechnique[] = [
  {
    name: 'Quan Fa (拳法)',
    trans: 'Técnicas de Braços & Punhos',
    desc: 'Socos diretos, cruzados, ganchos e uppercuts combinados com defesas ativas e esquivas de tronco.',
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    accent: '#f97316',
    badgeBg: 'bg-orange-950/80 text-orange-300 border-orange-700/50',
    borderColor: 'border-orange-900/40',
    glowColor: 'bg-orange-500/20',
    hoverBorder: 'hover:border-orange-500/80',
    gradientBg: 'from-orange-950/40 via-neutral-900/80 to-red-950/20',
    iconBg: 'bg-orange-950/60 border-orange-800/50'
  },
  {
    name: 'Tui Fa (腿法)',
    trans: 'Técnicas de Pernas & Chutes',
    desc: 'Chutes circulares, frontais, laterais, giratórios, além de eficientes varrimentos de base e defesas com tíbia.',
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    accent: '#06b6d4',
    badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/50',
    borderColor: 'border-cyan-900/40',
    glowColor: 'bg-cyan-500/20',
    hoverBorder: 'hover:border-cyan-400/80',
    gradientBg: 'from-cyan-950/40 via-neutral-900/80 to-blue-950/20',
    iconBg: 'bg-cyan-950/60 border-cyan-800/50'
  },
  {
    name: 'Qin Na (擒拿)',
    trans: 'Chaves & Apresamentos',
    desc: 'Travamentos instantâneos de membros, pegadas em chutes do oponente e alavancas para desestabilização contundente.',
    icon: <Target className="w-6 h-6 text-emerald-400" />,
    accent: '#10b981',
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50',
    borderColor: 'border-emerald-900/40',
    glowColor: 'bg-emerald-500/20',
    hoverBorder: 'hover:border-emerald-400/80',
    gradientBg: 'from-emerald-950/40 via-neutral-900/80 to-teal-950/20',
    iconBg: 'bg-emerald-950/60 border-emerald-800/50'
  },
  {
    name: 'Shuai Fa (摔法)',
    trans: 'Técnicas de Projeções & Quedas',
    desc: 'Arremessos de quadril, tesouras e catadas de perna que lançam o oponente ao solo com extrema rapidez e pontuação máxima.',
    icon: <Crosshair className="w-6 h-6 text-amber-400" />,
    accent: '#f59e0b',
    badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-700/50',
    borderColor: 'border-amber-900/40',
    glowColor: 'bg-amber-500/20',
    hoverBorder: 'hover:border-amber-400/80',
    gradientBg: 'from-amber-950/40 via-neutral-900/80 to-yellow-950/20',
    iconBg: 'bg-amber-950/60 border-amber-800/50'
  }
];

export const SandaPage: React.FC<SandaPageProps> = ({ navigate }) => {
  return (
    <div id="sanda-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Sanda Page */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/sanda-hero.jpg"
            alt="Sanda e Sanshou"
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        {/* Martial Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
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
            <span className="text-amber-400">Sanda</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Combate & Kickboxing Tradicional ( 散打 / 散手 )</span>
            </div>

            {/* Title with Shojumaru Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Sanda (Sanshou)
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Combate corpo-a-corpo moderno de alta intensidade, combinando socos, chutes rápidos e quedas contundentes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* 1. O QUE É SANDA? (Texto e Destaques)                                     */}
        {/* ========================================================================= */}
        <motion.section
          id="sanda-oque-e"
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
                O que é o Sanda?
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">散打 (Luta Livre) • 散手 (Mãos Livres)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto à Esquerda */}
            <div className="lg:col-span-7 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                Sǎndǎ (散打; literalmente "luta livre") ou Sànshǒu (散手; literalmente "mãos livres"), também conhecido como Boxe Chinês ou ainda Kickboxing Chinês, é uma forma chinesa moderna de combate corpo-a-corpo, um sistema de auto-defesa, e um esporte de combate.
              </p>
              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                O Sǎndǎ possui semelhanças com o Kickboxing, mas tem como característica principal as quedas e arremessos ao solo. É um dos componentes dos diversos estilos de Kung Fu. Os treinamentos cardio-vasculares e de resistência muscular nessa modalidade são bastante intensos, às vezes até extremos, possibilitando aos competidores um preparo físico invejável.
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
                  src="/images/subpages/sanda-intro.jpg"
                  alt="Lutadores de Sanda em Ação"
                  aspectRatio="aspect-[4/3]"
                  caption="Combinação explosiva de trocação com socos, chutes e projeções ao solo"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. HISTÓRIA (Imagem à Esquerda, Texto à Direita)                         */}
        {/* ========================================================================= */}
        <motion.section
          id="sanda-historia"
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
                História do Sanda
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Origem Militar, Critérios de Criação & Oficialização (CCEN)</span>
            </div>
          </div>

          {/* Grid Layout: Imagem à Esquerda, Texto à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Imagem à Esquerda com Animação Flutuante */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="sticky top-28 space-y-4">
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
                >
                  <ImagePlaceholder
                    src="/images/subpages/sanda-historia.jpg"
                    alt="Origem do Sanda Militar e Plataforma Leitai"
                    aspectRatio="aspect-[4/3]"
                    caption="Desenvolvimento científico com mestres de artes marciais, médicos e educadores físicos"
                  />
                </motion.div>

                {/* Destaque dos 3 Critérios */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900/90 to-red-950/40 border border-red-900/40 space-y-2">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-widest font-shojumaru">
                    Os 3 Pilares do Sanda Militar:
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-200">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <strong className="text-amber-300">1. Simplicidade</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <strong className="text-amber-300">2. Combate direto</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <strong className="text-amber-300">3. Efetivo contra oponentes mais fortes</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Texto à Direita */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                Após a guerra da Coreia, onde o Exército de Libertação Popular enfrentou diretamente as tropas americanas, o governo chinês percebeu a necessidade de investir em pesquisa e desenvolvimento visando o melhor treinamento de seu exercito, e incumbiu ao general Peng Dehuai o comando da pesquisa onde além de especialistas em artes marciais de toda China participaram médicos, educadores físicos, e demais pessoas relacionadas a atividades físicas e saúde. O novo sistema deveria observar três critérios:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 font-medium text-sm text-amber-200">
                <li className="px-3 py-2 rounded bg-neutral-900 border border-red-900/40 text-center font-shojumaru text-xs">
                  Simplicidade
                </li>
                <li className="px-3 py-2 rounded bg-neutral-900 border border-red-900/40 text-center font-shojumaru text-xs">
                  Combate direto
                </li>
                <li className="px-3 py-2 rounded bg-neutral-900 border border-red-900/40 text-center font-shojumaru text-xs">
                  Efetivo contra mais fortes
                </li>
              </ul>

              <p>
                Quase que paralelamente ao sandá militar se desenvolveu o sandá civil e competições clandestinas que acabavam com sérios danos aos competidores e eram quase que um Vale tudo ao molde dos primeiros Ultimate Fighting Championships.
              </p>

              <p>
                Em 1979, o Comitê Chinês de Esportes Nacionais (CCEN) decidiu que o sanshou estaria ligado ao wushu como esporte de competição.
              </p>

              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Devido ao espaço de tempo entre seu surgimento e a oficialização pelo governo o sanshou não tinha metodologia de treino, padronização de técnicas e principalmente regras. Até meados dos anos 80 o sanshou como esporte continuou a se desenvolver dentro de colégios e universidades ligadas à educação física, além de experimentação em campeonatos. Em 1982, o CCEN finalmente chegou a uma metodologia de treino e regras para competições que vêm sendo aos poucos modificadas. O primeiro ringue era redondo com nove metros de diâmetro.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. TÉCNICAS DO SANDA (Imagem à Esquerda, Texto e Cards à Direita)         */}
        {/* ========================================================================= */}
        <motion.section
          id="sanda-tecnicas"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Swords className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Técnicas do Sanda
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Arsenal Técnico & Sistema Eficaz de Defesa Pessoal</span>
            </div>
          </div>

          {/* Grid Layout: Imagem à Esquerda, Texto e Caixas com Animações à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Imagem à Esquerda */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="sticky top-28 space-y-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
                >
                  <ImagePlaceholder
                    src="/images/subpages/sanda-tecnicas.jpg"
                    alt="Técnicas de Sanda Quan Fa Tui Fa Qin Na Shuai Fa"
                    aspectRatio="aspect-[4/3]"
                    caption="Integração de socos rápidos, chutes devastadores e quedas plásticas de alta eficiência"
                  />
                </motion.div>
              </div>
            </div>

            {/* Texto e 4 Caixas Coloridas à Direita */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Dentre as principais técnicas do Sandá estão:
              </p>

              {/* 4 Caixas de Técnicas com Animações e Cores Exclusivas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SANDA_TECHNIQUES.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.25 }
                    }}
                    className={`group relative bg-gradient-to-br ${tech.gradientBg} p-5 rounded-xl border ${tech.borderColor} ${tech.hoverBorder} shadow-lg shadow-black/50 transition-all duration-300 overflow-hidden cursor-pointer`}
                  >
                    {/* Glowing Accent */}
                    <div
                      className={`absolute -top-10 -right-10 w-28 h-28 ${tech.glowColor} rounded-full blur-xl opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none`}
                    />

                    <div className="relative z-10 flex items-center justify-between mb-3">
                      <div className={`w-11 h-11 rounded-lg ${tech.iconBg} flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform`}>
                        {tech.icon}
                      </div>
                      <span className={`text-[10px] font-bold uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${tech.badgeBg}`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1.5">
                      <h3 className="text-base font-bold text-gray-100 group-hover:text-amber-400 transition-colors font-shojumaru tracking-wider">
                        • {tech.name}
                      </h3>
                      <h4 className="text-xs font-semibold text-amber-300">
                        {tech.trans}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Destaque final */}
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 text-amber-300 font-medium text-sm sm:text-base text-center">
                O que faz da modalidade um eficaz sistema de defesa pessoal.
              </div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 4. COMBATE (Texto e Imagem Abaixo)                                        */}
        {/* ========================================================================= */}
        <motion.section
          id="sanda-combate"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-wider text-amber-400">
                Combate e Regras Competitivas
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Pontuação em Partes Válidas, Equipamentos & Ringue Suspenso (Leitai)</span>
            </div>
          </div>

          {/* Texto do Combate */}
          <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
              O sistema de pontuação ocorre quando ocorrem golpes em partes válidas: cabeça, tronco e coxas. São proibidos golpes na parte traseira do crânio, toda região do pescoço, genital e ataques contra as articulações. Também não são permitidas projeções que lancem o oponente com a cabeça contra o solo.
            </p>
            <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
              Durante a luta, o competidor deverá usar luva de boxe, capacete, protetor de tórax, boca e genital. Nas categorias infanto-juvenil e juvenil se usa caneleira e grade no capacete. Com rounds de dois minutos onde se impera o sistema de melhor de três. As competições ocorrem em um ringue suspenso (Le Tai) com colchões protetores ao redor.
            </p>
          </div>

          {/* Imagem ABAIXO do texto com Animação Flutuante e Sem Bordas */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-xl shadow-2xl shadow-black/80 my-8"
          >
            <ImagePlaceholder
              src="/images/subpages/sanda-combate.jpg"
              alt="Combate de Sanda no Leitai com Protetores Oficiais"
              aspectRatio="aspect-[21/9]"
              caption="Arena de combate suspensa (Leitai) com atletas equipados com capacete, protetor torácico e luvas"
            />
          </motion.div>
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
            id="cta-schedule-sanda"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de Sanda</span>
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
