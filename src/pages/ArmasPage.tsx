import React from 'react';
import { motion } from 'motion/react';
import { WEAPONS_ITEMS, SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ChevronRight, ArrowLeft, MessageCircle, Swords } from 'lucide-react';

interface ArmasPageProps {
  navigate: (path: string) => void;
}

export const ArmasPage: React.FC<ArmasPageProps> = ({ navigate }) => {
  return (
    <div id="armas-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/90 via-neutral-900 to-neutral-950 border-b border-red-900/30 overflow-hidden">
        {/* Ambient Martial Glow Effect */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4"
          >
            <button onClick={() => navigate('/')} className="hover:text-amber-400 transition-colors cursor-pointer">
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-gray-300">Modalidades</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-amber-400">Armas Do Kung Fu</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest font-chinese">
              <Swords className="w-3.5 h-3.5 text-amber-400" />
              <span>Arsenal Tradicional & Extensão do Corpo</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-shojumaru uppercase tracking-wider text-3d-gold">
              Armas do Kung Fu
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light subtitle-shadow">
              O Kung Fu, também conhecido como Wushu, é uma forma de artes marciais chinesas que abrange uma ampla variedade de estilos e tradições. As armas são integradas aos estilos de Kung Fu como uma extensão natural do corpo e do espírito marcial.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-neutral-900/70 border border-red-900/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed relative z-10 border-l-2 border-amber-500 pl-4 font-chinese">
            Cada arma possui suas próprias características distintas e exige habilidades específicas para ser manejada com eficácia e segurança. O treinamento com armas desenvolve coordenação motora refinada, reflexos apurados, equilíbrio de peso e força nos punhos e braços.
          </p>
        </motion.div>

        {/* Weapons Armory Grid with Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {WEAPONS_ITEMS.map((weapon, index) => (
            <motion.div
              key={weapon.id}
              id={`arma-${weapon.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 5) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="bg-neutral-900/80 border border-red-900/40 rounded-xl overflow-hidden hover:border-amber-500/80 transition-colors duration-300 flex flex-col group shadow-lg shadow-black/80 hover:shadow-2xl hover:shadow-red-950/40"
            >
              {/* Weapon Image Placeholder */}
              <div className="p-3 bg-neutral-950/60 overflow-hidden relative">
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  <ImagePlaceholder
                    src={weapon.imagePlaceholder}
                    alt={weapon.name}
                    aspectRatio="aspect-square"
                  />
                </div>
              </div>

              {/* Weapon Info */}
              <div className="p-3.5 flex flex-col flex-grow justify-between border-t border-red-950">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors uppercase font-display leading-tight">
                    {weapon.name}
                  </h3>
                  {weapon.category && (
                    <span className="inline-block text-[10px] text-gray-400 uppercase tracking-wider mt-1 font-chinese">
                      {weapon.category}
                    </span>
                  )}
                </div>
                <div className="mt-2 pt-2 border-t border-red-900/20">
                  <span className="text-[9px] font-mono text-red-400/70 truncate block">
                    {weapon.imagePlaceholder}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back and Booking Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-red-900/30"
        >
          <button
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
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de Armas</span>
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
