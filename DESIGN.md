---
name: Total Incorporações
description: Identidade web da incorporadora — wordmark condensado do logo, não portal de imóveis.
colors:
  brick: "#a63232"
  brick-deep: "#8a2828"
  paper: "#ffffff"
  ink: "#2c2c2c"
  mute: "#5c5c5c"
  line: "#e6e4e0"
  dusk: "#2a2420"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontStretch: "extra-condensed"
    fontSize: "clamp(2.5rem, 7vw, 6.75rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
  caption:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  none: "0px"
spacing:
  page-x: "40px"
  section: "112px"
  group: "32px"
components:
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0px"
  text-link-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0px"
---

# Design system — Total Incorporações

## Overview

Direção: **marca do logo + campanha de fachada**. Uma incorporadora, não um dashboard de cards. Paleta do logo oficial (tijolo `#a63232`, carvão `#2c2c2c`, branco). Uma família: Archivo — condensada nos títulos (eixo `wdth`, como o wordmark TOTAL), regular no restante. O script de “Construindo seu Lar.” vive só no logo; não se imita no HTML. Fachadas e interiores reais da Total; sem stock e sem elevação geométrica.

## Colors

- **brick / brick-deep** — marca. Usar com parcimônia: janelas, índices, ênfase, seleção. Não preencher a página de botões vermelhos.
- **ink** — superfícies de campanha (hero, faixa de bairros, CTA final, footer) e texto principal.
- **paper** — branco do site oficial. Leitura e navegação.
- **mute / line** — texto secundário e regras. Sem cinza de SaaS.

## Typography

- **Display (Archivo extra-condensed 700):** slogans, nomes de empreendimento, headlines institucionais. Tracking −0.03em. `text-wrap: balance` em títulos curtos. Itálico só em “Recanto”.
- **Body (Archivo 400, stretch 100%):** parágrafos, 45–70ch, leading 1.55.
- **Label (Archivo 600, uppercase, tracking 0.12em):** CTAs tipográficos, índices 01–03, localização.
- Nunca usar o mesmo peso 700 em todos os papéis. Evitar Inter. Evitar serif editorial (Petrona) e script paralelo ao logo.

## Layout

- Página até **1400px**, padding 20px / 40px. `viewport-fit: cover` e `env(safe-area-inset-*)` no header e no overlay.
- Ritmo da home: Hero → respiro → Horizonte em escala → faixa de bairros → Mata e Alpes assimétricos → institucional → CTA.
- Ritmo da landing Horizonte: Hero (fachada + stats) → Sobre → Lazer → Plantas → Interiores → CTA WhatsApp. Sem seção de investimento/renda.
- Desktop: tipo sobre a fachada no hero. Mobile: fachada em ~72svh, tipo abaixo — composição própria, não redução.
- Empreendimentos são blocos editoriais de tamanhos diferentes, não um grid de cards iguais.
- Números 01–03 indexam Horizonte, Mata e Alpes.
- Âncoras `#empreendimentos`, `#sobre`, `#lazer`, `#plantas`, `#interiores` com `scroll-margin-top` para o header sticky.

## Elevation & Depth

- Sem sombras de card. Profundidade vem de escala, recorte e a fachada fotografada.
- Hover da imagem: zoom 1.04 em 800ms, só com ponteiro fino. Sem zoom se `prefers-reduced-motion`. Fachadas com movimento de scroll (`directed`) não usam hover.
- Scrim no hero desktop existe só para legibilidade do tipo sobre a imagem.
- Plantas e interiores abrem num diálogo nativo; o resto da página continua papel.

## Motion

Uma família, GSAP. `prefers-reduced-motion` desliga tudo o que é espacial.

- **Hero:** fachada assenta 1.08→1; o slogan sobe numa máscara (`overflow: hidden` + `yPercent`); kicker e CTAs entram 0,55s depois. `power3.out`.
- **Horizonte (desktop):** a fachada do bloco 01 escala 1.12→1 no scroll. Sem pin. Sem escala extra se a URL já abre em `#empreendimentos`.
- **Mata, Alpes e seções da landing:** a foto abre de baixo para cima (`clip-path` inset) uma vez, ao entrar na viewport.
- **Faixa de bairros:** marquise CSS em loop (`translate3d(-50%)`), cópias suficientes para preencher a viewport. A barra nunca fica vazia. Sem vínculo com o scroll. `prefers-reduced-motion` desliga a animação e mantém o texto visível.
- Microinterações de CTA e overlay do menu continuam em CSS.

## Shapes

- Raio **0**. Sem pills, sem cards arredondados, sem glass.

## Components

- **Text link CTA:** caixa alta + seta. Underline cresce da esquerda. Seta desloca 4px. Cor via utilitário (`text-ink` / `text-paper`). Uso secundário.
- **CTA primário:** retângulo tijolo, raio 0, texto papel. Um por fold. Microcopy responde o que acontece (WhatsApp). Click trigger embaixo: canal oficial, sem formulário.
- **Nav:** logo, um link na home (Empreendimentos), âncoras na landing Horizonte (Sobre, Lazer, Plantas, Interiores), CTA primário no WhatsApp. Mobile: overlay papel com títulos em Archivo condensada. `overscroll-behavior: contain`.
- **Skip link:** primeiro foco do documento; vai para `#conteudo`.
- **Foto de empreendimento:** render oficial em WebP, `width`/`height`, lazy fora do LCP. Caption só quando informa o ambiente.

## Do's and Don'ts

**Do:** assets oficiais; fatos públicos; whitespace intencional; uma família de movimento (GSAP no hero/scroll; underline, zoom e overlay do menu em CSS).

**Don't:** glassmorphism, blobs, gradientes decorativos, botões “Saiba mais”, excesso de ícones, stock photo, frases institucionais inventadas, cards iguais em sequência, serif de revista, script além do logo.
