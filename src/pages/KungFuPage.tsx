import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import { ChevronRight, ArrowLeft, MessageCircle, ShieldCheck, Flame, Scroll, Sparkles } from 'lucide-react';

interface KungFuPageProps {
  navigate: (path: string) => void;
}

export const KungFuPage: React.FC<KungFuPageProps> = ({ navigate }) => {
  return (
    <div id="kung-fu-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Kung Fu Page */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder with overlay */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/kungfu-hero.jpg"
            alt="Kung Fu Tradicional Shaolin"
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
            <span className="text-amber-400">Kung Fu</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span>Arte Marcial Tradicional Chinesa</span>
            </div>

            {/* Title with Shojumaru Chinese Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Kung Fu
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Mais que uma arte marcial: um caminho milenar de disciplina, superação corporal e elevação mental.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Sections - Directly on background without boxed containers */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* 1. O QUE É? (Escrita à Esquerda, Imagem à Direita) - Sem caixa           */}
        {/* ========================================================================= */}
        <motion.section
          id="kungfu-oque-e"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4 mb-8">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                O que é?
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Definição & Origens Milenares</span>
            </div>
          </div>

          {/* Grid Layout: Escrita à Esquerda (col 1), Imagem à Direita (col 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Escrita à Esquerda - Direto no background */}
            <div className="lg:col-span-7 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                O Kung Fu é considerado umas das artes marciais chinesas mais antigas do mundo. O termo chinês significa “arte da guerra”. A expressão Kung Fu também se refere a algo que foi conquistado com muito esforço e competência no momento da luta corporal.
              </p>
              <p>
                Originalmente chamado de wushu (que significa “arte da guerra”, em mandarim), o kung fu surgiu da necessidade de lutar contra animais ferozes e inimigos. Este estilo de luta teria sido criado há aproximadamente 4 mil anos.
              </p>
              <p>
                O treinamento envolve exercicios fisicos e mentais, utilizando tecnicas de luta com ou sem armas tradicionais chinesas, como bastão, facão, lança e espada.
              </p>
              <p className="text-amber-300 font-medium">
                Um diferencial do kung fu é que antigos lutadores chineses após observarem e estudarem alguns animais, desenvolveram tecnicas e estilos de luta inspirados nesses animais que são, Tigre, Serpente, Dragão, Pantera e Garça.
              </p>
            </div>

            {/* Imagem à Direita com Animação Flutuante Suave */}
            <div className="lg:col-span-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src="/images/subpages/kungfu-oquee.jpg"
                  alt="O que é Kung Fu - Prática Marcial Chinesa"
                  aspectRatio="aspect-[4/3]"
                  caption="Treinamento marcial, foco e domínio corporal"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. HISTÓRIA (Imagem à Esquerda, Escrita à Direita) - Sem caixa           */}
        {/* ========================================================================= */}
        <motion.section
          id="kungfu-historia"
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
              <span className="text-xs font-mono text-gray-400 tracking-wider">Lendas, Bodhidharma & Evolução Dinástica</span>
            </div>
          </div>

          {/* Grid Layout: Imagem à Esquerda (col 1), Escrita à Direita (col 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Imagem à Esquerda com Animação Flutuante Suave */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="sticky top-28 space-y-4">
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
                >
                  <ImagePlaceholder
                    src="/images/subpages/kungfu-historia.jpg"
                    alt="História do Kung Fu e Templo Shaolin"
                    aspectRatio="aspect-[4/3]"
                    caption="Origens no Mosteiro Shaolin e herança de Bodhidharma"
                  />
                </motion.div>

                {/* Destaque histórico complementar */}
                <div className="border-l-2 border-amber-500 pl-4 py-1 text-xs text-gray-300 space-y-1">
                  <div className="font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-red-500" />
                    Tradição Shaolin
                  </div>
                  <p>
                    Da proteção contra invasões até o cinema mundial moderno com Bruce Lee e Jackie Chan, o Kung Fu atravessou dinastias mantendo viva sua essência.
                  </p>
                </div>
              </div>
            </div>

            {/* Escrita à Direita - Direto no background */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="font-medium text-amber-300 text-lg sm:text-xl text-3d-white border-l-2 border-amber-500 pl-4">
                Por ser uma das artes marciais mais antigas do mundo, existe muitas lendas sobre sua origem.
              </p>
              <p>
                Em uma delas acredita-se que o kung-fu tenha surgido na Índia e tenha sido levado à China apenas por volta de 500 d.C. pelo monge Bodidharma, que teria incluído a meditação como parte integrante da arte marcial. Sua origem budista foi parcialmente modificada ao se instalar no templo chinês Shaolin. Isso porque o budismo indiano pregava o ascetismo de seus praticantes, enquanto a versão budista de Bodidharma apenas impedia o praticante do exercício de atitudes extremas, como matar e roubar.
              </p>
              <p>
                Até esse momento, as práticas do kung-fu eram transmitidas apenas entre monges, caracterizando uma relação íntima entre discípulo e mestre. No entanto, a partir dos séculos XIV e XV, especificamente durante o governo da dinastia Ming, houve um crescimento na quantidade de praticantes do kung-fu bastante significativo. Assim, se antes as técnicas do kung-fu permaneciam em segredo entre os monges do templo Shaolin, após esse período técnicas de outras artes marciais foram agrupadas à prática dos monges, e o kung-fu deixou de ser um segredo, tornando-se uma técnica a ser aprendida e ensinada. Esse processo permitiu à dinastia Ming o uso dos monges como soldados, protegendo seu território contra piratas japoneses por mais de uma vez.
              </p>
              <p className="border-l-2 border-amber-500 pl-4 text-gray-100 italic">
                Outra lenda muito conhecida narra a história de um monge chinês chamado Ta Mo, que subiu em uma montanha para observar o movimento dos animais, as posições em que lutavam e como se defendiam.
              </p>
              <p>
                A partir dessa observação teria surgido o kung fu, que para os orientais é considerado uma arte, e não uma luta. Sabe-se que durante muito tempo, os ensinamentos do kung fu ficavam restritos aos monges, somente por volta do século XIV é que a técnica passou a ser ensinada a todos que tivessem o interesse.
              </p>
              <p className="text-gray-100 font-medium">
                Fora do Oriente, o kung fu se popularizou no final dos anos de 1960, pela repercussão das séries e filmes de artes marciais, especialmente os estrelados pelos atores Bruce Lee e Jackie Chan.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. CARACTERÍSTICAS (Escrita Acima, Imagem Abaixo) - Sem caixa              */}
        {/* ========================================================================= */}
        <motion.section
          id="kungfu-caracteristicas"
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
                Características
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Armas Tradicionais, Filosofia & Disciplina Mental</span>
            </div>
          </div>

          {/* Escrita ACIMA - Direto no background */}
          <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
              Uma das características mais visíveis do kung-fu é o uso de armas. A manipulação técnica de armas para o combate remete à evolução da técnica em função de combates de guerra. Os instrumentos mais comuns são o bastão, a lança, o facão e a espada. Essas técnicas extremamente desenvolvidas de manipulação de armas caíram em desuso para soldados quando as armas de fogo passaram a ser utilizadas em campos de batalha. No entanto, ainda são parte integrante da prática do kung-fu até os dias de hoje.
            </p>
            <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
              O kung fu tem o objetivo de desenvolver corpo e a mente, criando disciplina, persistência e respeito aos limites dos indivíduos. Há uma filosofia por trás da arte marcial que busca a evolução dos praticantes, ensinando a serem derrotados e encararem novos obstáculos sem desistir ou desanimar.
            </p>
            <p>
              Esses preceitos fazem parte do kung fu tradicional, que ainda foca parte essencial do treinamento na filosofia chinesa, sendo praticado por pessoas de todas as idades.
            </p>
          </div>

          {/* Imagem ABAIXO com Animação Flutuante Suave */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-xl shadow-2xl shadow-black/80 my-6"
          >
            <ImagePlaceholder
              src="/images/subpages/kungfu-caracteristicas.jpg"
              alt="Características do Kung Fu - Armas Tradicionais e Filosofia Marcial"
              aspectRatio="aspect-[21/9]"
              caption="Uso de armas clássicas (bastão, lança, facão e espada) e integração mente-corpo"
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
            id="cta-schedule-kungfu"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Aula de Kung Fu</span>
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
