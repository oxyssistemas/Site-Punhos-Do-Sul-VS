import React from 'react';
import { motion } from 'motion/react';
import { ANIMAL_STYLES, SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ChevronRight, ArrowLeft, MessageCircle, Sparkles, Flame, Wind, Zap, Eye, Compass, Activity, Shield } from 'lucide-react';

interface EstiloAnimalPageProps {
  navigate: (path: string) => void;
}

// Visual color schemes and energy characteristics per animal
interface AnimalTheme {
  primaryColor: string; // Tailwind color name / hex representation
  borderColor: string;
  hoverBorder: string;
  shadowGlow: string;
  gradientBg: string;
  accentText: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  auraBg: string;
  icon: React.ReactNode;
  elementName: string;
  attribute: string;
}

const ANIMAL_THEMES: Record<string, AnimalTheme> = {
  tigre: {
    primaryColor: 'orange',
    borderColor: 'border-orange-900/40',
    hoverBorder: 'group-hover:border-orange-500',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(249,115,22,0.4)]',
    gradientBg: 'group-hover:from-orange-950/40 group-hover:via-neutral-900 group-hover:to-amber-950/30',
    accentText: 'group-hover:text-orange-400 text-orange-400',
    tagBg: 'bg-orange-950/80',
    tagBorder: 'border-orange-500/50',
    tagText: 'text-orange-300',
    auraBg: 'bg-orange-500/25',
    icon: <Flame className="w-4 h-4 text-orange-400" />,
    elementName: 'Elemento Fogo',
    attribute: 'Força & Voracidade',
  },
  dragao: {
    primaryColor: 'yellow',
    borderColor: 'border-amber-900/40',
    hoverBorder: 'group-hover:border-yellow-400',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(234,179,8,0.45)]',
    gradientBg: 'group-hover:from-yellow-950/40 group-hover:via-neutral-900 group-hover:to-red-950/30',
    accentText: 'group-hover:text-yellow-300 text-amber-400',
    tagBg: 'bg-yellow-950/80',
    tagBorder: 'border-yellow-400/50',
    tagText: 'text-yellow-300',
    auraBg: 'bg-yellow-400/25',
    icon: <Sparkles className="w-4 h-4 text-yellow-400" />,
    elementName: 'Espírito Divino',
    attribute: 'Sabedoria & Poder',
  },
  garca: {
    primaryColor: 'cyan',
    borderColor: 'border-cyan-900/40',
    hoverBorder: 'group-hover:border-cyan-400',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.4)]',
    gradientBg: 'group-hover:from-cyan-950/40 group-hover:via-neutral-900 group-hover:to-sky-950/30',
    accentText: 'group-hover:text-cyan-300 text-cyan-400',
    tagBg: 'bg-cyan-950/80',
    tagBorder: 'border-cyan-400/50',
    tagText: 'text-cyan-300',
    auraBg: 'bg-cyan-400/25',
    icon: <Wind className="w-4 h-4 text-cyan-300" />,
    elementName: 'Elemento Ar',
    attribute: 'Harmonia & Esquiva',
  },
  leopardo: {
    primaryColor: 'amber',
    borderColor: 'border-amber-900/40',
    hoverBorder: 'group-hover:border-amber-400',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]',
    gradientBg: 'group-hover:from-amber-950/40 group-hover:via-neutral-900 group-hover:to-orange-950/30',
    accentText: 'group-hover:text-amber-300 text-amber-400',
    tagBg: 'bg-amber-950/80',
    tagBorder: 'border-amber-400/50',
    tagText: 'text-amber-300',
    auraBg: 'bg-amber-400/25',
    icon: <Zap className="w-4 h-4 text-amber-400" />,
    elementName: 'Velocidade Pura',
    attribute: 'Agilidade & Explosão',
  },
  'louva-deus': {
    primaryColor: 'emerald',
    borderColor: 'border-emerald-900/40',
    hoverBorder: 'group-hover:border-emerald-400',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.45)]',
    gradientBg: 'group-hover:from-emerald-950/40 group-hover:via-neutral-900 group-hover:to-green-950/30',
    accentText: 'group-hover:text-emerald-300 text-emerald-400',
    tagBg: 'bg-emerald-950/80',
    tagBorder: 'border-emerald-400/50',
    tagText: 'text-emerald-300',
    auraBg: 'bg-emerald-400/25',
    icon: <Shield className="w-4 h-4 text-emerald-400" />,
    elementName: 'Garra de Jade',
    attribute: 'Precisão & Pegada',
  },
  aguia: {
    primaryColor: 'blue',
    borderColor: 'border-blue-900/40',
    hoverBorder: 'group-hover:border-blue-400',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]',
    gradientBg: 'group-hover:from-blue-950/40 group-hover:via-neutral-900 group-hover:to-indigo-950/30',
    accentText: 'group-hover:text-blue-300 text-blue-400',
    tagBg: 'bg-blue-950/80',
    tagBorder: 'border-blue-400/50',
    tagText: 'text-blue-300',
    auraBg: 'bg-blue-400/25',
    icon: <Eye className="w-4 h-4 text-blue-400" />,
    elementName: 'Visão Celestial',
    attribute: 'Qinna & Articulações',
  },
  serpente: {
    primaryColor: 'purple',
    borderColor: 'border-purple-900/40',
    hoverBorder: 'group-hover:border-purple-400',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]',
    gradientBg: 'group-hover:from-purple-950/40 group-hover:via-neutral-900 group-hover:to-fuchsia-950/30',
    accentText: 'group-hover:text-purple-300 text-purple-400',
    tagBg: 'bg-purple-950/80',
    tagBorder: 'border-purple-400/50',
    tagText: 'text-purple-300',
    auraBg: 'bg-purple-400/25',
    icon: <Compass className="w-4 h-4 text-purple-400" />,
    elementName: 'Energia Oculta',
    attribute: 'Fluidez & Pontos Vitais',
  },
  macaco: {
    primaryColor: 'rose',
    borderColor: 'border-rose-900/40',
    hoverBorder: 'group-hover:border-rose-400',
    shadowGlow: 'hover:shadow-[0_0_35px_rgba(244,63,94,0.4)]',
    gradientBg: 'group-hover:from-rose-950/40 group-hover:via-neutral-900 group-hover:to-amber-950/30',
    accentText: 'group-hover:text-rose-300 text-rose-400',
    tagBg: 'bg-rose-950/80',
    tagBorder: 'border-rose-400/50',
    tagText: 'text-rose-300',
    auraBg: 'bg-rose-400/25',
    icon: <Activity className="w-4 h-4 text-rose-400" />,
    elementName: 'Dinamismo Acrobático',
    attribute: 'Saltos & Imprevisibilidade',
  },
};

export const EstiloAnimalPage: React.FC<EstiloAnimalPageProps> = ({ navigate }) => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen relative overflow-hidden">
      {/* Hero Header with Immersive Martial Gradient Background */}
      <div className="relative py-20 sm:py-28 bg-gradient-to-b from-red-950/95 via-neutral-900 to-neutral-950 border-b border-red-900/40 overflow-hidden">
        {/* Seamless edge blend gradients */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />

        {/* Ambient atmospheric glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            <button onClick={() => navigate('/')} className="hover:text-amber-400 transition-colors">
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-gray-300">Modalidades</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-amber-400">Estilos Animais</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-red-500 uppercase">
              Tradição Ancestral Shaolin
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-shojumaru tracking-wider text-3d-gold">
              Estilos Animais
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light subtitle-shadow">
              Os animais usam seu YI (intenção e espírito) e CHI (energia interna) para caçarem, lutarem e se protegerem. Antigos mestres elaboraram técnicas inspiradas nos animais através de estudo e observação rigorosa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase font-chinese">
            Poder e Filosofia
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
            Conheça Alguns Dos Estilos Animais
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 subtitle-shadow font-chinese">
            Passe o mouse sobre os estilos para despertar a energia, cor e atributos marciais de cada animal.
          </p>
        </motion.div>

        {/* Animals Grid with Dynamic Color Themed Animations on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ANIMAL_STYLES.map((animal, index) => {
            const theme = ANIMAL_THEMES[animal.id] || ANIMAL_THEMES.tigre;

            return (
              <motion.div
                key={animal.id}
                id={`estilo-${animal.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative group rounded-2xl overflow-hidden bg-neutral-900/90 border ${theme.borderColor} ${theme.hoverBorder} ${theme.shadowGlow} transition-all duration-500 flex flex-col shadow-2xl backdrop-blur-sm`}
              >
                {/* Background Ambient Colored Aura Glow (Intensifies on Hover) */}
                <div
                  className={`absolute -top-12 -right-12 w-64 h-64 ${theme.auraBg} rounded-full blur-[90px] opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />
                <div
                  className={`absolute -bottom-12 -left-12 w-64 h-64 ${theme.auraBg} rounded-full blur-[90px] opacity-10 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Subtle Dynamic Gradient Background that transitions in on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent ${theme.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Card Top: Animal Image with dynamic overlay and badge */}
                <div className="relative overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    <ImagePlaceholder
                      src={animal.imagePlaceholder}
                      alt={animal.name}
                      aspectRatio="aspect-[16/9]"
                    />
                  </div>

                  {/* Gradient shadow to blend text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  {/* Floating Attribute Tag in the Animal's Theme */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-chinese uppercase tracking-wider backdrop-blur-md transition-all duration-300 shadow-lg border group-hover:scale-105 group-hover:shadow-md">
                    <span className={`inline-flex items-center gap-1.5 ${theme.tagBg} ${theme.tagBorder} ${theme.tagText} px-2.5 py-0.5 rounded-full border`}>
                      {theme.icon}
                      <span>{theme.attribute}</span>
                    </span>
                  </div>

                  {/* Animal Title and Chinese Subtitle */}
                  <div className="absolute bottom-3 left-5 right-5 z-10 flex items-end justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-gray-300 block font-chinese font-semibold mb-0.5">
                        Estilo Shaolin
                      </span>
                      <h3 className={`text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider drop-shadow-md transition-colors duration-300 ${theme.accentText}`}>
                        {animal.name}
                      </h3>
                    </div>

                    {animal.chineseName && (
                      <span className="text-xs font-mono text-gray-300 bg-black/60 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
                        {animal.chineseName}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description & Martial Metadata */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-5 relative z-10">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {animal.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-800 flex flex-wrap justify-between items-center text-xs gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-gray-400 group-hover:text-gray-200 transition-colors font-medium">
                        {theme.elementName}
                      </span>
                    </div>

                    <span className="text-gray-500 font-mono text-[11px] bg-black/40 px-2 py-0.5 rounded border border-neutral-800">
                      path: {animal.imagePlaceholder}
                    </span>
                  </div>
                </div>

                {/* Color-accented Bottom Active Line */}
                <div className="h-1 w-full bg-neutral-800 overflow-hidden relative">
                  <div
                    className={`h-full w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-r ${
                      animal.id === 'tigre'
                        ? 'from-orange-600 via-amber-400 to-orange-500'
                        : animal.id === 'dragao'
                        ? 'from-amber-500 via-yellow-300 to-red-500'
                        : animal.id === 'garca'
                        ? 'from-cyan-500 via-sky-300 to-blue-500'
                        : animal.id === 'leopardo'
                        ? 'from-amber-600 via-yellow-400 to-amber-500'
                        : animal.id === 'louva-deus'
                        ? 'from-emerald-600 via-green-300 to-teal-500'
                        : animal.id === 'aguia'
                        ? 'from-blue-600 via-sky-300 to-indigo-500'
                        : animal.id === 'serpente'
                        ? 'from-purple-600 via-fuchsia-300 to-violet-500'
                        : 'from-rose-600 via-amber-300 to-red-500'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Back and Booking Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-red-900/30"
        >
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-amber-400 transition-colors cursor-pointer font-chinese"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>

          <a
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all hover:scale-105 font-chinese"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula Experimental</span>
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

