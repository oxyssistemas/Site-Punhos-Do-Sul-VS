import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Flame, Shield, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ContactSection } from '../components/ContactSection';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { JuramentosSection } from '../components/JuramentosSection';
import { HOME_CARDS, SITE_INFO } from '../data/siteData';

interface HomePageProps {
  navigate: (path: string) => void;
  initialBoxeChinesModal?: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, initialBoxeChinesModal = false }) => {
  const [isBoxeChinesModalOpen, setIsBoxeChinesModalOpen] = useState(initialBoxeChinesModal);

  useEffect(() => {
    if (initialBoxeChinesModal) {
      setIsBoxeChinesModalOpen(true);
    }
  }, [initialBoxeChinesModal]);

  const handleCardClick = (target: { id?: string; href: string } | string) => {
    const cardId = typeof target === 'string' ? '' : target.id;
    const href = typeof target === 'string' ? target : target.href;

    if (cardId === 'boxe-chines' || href === '#boxe-chines') {
      setIsBoxeChinesModalOpen(true);
      return;
    }
    if (href.startsWith('#') || href.startsWith('/#')) {
      const targetId = href.replace(/^\/?#/, '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Hero Slideshow with Impactful Entrance */}
      <HeroSlider navigate={navigate} />

      {/* 2. Top Call to Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <BottomCtaBanner
          title="Leve os ensinamentos do kung fu para sua vida"
          buttonText="Clique Aqui E Agende Sua Aula"
        />
      </motion.div>

      {/* 3. Modalidades Grid Section with Top/Bottom Gradient Blends */}
      <section id="modalidades" className="py-24 sm:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-900 text-white relative overflow-hidden">
        {/* Top/Bottom Seamless Gradient Masks */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-10" />

        {/* Ambient Martial Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] text-red-500 uppercase px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50"
            >
              Treinamento Tradicional
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
              modalidades Praticadas Em Nossa Academia
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="w-32 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto rounded-full origin-center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {HOME_CARDS.map((card, index) => (
              <motion.div
                key={card.id}
                id={`card-${card.id}`}
                initial={{ opacity: 0, y: 50, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="bg-neutral-950/85 rounded-xl overflow-hidden border border-red-900/40 hover:border-amber-400 transition-colors duration-300 flex flex-col group shadow-xl shadow-black/70 hover:shadow-2xl hover:shadow-red-950/50 relative"
              >
                {/* Image Container with smooth zoom on hover */}
                <div className="relative overflow-hidden">
                  <div className="transform transition-transform duration-700 group-hover:scale-110">
                    <ImagePlaceholder
                      src={card.imagePlaceholder}
                      alt={card.title}
                      aspectRatio="aspect-[16/10]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />
                  
                  {/* Subtle martial badge indicator on top right */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 text-xs font-chinese opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-md">
                    武
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold font-chinese uppercase tracking-wider text-3d-gold group-hover:brightness-110 transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors subtitle-shadow">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      id={`btn-saiba-mais-${card.id}`}
                      onClick={() => handleCardClick(card)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-950 via-red-900 to-red-950 group-hover:from-red-800 group-hover:via-red-700 group-hover:to-red-800 text-white font-bold text-xs uppercase tracking-widest py-3 px-4 rounded border border-red-700/60 group-hover:border-amber-400 transition-all duration-300 shadow-md group-hover:shadow-red-900/60 active:scale-98 cursor-pointer font-chinese"
                    >
                      <span>Saiba Mais</span>
                      <span className="text-amber-400 transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section: JURAMENTOS DO KUNG FU */}
      <JuramentosSection />

      {/* 5. Featured Section: OS ESTILOS ANIMAIS with Deep Transition Gradients */}
      <section id="estilos-animais" className="py-24 sm:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
        {/* Top/Bottom Seamless Transition Masks */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />

        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text Side with Slide Entrance */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-red-500 uppercase px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 inline-block">
                Sabedoria & Natureza
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                OS ESTILOS ANIMAIS
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed subtitle-shadow">
                Os animais usam seu YI (intenção e espírito) e CHI (energia interna) para caçarem, lutarem e se protegerem. Antigos artistas marciais chineses elaboraram técnicas de combate inspiradas nos animais através de estudo e observação. Esta foi a origem de muitos estilos de Kung Fu. Todavia, cada estilo tem sua própria interpretação. Alguns preferem imitar o espírito do animal, ao passo que outros tem maior interesse em suas habilidades e movimentos.
              </p>

              <div className="pt-2">
                <button
                  id="btn-conheca-os-estilos"
                  onClick={() => handleCardClick('/estilo-animal')}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border border-amber-500/70 shadow-lg shadow-red-950 hover:shadow-red-800/40 transition-all transform hover:-translate-y-0.5 cursor-pointer font-chinese"
                >
                  <span>CONHEÇA OS ESTILOS</span>
                  <span className="text-amber-400 transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>

            {/* Image Side with Perspective Lift Entrance */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-900/50 shadow-2xl shadow-black group">
                <div className="transform transition-transform duration-700 group-hover:scale-105">
                  <ImagePlaceholder
                    src="/images/estilos/banner-estilos-animais.jpg"
                    alt="Os Estilos Animais do Kung Fu"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Featured Section: ALGUMAS DAS ARMAS USADAS NO KUNG FU with Seamless Dark Gradients */}
      <section id="armas" className="py-24 sm:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
        {/* Top/Bottom Seamless Transition Masks */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />

        {/* Ambient atmospheric lighting */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-950/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-900/50 shadow-2xl shadow-black group">
                <div className="transform transition-transform duration-700 group-hover:scale-105">
                  <ImagePlaceholder
                    src="/images/armas/banner-armas-kungfu.jpg"
                    alt="Armas Tradicionais do Kung Fu"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 order-1 lg:order-2 space-y-6"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-red-500 uppercase px-3 py-1 rounded-full bg-red-950/40 border border-red-900/50 inline-block">
                Arsenal Ancestral
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                algumas das Armas usadas no Kung Fu
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-full" />
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed subtitle-shadow">
                O Kung Fu, também conhecido como Wushu, é uma forma de artes marciais chinesas que abrange uma ampla variedade de estilos e tradições. O Kung Fu não se concentra em armas específicas, mas muitos estilos incluem técnicas de armas como parte integrante do treinamento. ​ ​ Essas armas são frequentemente integradas aos estilos de Kung Fu como uma extensão do treinamento corporal e das técnicas de combate desarmado. Cada arma tem suas próprias características distintas e exige habilidades específicas para serem manejadas eficazmente. Vale ressaltar que a variedade de armas pode variar de acordo com o estilo específico de Kung Fu praticado.
              </p>

              <div className="pt-2">
                <button
                  id="btn-conheca-as-armas"
                  onClick={() => handleCardClick('/armas-do-kung-fu')}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded border border-amber-500/70 shadow-lg shadow-red-950 hover:shadow-red-800/40 transition-all transform hover:-translate-y-0.5 cursor-pointer font-chinese"
                >
                  <span>CONHEÇA AS ARMAS</span>
                  <span className="text-amber-400">→</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <ContactSection />

      {/* Boxe Chinês Information Modal (sem subpage) */}
      <AnimatePresence>
        {isBoxeChinesModalOpen && (
          <motion.div
            id="modal-boxe-chines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsBoxeChinesModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-neutral-950 border border-red-800/80 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 my-auto ring-1 ring-amber-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative martial backdrop light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                id="btn-close-boxe-chines-modal"
                onClick={() => setIsBoxeChinesModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-red-900/60 text-gray-400 hover:text-amber-300 hover:border-amber-400 transition-colors z-20 cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Modalidade Praticada • Combate & Fitness</span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Boxe Chinês
              </h2>
              <p className="text-red-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-1 mb-4 font-chinese">
                Agilidade, Potência, Defesa Pessoal e Alto Gasto Calórico
              </p>

              {/* Main Description */}
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  O <strong className="text-amber-400 font-semibold">Boxe Chinês</strong> é uma modalidade tradicional de combate das artes marciais chinesas que reúne socos rápidos e precisos, chutes potentes, bloqueios inteligentes e técnicas de projeções ao solo (quedas).
                </p>
                <p>
                  É uma prática completa que trabalha todos os grupos musculares, acelera o metabolismo e desenvolve agilidade mental, reflexos aguçados e autoconfiança para enfrentar qualquer desafio.
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-red-900/40 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-950/80 text-amber-400 shrink-0 border border-red-800/40">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide font-chinese">
                      Socos & Combinações
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                      Golpes velozes, cruzados e diretos com movimentação de pernas e esquivas fluidas.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-red-900/40 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-950/80 text-amber-400 shrink-0 border border-red-800/40">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide font-chinese">
                      Chutes de Impacto
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                      Chutes circulares, frontais e rasteiras que geram força, flexibilidade e equilíbrio.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-red-900/40 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-950/80 text-amber-400 shrink-0 border border-red-800/40">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide font-chinese">
                      Defesa & Projeções
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                      Técnicas reais de desequilíbrio e quedas para controle e autodefesa eficaz.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-red-900/40 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-950/80 text-amber-400 shrink-0 border border-red-800/40">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide font-chinese">
                      Condicionamento & Foco
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                      Treino dinâmico com queima calórica intensa, alívio do estresse e disciplina.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety & Inclusivity notice */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-amber-500/20 text-xs text-gray-300 flex items-start gap-2.5 mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300">Treinamento para Todos os Níveis:</strong> Aulas estruturadas tanto para quem nunca praticou lutas quanto para quem busca evolução técnica, com equipamentos de proteção completos e supervisão rigorosa.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="modal-boxe-chines-whatsapp"
                  href="https://api.whatsapp.com/send?phone=5543999130397&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20de%20Boxe%20Chin%C3%AAs%20na%20Academia%20Punhos%20do%20Sul."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-5 rounded-lg shadow-lg shadow-emerald-950 transition-all font-chinese cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Aula no WhatsApp</span>
                </a>

                <button
                  id="modal-boxe-chines-fale-conosco"
                  type="button"
                  onClick={() => {
                    setIsBoxeChinesModalOpen(false);
                    const el = document.getElementById('fale-conosco');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-red-950/80 text-gray-200 hover:text-amber-300 font-bold text-xs sm:text-sm uppercase tracking-wider py-3 px-5 rounded-lg border border-red-800/60 transition-all font-chinese cursor-pointer"
                >
                  <span>Falar Conosco</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

