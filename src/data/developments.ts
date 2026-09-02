export type WhatsAppKey = 'horizonte' | 'mata' | 'alpes'

export type Photo = {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
  video?: string
  plate?: string
}

export type Development = {
  slug: string
  recanto: string
  name: string
  location: string | null
  status: string
  summary: string
  href: string | null
  whatsappKey: WhatsAppKey
  cover: Photo
}

export const developments: Development[] = [
  {
    slug: 'recanto-do-horizonte',
    recanto: 'Recanto',
    name: 'do Horizonte',
    location: 'Canaã, Belo Horizonte',
    status: 'Lançamento',
    summary:
      'Duas torres, 177 unidades e vista da cidade. Registro de incorporação obtido.',
    href: '/empreendimentos/recanto-do-horizonte',
    whatsappKey: 'horizonte',
    cover: {
      src: '/assets/recantos/horizonte/fachada-2.webp',
      width: 1600,
      height: 1333,
      alt: 'Fachada do Recanto do Horizonte, duas torres residenciais em Canaã.',
    },
  },
  {
    slug: 'recanto-da-mata',
    recanto: 'Recanto',
    name: 'da Mata',
    location: 'Jaqueline, Belo Horizonte',
    status: 'Em obras · comercializado',
    summary:
      'Torre de 10 andares, 100 unidades residenciais e 3 lojas. Unidades comercializadas.',
    href: null,
    whatsappKey: 'mata',
    cover: {
      src: '/assets/recantos/mata/fachada.webp',
      width: 1600,
      height: 1600,
      alt: 'Fachada ensolarada do Recanto da Mata, com lojas no térreo e palmeiras.',
    },
  },
  {
    slug: 'recanto-dos-alpes',
    recanto: 'Recanto',
    name: 'dos Alpes',
    location: null,
    status: 'Série Recanto',
    summary:
      'Empreendimento da série Recanto, com plantas e interiores apresentados. Fale com a equipe para o momento comercial.',
    href: null,
    whatsappKey: 'alpes',
    cover: {
      src: '/assets/recantos/alpes/hall.webp',
      width: 1600,
      height: 800,
      alt: 'Hall de entrada do Recanto dos Alpes.',
    },
  },
]

export const horizonte = {
  title: 'Recanto do Horizonte',
  location: 'Canaã, Belo Horizonte',
  lead: 'Empreendimento pensado para qualidade de vida, localização e uma vista de Belo Horizonte.',
  facts: [
    { label: 'Unidades', value: '177 residenciais' },
    { label: 'Torres', value: '2 torres' },
    { label: 'Garagem', value: 'Edifício-garagem' },
    { label: 'Comércio', value: 'Loja de 382 m²' },
    { label: 'Entrada', value: 'Rua Mauritânia' },
    { label: 'Frente', value: 'Estrada de Santa Luzia' },
    { label: 'Registro', value: 'Incorporação registrada' },
    { label: 'Próximo passo', value: 'Formalização junto à Caixa' },
  ],
  stats: [
    { value: '177', label: 'Unidades residenciais' },
    { value: '2', label: 'Torres' },
    { value: 'Registro', label: 'Incorporação obtida' },
  ],
  nearby:
    'Vista citada pelo diretor: Pampulha, centro, Belvedere e Nova Lima. Proximidade da Cidade Administrativa e do Mineirão.',
  hero: {
    src: '/assets/recantos/horizonte/hero.webp',
    video: '/assets/recantos/horizonte/hero.mp4?v=3',
    plate: '/assets/recantos/horizonte/hero-plate.webp',
    width: 1920,
    height: 1600,
    alt: 'Fachada do Recanto do Horizonte em Canaã, duas torres brancas sobre o morro.',
  } satisfies Photo,
  about: {
    src: '/assets/recantos/horizonte/fachada-2.webp',
    width: 1600,
    height: 1333,
    alt: 'Vista da fachada do Recanto do Horizonte.',
  } satisfies Photo,
  lazer: [
    {
      src: '/assets/recantos/horizonte/lazer-1.webp',
      width: 1600,
      height: 1600,
      alt: 'Área de lazer do Recanto do Horizonte.',
      caption: 'Área de lazer',
    },
    {
      src: '/assets/recantos/horizonte/lazer-2.webp',
      width: 1400,
      height: 788,
      alt: 'Espaço de lazer ao ar livre no Recanto do Horizonte.',
      caption: 'Convívio',
    },
    {
      src: '/assets/recantos/horizonte/lazer-3.webp',
      width: 1400,
      height: 1400,
      alt: 'Área comum de lazer do Recanto do Horizonte.',
      caption: 'Áreas comuns',
    },
  ] satisfies Photo[],
  interiores: [
    {
      src: '/assets/recantos/horizonte/living-1.webp',
      width: 1400,
      height: 1400,
      alt: 'Living do Recanto do Horizonte.',
      caption: 'Living',
    },
    {
      src: '/assets/recantos/horizonte/living-2.webp',
      width: 1400,
      height: 1400,
      alt: 'Living do Recanto do Horizonte, outro ângulo.',
      caption: 'Living',
    },
    {
      src: '/assets/recantos/horizonte/quarto-1.webp',
      width: 1400,
      height: 1400,
      alt: 'Quarto do Recanto do Horizonte.',
      caption: 'Quarto',
    },
    {
      src: '/assets/recantos/horizonte/quarto-2.webp',
      width: 1400,
      height: 1400,
      alt: 'Quarto do Recanto do Horizonte, outro ângulo.',
      caption: 'Quarto',
    },
    {
      src: '/assets/recantos/horizonte/cozinha-1.webp',
      width: 1400,
      height: 1750,
      alt: 'Cozinha do Recanto do Horizonte.',
      caption: 'Cozinha',
    },
    {
      src: '/assets/recantos/horizonte/cozinha-2.webp',
      width: 1400,
      height: 1750,
      alt: 'Cozinha do Recanto do Horizonte, outro ângulo.',
      caption: 'Cozinha',
    },
    {
      src: '/assets/recantos/horizonte/cena-03.webp',
      width: 1400,
      height: 933,
      alt: 'Interior do Recanto do Horizonte.',
      caption: 'Interior',
    },
    {
      src: '/assets/recantos/horizonte/cena-04.webp',
      width: 1400,
      height: 933,
      alt: 'Interior do Recanto do Horizonte.',
      caption: 'Interior',
    },
  ] satisfies Photo[],
  plantas: [
    {
      src: '/assets/recantos/horizonte/planta-bl1-1.webp',
      width: 1600,
      height: 900,
      alt: 'Planta do bloco 1, 1º andar, Recanto do Horizonte.',
      caption: 'Bloco 1 · 1º andar',
    },
    {
      src: '/assets/recantos/horizonte/planta-bl1-2.webp',
      width: 1600,
      height: 900,
      alt: 'Planta do bloco 1, 2º andar, Recanto do Horizonte.',
      caption: 'Bloco 1 · 2º andar',
    },
    {
      src: '/assets/recantos/horizonte/planta-bl1-3.webp',
      width: 1600,
      height: 900,
      alt: 'Planta do bloco 1, 3º ao 11º andar, Recanto do Horizonte.',
      caption: 'Bloco 1 · 3º ao 11º',
    },
    {
      src: '/assets/recantos/horizonte/planta-bl1-4.webp',
      width: 1600,
      height: 900,
      alt: 'Planta do bloco 1, 4º e 5º andares, Recanto do Horizonte.',
      caption: 'Bloco 1 · 4º e 5º',
    },
    {
      src: '/assets/recantos/horizonte/planta-bl2-1.webp',
      width: 1600,
      height: 900,
      alt: 'Planta do bloco 2, 1º andar, Recanto do Horizonte.',
      caption: 'Bloco 2 · 1º andar',
    },
    {
      src: '/assets/recantos/horizonte/planta-bl2-2.webp',
      width: 1600,
      height: 900,
      alt: 'Planta do bloco 2, 2º andar, Recanto do Horizonte.',
      caption: 'Bloco 2 · 2º andar',
    },
    {
      src: '/assets/recantos/horizonte/planta-bl2-3.webp',
      width: 1600,
      height: 900,
      alt: 'Planta do bloco 2, 3º ao 11º andar, Recanto do Horizonte.',
      caption: 'Bloco 2 · 3º ao 11º',
    },
  ] satisfies Photo[],
}
