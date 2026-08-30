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
  Crown,
  Flame,
  Award,
  Shield,
  Eye,
  Zap,
  Music,
  Compass
} from 'lucide-react';

interface DancaDoLeaoPageProps {
  navigate: (path: string) => void;
}

interface LionSubStyle {
  name: string;
  trans: string;
  desc: string;
  badge: string;
  accent: string;
  gradientBg: string;
  borderColor: string;
  hoverBorder: string;
  glowColor: string;
  badgeClass: string;
  icon: React.ReactNode;
}

const LION_STYLES: LionSubStyle[] = [
  {
    name: 'Fut San (佛山)',
    trans: 'Montanha do Buda',
    desc: 'O estilo clássico e tradicional adotado pelas escolas de Kung Fu. Exige posturas baixas e poderosas (Ma Bu), força e resistência explosiva. Representa a honra da linhagem marcial.',
    badge: 'Tradicional & Marcial',
    accent: '#ef4444',
    gradientBg: 'from-red-950/50 via-neutral-900/80 to-amber-950/30',
    borderColor: 'border-red-900/40',
    hoverBorder: 'hover:border-red-500/80',
    glowColor: 'bg-red-500/20',
    badgeClass: 'bg-red-950/80 text-red-300 border-red-700/50',
    icon: <Flame className="w-5 h-5 text-red-400" />
  },
  {
    name: 'Hok San (鶴山)',
    trans: 'Montanha do Grou',
    desc: 'Estilo contemporâneo e dinâmico. Combina a cabeça sulista com a agilidade do leão nortista, movimentos mais vivos, expressivos e performances acrobáticas nos postes altos (Jongs).',
    badge: 'Contemporâneo & Acrobático',
    accent: '#06b6d4',
    gradientBg: 'from-cyan-950/50 via-neutral-900/80 to-blue-950/30',
    borderColor: 'border-cyan-900/40',
    hoverBorder: 'hover:border-cyan-400/80',
    glowColor: 'bg-cyan-500/20',
    badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-700/50',
    icon: <Zap className="w-5 h-5 text-cyan-400" />
  },
  {
    name: 'Fut-Hok (佛鶴)',
    trans: 'Híbrido Fut San & Hok San',
    desc: 'Estilo que equilibra a solidez estrutural do Fut San com as transições ágeis e expressividade cênica do Hok San.',
    badge: 'Híbrido Equilibrado',
    accent: '#a855f7',
    gradientBg: 'from-purple-950/50 via-neutral-900/80 to-indigo-950/30',
    borderColor: 'border-purple-900/40',
    hoverBorder: 'hover:border-purple-400/80',
    glowColor: 'bg-purple-500/20',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-700/50',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />
  },
  {
    name: 'Chow Gar (周家)',
    trans: 'Estilo da Família Chow',
    desc: 'Variação praticada pelos adeptos do Kung Fu Chow Gar, com movimentos rápidos e agressivos de percussão e botes.',
    badge: 'Linhagem Familiar',
    accent: '#f59e0b',
    gradientBg: 'from-amber-950/50 via-neutral-900/80 to-yellow-950/30',
    borderColor: 'border-amber-900/40',
    hoverBorder: 'hover:border-amber-400/80',
    glowColor: 'bg-amber-500/20',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-700/50',
    icon: <Crown className="w-5 h-5 text-amber-400" />
  },
  {
    name: 'Qing Shi (青獅)',
    trans: 'Leão Verde',
    desc: 'Variante lendária popular em Fujian (Hokkien) e Taiwan, rica em simbolismo histórico de resistência e rituais sagrados.',
    badge: 'Tradição Fujian / Taiwan',
    accent: '#10b981',
    gradientBg: 'from-emerald-950/50 via-neutral-900/80 to-teal-950/30',
    borderColor: 'border-emerald-900/40',
    hoverBorder: 'hover:border-emerald-400/80',
    glowColor: 'bg-emerald-500/20',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50',
    icon: <Shield className="w-5 h-5 text-emerald-400" />
  }
];

export const DancaDoLeaoPage: React.FC<DancaDoLeaoPageProps> = ({ navigate }) => {
  return (
    <div id="danca-do-leao-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header for Lion Dance */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/70 via-neutral-950 to-neutral-950 border-b border-red-900/20 overflow-hidden">
        {/* Background Subtle Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/danca-leao-hero.jpg"
            alt="Dança do Leão Chinês Wu Shi"
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        {/* Martial Warm Glows */}
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
            <span className="text-amber-400">Dança do Leão (舞獅)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sorte, Prosperidade & Tradição Milenar ( 舞獅 / 舞狮 )</span>
            </div>

            {/* Title with Shojumaru Font */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Dança do Leão
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Ritual sagrado de celebração, exorcismo de energias negativas e evocação de bênçãos executado com o rigor do Kung Fu.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        
        {/* ========================================================================= */}
        {/* 1. IMAGEM PRINCIPAL DO TOPO                                              */}
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
              src="/images/subpages/danca-leao-top.jpg"
              alt="Apresentação da Dança do Leão Chinês em Festivais"
              aspectRatio="aspect-[21/9]"
              caption="Dança do Leão ( 舞獅 - Wǔshī ): Símbolo de coragem, sorte e energia yang na cultura oriental"
            />
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. O QUE É A DANÇA DO LEÃO?                                               */}
        {/* ========================================================================= */}
        <motion.section
          id="danca-oque-e"
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
                O que é?
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Tradição, Celebração & O Simbolismo do Leão Sulista</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Texto à Esquerda */}
            <div className="lg:col-span-7 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                A dança do leão (chinês simplificado: 舞狮; chinês tradicional: 舞獅; pinyin: wǔshī) é uma forma de dança tradicional na cultura chinesa e em outros países asiáticos em que os artistas imitam os movimentos de um leão em uma fantasia de leão para trazer boa sorte e fortuna. A dança do leão é geralmente realizada durante o Ano Novo Chinês e outros festivais tradicionais, culturais e religiosos chineses. Também pode ser realizada em ocasiões importantes, como eventos de abertura de negócios, celebrações especiais ou cerimônias de casamento, ou pode ser usada para homenagear convidados especiais pelas comunidades chinesas.
              </p>
              
              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                A dança do leão sulista é de natureza mais simbólica. Ela é realizada geralmente como uma cerimônia para exorcizar espíritos maléficos e para invocar sorte e felicidade. O leão sulista exibe uma vasta variedade de cores e tem uma cabeça peculiar com grandes olhos, um espelho na testa e um chifre único no centro da cabeça.
              </p>

              {/* Destaques Anatômicos do Leão Sulista */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-neutral-900/80 border border-red-900/40 text-center space-y-1">
                  <div className="text-amber-400 font-bold text-xs font-shojumaru">Espelho na Testa</div>
                  <p className="text-[11px] text-gray-300">Reflete e espanta os espíritos malignos</p>
                </div>
                <div className="p-3.5 rounded-lg bg-neutral-900/80 border border-red-900/40 text-center space-y-1">
                  <div className="text-amber-400 font-bold text-xs font-shojumaru">Chifre Central</div>
                  <p className="text-[11px] text-gray-300">Poder de transmutação e força vital do Nian</p>
                </div>
                <div className="p-3.5 rounded-lg bg-neutral-900/80 border border-red-900/40 text-center space-y-1">
                  <div className="text-amber-400 font-bold text-xs font-shojumaru">Olhos Expressivos</div>
                  <p className="text-[11px] text-gray-300">Movimentos vivos com piscadas e curiosidade</p>
                </div>
              </div>
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
                  src="/images/subpages/danca-leao-detalhes.jpg"
                  alt="Cabeça do Leão Sulista com espelho e chifre"
                  aspectRatio="aspect-[4/3]"
                  caption="A cabeça do leão sulista: espelho refletor, chifre único e rica paleta de cores"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. HISTÓRIA (Imagem à Esquerda, Texto à Direita)                         */}
        {/* ========================================================================= */}
        <motion.section
          id="danca-historia"
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
              <span className="text-xs font-mono text-gray-400 tracking-wider">Origem na Dinastia Tang (618-906 DC) & A Relação com o Kung Fu</span>
            </div>
          </div>

          {/* Grid Layout: Imagem à Esquerda, Texto à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Imagem à Esquerda com Animação Flutuante */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="sticky top-28 space-y-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl shadow-2xl shadow-black/80"
                >
                  <ImagePlaceholder
                    src="/images/subpages/danca-leao-historia.jpg"
                    alt="Dança do Leão e o Sonho do Imperador na Dinastia Tang"
                    aspectRatio="aspect-[4/3]"
                    caption="Dançarinos de Kung Fu em exibição acrobática com a bateria de tambores e gongos"
                  />
                </motion.div>

                {/* Box de Exigência Física */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-red-950/50 to-neutral-900/90 border border-red-900/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest font-shojumaru">
                    <Flame className="w-4 h-4 text-red-500" />
                    <span>Relação com o Kung Fu</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Os dançarinos do leão são sempre praticantes de Kung Fu, dominando posturas sólidas (Ma Bu), força lombar e resistência aeróbica extrema.
                  </p>
                </div>
              </div>
            </div>

            {/* Texto à Direita */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
                A dança do leão se originou durante a dinastia Tang (618-906 DC). Diz a lenda que o imperador teve um sonho uma noite em que um animal de aparência estranha salvou sua vida. Na manhã seguinte, o imperador descreveu o sonho para seus ministros. Um ministro disse ao imperador que o estranho animal parecia uma criatura do Ocidente, um leão.
              </p>

              <p>
                Como o estranho animal salvou o imperador em seu sonho, o leão rapidamente se tornou um símbolo de boa sorte em toda a China. Acreditava-se que um leão dançante expulsava os espíritos malignos. Hoje, a dança do leão ainda é a cerimônia de abertura mais importante para eventos chineses e é também um ritual necessário para as empresas durante a época do Ano Novo Chinês, pois a dança do leão evoca boa sorte no próximo ano. Os leões não são nativos da China, o que explica por que o “leão” na dança adquiriu as características do Dragão chinês e fênix.
              </p>

              <p className="border-l-2 border-amber-500 pl-4 text-amber-100 font-medium">
                Os dançarinos do leão são sempre praticantes de kung-fu. Primeiro, a dança do leão requer que os dançarinos desenvolvam posturas fortes, uma vez que a cabeça do leão é pesada e a posição da cauda do dançarino traseiro é estranha. As danças do leão podem ser demoradas, exigindo que os dançarinos possuam excelente condicionamento físico e resistência.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 4. LEÃO DO SUL (Estilos e Subdivisões)                                    */}
        {/* ========================================================================= */}
        <motion.section
          id="danca-leao-do-sul"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative space-y-8"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 border-b border-red-900/30 pb-4">
            <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-amber-400">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Leão do Sul (南獅)
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Origem em Guangdong, O Mito de Nian & Os Estilos Regionais</span>
            </div>
          </div>

          <div className="space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-red-500 pl-4 text-gray-100 font-medium text-3d-white">
              Guangdong é o lar da variedade sulista. Acredita-se que os leões chifrudos sulistas sejam Nians.
            </p>

            <p>
              O estilo sulista pode ser subdividido em <strong className="text-amber-300">Fut San</strong> (Montanha do Buda), <strong className="text-cyan-300">Hok San</strong> (Montanha do Grou), <strong className="text-purple-300">Fut-Hok</strong> (estilo menor que é quase um híbrido de Fut San e Hock San), <strong className="text-amber-300">Chow Gar</strong> (estilo menor praticado pelos participantes do estilo de Kung Fu da família Chow) e o <strong className="text-emerald-300">Qing Shi</strong> (Leão Verde – popular entre os Fujianos/Hokkianos e Taiwaneses).
            </p>

            {/* Grid dos Estilos com Caixas Coloridas Animadas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-3">
              {LION_STYLES.map((st, idx) => (
                <motion.div
                  key={st.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.25 }
                  }}
                  className={`group relative bg-gradient-to-br ${st.gradientBg} p-5 rounded-xl border ${st.borderColor} ${st.hoverBorder} shadow-lg shadow-black/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute -top-10 -right-10 w-28 h-28 ${st.glowColor} rounded-full blur-xl opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-950/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {st.icon}
                      </div>
                      <span className={`text-[10px] font-bold uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${st.badgeClass}`}>
                        {st.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-gray-100 group-hover:text-amber-400 transition-colors font-shojumaru tracking-wider mb-1">
                      {st.name}
                    </h3>
                    <h4 className="text-xs font-semibold text-amber-300 mb-2">
                      {st.trans}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: st.accent }} />
                      <span className="tracking-wider uppercase font-medium">Linhagem Sulista</span>
                    </span>
                    <span className="font-mono text-xs font-semibold" style={{ color: st.accent }}>
                      0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Destaques Fut San & Hok San em Blocos Dedicados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-red-900/40 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base font-shojumaru">
                  <Flame className="w-5 h-5 text-red-500" />
                  <span>Fut San (佛山) — A Alma do Kung Fu</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Fut San é o estilo que muitas escolas de Kung Fu adotam. Ele requer movimentos poderosos e resistência quando em espera. O leão se torna a representação da escola de Kung Fu e somente os estudantes mais avançados podem realizá-lo.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-cyan-900/40 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-base font-shojumaru">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>Hok San (鶴山) — A Arte Contemporânea & Jong</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  O estilo Hok San é mais comumente conhecido como um estilo contemporâneo. O estilo contemporâneo Hok San combina uma cabeça de leão sulista com os movimentos do leão nortista. O estilo Hok San tenta reproduzir um aspecto e movimentos mais realistas, bem como performances acrobáticas. Sua cauda curta é também favorita entre as trupes que fazem o salto da baliza.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 5. IMAGEM DO FINAL                                                        */}
          {/* ========================================================================= */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-2xl shadow-2xl shadow-black/80 mt-10"
          >
            <ImagePlaceholder
              src="/images/subpages/danca-leao-bottom.jpg"
              alt="Performance de Dança do Leão em Postes Altos Jongs"
              aspectRatio="aspect-[21/9]"
              caption="Acrobacias nos postes altos (Jongs): sincronia, bravura marcial e equilíbrio milimétrico"
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
            id="cta-schedule-danca-leao"
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded border border-amber-500/60 shadow-lg shadow-red-950 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Contratar ou Agendar Dança do Leão</span>
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
