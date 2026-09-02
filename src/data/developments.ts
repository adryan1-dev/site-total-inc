import { messages } from './site'

export type WhatsAppKey = keyof typeof messages
export type StatusKey = 'lancamento' | 'obras' | 'portfolio'
export type CityKey = 'bh' | null

export type Photo = {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
}

export type Development = {
  slug: string
  folder: string
  title: string
  location: string | null
  city: CityKey
  status: string
  statusKey: StatusKey
  summary: string
  facts?: { value: string; label: string }[]
  whatsappKey: WhatsAppKey
  cover: Photo
  gallery: Photo[]
}

export const developments: Development[] = [
  {
    slug: 'recanto-do-horizonte',
    folder: 'horizonte',
    title: 'Recanto do Horizonte',
    location: 'Canaã, Belo Horizonte',
    city: 'bh',
    status: 'Lançamento',
    statusKey: 'lancamento',
    summary:
      'Duas torres, 177 unidades e vista da cidade. Incorporação registrada.',
    facts: [
      { value: '177', label: 'Unidades residenciais' },
      { value: '2', label: 'Torres' },
      { value: 'Registro', label: 'Incorporação obtida' },
    ],
    whatsappKey: 'horizonte',
    cover: {
      src: '/assets/recantos/horizonte/hero.webp',
      width: 1920,
      height: 1600,
      alt: 'Fachada do Recanto do Horizonte em Canaã, duas torres brancas sobre o morro.',
    },
    gallery: [
      {
        src: '/assets/recantos/horizonte/hero.webp',
        width: 1920,
        height: 1600,
        alt: 'Fachada do Recanto do Horizonte em Canaã.',
        caption: 'Fachada',
      },
      {
        src: '/assets/recantos/horizonte/fachada-2.webp',
        width: 1600,
        height: 1333,
        alt: 'Vista da fachada do Recanto do Horizonte.',
        caption: 'Fachada',
      },
      {
        src: '/assets/recantos/horizonte/lazer-1.webp',
        width: 1600,
        height: 1600,
        alt: 'Área de lazer do Recanto do Horizonte.',
        caption: 'Lazer',
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
    ],
  },
  {
    slug: 'recanto-da-mata',
    folder: 'mata',
    title: 'Recanto da Mata',
    location: 'Jaqueline, Belo Horizonte',
    city: 'bh',
    status: 'Em obras',
    statusKey: 'obras',
    summary: 'Torre de 10 andares, 100 unidades residenciais e 3 lojas. Unidades comercializadas.',
    whatsappKey: 'mata',
    cover: {
      src: '/assets/recantos/mata/fachada.webp',
      width: 1600,
      height: 1600,
      alt: 'Fachada ensolarada do Recanto da Mata, com lojas no térreo e palmeiras.',
    },
    gallery: [
      {
        src: '/assets/recantos/mata/fachada.webp',
        width: 1600,
        height: 1600,
        alt: 'Fachada do Recanto da Mata.',
        caption: 'Fachada',
      },
      {
        src: '/assets/recantos/mata/fachada-noturna.webp',
        width: 1600,
        height: 1600,
        alt: 'Fachada noturna do Recanto da Mata.',
        caption: 'Fachada noturna',
      },
    ],
  },
  {
    slug: 'recanto-dos-alpes',
    folder: 'alpes',
    title: 'Recanto dos Alpes',
    location: null,
    city: null,
    status: 'Série Recanto',
    statusKey: 'portfolio',
    summary:
      'Empreendimento da série Recanto. Fale com a equipe para o momento comercial.',
    whatsappKey: 'alpes',
    cover: {
      src: '/assets/recantos/alpes/hall.webp',
      width: 1600,
      height: 800,
      alt: 'Hall de entrada do Recanto dos Alpes.',
    },
    gallery: [
      {
        src: '/assets/recantos/alpes/hall.webp',
        width: 1600,
        height: 800,
        alt: 'Hall de entrada do Recanto dos Alpes.',
        caption: 'Hall',
      },
    ],
  },
]

export const featured = developments[0]!

export function filterDevelopments(cidade: string | null, status: string | null) {
  return developments.filter((item) => {
    if (cidade && item.city !== cidade) return false
    if (status && item.statusKey !== status) return false
    return true
  })
}

export function developmentMessage(item: Development) {
  return messages[item.whatsappKey]
}
