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
  Brain,
  Heart,
  Moon,
  ShieldAlert,
  Smile,
  Activity,
  Compass,
  Zap,
  CheckCircle2,
  Eye
} from 'lucide-react';

interface MeditacaoPageProps {
  navigate: (path: string) => void;
}

interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  borderColor: string;
  bgColor: string;
}

const BENEFITS: BenefitItem[] = [
  {
    title: 'Reduz o estresse',
    desc: 'O estresse físico e mental produz um efeito nocivo de perturbação do sono, depressão, ansiedade e até aumento da pressão arterial. A meditação atua não só nesses efeitos, mas também em sintomas relacionados ao estresse, como a síndrome do intestino irritável, transtorno de estresse pós-traumático e fibromialgia.',
    icon: <ShieldAlert className="w-5 h-5 text-red-400" />,
    accent: 'text-red-400',
    borderColor: 'border-red-900/40',
    bgColor: 'from-red-950/40 to-neutral-900/80'
  },
  {
    title: 'Diminui a ansiedade',
    desc: 'Exercícios de atenção plena e meditação podem ajudar a diminuir os sintomas de pessoas que possuem o transtorno de ansiedade generalizada, juntamente com o aumento de auto-afirmações positivas, melhorando a reatividade ao estresse.',
    icon: <Heart className="w-5 h-5 text-amber-400" />,
    accent: 'text-amber-400',
    borderColor: 'border-amber-900/40',
    bgColor: 'from-amber-950/40 to-neutral-900/80'
  },
  {
    title: 'Melhora sintomas da depressão',
    desc: 'Algumas formas de meditação podem levar a uma melhor autoimagem e a uma visão mais positiva da vida, reduzindo sintomas de depressão e sentimentos de desmotivação e tristeza.',
    icon: <Smile className="w-5 h-5 text-emerald-400" />,
    accent: 'text-emerald-400',
    borderColor: 'border-emerald-900/40',
    bgColor: 'from-emerald-950/40 to-neutral-900/80'
  },
  {
    title: 'Aumenta a atenção',
    desc: 'A prática de meditação pode reverter padrões no cérebro que contribuem para divagações, preocupações e perda de foco, ajudando a aumentar a força e a resistência da atenção.',
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    accent: 'text-cyan-400',
    borderColor: 'border-cyan-900/40',
    bgColor: 'from-cyan-950/40 to-neutral-900/80'
  },
  {
    title: 'Reduz a perda de memória',
    desc: 'Além de combater a perda de memória relacionada à idade, a meditação pode, pelo menos parcialmente, melhorar a memória em pessoas que possuem demência.',
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    accent: 'text-purple-400',
    borderColor: 'border-purple-900/40',
    bgColor: 'from-purple-950/40 to-neutral-900/80'
  },
  {
    title: 'Melhora o sono',
    desc: 'Uma variedade de técnicas de meditação pode ajudar a relaxar e controlar os pensamentos que podem interferir no sono. Isso pode reduzir o tempo necessário para adormecer e aumentar a qualidade do sono.',
    icon: <Moon className="w-5 h-5 text-indigo-400" />,
    accent: 'text-indigo-400',
    borderColor: 'border-indigo-900/40',
    bgColor: 'from-indigo-950/40 to-neutral-900/80'
  }
];

export const MeditacaoPage: React.FC<MeditacaoPageProps> = ({ navigate }) => {
  return (
    <div id="meditacao-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Ambient Glows */}
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
            <span className="text-amber-400">Meditação (靜坐 / 冥想)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Quietude da Mente & Equilíbrio Biológico</span>
            </div>

            {/* Title with Shojumaru Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Meditação
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Regulação do corpo e da mente, expansão do foco consciente e restauração da harmonia fisiológica e emocional.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* 1. SEÇÃO "O QUE É" COM IMAGEM SUPERIOR                                     */}
        {/* ========================================================================= */}
        <motion.section
          id="meditacao-oque-e"
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
                O que é?
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Regulação Fisiológica, Foco Mental & Tranquilidade</span>
            </div>
          </div>

          <div className="space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
              A meditação é uma prática de regulação do corpo e da mente que treina a focalização da atenção, para alcançar tranquilidade, concentração, redução de estresse e ansiedade.
            </p>

            <p>
              Além dos benefícios para a mente, a meditação também possui efeito na saúde física, atuando na regulação do sangue, pressão arterial e frequência cardíaca.
            </p>

            <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
              Os efeitos da meditação também podem ser observados a longo prazo. Estudos já comprovaram que o esforço para manter o foco é muito menor em pessoas que realizam a prática com frequência.
            </p>

            <p>
              Mesmo que todas tenham o mesmo objetivo, existem diversos tipos de meditação. Na sociedade ocidental, as principais técnicas de meditação são duas: mindfulness e concentrativa.
            </p>
          </div>

          {/* Destaque Fisiológico Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-red-900/40 text-center space-y-1">
              <div className="text-amber-400 font-bold text-sm font-shojumaru">Atenção & Foco</div>
              <p className="text-xs text-gray-300">Treinamento neural para sustentação do foco e clareza mental</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-red-900/40 text-center space-y-1">
              <div className="text-amber-400 font-bold text-sm font-shojumaru">Saúde Cardiovascular</div>
              <p className="text-xs text-gray-300">Regulação da circulação sanguínea, pressão arterial e batimentos</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-red-900/40 text-center space-y-1">
              <div className="text-amber-400 font-bold text-sm font-shojumaru">Redução de Tensão</div>
              <p className="text-xs text-gray-300">Diminuição do cortisol e estímulo do sistema nervoso parassimpático</p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. TÉCNICAS (Texto à Esquerda, Imagem à Direita)                           */}
        {/* ========================================================================= */}
        <motion.section
          id="meditacao-tecnicas"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Técnicas de Meditação
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Mindfulness, Concentrativa & Métodos Contemplativos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto à Esquerda */}
            <div className="lg:col-span-7 space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              {/* Bloco Mindfulness */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-950/40 via-neutral-900/80 to-neutral-950 border border-cyan-900/40 space-y-3 shadow-lg shadow-black/40">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-300 font-shojumaru tracking-wider">
                    Mindfulness
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-200">
                  Nesta prática, também conhecida como <strong>meditação do insight</strong>, existe uma atenção livre dos estímulos de distração, como pensamentos, sentimentos ou sensações.
                </p>
                <p className="text-sm sm:text-base text-gray-300 border-l-2 border-cyan-500 pl-3">
                  Ou seja, a meditação mindfulness consiste em simplesmente deixar qualquer pensamento vir, sem se aprofundar, analisar ou julgar nenhum. Basta estar presente.
                </p>
                <p className="text-xs text-cyan-200/90 font-medium">
                  • Exemplos orientais e ocidentais: <em>Meditação Zen (Zazen)</em>, <em>Vipassana</em> e a adaptação ocidental <em>Mindfulness</em>.
                </p>
              </div>

              {/* Bloco Concentrativa */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-amber-950/40 via-neutral-900/80 to-neutral-950 border border-amber-900/40 space-y-3 shadow-lg shadow-black/40">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-amber-300 font-shojumaru tracking-wider">
                    Concentrativa
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-200">
                  A meditação concentrativa se caracteriza pela atenção direcionada a um único objeto, interno ou externo. Ignora-se qualquer estímulo do ambiente, focando em uma atividade específica, por exemplo, a repetição de um som, uma imagem ou a respiração.
                </p>
                <p className="text-xs text-amber-200/90 font-medium">
                  • Exemplos: Meditações oriundas do yoga, como a <em>Meditação Transcendental</em> e a meditação budista <em>Samatha</em>.
                </p>
              </div>

              {/* Bloco Contemplativo */}
              <div className="p-4 rounded-xl bg-neutral-900/70 border border-purple-900/40 space-y-2">
                <h4 className="text-sm font-bold text-purple-300 font-shojumaru">
                  Abordagem Contemplativa
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Alguns estudiosos afirmam que existe um terceiro tipo, denominado contemplativo, que seria uma integração dos dois anteriores, visto que requer tanto a habilidade de focalizar como de se abrir. Alguns exemplos são a meditação judaica e determinadas orações.
                </p>
              </div>
            </div>

            {/* Imagem à Direita com Efeito Flutuante e Sem Moldura */}
            <div className="lg:col-span-5">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src="/images/subpages/meditacao-tecnicas.jpg"
                  alt="Postura de meditação oriental em harmonia e foco"
                  aspectRatio="aspect-[4/3]"
                  caption="Postura meditativa: foco na respiração e presença plena"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. BENEFÍCIOS (Texto e Cards à Esquerda, Imagem à Direita)                 */}
        {/* ========================================================================= */}
        <motion.section
          id="meditacao-beneficios"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Benefícios da Meditação
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Evidências Científicas de Bem-Estar Físico & Emocional</span>
            </div>
          </div>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Muitos estudos científicos já comprovaram que a meditação promove bem estar emocional e físico. Confira abaixo os principais benefícios da meditação:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Benefícios Grid à Esquerda */}
            <div className="lg:col-span-7 space-y-4">
              {BENEFITS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className={`p-4 sm:p-5 rounded-xl bg-gradient-to-br ${item.bgColor} border ${item.borderColor} shadow-lg shadow-black/40 space-y-2`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-neutral-950/80 border border-white/10">
                      {item.icon}
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold ${item.accent} font-shojumaru tracking-wider`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal pl-8">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Imagem à Direita com Efeito Flutuante e Sem Moldura */}
            <div className="lg:col-span-5 sticky top-28 space-y-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl shadow-2xl shadow-black/80"
              >
                <ImagePlaceholder
                  src="/images/subpages/meditacao-beneficios.jpg"
                  alt="Bem-estar, serenidade e neuroplasticidade na meditação"
                  aspectRatio="aspect-[4/3]"
                  caption="Ciência e mindfulness: reconfiguração neural e redução comprovada do estresse"
                />
              </motion.div>

              {/* Caixa Informativa Resumo */}
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-amber-900/40 text-center space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest font-shojumaru">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Prática Regular</span>
                </div>
                <p className="text-xs text-gray-300">
                  Apenas 10 a 20 minutos diários são suficientes para promover alterações cognitivas duradouras e bem-estar integral.
                </p>
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
            id="cta-schedule-meditacao"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Prática / Aula Experimental</span>
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
