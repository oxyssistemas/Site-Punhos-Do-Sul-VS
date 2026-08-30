import React from 'react';
import { motion } from 'motion/react';
import { SITE_INFO } from '../data/siteData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { BottomCtaBanner } from '../components/BottomCtaBanner';
import {
  ChevronRight,
  Shield,
  Flame,
  Award,
  Sparkles,
  Heart,
  Scale,
  Scroll,
  Eye,
  CheckCircle2,
  Sword
} from 'lucide-react';

interface KwanKungPageProps {
  navigate: (path: string) => void;
}

export const KwanKungPage: React.FC<KwanKungPageProps> = ({ navigate }) => {
  return (
    <div id="kwan-kung-page" className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-red-950/80 via-neutral-950 to-neutral-950 border-b border-red-900/40 overflow-hidden">
        {/* Background Subtle Image Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <ImagePlaceholder
            src="/images/subpages/kwankung-hero.jpg"
            alt="General Kwan Kung Guan Yu"
            className="w-full h-full object-cover"
            aspectRatio="h-full w-full"
          />
        </div>

        {/* Ambient Martial Glow Effects */}
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
            <span className="text-amber-400">Kwan Kung</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50 text-amber-400 text-xs font-semibold uppercase tracking-widest font-chinese">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span>關公 • Divindade da Coragem, Lealdade e Justiça</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-wider text-3d-gold font-shojumaru">
              Kwan Kung
            </h1>

            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-md shadow-red-950" />
            
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed font-light subtitle-shadow">
              Patrono sagrado das artes marciais chinesas, herói do Período dos Três Reinos e símbolo supremo de retidão, integridade e virtude marcial (Wude).
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
          id="kwankung-quem-foi"
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
              <span className="text-xs font-mono text-gray-400 tracking-wider">Divindade Protetora & Herói Histórico</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="border-l-4 border-amber-500 pl-4 py-1 text-gray-100 font-medium bg-neutral-900/40 rounded-r">
                Divindade protetora das academias de artes marciais, dos negócios e de tudo o que envolva integridade, justiça e coragem. Se enquadra na categoria dos personagens históricos que, por seus atos e pelo reflexo destes sobre o imaginário popular, acabaram transformados em divindades.
              </p>
              
              <p>
                É um dos personagens mais queridos do folclore chinês, o que faz com que seja um dos mitos mais ricos em histórias, lendas e até escritos e peças teatrais.
              </p>

              <p>
                Kwan Kun é um dos mais conhecidos heróis do chamado <strong className="text-amber-400 font-semibold">Período dos Três Reinos (220 a 280 d.C.)</strong>, fase da História da China que se passou logo após o fim da Dinastia Han.
              </p>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-red-950/40 via-neutral-900/80 to-neutral-950 border border-red-900/40 rounded-xl p-6 shadow-xl space-y-4">
              <h3 className="text-base font-bold font-display text-amber-400 uppercase tracking-wider flex items-center gap-2 border-b border-red-900/30 pb-2">
                <Scale className="w-4 h-4 text-red-400" />
                Pilares de Kwan Kung
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white">Protetor Marcial:</strong> Presente no altar de honra de tradicionais academias de Kung Fu em todo o mundo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span><strong className="text-white">Justiça & Negócios:</strong> Venerado como modelo inabalável de palavra, retidão e contratos de boa-fé.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white">Três Reinos (San Guo):</strong> General lendário ao lado de Liu Pei e Chang Fei.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 2. HISTÓRIA (Imagem à esquerda, Texto à direita)                         */}
        {/* ========================================================================= */}
        <motion.section
          id="kwankung-historia"
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
              <span className="text-xs font-mono text-gray-400 tracking-wider">A Jornada do Guerreiro que se Tornou Lenda</span>
            </div>
          </div>

          {/* Grid com Imagem à Esquerda e Texto à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Coluna da Esquerda: Imagem e Destaques Visuais */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="relative group overflow-hidden rounded-xl border border-red-900/50 shadow-2xl bg-neutral-900">
                <ImagePlaceholder
                  src="/images/subpages/kwankung-historia.jpg"
                  alt="General Kwan Kung na Batalha"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  aspectRatio="aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-950/80 border border-amber-500/50 rounded-full text-amber-300 text-xs font-chinese tracking-widest uppercase shadow">
                    關羽 • Guan Yu (Kwan Kun)
                  </span>
                  <p className="text-xs text-gray-300 mt-1.5 font-light">
                    "Pode não ser o mesmo dia que nasce, mas é o mesmo dia que se morre."
                  </p>
                </div>
              </div>

              {/* Box de Citação do Juramento */}
              <div className="bg-gradient-to-r from-red-950/60 via-neutral-900 to-red-950/40 border-l-4 border-red-600 rounded-r-xl p-5 shadow-lg">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-chinese mb-1">
                  O Juramento no Campo de Pessegueiros
                </h4>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  Três corações unidos sob as flores de pessegueiro, selando um pacto indelével de honra marcial, defesa dos oprimidos e fraternidade eterna.
                </p>
              </div>
            </div>

            {/* Coluna da Direita: Texto Completo da História */}
            <div className="lg:col-span-7 space-y-6 text-gray-300 text-base leading-relaxed">
              <p>
                A história de Kwan Kun (Guan Gong) remonta há 1700 anos (alguns dizem 2000 anos). Apesar de haver um único rei, o território chinês era dividido em feudos governados por generalíssimos que mantinham o poder e o controle de seu território. Nesse período, onde grande parte do território chinês ainda não era habitado, três "ministros'' dividiam a parte civilizada: Liu Pei, Tchou Tchou e Sin Kin.
              </p>

              <p>
                Sin Kin governava uma parte pequena no território, enquanto Tchou Tchou tinha a parte maior. Mas era Liu Pei que contava com a ajuda e a amizade do guerreiro Kwan Kun. Na verdade, Kwan Kun era o "irmão de sangue'' de Liu Pei, que mais tarde viria a se tornar um dos reis.
              </p>

              <p>
                Para os chineses, ser "irmão de sangue'' significa dar importância e valor como se fosse irmão verdadeiro a um amigo. Após uma cerimônia onde o sangue é misturado e os dois se tornam irmãos - a partir daí, respeito e lealdade passam a ser ponto de honra. O ditado chinês define bem a extensão dessa amizade: <em className="text-amber-300 font-medium">"Pode não ser o mesmo dia que nasce, mas é o mesmo dia que se morre"</em>. E assim era Kwan Kun, irmão de sangue de Liu Pei, juntamente com Chang Fei.
              </p>

              <div className="p-4 rounded-lg bg-neutral-900/60 border border-red-900/30">
                <p className="text-gray-200">
                  Era a época de batalhas entre os governantes e Liu Pei, apesar de contar com a ajuda do grande guerreiro Kwan Kun, tinha o exército de Tchou Tchou como oponente. Após uma batalha, Liu Pei viu-se obrigado a deixar seu território, refugindo-se nas montanhas.
                </p>
              </div>

              <p>
                Com o afastamento de Liu Pei, Kwan Kun ficou com a responsabilidade de proteger a família de seu irmão, assim como o seu exército. A situação era insustentável e Tchou Tchou queria de toda maneira trazer Kwan Kun para lutar em seu exército. Para isso mandou seu general, que era amigo e respeitava muito o lendário guerreiro, para convencê-lo. Kwan Kun relutou muito, a fidelidade a seu irmão de sangue era indiscutível, mas a responsabilidade para com a família dele, a diferença de poderio militar, a falta de notícias de Liu Pei, fizeram com que Kwan Kun decidisse ganhar tempo até descobrir onde seu irmão se refugiava e, enquanto isso, manter a vida de seus familiares.
              </p>

              <p>
                No entanto, Tchou Tchou não conseguia ganhar a confiança e nem o respeito do herói. Tentou suborná-lo com festas grandiosas, com o oferecimento de mulheres maravilhosas, roupas lindíssimas e muito, muito ouro. Tudo que Kwan Kun recebia, dava para a família de seu irmão guardar para quando ele retornasse.
              </p>

              <p>
                Um dia, Tchou Tchou conseguiu dar um presente que despertou a alegria de Kwan Kun - um cavalo garboso, que havia pertencido a um general. Era um animal valioso, numa época que a montaria era a única forma de transporte. O que Kwan Kun pretendia, na realidade, era ter o animal para poder procurar seu irmão. Tchou Tchou ficou frustrado. Após muitos acontecimentos, Liu Pei chegou ao poder. Nesta época a China já estava dividida em 3 reinos (San Co). O período que Liu Pei ficou afastado de tudo serviu para que ele conhecesse o sofrimento de seu povo, já que passou pelas mesmas provações.
              </p>

              <div className="p-5 rounded-lg bg-gradient-to-r from-neutral-900 to-red-950/30 border-l-4 border-amber-500 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-chinese">
                  O Resgate da Donzela e a Face Rubra
                </h4>
                <p className="text-sm text-gray-300">
                  Diz-se que certa vez Kwan Kun soube que um malfeitor (filho de um governador local), tinha raptado a filha de um homem bom e honesto. Ela então pertenceria para sempre como propriedade do malfeitor. Mas então Kwan Kun veio, matou o malfeitor, salvou a moça e devolveu-a a seu papel. Sabendo que o governador tentaria se vingar, Kwan Kun refugiou-se em um Templo. As tropas do governador finalmente o encontraram e tentaram matá-lo ateando fogo ao Templo. Kwan Kun permaneceu no Templo enquanto as chamas subiam pelos alicerces consumindo tudo. Subitamente ele passou através das chamas, atacou as tropas de surpresa, dispersando-as com poucos problemas. Depois de buscar conforto próximo a um riacho ele percebeu, no reflexo d'água, que as chamas haviam deixado seu rosto vermelho e brilhante. Com este disfarce ele conseguiu escapar das tropas que continuavam a perseguí-lo.
                </p>
              </div>

              <p>
                Outra lenda narra seu encontro com Chang Fei e Liu Pei, do reino de Shu, com quem formaria uma das mais importantes trincas de heróis-divinizados da antiga China. A caminho da conscrição (convocação para o serviço militar), Kwan Kun teria encontrado Chang Fei, um açougueiro que desafiava qualquer pessoa a erguer do chão uma pedra de 180 kg, sob a qual estava um grande pedaço de carne. Até então, ninguém havia vencido. Aceitando o desafio, Kwan Kun ergueu a pedra e se apoderou da carne, provocando a ira de Chang Fei. Os dois começaram uma briga violentíssima, que só foi encerrada com a intervenção de Liu Pei. Mais tranqüilos, perceberam que tinham muitas coisas em comum e se tornaram amigos. Em um campo de pessegueiros, os três fizeram um juramento de amizade pelo qual se obrigavam a viver e a morrer juntos.
              </p>

              <p>
                Outra lenda ainda conta que vários exércitos haviam se reunido para destruir as tropas de um general rebelde. Percebendo a futilidade em mandar suas tropas contra o inimigo em número bem maior, o general rebelde escolheu seu melhor lutador e desafiou cada comandante para um duelo homem a homem até a morte. Devido a reputação do lutador rebelde nenhum dos comandantes aceitou o desafio. Um dos comandantes foi então até Kwan Kun e lhe ofereceu uma taça de vinho morno - um convite para que representasse os exércitos. Kwan Kun, sem pensar em dizer não, levantou-se da mesa de jantar, lutou contra o campeão rebelde e voltou antes que o seu vinho e sua comida esfriassem.
              </p>

              <p>
                Certa vez foi acertado por uma flecha envenenada. Apesar de faltar anestesia, os médicos decidiram operá-lo. Quando a cirurgia começou, ele ao mesmo tempo deu início a uma partida de xadrez. Enquanto a cirurgia prosseguia, Kwan Kun se concentrava mais no jogo. Assim que a cirurgia terminou, Kwan Kun venceu a partida e foi embora.
              </p>

              <div className="p-5 rounded-lg bg-neutral-900/90 border border-red-900/40 space-y-3">
                <p>
                  Como soldado, era conhecido pelo nome de Kwan Yu ou Kuan Yu, e, antes de ser elevado a categoria de divindade, era considerado um herói militar, que exibia poder e coragem, era imbatível nas batalhas, leal, bom, generoso e admirado por seus companheiros. Infelizmente, o destino reservou-lhe um desastroso fim. No momento em que as forças de Kwan Kun estavam em batalha com o exército de Wei, batalhões do reinado de Wu iniciaram um ataque surpresa que esmagou o exército de Shu Han. Algumas versões dizem que Kwan Kun foi traído por um de seus soldados, que informou ao inimigo a localização de sua tropa. Contava ele com 52 anos de idade.
                </p>
                <p className="text-sm text-gray-400">
                  A tumba contendo seu corpo estaria localizada em Tangyang e sua cabeça teria sido sepultada em Loyang (Henan), uma localidade situada ao lado do mosteiro de Shaolin. Relatos antigos contam que após a sua morte, Kwan Kun apareceu muitas vezes a seus soldados, o que levou-os a crer que ele seja o santo protetor dos guerreiros.
                </p>
                <p className="text-sm text-amber-300 font-medium pt-1">
                  A figura de Kwan Kun também é colocada nas delegacias chinesas, para que os policiais não se esqueçam que a honestidade deve vir em primeiro lugar.
                </p>
              </div>
            </div>

          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* 3. CARACTERÍSTICAS & SIMBOLISMO                                           */}
        {/* ========================================================================= */}
        <motion.section
          id="kwankung-caracteristicas"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex items-center gap-3 border-b border-red-900/40 pb-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-red-700/50 flex items-center justify-center text-amber-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-chinese uppercase tracking-wider text-3d-gold">
                Características
              </h2>
              <span className="text-xs font-mono text-gray-400 tracking-wider">Iconografia, Tradição dos Altares e Virtude Marcial</span>
            </div>
          </div>

          <div className="space-y-8 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              As lendas mostram a transformação do homem comum em divindade: segundo o folclore, Kwan Kun teria 2,70 metros de altura e uma barba de 60 cm; a face seria vermelha "como uma jujuba", seus olhos semelhantes aos de uma fênix e suas sobrancelhas, semelhantes a minhocas. Nos templos, muitas vezes é representado junto com seu cavalo "Lebre Vermelha" ou, então, cercado por seus auxiliares, o filho adotivo Kwan Ping (branco) que carrega em sua mão um presente que é símbolo da unificação que seu pai ajudou a construir e o escudeiro Chou Tsang (negro) que empunha a mortífera arma Kwan Tao.
            </p>

            {/* Grid Iconográfico */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-5 rounded-xl bg-gradient-to-b from-red-950/40 to-neutral-900/70 border border-red-900/30 space-y-2">
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-chinese flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500" />
                  Lebre Vermelha
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  O lendário e garboso corcel de batalha que acompanhou o herói em suas maiores jornadas e busca pelo reencontro com seu irmão.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-red-900/30 space-y-2">
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-chinese flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  Kwan Ping (Filho)
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Representado com vestes claras, portando o símbolo selado da unificação e harmonia que seu pai ajudou a edificar.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-red-900/30 space-y-2">
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-chinese flex items-center gap-2">
                  <Sword className="w-4 h-4 text-red-400" />
                  Chou Tsang & Kwan Tao
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  O leal escudeiro empunhando a temível alabarda Kwan Tao (Guandao), arma pesada de corte e cortejar marcial.
                </p>
              </div>
            </div>

            <p>
              Uma das lendas relacionadas ao Kwan Kun afirma que ele teria sido fecundado por uma divindade solar e que sua mãe, ao invés de ter um parto normal, teria botado um ovo (vermelho como sangue). O marido, com medo do que pudesse sair do ovo e furioso com o filho que, ele desconfiava, não era seu, tentou destruí-lo quebrando a casca antes que eclodisse. O menino lá dentro estava quase que totalmente formado, a não ser pela face (ainda vermelha). Mesmo tendo vindo ao mundo antes do tempo, o garoto sobreviveu e cresceu, vindo a se tornar um herói. Não perdeu, porém, o rosto vermelho, fruto da ira de seu pai. No entanto, a cor vermelha na cultura chinesa representa coragem e justiça, podendo isto, explicar a cor vermelha pintada em todos os quadros dele.
            </p>

            <p>
              Existem muitas lendas que contam as cenas de bravura da vida de Kwan Kun, estas são apenas algumas delas. São conhecidas muitas versões sobre seu nascimento, vida e morte. Mas o que importa é que ele é visto em todas as histórias como um representante de tudo aquilo que a cultura chinesa considera de bom e certo no domínio das artes marciais. Kwan Kun era orgulhoso de mente e corpo, corajoso em combate, generoso, honesto, justo e leal. Essas boas qualidades é que são exaltadas quando se faz uma reverência à figura legendária de Kwan Kun. Um exemplo a ser seguido dentro e fora dos locais de treinamento.
            </p>

            {/* A Tradição Marcial do Altar */}
            <div className="bg-gradient-to-r from-red-950/70 via-neutral-900 to-red-950/50 border border-red-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 border-b border-red-800/40 pb-4">
                <Flame className="w-6 h-6 text-red-500 animate-pulse" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wider text-amber-400">
                    O Altar Marcial nas Academias de Kung Fu
                  </h3>
                  <span className="text-xs text-gray-400">Tradição, Saudação e Foco para os Treinamentos</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                É muito comum, em diversas academias e salas de treino de kung fu, existir um pequeno altar suspenso com uma imagem do Kwan Kun. Ao entrar no salão de treinos o praticante de kung fu se dirige primeiramente até esta imagem e presta uma simples reverência, saudando-o com o cumprimento formal do kung fu (punho direito fechado coberto pela palma da mão esquerda, suspensos na frente do corpo).
              </p>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Ao início dos treinos é costume que todos os presentes acendam incensos e cumprimentem, em conjunto, o Kwan Kun. A intenção destas reverências ao Kwan Kun é a de que todos se "concentrem" para o início dos treinamentos, focando sua atenção em três aspectos que devem estar presentes durante todo o treino:
              </p>

              {/* Os 3 Aspectos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-amber-500/40 text-center space-y-1.5 shadow">
                  <span className="text-2xl font-bold text-amber-400 font-chinese">1. 興趣</span>
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">Interesse</h5>
                  <p className="text-xs text-gray-300">Em si mesmo e no outro</p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-red-500/40 text-center space-y-1.5 shadow">
                  <span className="text-2xl font-bold text-red-400 font-chinese">2. 和諧</span>
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">Sintonia</h5>
                  <p className="text-xs text-gray-300">Consigo mesmo e com o outro</p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-amber-500/40 text-center space-y-1.5 shadow">
                  <span className="text-2xl font-bold text-amber-400 font-chinese">3. 信任</span>
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">Confiança</h5>
                  <p className="text-xs text-gray-300">Em si mesmo e no outro</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-red-950/40 border border-red-900/50 text-xs sm:text-sm text-gray-300">
                <span className="w-3 h-3 rounded-full bg-red-500 shrink-0 animate-ping" />
                <span>
                  Para que seu espírito seja invocado, os chineses costumavam acender uma vela vermelha ou uma pequena lâmpada da mesma cor, o que significa que o mesmo está presente.
                </span>
              </div>
            </div>

          </div>
        </motion.section>

      </div>

      {/* Bottom Call to Action Banner */}
      <BottomCtaBanner navigate={navigate} />
    </div>
  );
};
