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
  Swords,
  Trophy,
  Activity,
  Flame,
  Zap,
  Globe
} from 'lucide-react';

interface WushuPageProps {
  navigate: (path: string) => void;
}

export const WushuPage: React.FC<WushuPageProps> = ({ navigate }) => {
  return (
    <div id="wushu-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Wushu Page */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/wushu-hero.jpg"
            alt="Wushu Arte Marcial Chinesa e Esporte Olímpico"
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
            <span className="text-gray-300">Modalidades</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-amber-400">Wushu (武術)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>A Essência das Artes Marciais Chinesas ( 武術 )</span>
            </div>

            {/* Title with Shojumaru Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Wushu
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              A harmonia sublime entre tradição milenar, plasticidade acrobática e a contundência marcial das rotinas e combate.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* IMAGEM PRINCIPAL NO TOPO                                                  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-2xl shadow-2xl shadow-black/80"
          >
            <ImagePlaceholder
              src="/images/subpages/wushu-top.jpg"
              alt="Wushu Taolu e Sanda em Demonstração"
              aspectRatio="aspect-[21/9]"
              caption="Wushu ( 武術 ): A arte marcial tradicional e esporte internacional de alta performance"
            />
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* O QUE É WUSHU?                                                            */}
        {/* ========================================================================= */}
        <motion.section
          id="wushu-oque-e"
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
                O que é?
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Origens, Evolução Histórica & Definição Oficial</span>
            </div>
          </div>

          {/* Grid Layout: Texto e Imagens Flutuantes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Texto Completo - Direto no background */}
            <div className="lg:col-span-7 space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                Wushu, cuja tradução literal significa “técnica marcial” em chinês, teve muitos nomes e interpretações ao longo do tempo. Sua forma primitiva se derivou das técnicas de caça e das lutas. Foi conhecido como “jiji” (combate técnico) nas primeiras dinastias da China, e passou a se chamar de “wuyi” (arte marcial), do século II a.C. até o século XII.
              </p>

              <p>
                Apareceu pela primeira vez como “wushu” (técnica marcial) num registro literário do século VI. No entanto, tinha conotação de técnicas militares daquela época, e ao mesmo tempo, era também conhecido por outros nomes como “wuyi” (arte marcial), etc.
              </p>

              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Na primeira metade do século XX foi chamado na China de técnica nacional (“guoshu”, que na ocasião, antes do aparecimento da ortografia adotada hoje, era transcrito como “kuoshu”) e de “kung-fu” (cuja transcrição atual seria “gongfu”) que pode ser traduzido, grosso modo, como “habilidade acumulada”. Após a Revolução de 1949 voltou a ser chamado de “wushu”.
              </p>

              <div className="p-5 rounded-xl bg-gradient-to-br from-red-950/50 via-neutral-900/80 to-amber-950/30 border border-red-800/40 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base font-shojumaru">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Definição Oficial das Autoridades Chinesas (1998):</span>
                </div>
                <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                  “Modalidade cujo conteúdo principal é constituído por movimentos de ataque e defesa e que se expressa através de rotinas (taolu) e de combate (sanda), visando tanto o aperfeiçoamento físico como espiritual.”
                </p>
              </div>

              <p className="font-semibold text-gray-100 text-3d-white">
                Sem dúvidas que a natureza do wushu é de ataque e defesa.
              </p>

              <p>
                Todo caso é muito bem definida a sua natureza de ataque e defesa, tanto nos movimentos desferidos com as mãos, como com cada uma de suas armas, configurando o wushu como arte.
              </p>

              {/* Box dos dois pilares: Taolu e Sanda */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-cyan-900/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm font-shojumaru">
                    <Swords className="w-4 h-4 text-cyan-400" />
                    <span>Rotinas (Taolu)</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Maneira artística e coreográfica de expressar o conteúdo marcial, formas corporais e manejo de armas.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-orange-900/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-orange-400 font-bold text-sm font-shojumaru">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>Combate (Sanda)</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Aplicação prática, direta e eficiente dos princípios de ataque, esquiva e projeção.
                  </p>
                </div>
              </div>

              <p>
                Como já mencionado pela definição, o wushu se expressa através de rotinas e de combate. São duas formas básicas de expressão formadas ao longo do tempo que coexistem e se complementam mutuamente. O combate refere-se à aplicação prática, enquanto as rotinas constituem uma maneira um tanto artística de se externar o mesmo conteúdo marcial.
              </p>

              {/* Seção IWUF & Movimento Olímpico */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-red-950/30 border border-amber-500/40 space-y-3 shadow-xl">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base sm:text-lg font-shojumaru">
                  <Globe className="w-5 h-5 text-amber-400" />
                  <span>International Wushu Federation (IWUF) & O Programa Olímpico</span>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  A International Wushu Federation (IWUF) anunciou que o Wushu é um dos oito esportes nomeados para seguir adiante no processo de candidatura a modalidade do Programa Olímpico para os Tóquio 2020. Dentre 26 candidatos, o Wushu foi selecionado (junto com baseball e softball, squash, karatê, boliche, escalada, patinação e surfe) para avançar ao segundo estágio do processo de candidatura, a IWUF irá submeter mais detalhes sobre a modalidade no dia 22 de Julho. O corpo diretivo da IWUF irá participar de uma entrevista com Comitê Executivo das Olimpíadas de Tóquio 2020 nos dias 7 e 8 de Agosto, e a decisão final do Comitê Olímpico Brasileiro, COI, será anunciada no Rio de Janeiro, em Agosto de 2016.
                </p>
              </div>
            </div>

            {/* Imagens Laterais com Animações Flutuantes Suaves */}
            <div className="lg:col-span-5 space-y-6">
              <div className="sticky top-28 space-y-6">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
                >
                  <ImagePlaceholder
                    src="/images/subpages/wushu-taolu.jpg"
                    alt="Prática de Taolu e Rotinas de Wushu Moderno"
                    aspectRatio="aspect-[4/3]"
                    caption="Expressão estética e rigor marcial nas rotinas (Taolu) com armas tradicionais"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
                >
                  <ImagePlaceholder
                    src="/images/subpages/wushu-olimpico.jpg"
                    alt="Campeonato Mundial da IWUF de Wushu"
                    aspectRatio="aspect-[4/3]"
                    caption="Competições mundiais organizadas pela Federação Internacional de Wushu (IWUF)"
                  />
                </motion.div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-red-900/40 text-center space-y-1">
                  <div className="text-amber-400 font-bold font-shojumaru text-sm">
                    武 術 • 武 藝 • 國 術
                  </div>
                  <p className="text-xs text-gray-400">
                    Jiji → Wuyi → Kuoshu → Gongfu → Wushu Moderno
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
            id="cta-schedule-wushu"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de Wushu</span>
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
