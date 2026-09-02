export const site = {
  name: 'Total Incorporações',
  slogan: 'Construindo seu Lar.',
  phoneDisplay: '(31) 3568-6227',
  phoneHref: 'tel:+553135686227',
  whatsappDigits: '553197653008',
  instagramUrl: 'https://www.instagram.com/totalincorporacoes/',
  instagramHandle: '@totalincorporacoes',
  creci: 'CRECI/MG — a confirmar',
} as const

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export const messages = {
  general: 'Olá, tenho interesse nos empreendimentos da Total Incorporações.',
  horizonte:
    'Olá, tenho interesse no Recanto do Horizonte, no bairro Canaã em Belo Horizonte.',
  mata: 'Olá, gostaria de saber mais sobre o Recanto da Mata.',
  alpes: 'Olá, gostaria de saber mais sobre o Recanto dos Alpes.',
} as const

export const cities = [
  { value: 'bh', label: 'Belo Horizonte' },
  { value: 'almenara', label: 'Almenara' },
] as const

export const statuses = [
  { value: 'lancamento', label: 'Lançamento' },
  { value: 'obras', label: 'Em obras' },
] as const
