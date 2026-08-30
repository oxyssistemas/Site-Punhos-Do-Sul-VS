import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import {
  ChevronRight,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  Scroll,
  Heart,
  Shield,
  Clock,
  Compass,
  Sun,
  Flame,
  Zap,
  Award,
  Brain,
  Scale
} from 'lucide-react';

interface FilosofiaPageProps {
  navigate: (path: string) => void;
}

interface PhilosophyPrinciple {
  title: string;
  chinese: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  gradientBg: string;
  borderColor: string;
  hoverBorder: string;
  glowColor: string;
  badgeClass: string;
  titleColor: string;
}

const PRINCIPLES: PhilosophyPrinciple[] = [
  {
    title: 'Yin e Yang',
    chinese: '陰陽 (Yīn Yáng)',
    desc: 'O equilíbrio é uma parte essencial da filosofia do Kung Fu. A dualidade entre yin e yang representa a interdependência de forças opostas e a busca pela harmonia entre elas. No Kung Fu, isso se traduz na integração de movimentos suaves e duros, rápidos e lentos.',
    icon: <Scale className="w-6 h-6 text-amber-400" />,
    accent: '#f59e0b',
    gradientBg: 'from-amber-950/40 via-neutral-900/80 to-yellow-950/20',
    borderColor: 'border-amber-900/40',
    hoverBorder: 'hover:border-amber-400/80',
    glowColor: 'bg-amber-500/20',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-700/50',
    titleColor: 'group-hover:text-amber-400'
  },
  {
    title: 'Taoísmo',
    chinese: '道教 (Dàojiào)',
    desc: 'O Kung Fu muitas vezes incorpora princípios do Taoísmo, que enfatiza viver em harmonia com o Tao, o caminho natural do universo. A busca pela simplicidade, fluidez e aceitação das mudanças é central no Kung Fu, refletindo ideias taoístas.',
    icon: <Compass className="w-6 h-6 text-cyan-400" />,
    accent: '#06b6d4',
    gradientBg: 'from-cyan-950/40 via-neutral-900/80 to-blue-950/20',
    borderColor: 'border-cyan-900/40',
    hoverBorder: 'hover:border-cyan-400/80',
    glowColor: 'bg-cyan-500/20',
    badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/50',
    titleColor: 'group-hover:text-cyan-400'
  },
  {
    title: 'Respeito',
    chinese: '尊重 (Zūnzhòng)',
    desc: 'O Kung Fu promove valores como respeito pelos instrutores, colegas de treino, adversários e até mesmo pelos próprios limites. O respeito é considerado crucial para o desenvolvimento do praticante como pessoa, além de ser fundamental para a ética marcial.',
    icon: <Heart className="w-6 h-6 text-rose-400" />,
    accent: '#f43f5e',
    gradientBg: 'from-rose-950/40 via-neutral-900/80 to-pink-950/20',
    borderColor: 'border-rose-900/40',
    hoverBorder: 'hover:border-rose-400/80',
    glowColor: 'bg-rose-500/20',
    badgeClass: 'bg-rose-950/80 text-rose-300 border-rose-700/50',
    titleColor: 'group-hover:text-rose-400'
  },
  {
    title: 'Disciplina e Paciência',
    chinese: '紀律與耐心 (Jìlǜ)',
    desc: 'A prática do Kung Fu exige disciplina e paciência. A maestria não é alcançada rapidamente; é um processo gradual que requer dedicação e constante autoaperfeiçoamento. A paciência é valorizada tanto no treinamento físico quanto no desenvolvimento pessoal.',
    icon: <Clock className="w-6 h-6 text-orange-400" />,
    accent: '#f97316',
    gradientBg: 'from-orange-950/40 via-neutral-900/80 to-red-950/20',
    borderColor: 'border-orange-900/40',
    hoverBorder: 'hover:border-orange-500/80',
    glowColor: 'bg-orange-500/20',
    badgeClass: 'bg-orange-950/80 text-orange-300 border-orange-700/50',
    titleColor: 'group-hover:text-orange-400'
  },
  {
    title: 'Autodefesa e Ética',
    chinese: '自衛與武德 (Wǔ Dé)',
    desc: 'Embora o Kung Fu seja uma arte marcial, muitas escolas enfatizam a autodefesa em detrimento da agressão desnecessária. A ética do Kung Fu frequentemente destaca o uso responsável das habilidades adquiridas e o respeito pela integridade dos outros.',
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    accent: '#10b981',
    gradientBg: 'from-emerald-950/40 via-neutral-900/80 to-teal-950/20',
    borderColor: 'border-emerald-900/40',
    hoverBorder: 'hover:border-emerald-400/80',
    glowColor: 'bg-emerald-500/20',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50',
    titleColor: 'group-hover:text-emerald-400'
  },
  {
    title: 'Caminho do Guerreiro',
    chinese: '尚武之道 (Shàng Wǔ)',
    desc: 'Muitas tradições de Kung Fu veem o praticante como um guerreiro que busca não apenas a maestria nas técnicas de combate, mas também um entendimento mais profundo da vida, da moralidade e do propósito.',
    icon: <Award className="w-6 h-6 text-purple-400" />,
    accent: '#a855f7',
    gradientBg: 'from-purple-950/40 via-neutral-900/80 to-indigo-950/20',
    borderColor: 'border-purple-900/40',
    hoverBorder: 'hover:border-purple-400/80',
    glowColor: 'bg-purple-500/20',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-700/50',
    titleColor: 'group-hover:text-purple-400'
  },
  {
    title: 'Cultivo da Mente e do Corpo',
    chinese: '身心修養 (Shēnxīn)',
    desc: 'O Kung Fu não se limita ao desenvolvimento físico; também busca o cultivo da mente. Isso pode envolver práticas de meditação, concentração e reflexão para alcançar um equilíbrio holístico entre mente e corpo.',
    icon: <Brain className="w-6 h-6 text-sky-400" />,
    accent: '#38bdf8',
    gradientBg: 'from-sky-950/40 via-neutral-900/80 to-indigo-950/20',
    borderColor: 'border-sky-900/40',
    hoverBorder: 'hover:border-sky-400/80',
    glowColor: 'bg-sky-500/20',
    badgeClass: 'bg-sky-950/80 text-sky-300 border-sky-700/50',
    titleColor: 'group-hover:text-sky-400'
  }
];

export const FilosofiaPage: React.FC<FilosofiaPageProps> = ({ navigate }) => {
  return (
    <div id="filosofia-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/filosofia-hero.jpg"
            alt="Filosofia e Ética Marcial Wu De no Kung Fu"
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        {/* Ambient Glow */}
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
            <span className="text-gray-300">Cultura Marcial</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-amber-400">Filosofia Marcial (武德)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sabedoria Ancestral & Ética Marcial ( 武德 - Wǔ Dé )</span>
            </div>

            {/* Title with Shojumaru Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Filosofia
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Uma abordagem de vida que transcende o combate físico, cultivando o espírito, o caráter e a harmonia com o universo.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* 1. INTRODUÇÃO DA FILOSOFIA (Texto e Imagem Flutuante)                     */}
        {/* ========================================================================= */}
        <motion.section
          id="filosofia-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                A Filosofia do Kung Fu
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Tradição Milenar, Harmonia & Propósito Moral</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto à Esquerda */}
            <div className="lg:col-span-7 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                A filosofia do Kung Fu é profunda e está enraizada nas tradições culturais chinesas. Ela não se limita apenas às técnicas de combate físico, mas também abrange aspectos mentais, espirituais e éticos.
              </p>

              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Várias formas de Kung Fu têm diferentes filosofias associadas, mas algumas ideias fundamentais permeiam muitas escolas. Aqui estão alguns princípios filosóficos comuns do Kung Fu:
              </p>

              {/* Callout de valores */}
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-red-900/40 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-shojumaru">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Wu Dé (武德) — A Virtude Marcial</span>
                </div>
                <p className="text-xs text-gray-300">
                  O verdadeiro mestre vence sem lutar; seu maior triunfo é a conquista de si mesmo, o controle do ego e o serviço à comunidade.
                </p>
              </div>
            </div>

            {/* Imagem à Direita com Efeito Flutuante e Sem Bordas */}
            <div className="lg:col-span-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src="/images/subpages/filosofia-intro.jpg"
                  alt="Mestre de Kung Fu meditando em harmonia"
                  aspectRatio="aspect-[4/3]"
                  caption="A união indissolúvel entre mente lúcida, corpo treinado e espírito sereno"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. PRINCÍPIOS FILOSÓFICOS COM ANIMAÇÕES COLORIDAS                         */}
        {/* ========================================================================= */}
        <motion.section
          id="filosofia-principios"
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
                Princípios Fundamentais
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Os 7 Pilares de Sabedoria & Conduta Marcial</span>
            </div>
          </div>

          {/* Grid dos 7 Princípios com Animações Coloridas Individuais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className={`group relative bg-gradient-to-br ${principle.gradientBg} p-6 rounded-2xl border ${principle.borderColor} ${principle.hoverBorder} transition-all duration-300 shadow-xl shadow-black/60 overflow-hidden cursor-pointer flex flex-col justify-between`}
              >
                {/* Glow Colorido */}
                <div
                  className={`absolute -top-12 -right-12 w-36 h-36 ${principle.glowColor} rounded-full blur-2xl opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 pointer-events-none`}
                />

                {/* Linha de Destaque Superior */}
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-30 group-hover:opacity-100 transition-opacity"
                  style={{ color: principle.accent }}
                />

                <div>
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                      className="w-13 h-13 rounded-xl bg-neutral-950/80 border border-white/10 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                    >
                      {principle.icon}
                    </motion.div>

                    <span className={`text-[10px] font-bold uppercase font-mono tracking-wider px-3 py-1 rounded-full border shadow-sm ${principle.badgeClass}`}>
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-1.5 mb-3">
                    <h3 className={`text-lg sm:text-xl font-bold text-gray-100 ${principle.titleColor} transition-colors font-shojumaru tracking-wider`}>
                      {principle.title}
                    </h3>
                    <div className="text-xs font-semibold text-amber-300/90 font-mono">
                      {principle.chinese}
                    </div>
                  </div>

                  <p className="relative z-10 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </div>

                {/* Rodapé do Card */}
                <div className="relative z-10 mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400 group-hover:text-gray-200 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: principle.accent }} />
                    <span className="tracking-wider uppercase font-medium">Conduta & Vida</span>
                  </span>
                  <span className="font-mono text-xs font-semibold" style={{ color: principle.accent }}>
                    Pilar 0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========================================================================= */}
          {/* 3. CONCLUSÃO SOBRE A FILOSOFIA                                            */}
          {/* ========================================================================= */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900/95 via-neutral-900/80 to-red-950/40 border border-amber-500/40 space-y-4 shadow-2xl mt-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-amber-400">
                <Scroll className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 font-shojumaru tracking-wider">
                O Kung Fu Como Abordagem de Vida
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              É importante notar que diferentes escolas e estilos de Kung Fu podem enfatizar aspectos diferentes desses princípios filosóficos. A filosofia do Kung Fu não é apenas um conjunto de ideias abstratas, mas sim uma abordagem de vida que visa o crescimento pessoal e espiritual, além da habilidade física.
            </p>
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
            id="cta-schedule-filosofia"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula Experimental de Kung Fu</span>
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
