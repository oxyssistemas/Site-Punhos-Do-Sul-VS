import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import {
  ChevronRight,
  Shield,
  Sparkles,
  Flame,
  Award,
  Scroll,
  Sun,
  Heart,
  Brain,
  Zap,
  Activity,
  Compass
} from 'lucide-react';

interface BodhidharmaPageProps {
  navigate: (path: string) => void;
}

export const BodhidharmaPage: React.FC<BodhidharmaPageProps> = ({ navigate }) => {
  return (
    <div id="bodhidharma-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/80 via-neutral-950 to-neutral-950 border-b border-red-900/40 overflow-hidden">
        {/* Background Subtle Image Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/bodhidharma-hero.jpg"
            alt="Bodhidharma Patriarca do Zen e Kung Fu Shaolin"
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        {/* Ambient Martial Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4"
          >
            <button
              onClick={() => navigate('/')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-gray-300">Tradição & Mestres</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-500" />
            <span className="text-amber-400">Bodhidharma</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-amber-400 text-xs font-semibold uppercase tracking-widest font-chinese">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>達摩 • 1º Patriarca do Budismo Chán (Zen) & Fundador do Kung Fu Shaolin</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Bodhidharma
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              O lendário monge que uniu a meditação silenciosa profunda, o cultivo da energia vital e as bases do treinamento físico marcial no Templo Shaolin.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        
        {/* ========================================================================= */}
        {/* 1. QUEM FOI                                                               */}
        {/* ========================================================================= */}
        <motion.section
          id="bodhidharma-quem-foi"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex items-center gap-3 border-b border-red-900/40 pb-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-red-700/50 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Quem Foi
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Origem, Linhagem Espiritual e Legado</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="border-l-4 border-amber-500 pl-4 py-1 text-gray-100 font-medium bg-neutral-900/40 rounded-r">
                Bodhidharma ou Bodidarma foi um monge budista de origem persa que viveu durante os séculos V ou VI. Tradicionalmente, a ele, é dado o crédito de ter sido o transmissor da seita Chán para a China, sendo considerado o seu primeiro patriarca.
              </p>
              
              <p>
                Segundo uma lenda chinesa, ele iniciou o treinamento físico dos monges shaolin, treinamento este que levaria à posterior criação do <strong className="text-amber-400 font-semibold">Shaolin quan</strong> (punhos de Shaolin / Kung Fu Shaolin).
              </p>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-red-950/40 via-neutral-900/80 to-neutral-950 border border-red-900/40 rounded-xl p-6 shadow-xl space-y-4">
              <h3 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2 border-b border-red-900/30 pb-2">
                <Compass className="w-4 h-4 text-red-400" />
                Marcos Históricos
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white">1º Patriarca Chán (Zen):</strong> Introduziu a via direta da meditação sentada (*zazen*).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span><strong className="text-white">Raiz de Shaolin:</strong> Fortaleceu o corpo dos monges para sustentar a iluminação espiritual.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white">Vajramushti:</strong> Fundamentos da antiga arte marcial indiana incorporados aos exercícios de respiração.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. HISTÓRIA (Imagem à esquerda, Texto à direita)                         */}
        {/* ========================================================================= */}
        <motion.section
          id="bodhidharma-historia"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex items-center gap-3 border-b border-red-900/40 pb-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-red-700/50 flex items-center justify-center text-amber-400">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                História
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">A Viagem para o Oriente e a Chegada a Shaolin</span>
            </div>
          </div>

          {/* Grid com Imagem à Esquerda e Texto à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Coluna da Esquerda: Imagem e Destaques Visuais */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="relative group overflow-hidden rounded-xl border border-red-900/50 shadow-2xl bg-neutral-900">
                <ImagePlaceholder
                  src="/images/subpages/bodhidharma-historia.jpg"
                  alt="Bodhidharma meditante no Templo Shaolin"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  aspectRatio="aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-950/80 border border-amber-500/50 rounded-full text-amber-300 text-xs font-chinese tracking-widest uppercase shadow">
                    達摩祖師 • Dámó Zǔshī
                  </span>
                  <p className="text-xs text-gray-300 mt-1.5 font-light">
                    O Encontro entre o Nobre Príncipe e o Templo Shaolin
                  </p>
                </div>
              </div>

              {/* Box de Citação / Meditação */}
              <div className="bg-gradient-to-r from-red-950/60 via-neutral-900 to-red-950/40 border-l-4 border-amber-500 rounded-r-xl p-5 shadow-lg space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-chinese">
                  A Meditação na Caverna
                </h4>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  Nove anos em silenciosa contemplação diante da parede da caverna na Montanha Song, demonstrando a perseverança absoluta do espírito sobre a matéria.
                </p>
              </div>
            </div>

            {/* Coluna da Direita: Texto Completo da História */}
            <div className="lg:col-span-7 space-y-6 text-gray-300 text-base leading-relaxed">
              <p>
                Tem-se muito pouca informação contemporânea sobre a vida de Bodhidharma, e narrações posteriores misturaram-se com lendas, mas a maior parte dos relatos concordam que ele foi um monge do Irão que viajou para o sul da China e, posteriormente, mudou-se para o norte. Há divergências quanto à data de sua chegada: um relato antigo diz que ele chegou durante a dinastia Liu Song (420–479), ao passo que relatos posteriores dizem que chegou durante a dinastia Liáng (502–557). Atualmente, aceita-se o início do século V.
              </p>

              <div className="p-5 rounded-lg bg-neutral-900/60 border border-red-900/30 space-y-3">
                <p className="text-gray-200">
                  Era filho do rei Sughanda. Como pertencia à casta dos xátrias, aprendeu a arte marcial indiana do <strong className="text-amber-400 font-semibold">vajramushti</strong>. Seu mestre nessa arte foi o famoso Prajnatara.
                </p>
              </div>

              <p>
                Após se tornar o 28º (e último) patriarca do budismo, Bodhidharma viajou à China a convite do imperador Liang Wu Ti, que governava um dos reinos do período das Seis Dinastias e que seguia uma linha inovadora do budismo, que privilegiava os rituais.
              </p>

              <p>
                Como Bodhidharma ensinava uma linha de budismo que privilegiava a meditação, Bodhidharma se indispôs com o imperador Liang Wu Ti e decidiu fixar residência em outro local: o <strong className="text-amber-300 font-semibold">templo Shaolin</strong>, no reino de Wei, onde Bodhidharma viria a se tornar célebre pela criação do zen e do kung fu shaolin.
              </p>
            </div>

          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. BODHIDHARMA E AS ARTES MARCIAIS                                       */}
        {/* ========================================================================= */}
        <motion.section
          id="bodhidharma-artes-marciais"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-8"
        >
          <div className="flex items-center gap-3 border-b border-red-900/40 pb-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-red-700/50 flex items-center justify-center text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Bodhidharma e as Artes Marciais
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">A Gênese do Kung Fu Shaolin e o Tratado Yi Jin Jing</span>
            </div>
          </div>

          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p className="border-l-4 border-red-600 pl-4 py-1 text-gray-100 font-medium bg-neutral-900/40 rounded-r">
              Diz a lenda que, ao chegar no templo Shaolin, Bodhidharma deparou-se com a precária condição de saúde dos monges, fruto de sua inatividade. Foi então que ele teria iniciado os monges na prática de uma série de exercícios físicos baseados tanto na arte marcial indiana do vajramushti quanto no antigo kung fu chinês, ao mesmo tempo em que transmitia-lhes os fundamentos da filosofia zen, com o objetivo de reabilitá-los tanto física quanto espiritualmente.
            </p>

            <p>
              Os exercícios ensinados por Bodhidharma eram baseados em métodos de respiração profunda e ioga, e seus movimentos se assemelhavam a técnicas de combate. A prática desses exercícios logo tornou-se uma tradição no templo, vindo mais tarde a atingir um estado de evolução tal que pôde ser considerada como um verdadeiro e completo sistema de autodefesa: o kung fu shaolin, que, no Japão, é conhecido como <em className="text-amber-300 font-semibold">shorinji kenpo</em>.
            </p>

            {/* Grid dos Benefícios e Marcos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-red-950/50 via-neutral-900 to-neutral-950 border border-red-900/40 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base font-chinese">
                  <Activity className="w-5 h-5 text-red-500" />
                  <span>1. Restauração da Saúde e Vigor Físico</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Esta arte marcial em ascensão logo mostrou sua eficiência: primeiro, com relação à restabelecida saúde dos monges, fortalecendo ossos, tendões e respiração interna.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-red-950/40 border border-red-900/40 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base font-chinese">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span>2. Defesa Pessoal Contra Bandoleiros</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Segundo, como método de defesa pessoal propriamente dito posto em prática contra bandoleiros que, por vez ou outra, saqueavam o templo, de quem os monges, em outros tempos, eram considerados presas fáceis.
                </p>
              </div>
            </div>

            {/* A Lenda de Hui-k'o */}
            <div className="bg-gradient-to-r from-neutral-900 via-red-950/40 to-neutral-900 border border-red-900/50 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-red-900/30 pb-3">
                <Heart className="w-6 h-6 text-red-400" />
                <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-wider text-amber-400">
                  A Provação de Hui-k'o e o Significado da Devoção
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Numa lenda, Bodhidharma recusou-se a continuar a ensinar seu futuro estudante, Hui-k'o, que manteve vigília por várias semanas na neve fora do monastério e que cortou seu próprio braço esquerdo para demonstrar sua sinceridade. Contudo, o discípulo não havia entendido que o "braço esquerdo" a que Bodhidharma havia se referido era, na verdade, uma alegoria quanto à necessidade de Hui-k'o se livrar de suas vicissitudes.
              </p>
            </div>

            {/* O Yi Jin Jing e a Expansão Marcial */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-950/60 via-neutral-900 to-neutral-950 border border-amber-500/40 space-y-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-400 font-shojumaru tracking-wider">
                  O Yi Jin Jing e o Legado Mundial de Shaolin
                </h3>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                O <strong className="text-amber-400 font-semibold">Yi Jin Jing</strong> (Tratado da Transformação dos Músculos e Tendões) dá crédito a Bodhidharma pelo kung fu shaolin ensinado aos monges do templo Shaolin, o que o tornaria uma influência importante nas artes marciais em geral.
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                O kung fu shaolin se difundiu amplamente pelo país, principalmente durante a <strong className="text-amber-300">Dinastia Ming (1368-1644)</strong>, vindo mais tarde a conquistar outros países da Ásia e a dar origem a outros estilos de artes marciais, como o caratê de Okinawa.
              </p>
            </div>

          </div>
        </motion.section>

      </div>

      {/* Bottom Call to Action Banner */}
      <BottomCtaBanner navigate={navigate} />
    </div>
  );
};
