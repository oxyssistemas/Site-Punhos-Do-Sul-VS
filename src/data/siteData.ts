import { ModalityCard, AnimalStyle, WeaponItem, SubpageContent } from '../types';

export const SITE_INFO = {
  name: 'Academia Punhos Do Sul Kung Fu Shaolin',
  subtitle: 'Mais que uma Arte Marcial, um Estilo de Vida',
  tagline: 'Leve os ensinamentos do kung fu para sua vida',
  phone: '5543999130397',
  displayPhone: '(43) 99913-0397',
  address: 'Av. São João 3058, Londrina - PR',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.684499401735!2d-51.1348083!3d-23.3271797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb430e32b851b3%3A0x7d0a213e2bb97f39!2sAv.%20S%C3%A3o%20Jo%C3%A3o%2C%203058%20-%20Antares%2C%20Londrina%20-%20PR%2C%2086036-030!5e0!3m2!1spt-BR!2sbr!4v1700000000000',
  whatsappUrl: 'https://api.whatsapp.com/send?phone=5543999130397&text=Ol%C3%A1,%20Queria%20Marcar%20Uma%20Aula%20Experimental!',
  instagramUrl: 'https://www.instagram.com/academia_punhos_do_sul/',
  facebookUrl: 'https://www.facebook.com/PunhosDoSul',
  tiktokUrl: 'https://www.tiktok.com/@kung.fu.punhos.do.sul?_t=8j4EcjfytyH&_r=1',
  agencyUrl: 'https://grupocentraltecnol.wixsite.com/centralmarketing',
  copyright: '©2024 por Academia Punhos Do Sul Kung Fu Shaolin. Todos os Direitos Reservados',
  developerCredit: 'Desenvolvido Por Central Marketing Digital',
  logoPlaceholder: '/images/logo.png',
};

export const MODALITIES_NAV = [
  { name: 'Boxe Chinês', href: '/#card-boxe-chines' },
  { name: 'Kung Fu', href: '/kung-fu-1' },
  { name: 'Tai Chi Chuan', href: '/tai-chi-chuan' },
  { name: 'Chi Kung', href: '/chi-kung' },
  { name: 'Defesa Pessoal', href: '/defesa-pessoal' },
  { name: 'Sanda', href: '/sanda' },
  { name: 'Wushu', href: '/wushu' },
  { name: 'Dança Do Leão', href: '/dança-do-leão' },
  { name: 'Meditação', href: '/medtação' },
  { name: 'Filosofia', href: '/filosofia' },
];

export const INDIVIDUAL_NAV_ITEMS = [
  { name: 'Estilo Animal', href: '/estilo-animal' },
  { name: 'Armas', href: '/armas-do-kung-fu' },
  { name: 'Kwan Kung', href: '/kwan-kung' },
  { name: 'Bodhidharma', href: '/bodhidharma' },
];

export const PRIMARY_NAV_ITEMS = [
  { name: 'Estilo Animal', href: '/estilo-animal' },
  { name: 'Armas', href: '/armas-do-kung-fu' },
];

export const MASTERS_NAV_ITEMS = [
  { name: 'Kwan Kung', href: '/kwan-kung', label: '關公 Kwan Kung' },
  { name: 'Bodhidharma', href: '/bodhidharma', label: '達摩 Bodhidharma' },
];

export const HOME_CARDS: ModalityCard[] = [
  {
    id: 'boxe-chines',
    title: 'Boxe Chinês',
    description: 'O Boxe Chinês é uma modalidade dinâmica de combate que reúne socos potentes, chutes velozes, defesas atentas e projeções, proporcionando excelente queima calórica, reflexos rápidos e alto condicionamento físico.',
    href: '#boxe-chines',
    imagePlaceholder: '/images/modalidades/boxe-chines.jpg',
  },
  {
    id: 'kung-fu',
    title: 'kung fu',
    description: 'Kung fu é uma arte marcial que nasceu na China. A tradução literal do mandarim significa “trabalhar duro” ou “tempo e habilidade”. Para os chineses, a expressão..',
    href: '/kung-fu-1',
    imagePlaceholder: '/images/modalidades/kung-fu.jpg',
  },
  {
    id: 'defesa-pessoal',
    title: 'Defesa pessoal',
    description: 'No Kung Fu, a defesa pessoal é uma parte importante do treinamento. Existem diversas técnicas e estratégias para se defender de ataques, tanto desarmados quanto armados...',
    href: '/defesa-pessoal',
    imagePlaceholder: '/images/modalidades/defesa-pessoal.jpg',
  },
  {
    id: 'danca-do-leao',
    title: 'dança do leão',
    description: 'A dança do leão, é uma forma de dança tradicional na cultura chinesa e em outros países asiáticos em que os artistas imitam os movimentos de um leão em uma...',
    href: '/dança-do-leão',
    imagePlaceholder: '/images/modalidades/danca-do-leao.jpg',
  },
  {
    id: 'tai-chi-chuan',
    title: 'tai chi chuan',
    description: 'Tai Chi Chuan é uma arte marcial chinesa praticada com movimentos lentes e em silêncio, proporcionando a movimentação da energia do corpo e estimulando a consciência...',
    href: '/tai-chi-chuan',
    imagePlaceholder: '/images/modalidades/tai-chi-chuan.jpg',
  },
  {
    id: 'sanda',
    title: 'Sanda',
    description: 'Sanda que em mandarim significa "luta livre", também conhecido como sanshou, do mandarim "mãos livres". É a técnica existente nas artes marciais chinesas para...',
    href: '/sanda',
    imagePlaceholder: '/images/modalidades/sanda.jpg',
  },
  {
    id: 'meditacao',
    title: 'Meditação',
    description: 'A meditação é uma prática de regulação do corpo e da mente que treina a focalização da atenção, para alcançar tranquilidade, concentração, redução de estresse e ansiedade.',
    href: '/medtação',
    imagePlaceholder: '/images/modalidades/meditacao.jpg',
  },
  {
    id: 'chi-kung',
    title: 'chi kung',
    description: 'No Kung Fu, a defesa pessoal é uma parte importante do treinamento. Existem diversas técnicas e estratégias para se defender de ataques, tanto desarmados quanto armados...',
    href: '/chi-kung',
    imagePlaceholder: '/images/modalidades/chi-kung.jpg',
  },
  {
    id: 'wushu',
    title: 'Wushu',
    description: '“Wushu” é um termo chinês que significa “arte da guerra” e designa todas as artes guerreiras, militares ou marciais. Assim como qualquer arte marcial, requer muito tempo de prática..',
    href: '/wushu',
    imagePlaceholder: '/images/modalidades/wushu.jpg',
  },
  {
    id: 'filosofia',
    title: 'Filosofia',
    description: 'A filosofia do Kung Fu é profunda e está enraizada nas tradições culturais chinesas. Ela não se limita apenas às técnicas de combate físico, mas também abrange aspectos mentais, espirituais e éticos',
    href: '/filosofia',
    imagePlaceholder: '/images/modalidades/filosofia.jpg',
  },
];

export const ANIMAL_STYLES: AnimalStyle[] = [
  {
    id: 'tigre',
    name: 'Tigre',
    description: 'Sua técnica representa a agressividade, determinação e voracidade. Um tigre mantém a postura antes de um ataque, chega a não respirar e no momento oportuno parte para cima da presa com uma ofensiva potente. A garra do tigre é um poderoso golpe de palma que também pode agarrar e/ou rasgar o adversário.',
    imagePlaceholder: '/images/estilos/tigre.jpg',
  },
  {
    id: 'dragao',
    name: 'dragao',
    description: 'Na mitologia chinesa, o dragão é tido como um dos quatro animais divinos que possuem poderes sobrenaturais e sabedoria profunda. Foi um símbolo imperial por séculos e objeto de muitos rituais e desfiles – como até hoje acontece no desfile do Ano Novo Chinês. Nas técnicas do nosso estilo, o Dragão manifesta-se através de golpes ascendentes que entram por baixo da guarda adversário, em técnicas "voadoras" com saltos e giros, em passos rápidos e sinuosos, além de uma forte técnica com os dedos em garra.',
    imagePlaceholder: '/images/estilos/dragao.jpg',
  },
  {
    id: 'garca',
    name: 'Garca',
    description: 'O estilo da garça no kung fu possui movimentos harmoniosos e elegantes. Para ilustrar a diferença entre os estilos, podemos imaginar que o tigre vence através da força, a pantera através da velocidade, enquanto a garça (justamente por não ser um predador) desenvolve uma estratégia de luta baseada em defender, bloquear, esquivar e redirecionar ataques, buscando sempre a vantagem do contra-ataque.',
    imagePlaceholder: '/images/estilos/garca.jpg',
  },
  {
    id: 'leopardo',
    name: 'Leopardo',
    description: 'Os objetivos do estilo Leopardo são, desenvolver a velocidade e força muscular. O estilo leopardo foi fundado na observação dos criadores dos movimentos do leopardo na natureza e, portanto, os praticantes do estilo imitam esses movimentos. Ele não depende de posturas enraizadas, e só assumiria uma postura durante o ataque, a fim de lançar no oponente.',
    imagePlaceholder: '/images/estilos/leopardo.jpg',
  },
  {
    id: 'louva-deus',
    name: 'louva-deus',
    chineseName: 'Tanglangquan (唐朗拳)',
    description: 'O estilo Louva-a-deus, também conhecido como Tanglangquan (唐朗拳) em chinês, é uma forma distintiva de Kung Fu que imita os movimentos do inseto louva-a-deus. Este estilo é conhecido por suas técnicas rápidas, ágeis e poderosas, muitas vezes caracterizadas por golpes de punho e técnicas de agarre. O treinamento no estilo geralmente inclui a prática de formas, técnicas de combate, exercícios de condicionamento físico e, em alguns casos, o treinamento com armas específicas associadas ao estilo.',
    imagePlaceholder: '/images/estilos/louva-deus.jpg',
  },
  {
    id: 'aguia',
    name: 'aguia',
    description: 'Uma das principais características técnicas do estilo garra de águia é justamente a aplicação de garras a fim de imobilizar e controlar o adversário, além de ferir suas articulações de modo a debilitá-lo para o combate. Para desenvolver essa habilidade, é preciso um treinamento rigoroso a fim de fortalecer os dedos e ser capaz de aplicar a garra com agilidade e precisão. O treinamento de QìGōng 氣功 também é essencial para a aplicação correta da força interior. A técnica da garra faz parte de um método de Kung Fu denominado Qínná 擒拿, cuja tradução é "capturar e travar". O perito nesse método pode dominar o adversário usando o sistema de alavancas do corpo ao pressionar as regiões articulares, as cavidades e pontos vitais, o que exige um pleno conhecimento anatômico.',
    imagePlaceholder: '/images/estilos/aguia.jpg',
  },
  {
    id: 'serpente',
    name: 'Serpente',
    description: 'Através da flexibilidade e da fluidez dos movimentos, a serpente "envolve e anula o oponente". A defesa conta com movimentos que entrelaçam com os de seus adversários , enquanto o ataque busca por ângulos inesperados. As técnicas de mão da serpente no kung fu tem como objetivo atingir pontos específicos como olhos, garganta e baixo ventre. A movimentação exige uma grande noção de distancia e visão de ataque.',
    imagePlaceholder: '/images/estilos/serpente.jpg',
  },
  {
    id: 'macaco',
    name: 'macaco',
    description: 'É composto dos movimentos, características, e o espírito dos macacos. Este estilo é muito forte nas pernas e saltos. O Kungfu do macaco é uma técnica imitativa e, portanto, a execução dos movimentos e expressões faciais deve ser tão convincente que pareça exatamente com um macaco e não simplesmente como um ser humano imitando um macaco, daí o alto grau de dificuldade associado a essa técnica.',
    imagePlaceholder: '/images/estilos/macaco.jpg',
  },
];

export const WEAPONS_ITEMS: WeaponItem[] = [
  { id: 'bastao', name: 'Gun (Bastão Longo)', category: 'Arma Longa', imagePlaceholder: '/images/armas/bastao-gun.png' },
  { id: 'espada', name: 'Jian (Espada Reta)', category: 'Arma Curta', imagePlaceholder: '/images/armas/espada-jian.png' },
  { id: 'sabre', name: 'Dao (Sabre Curvo)', category: 'Arma Curta', imagePlaceholder: '/images/armas/sabre-dao.png' },
  { id: 'lanca', name: 'Qiang (Lança Chinesa)', category: 'Arma Longa', imagePlaceholder: '/images/armas/lanca-qiang.png' },
  { id: 'kwan-tao', name: 'Kwan Tao (Alabarda do General Kwan)', category: 'Arma Pesada Longa', imagePlaceholder: '/images/armas/kwan-tao.png' },
  { id: 'nunchaku', name: 'Shuang Jie Gun (Nunchaku)', category: 'Arma Articulada', imagePlaceholder: '/images/armas/nunchaku.png' },
  { id: 'bastao-3-secoes', name: 'San Jie Gun (Bastão de 3 Seções)', category: 'Arma Articulada Longa', imagePlaceholder: '/images/armas/san-jie-gun.png' },
  { id: 'facas-borboleta', name: 'Hu Die Dao (Facas Borboleta)', category: 'Arma Dupla', imagePlaceholder: '/images/armas/facas-borboleta.png' },
  { id: 'corrente-9-secoes', name: 'Jiu Jie Bian (Chicote de Nove Seções)', category: 'Arma Flexível', imagePlaceholder: '/images/armas/corrente-9-secoes.png' },
  { id: 'tonfa', name: 'Guai / Tonfa Chinesa', category: 'Arma Curta Dupla', imagePlaceholder: '/images/armas/tonfa.png' },
  { id: 'sai', name: 'Chai / Garfo de Ferro', category: 'Arma Dupla Defensiva', imagePlaceholder: '/images/armas/sai.png' },
  { id: 'machados-duplos', name: 'Shuang Fu (Machados Duplos)', category: 'Arma Pesada Dupla', imagePlaceholder: '/images/armas/machados-duplos.png' },
  { id: 'adagas-duplas', name: 'Shuang Bi Shou (Adagas Duplas)', category: 'Arma Curta', imagePlaceholder: '/images/armas/adagas.png' },
  { id: 'punhal-dardo-corda', name: 'Sheng Biao (Dardo de Corda)', category: 'Arma Flexível Oculta', imagePlaceholder: '/images/armas/dardo-corda.png' },
  { id: 'leque-aco', name: 'Tie Shan (Leque Marcial de Aço)', category: 'Arma Oculta Elegante', imagePlaceholder: '/images/armas/leque-aco.png' },
  { id: 'espada-gancho', name: 'Shuang Gou (Espadas de Gancho Duplas)', category: 'Arma Especial Dupla', imagePlaceholder: '/images/armas/espada-gancho.png' },
  { id: 'escudo-espada', name: 'Teng Pai & Dao (Escudo e Sabre)', category: 'Armamento de Infantaria', imagePlaceholder: '/images/armas/escudo-sabre.png' },
  { id: 'tridente', name: 'San Cha (Tridente Marcial)', category: 'Arma Longa Pesada', imagePlaceholder: '/images/armas/tridente.png' },
  { id: 'martelo-meteoro', name: 'Liu Xing Chui (Martelo Meteoro)', category: 'Arma Flexível de Impacto', imagePlaceholder: '/images/armas/martelo-meteoro.png' },
  { id: 'bengala-marcial', name: 'Guai Zhang (Bengala do Monge)', category: 'Arma Cotidiana de Defesa', imagePlaceholder: '/images/armas/bengala-monge.png' },
];

export const SUBPAGES_DATA: Record<string, SubpageContent> = {
  'kung-fu-1': {
    id: 'kung-fu-1',
    title: 'Kung Fu',
    heroImagePlaceholder: '/images/subpages/kungfu-hero.jpg',
    metaDescription: 'O Kung Fu é considerado umas das artes marciais chinesas mais antigas do mundo. O termo chinês significa “arte da guerra”.',
    sections: [
      {
        title: 'O que é?',
        imagePlaceholder: '/images/subpages/kungfu-oquee.jpg',
        paragraphs: [
          'O Kung Fu é considerado umas das artes marciais chinesas mais antigas do mundo. O termo chinês significa “arte da guerra”. A expressão Kung Fu também se refere a algo que foi conquistado com muito esforço e competência no momento da luta corporal.',
          'Originalmente chamado de wushu (que significa “arte da guerra”, em mandarim), o kung fu surgiu da necessidade de lutar contra animais ferozes e inimigos. Este estilo de luta teria sido criado há aproximadamente 4 mil anos.',
          'O treinamento envolve exercicios fisicos e mentais, utilizando tecnicas de luta com ou sem armas tradicionais chinesas, como bastão, facão, lança e espada.',
          'Um diferencial do kung fu é que antigos lutadores chineses após observarem e estudarem alguns animais, desenvolveram tecnicas e estilos de luta inspirados nesses animais que são, Tigre, Serpente, Dragão, Pantera e Garça.',
        ],
      },
      {
        title: 'História',
        imagePlaceholder: '/images/subpages/kungfu-historia.jpg',
        paragraphs: [
          'Por ser uma das artes marciais mais antigas do mundo, existe muitas lendas sobre sua origem.',
          'Em uma delas acredita-se que o kung-fu tenha surgido na Índia e tenha sido levado à China apenas por volta de 500 d.C. pelo monge Bodidharma, que teria incluído a meditação como parte integrante da arte marcial. Sua origem budista foi parcialmente modificada ao se instalar no templo chinês Shaolin. Isso porque o budismo indiano pregava o ascetismo de seus praticantes, enquanto a versão budista de Bodidharma apenas impedia o praticante do exercício de atitudes extremas, como matar e roubar.',
          'Até esse momento, as práticas do kung-fu eram transmitidas apenas entre monges, caracterizando uma relação íntima entre discípulo e mestre. No entanto, a partir dos séculos XIV e XV, especificamente durante o governo da dinastia Ming, houve um crescimento na quantidade de praticantes do kung-fu bastante significativo. Assim, se antes as técnicas do kung-fu permaneciam em segredo entre os monges do templo Shaolin, após esse período técnicas de outras artes marciais foram agrupadas à prática dos monges, e o kung-fu deixou de ser um segredo, tornando-se uma técnica a ser aprendida e ensinada. Esse processo permitiu à dinastia Ming o uso dos monges como soldados, protegendo seu território contra piratas japoneses por mais de uma vez.',
          'Outra lenda muito conhecida narra a história de um monge chinês chamado Ta Mo, que subiu em uma montanha para observar o movimento dos animais, as posições em que lutavam e como se defendiam.',
          'A partir dessa observação teria surgido o kung fu, que para os orientais é considerado uma arte, e não uma luta. Sabe-se que durante muito tempo, os ensinamentos do kung fu ficavam restritos aos monges, somente por volta do século XIV é que a técnica passou a ser ensinada a todos que tivessem o interesse.',
          'Fora do Oriente, o kung fu se popularizou no final dos anos de 1960, pela repercussão das séries e filmes de artes marciais, especialmente os estrelados pelos atores Bruce Lee e Jackie Chan.',
        ],
      },
      {
        title: 'Características',
        imagePlaceholder: '/images/subpages/kungfu-caracteristicas.jpg',
        paragraphs: [
          'Uma das características mais visíveis do kung-fu é o uso de armas. A manipulação técnica de armas para o combate remete à evolução da técnica em função de combates de guerra. Os instrumentos mais comuns são o bastão, a lança, o facão e a espada. Essas técnicas extremamente desenvolvidas de manipulação de armas caíram em desuso para soldados quando as armas de fogo passaram a ser utilizadas em campos de batalha. No entanto, ainda são parte integrante da prática do kung-fu até os dias de hoje.',
          'O kung fu tem o objetivo de desenvolver corpo e a mente, criando disciplina, persistência e respeito aos limites dos indivíduos. Há uma filosofia por trás da arte marcial que busca a evolução dos praticantes, ensinando a serem derrotados e encararem novos obstáculos sem desistir ou desanimar.',
          'Esses preceitos fazem parte do kung fu tradicional, que ainda foca parte essencial do treinamento na filosofia chinesa, sendo praticado por pessoas de todas as idades.',
        ],
      },
    ],
  },
  'tai-chi-chuan': {
    id: 'tai-chi-chuan',
    title: 'Tai Chi Chuan',
    heroImagePlaceholder: '/images/subpages/taichi-hero.jpg',
    metaDescription: 'Tai Chi Chuan é uma arte marcial chinesa praticada com movimentos lentos e em silêncio.',
    sections: [
      {
        title: 'o que e?',
        imagePlaceholder: '/images/subpages/taichi-oquee.jpg',
        paragraphs: [
          'Tai Chi Chuan é uma arte marcial chinesa praticada com movimentos suaves, lentos e em silêncio, proporcionando a movimentação da energia do corpo e estimulando a consciência corporal, a concentração e a tranquilidade.',
          'Muitos o definem como uma forma de meditação em movimento. A prática regular melhora o equilíbrio, reduz o estresse e promove a longevidade através do alinhamento postural e da respiração diafragmática profunda.',
        ],
      },
      {
        title: 'beneficios',
        imagePlaceholder: '/images/subpages/taichi-beneficios.jpg',
        paragraphs: [
          'A prática regular de Tai Chi Chuan traz inúmeros benefícios físicos e psicológicos para praticantes de todas as idades:',
        ],
        list: [
          'Aumenta a vitalidade, disposição e energia para o dia a dia;',
          'Fortalece os músculos, tendões e articulações de forma suave;',
          'Melhora o equilíbrio postural e a coordenação motora;',
          'Ajuda a regular a pressão arterial e a circulação sanguínea;',
          'Alivia o estresse diário, a ansiedade e melhora a qualidade do sono;',
          'Estimula o sistema imunológico e a concentração mental.',
        ],
      },
    ],
  },
  'chi-kung': {
    id: 'chi-kung',
    title: 'Chi Kung',
    heroImagePlaceholder: '/images/subpages/chikung-hero.jpg',
    metaDescription: 'O Chi Kung (Qigong) é a arte milenar chinesa de cultivo e circulação da energia vital.',
    sections: [
      {
        title: 'o que e?',
        imagePlaceholder: '/images/subpages/chikung-oquee.jpg',
        paragraphs: [
          'Chi Kung (ou Qigong) é uma prática milenar chinesa fundamentada na Medicina Tradicional Chinesa, focada no cultivo, fortalecimento e harmonização da energia vital (Chi ou Qi) através da respiração consciente, posturas específicas e concentração da mente.',
          'Seus métodos auxiliam na prevenção de enfermidades, no desbloqueio dos meridianos energéticos do corpo humano e no aprimoramento da força interna tanto para a saúde quanto para a performance marcial.',
        ],
      },
      {
        title: 'beneficios',
        imagePlaceholder: '/images/subpages/chikung-beneficios.jpg',
        paragraphs: [
          'Ao praticar o Chi Kung com regularidade, o aluno experimenta equilíbrio fisiológico e mental:',
        ],
        list: [
          'Harmonização das funções dos órgãos internos e meridianos;',
          'Aumento substancial da oxigenação celular e capacidade pulmonar;',
          'Redução de tensões musculares e dores crônicas;',
          'Fortalecimento da imunidade e retardo do envelhecimento precoce;',
          'Estabilidade emocional, clareza mental e paz de espírito.',
        ],
      },
    ],
  },
  'defesa-pessoal': {
    id: 'defesa-pessoal',
    title: 'Defesa Pessoal',
    heroImagePlaceholder: '/images/subpages/defesa-hero.jpg',
    metaDescription: 'No Kung Fu, a defesa pessoal é uma parte importante do treinamento com diversas técnicas e estratégias.',
    sections: [
      {
        title: 'o que e?',
        imagePlaceholder: '/images/subpages/defesa-oquee.jpg',
        paragraphs: [
          'No Kung Fu, a defesa pessoal é uma parte fundamental do treinamento. Existem diversas técnicas e estratégias para se defender de ataques, tanto desarmados quanto armados, priorizando a segurança, a evasão inteligente e a neutralização rápida da ameaça.',
          'O aluno aprende a reconhecer riscos ambientais, manter a postura vigilante, utilizar alavancas anatômicas, esquivas precisas, pontos de pressão (Chin Na / Qin Na) e técnicas de desarme eficazes.',
        ],
      },
      {
        title: 'principios',
        imagePlaceholder: '/images/subpages/defesa-principios.jpg',
        paragraphs: [
          'A defesa pessoal não visa a agressão gratuita, mas sim a preservação da integridade física e emocional:',
        ],
        list: [
          'Percepção situacional e prevenção preventiva de conflitos;',
          'Uso da força do adversário a favor da própria defesa;',
          'Movimentos diretos, objetivos e biomecanicamente eficientes;',
          'Autocontrole emocional em situações sob pressão e adrenalina.',
        ],
      },
    ],
  },
  'sanda': {
    id: 'sanda',
    title: 'Sanda',
    heroImagePlaceholder: '/images/subpages/sanda-hero.jpg',
    metaDescription: 'Sanda que em mandarim significa luta livre, também conhecido como sanshou. É a técnica de combate das artes marciais chinesas.',
    sections: [
      {
        title: 'o que e?',
        imagePlaceholder: '/images/subpages/sanda-oquee.jpg',
        paragraphs: [
          'Sanda, que em mandarim significa "luta livre", também conhecido como Sanshou ("mãos livres"), é a modalidade de combate esportivo e de defesa das artes marciais chinesas.',
          'Desenvolvido inicialmente pelo exército chinês através da síntese das técnicas tradicionais de Kung Fu, o Sanda combina socos do boxe ocidental e chinês, chutes potentes de longo alcance, quedas rápidas (projeções) e bloqueios dinâmicos.',
        ],
      },
      {
        title: 'caracteristicas do combate',
        imagePlaceholder: '/images/subpages/sanda-combate.jpg',
        paragraphs: [
          'O dinamismo do Sanda o torna uma das artes marciais mais completas e dinâmicas do mundo:',
        ],
        list: [
          'Golpes de punho: Diretos, cruzados, ganchos e socos giratórios;',
          'Golpes de perna: Chutes circulares, frontais, laterais e rasteiras;',
          'Quedas e projeções: Arremessos no momento em que se intercepta o chute ou soco adversário;',
          'Condicionamento físico de altíssima intensidade e queima calórica elevada.',
        ],
      },
    ],
  },
  'wushu': {
    id: 'wushu',
    title: 'Wushu',
    heroImagePlaceholder: '/images/subpages/wushu-hero.jpg',
    metaDescription: 'Wushu é um termo chinês que significa arte da guerra e designa todas as artes guerreiras e marciais.',
    sections: [
      {
        title: 'o que e?',
        imagePlaceholder: '/images/subpages/wushu-oquee.jpg',
        paragraphs: [
          'Wushu, cuja tradução literal significa "técnica marcial" ou "arte da guerra" em chinês (Wu = guerra/marcial, Shu = técnica/arte), teve muitos nomes e interpretações ao longo do tempo. Na China contemporânea, Wushu é tanto o termo abrangente para todas as artes marciais quanto a modalidade esportiva e acrobática internacionalmente reconhecida.',
          'O Wushu moderno valoriza a estética, velocidade, flexibilidade, acrobacias espetaculares aliadas ao rigor técnico e à precisão herdada dos estilos tradicionais do norte e sul da China.',
        ],
      },
    ],
  },
  'danca-do-leao': {
    id: 'danca-do-leao',
    title: 'Dança Do Leão',
    heroImagePlaceholder: '/images/subpages/leao-hero.jpg',
    metaDescription: 'A dança do leão é uma forma de dança tradicional na cultura chinesa em que os artistas imitam os movimentos de um leão.',
    sections: [
      {
        title: 'o que e?',
        imagePlaceholder: '/images/subpages/leao-oquee.jpg',
        paragraphs: [
          'A dança do leão (chinês simplificado: 舞狮; chinês tradicional: 舞獅; pinyin: wǔshī) é uma forma de dança tradicional na cultura chinesa e em outros países asiáticos em que os artistas imitam os movimentos de um leão em uma fantasia elaborada para trazer boa sorte, prosperidade e afastar energias negativas.',
        ],
      },
      {
        title: 'Historia',
        imagePlaceholder: '/images/subpages/leao-historia.jpg',
        paragraphs: [
          'A dança do leão se originou durante a dinastia Tang (618-906 DC). Diz a lenda que o imperador teve um sonho uma noite em que uma criatura misteriosa o salvou de um perigo. No dia seguinte, os sábios da corte descreveram que a criatura se assemelhava a um leão.',
          'Os dançarinos do leão são tradicionalmente praticantes de kung-fu. A dança exige que os dançarinos desenvolvam base firme nas pernas (Mabu), força nos ombros, flexibilidade e coordenação rítmica com a bateria de tambores, pratos e gongos.',
        ],
      },
      {
        title: 'leao do sul',
        imagePlaceholder: '/images/subpages/leao-sul.jpg',
        paragraphs: [
          'Guangdong é o lar da variedade sulista. Acredita-se que os leões chifrudos sulistas sejam Nians. O estilo sulista destaca expressões vivas (curiosidade, alegria, sonolência, bravura) e movimentos acrobáticos sobre pilares elevados ou no solo, associando-se diretamente às escolas Shaolin do Sul (Nan Quan).',
        ],
      },
    ],
  },
  'medtacao': {
    id: 'medtacao',
    title: 'Meditação',
    heroImagePlaceholder: '/images/subpages/meditacao-hero.jpg',
    metaDescription: 'A meditação é uma prática de regulação do corpo e da mente que treina a focalização da atenção para tranquilidade.',
    sections: [
      {
        title: 'o que e?',
        imagePlaceholder: '/images/subpages/meditacao-oquee.jpg',
        paragraphs: [
          'A meditação é uma prática de regulação do corpo e da mente que treina a focalização da atenção, para alcançar tranquilidade, concentração, redução de estresse e ansiedade.',
        ],
      },
      {
        title: 'tecnicas',
        imagePlaceholder: '/images/subpages/meditacao-tecnicas.jpg',
        paragraphs: [
          'Mindfulness: Nesta prática, também conhecida como meditação do insight, existe uma atenção livre dos estímulos de distração, ancorando a consciência no momento presente através da observação sem julgamento.',
          'Zazen e Meditação Chan: Foco na respiração e postura sentada ereta para aquietar a mente discursiva e despertar a natureza essencial de clareza interior.',
        ],
      },
      {
        title: 'beneficios',
        imagePlaceholder: '/images/subpages/meditacao-beneficios.jpg',
        paragraphs: [
          'Muitos estudos científicos já comprovaram que a meditação promove bem estar emocional e físico. Confira abaixo os principais benefícios da meditação:',
        ],
        list: [
          'Reduz o estresse: Atua diminuindo o cortisol e aliviando sintomas associados à sobrecarga mental;',
          'Diminui a ansiedade: Exercícios de atenção plena auxiliam no equilíbrio emocional;',
          'Melhora sintomas da depressão: Promove maior positividade e restauração do foco mental;',
          'Aumenta a atenção e foco: Fortalece as conexões neurais responsáveis pela memória e concentração;',
          'Melhora a qualidade do sono: Ajuda no relaxamento e controle da hiperatividade mental noturna.',
        ],
      },
    ],
  },
  'filosofia': {
    id: 'filosofia',
    title: 'Filosofia do Kung Fu',
    heroImagePlaceholder: '/images/subpages/filosofia-hero.jpg',
    metaDescription: 'A filosofia do Kung Fu é profunda e está enraizada nas tradições culturais chinesas.',
    sections: [
      {
        title: 'principios fundamentais',
        imagePlaceholder: '/images/subpages/filosofia-principios.jpg',
        paragraphs: [
          'A filosofia do Kung Fu é profunda e está enraizada nas tradições culturais chinesas. Ela não se limita apenas às técnicas de combate físico, mas também abrange aspectos mentais, espirituais e éticos.',
        ],
        list: [
          'Yin e Yang: O equilíbrio é uma parte essencial da filosofia do Kung Fu. A dualidade entre yin e yang representa a interdependência de forças opostas e a busca pela harmonia entre elas. No Kung Fu, isso se traduz na integração de movimentos suaves e duros, rápidos e lentos.',
          'Taoísmo: O Kung Fu muitas vezes incorpora princípios do Taoísmo, que enfatiza viver em harmonia com o Tao, o caminho natural do universo. A busca pela simplicidade, fluidez e aceitação das mudanças é central no Kung Fu, refletindo ideias taoístas.',
          'Respeito: O Kung Fu promove valores como respeito pelos instrutores, colegas de treino, adversários e até mesmo pelos próprios limites. O respeito é considerado crucial para o desenvolvimento do praticante como pessoa, além de ser fundamental para a ética marcial.',
          'Disciplina e Paciência: A prática do Kung Fu exige disciplina e paciência. A maestria não é alcançada rapidamente; é um processo gradual que requer dedicação e constante autoaperfeiçoamento.',
          'Autodefesa e Ética: Embora o Kung Fu seja uma arte marcial, muitas escolas enfatizam a autodefesa em detrimento da agressão desnecessária. A ética destaca o uso responsável das habilidades e a proteção dos mais fracos.',
          'Caminho do Guerreiro (Wude): O praticante busca não apenas a maestria nas técnicas de combate, mas também um entendimento mais profundo da moralidade, honra e propósito de vida.',
          'Cultivo da Mente e do Corpo: O Kung Fu integra práticas físicas e mentais para alcançar um equilíbrio holístico e duradouro.',
        ],
      },
    ],
  },
  'estilo-animal': {
    id: 'estilo-animal',
    title: 'Estilos Animais',
    heroImagePlaceholder: '/images/subpages/animais-hero.jpg',
    metaDescription: 'Os animais usam seu YI e CHI para caçarem e se protegerem. Antigos artistas marciais elaboraram técnicas inspiradas nos animais.',
    sections: [
      {
        title: 'origem dos estilos animais',
        imagePlaceholder: '/images/subpages/animais-origem.jpg',
        paragraphs: [
          'Os animais usam seu YI (intenção e espírito) e CHI (energia interna) para caçarem, lutarem e se protegerem. Antigos artistas marciais chineses elaboraram técnicas de combate inspiradas nos animais através de estudo e observação rigorosa da fauna.',
          'Esta foi a origem de muitos estilos de Kung Fu. Todavia, cada estilo tem sua própria interpretação: alguns preferem imitar o espírito do animal, ao passo que outros têm maior interesse em suas habilidades biomecânicas e trajetórias de movimento.',
        ],
      },
    ],
  },
  'armas-do-kung-fu': {
    id: 'armas-do-kung-fu',
    title: 'Armas do Kung Fu',
    heroImagePlaceholder: '/images/subpages/armas-hero.jpg',
    metaDescription: 'O Kung Fu abrange uma ampla variedade de armas tradicionais como extensão do treinamento corporal.',
    sections: [
      {
        title: 'o armamento tradicional chinês',
        imagePlaceholder: '/images/subpages/armas-intro.jpg',
        paragraphs: [
          'O Kung Fu, também conhecido como Wushu, é uma forma de artes marciais chinesas que abrange uma ampla variedade de estilos e tradições. O Kung Fu não se concentra em armas específicas, mas muitos estilos incluem técnicas de armas como parte integrante do treinamento.',
          'Essas armas são frequentemente integradas aos estilos de Kung Fu como uma extensão do treinamento corporal e das técnicas de combate desarmado. Cada arma tem suas próprias características distintas e exige habilidades específicas para serem manejadas eficazmente.',
        ],
      },
    ],
  },
  'kwan-kung': {
    id: 'kwan-kung',
    title: 'Kwan Kung',
    heroImagePlaceholder: '/images/subpages/kwankung-hero.jpg',
    metaDescription: 'Divindade protetora das academias de artes marciais, dos negócios e de tudo o que envolva integridade, justiça e coragem. Herói do Período dos Três Reinos.',
    sections: [
      {
        title: 'Quem foi',
        imagePlaceholder: '/images/subpages/kwankung-quemfoi.jpg',
        paragraphs: [
          'Divindade protetora das academias de artes marciais, dos negócios e de tudo o que envolva integridade, justiça e coragem. Se enquadra na categoria dos personagens históricos que, por seus atos e pelo reflexo destes sobre o imaginário popular, acabaram transformados em divindades. É um dos personagens mais queridos do folclore chinês, o que faz com que seja um dos mitos mais ricos em histórias, lendas e até escritos e peças teatrais. Kwan Kun é um dos mais conhecidos heróis do chamado Período dos Três Reinos (220 a 280 d.C.), fase da História da China que se passou logo após o fim da Dinastia Han.',
        ],
      },
      {
        title: 'História',
        imagePlaceholder: '/images/subpages/kwankung-historia.jpg',
        paragraphs: [
          'A história de Kwan Kun (Guan Gong) remonta há 1700 anos (alguns dizem 2000 anos). Apesar de haver um único rei, o território chinês era dividido em feudos governados por generalíssimos que mantinham o poder e o controle de seu território. Nesse período, onde grande parte do território chinês ainda não era habitado, três "ministros\'\' dividiam a parte civilizada: Liu Pei, Tchou Tchou e Sin Kin.',
          'Sin Kin governava uma parte pequena no território, enquanto Tchou Tchou tinha a parte maior. Mas era Liu Pei que contava com a ajuda e a amizade do guerreiro Kwan Kun. Na verdade, Kwan Kun era o "irmão de sangue\'\' de Liu Pei, que mais tarde viria a se tornar um dos reis.',
          'Para os chineses, ser "irmão de sangue\'\' significa dar importância e valor como se fosse irmão verdadeiro a um amigo. Após uma cerimônia onde o sangue é misturado e os dois se tornam irmãos - a partir daí, respeito e lealdade passam a ser ponto de honra. O ditado chinês define bem a extensão dessa amizade: "Pode não ser o mesmo dia que nasce, mas é o mesmo dia que se morre\'\'. E assim era Kwan Kun, irmão de sangue de Liu Pei, juntamente com Chang Fei.',
          'Era a época de batalhas entre os governantes e Liu Pei, apesar de contar com a ajuda do grande guerreiro Kwan Kun, tinha o exército de Tchou Tchou como oponente. Após uma batalha, Liu Pei viu-se obrigado a deixar seu território, refugindo-se nas montanhas.',
          'Com o afastamento de Liu Pei, Kwan Kun ficou com a responsabilidade de proteger a família de seu irmão, assim como o seu exército. A situação era insustentável e Tchou Tchou queria de toda maneira trazer Kwan Kun para lutar em seu exército. Para isso mandou seu general, que era amigo e respeitava muito o lendário guerreiro, para convencê-lo. Kwan Kun relutou muito, a fidelidade a seu irmão de sangue era indiscutível, mas a responsabilidade para com a família dele, a diferença de poderio militar, a falta de notícias de Liu Pei, fizeram com que Kwan Kun decidisse ganhar tempo até descobrir onde seu irmão se refugiava e, enquanto isso, manter a vida de seus familiares.',
          'No entanto, Tchou Tchou não conseguia ganhar a confiança e nem o respeito do herói. Tentou suborná-lo com festas grandiosas, com o oferecimento de mulheres maravilhosas, roupas lindíssimas e muito, muito ouro. Tudo que Kwan Kun recebia, dava para a família de seu irmão guardar para quando ele retornasse.',
          'Um dia, Tchou Tchou conseguiu dar um presente que despertou a alegria de Kwan Kun - um cavalo garboso, que havia pertencido a um general. Era um animal valioso, numa época que a montaria era a única forma de transporte. O que Kwan Kun pretendia, na realidade, era ter o animal para poder procurar seu irmão. Tchou Tchou ficou frustrado. Após muitos acontecimentos, Liu Pei chegou ao poder. Nesta época a China já estava dividida em 3 reinos (San Co). O período que Liu Pei ficou afastado de tudo serviu para que ele conhecesse o sofrimento de seu povo, já que passou pelas mesmas provações.',
          'Diz-se que certa vez Kwan Kun soube que um malfeitor (filho de um governador local), tinha raptado a filha de um homem bom e honesto. Ela então pertenceria para sempre como propriedade do malfeitor. Mas então Kwan Kun veio, matou o malfeitor, salvou a moça e devolveu-a a seu papel. Sabendo que o governador tentaria se vingar, Kwan Kun refugiou-se em um Templo. As tropas do governador finalmente o encontraram e tentaram matá-lo ateando fogo ao Templo. Kwan Kun permaneceu no Templo enquanto as chamas subiam pelos alicerces consumindo tudo. Subitamente ele passou através das chamas, atacou as tropas de surpresa, dispersando-as com poucos problemas. Depois de buscar conforto próximo a um riacho ele percebeu, no reflexo d\'água, que as chamas haviam deixado seu rosto vermelho e brilhante. Com este disfarce ele conseguiu escapar das tropas que continuavam a perseguí-lo.',
          'Outra lenda narra seu encontro com Chang Fei e Liu Pei, do reino de Shu, com quem formaria uma das mais importantes trincas de heróis-divinizados da antiga China. A caminho da conscrição (convocação para o serviço militar), Kwan Kun teria encontrado Chang Fei, um açougueiro que desafiava qualquer pessoa a erguer do chão uma pedra de 180 kg, sob a qual estava um grande pedaço de carne. Até então, ninguém havia vencido. Aceitando o desafio, Kwan Kun ergueu a pedra e se apoderou da carne, provocando a ira de Chang Fei. Os dois começaram uma briga violentíssima, que só foi encerrada com a intervenção de Liu Pei. Mais tranqüilos, perceberam que tinham muitas coisas em comum e se tornaram amigos. Em um campo de pessegueiros, os três fizeram um juramento de amizade pelo qual se obrigavam a viver e a morrer juntos.',
          'Outra lenda ainda conta que vários exércitos haviam se reunido para destruir as tropas de um general rebelde. Percebendo a futilidade em mandar suas tropas contra o inimigo em número bem maior, o general rebelde escolheu seu melhor lutador e desafiou cada comandante para um duelo homem a homem até a morte. Devido a reputação do lutador rebelde nenhum dos comandantes aceitou o desafio. Um dos comandantes foi então até Kwan Kun e lhe ofereceu uma taça de vinho morno - um convite para que representasse os exércitos. Kwan Kun, sem pensar em dizer não, levantou-se da mesa de jantar, lutou contra o campeão rebelde e voltou antes que o seu vinho e sua comida esfriassem.',
          'Certa vez foi acertado por uma flecha envenenada. Apesar de faltar anestesia, os médicos decidiram operá-lo. Quando a cirurgia começou, ele ao mesmo tempo deu início a uma partida de xadrez. Enquanto a cirurgia prosseguia, Kwan Kun se concentrava mais no jogo. Assim que a cirurgia terminou, Kwan Kun venceu a partida e foi embora.',
          'Como soldado, era conhecido pelo nome de Kwan Yu ou Kuan Yu, e, antes de ser elevado a categoria de divindade, era considerado um herói militar, que exibia poder e coragem, era imbatível nas batalhas, leal, bom, generoso e admirado por seus companheiros. Infelizmente, o destino reservou-lhe um desastroso fim. No momento em que as forças de Kwan Kun estavam em batalha com o exército de Wei, batalhões do reinado de Wu iniciaram um ataque surpresa que esmagou o exército de Shu Han. Algumas versões dizem que Kwan Kun foi traído por um de seus soldados, que informou ao inimigo a localização de sua tropa. Contava ele com 52 anos de idade.',
          'A tumba contendo seu corpo estaria localizada em Tangyang e sua cabeça teria sido sepultada em Loyang (Henan), uma localidade situada ao lado do mosteiro de Shaolin. Relatos antigos contam que após a sua morte, Kwan Kun apareceu muitas vezes a seus soldados, o que levou-os a crer que ele seja o santo protetor dos guerreiros.',
          'A figura de Kwan Kun também é colocada nas delegacias chinesas, para que os policiais não se esqueçam que a honestidade deve vir em primeiro lugar.',
        ],
      },
      {
        title: 'Características',
        imagePlaceholder: '/images/subpages/kwankung-simbolo.jpg',
        paragraphs: [
          'As lendas mostram a transformação do homem comum em divindade: segundo o folclore, Kwan Kun teria 2,70 metros de altura e uma barba de 60 cm; a face seria vermelha "como uma jujuba", seus olhos semelhantes aos de uma fênix e suas sobrancelhas, semelhantes a minhocas. Nos templos, muitas vezes é representado junto com seu cavalo "Lebre Vermelha" ou, então, cercado por seus auxiliares, o filho adotivo Kwan Ping (branco) que carrega em sua mão um presente que é símbolo da unificação que seu pai ajudou a construir e o escudeiro Chou Tsang (negro) que empunha a mortífera arma Kwan Tao.',
          'Uma das lendas relacionadas ao Kwan Kun afirma que ele teria sido fecundado por uma divindade solar e que sua mãe, ao invés de ter um parto normal, teria botado um ovo (vermelho como sangue). O marido, com medo do que pudesse sair do ovo e furioso com o filho que, ele desconfiava, não era seu, tentou destruí-lo quebrando a casca antes que eclodisse. O menino lá dentro estava quase que totalmente formado, a não ser pela face (ainda vermelha). Mesmo tendo vindo ao mundo antes do tempo, o garoto sobreviveu e cresceu, vindo a se tornar um herói. Não perdeu, porém, o rosto vermelho, fruto da ira de seu pai. No entanto, a cor vermelha na cultura chinesa representa coragem e justiça, podendo isto, explicar a cor vermelha pintada em todos os quadros dele.',
          'Existem muitas lendas que contam as cenas de bravura da vida de Kwan Kun, estas são apenas algumas delas. São conhecidas muitas versões sobre seu nascimento, vida e morte. Mas o que importa é que ele é visto em todas as histórias como um representante de tudo aquilo que a cultura chinesa considera de bom e certo no domínio das artes marciais. Kwan Kun era orgulhoso de mente e corpo, corajoso em combate, generoso, honesto, justo e leal. Essas boas qualidades é que são exaltadas quando se faz uma reverência à figura legendária de Kwan Kun. Um exemplo a ser seguido dentro e fora dos locais de treinamento.',
          'É muito comum, em diversas academias e salas de treino de kung fu, existir um pequeno altar suspenso com uma imagem do Kwan Kun. Ao entrar no salão de treinos o praticante de kung fu se dirige primeiramente até esta imagem e presta uma simples reverência, saudando-o com o cumprimento formal do kung fu (punho direito fechado coberto pela palma da mão esquerda, suspensos na frente do corpo).',
          'Ao início dos treinos é costume que todos os presentes acendam incensos e cumprimentem, em conjunto, o Kwan Kun. A intenção destas reverências ao Kwan Kun é a de que todos se "concentrem" para o início dos treinamentos, focando sua atenção em três aspectos que devem estar presentes durante todo o treino: interesse (em si mesmo e no outro), sintonia (consigo mesmo e com o outro) e confiança (em si mesmo e no outro).',
          'Para que seu espírito seja invocado, os chineses costumavam acender uma vela vermelha ou uma pequena lâmpada da mesma cor, o que significa que o mesmo esta presente.',
        ],
      },
    ],
  },
  'bodhidharma': {
    id: 'bodhidharma',
    title: 'Bodhidharma',
    heroImagePlaceholder: '/images/subpages/bodhidharma-hero.jpg',
    metaDescription: 'Monge budista transmissor da seita Chán para a China, primeiro patriarca e pioneiro no treinamento dos monges shaolin e criação do Kung Fu Shaolin.',
    sections: [
      {
        title: 'Quem foi',
        imagePlaceholder: '/images/subpages/bodhidharma-quemfoi.jpg',
        paragraphs: [
          'Bodhidharma ou Bodidarma foi um monge budista de origem persa que viveu durante os séculos V ou VI. Tradicionalmente, a ele, é dado o crédito de ter sido o transmissor da seita Chán para a China, sendo considerado o seu primeiro patriarca. Segundo uma lenda chinesa, ele iniciou o treinamento físico dos monges shaolin, treinamento este que levaria à posterior criação do Shaolin quan.',
        ],
      },
      {
        title: 'História',
        imagePlaceholder: '/images/subpages/bodhidharma-historia.jpg',
        paragraphs: [
          'Tem-se muito pouca informação contemporânea sobre a vida de Bodhidharma, e narrações posteriores misturaram-se com lendas, mas a maior parte dos relatos concordam que ele foi um monge do Irão que viajou para o sul da China e, posteriormente, mudou-se para o norte. Há divergências quanto à data de sua chegada: um relato antigo diz que ele chegou durante a dinastia Liu Song (420–479), ao passo que relatos posteriores dizem que chegou durante a dinastia Liáng (502–557). Atualmente, aceita-se o início do século V.',
          'Era filho do rei Sughanda. Como pertencia à casta dos xátrias, aprendeu a arte marcial indiana do vajramushti. Seu mestre nessa arte foi o famoso Prajnatara. Após se tornar o 28º (e último) patriarca do budismo, Bodhidharma viajou à China a convite do imperador Liang Wu Ti, que governava um dos reinos do período das Seis Dinastias e que seguia uma linha inovadora do budismo, que privilegiava os rituais. Como Bodhidharma ensinava uma linha de budismo que privilegiava a meditação, Bodhidharma se indispôs com o imperador Liang Wu Ti e decidiu fixar residência em outro local: o templo Shaolin, no reino de Wei, onde Bodhidharma viria a se tornar célebre pela criação do zen e do kung fu shaolin.',
        ],
      },
      {
        title: 'Bodhidharma e as artes marciais',
        imagePlaceholder: '/images/subpages/bodhidharma-artes.jpg',
        paragraphs: [
          'Diz a lenda que, ao chegar no templo Shaolin, Bodhidharma deparou-se com a precária condição de saúde dos monges, fruto de sua inatividade. Foi então que ele teria iniciado os monges na prática de uma série de exercícios físicos baseados tanto na arte marcial indiana do vajramushti quanto no antigo kung fu chinês, ao mesmo tempo em que transmitia-lhes os fundamentos da filosofia zen, com o objetivo de reabilitá-los tanto física quanto espiritualmente.',
          'Os exercícios ensinados por Bodhidharma eram baseados em métodos de respiração profunda e ioga, e seus movimentos se assemelhavam a técnicas de combate. A prática desses exercícios logo tornou-se uma tradição no templo, vindo mais tarde a atingir um estado de evolução tal que pôde ser considerada como um verdadeiro e completo sistema de autodefesa: o kung fu shaolin, que, no Japão, é conhecido como shorinji kenpo.',
          'Esta arte marcial em ascensão logo mostrou sua eficiência: primeiro, com relação à restabelecida saúde dos monges; segundo, como método de defesa pessoal propriamente dito posto em prática contra bandoleiros que, por vez ou outra, saqueavam o templo, de quem os monges, em outros tempos, eram considerados presas fáceis.',
          'Numa lenda, Bodhidharma recusou-se a continuar a ensinar seu futuro estudante, Hui-k\'o, que manteve vigília por várias semanas na neve fora do monastério e que cortou seu próprio braço esquerdo para demonstrar sua sinceridade. Contudo, o discípulo não havia entendido que o "braço esquerdo" a que Bodhidharma havia se referido era, na verdade, uma alegoria quanto à necessidade de Hui-k\'o se livrar de suas vicissitudes.',
          'O Yi Jin Jing dá crédito a Bodhidharma pelo kung fu shaolin ensinado aos monges do templo Shaolin, o que o tornaria uma influência importante nas artes marciais em geral. O kung fu shaolin se difundiu amplamente pelo país, principalmente durante a Dinastia Ming (1368-1644), vindo mais tarde a conquistar outros países da Ásia e a dar origem a outros estilos de artes marciais, como o caratê de Okinawa.',
        ],
      },
    ],
  },
};
