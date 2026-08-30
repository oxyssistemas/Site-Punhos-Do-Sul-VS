import React from 'react';
import { motion } from 'motion/react';
import { HeroSlider } from '../components/HeroSlider';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ContactSection } from '../components/ContactSection';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { JuramentosSection } from '../components/JuramentosSection';
import { HOME_CARDS } from '../data/siteData';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const handleCardClick = (href: string) => {
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
                      onClick={() => handleCardClick(card.href)}
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
    </div>
  );
};

