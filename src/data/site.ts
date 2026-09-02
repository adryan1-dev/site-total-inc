export const site = {
  name: 'Total Incorporações',
  slogan: 'Construindo seu Lar.',
  phoneDisplay: '(31) 3568-6227',
  phoneHref: 'tel:+553135686227',
  whatsappDigits: '553197653008',
  instagramUrl: 'https://www.instagram.com/totalincorporacoes/',
  instagramHandle: '@totalincorporacoes',
} as const

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export const messages = {
  general:
    'Olá, tenho interesse nos empreendimentos da Total Incorporações.',
  horizonte:
    'Olá, tenho interesse no Recanto do Horizonte, no bairro Canaã em Belo Horizonte.',
  mata: 'Olá, gostaria de saber mais sobre o Recanto da Mata.',
  alpes: 'Olá, gostaria de saber mais sobre o Recanto dos Alpes.',
} as const

export const clickTriggers = {
  whatsapp: 'WhatsApp oficial do Instagram. Sem formulário.',
  horizonte: 'A mensagem já cita o Recanto do Horizonte.',
} as const

export const homeFaq = [
  {
    q: 'Para quem é a Total?',
    a: 'Quem busca casa própria em Belo Horizonte e em Almenara/MG.',
  },
  {
    q: 'Como falo com a equipe?',
    a: 'Pelo WhatsApp oficial — o mesmo número do Instagram. Sem formulário neste site.',
  },
  {
    q: 'Qual o lançamento agora?',
    a: 'Recanto do Horizonte, em Canaã. Duas torres, 177 unidades, incorporação registrada.',
  },
  {
    q: 'E o Recanto da Mata?',
    a: 'Em obras, no bairro Jaqueline. Unidades comercializadas.',
  },
] as const

export const horizonteFaq = [
  {
    q: 'Onde fica?',
    a: 'Canaã, Belo Horizonte. Entrada pela Rua Mauritânia, frente para a Estrada de Santa Luzia.',
  },
  {
    q: 'O que já é público?',
    a: '177 unidades residenciais, 2 torres, edifício-garagem e loja de 382 m². Incorporação registrada.',
  },
  {
    q: 'Como manifesto interesse?',
    a: 'No WhatsApp oficial. A conversa já abre citando o Recanto do Horizonte.',
  },
] as const
