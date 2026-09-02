# Total Incorporações — direção do demo

## Projeto
Site institucional para compradores de imóveis (MG / BH e região).
Tom: confiável / corporativo, habitação acessível regional — não luxo.
Stack: Next.js + Vercel (App Router, TypeScript, Tailwind).
Fontes de marca: logo em totalmg.com.br · id visual em @totalincorporacoes

Barra de qualidade: o demo precisa parecer entregue por studio sênior (R$10k+), não template Elementor. Hierarquia tipográfica, whitespace, contraste e motion com propósito.

## Escopo do demo (fase 1)
- Home
- Sobre
- Catálogo / listagem de imóveis
- Contato / formulário de lead
Fora do demo: área logada, blog, ficha completa avançada.

## Norte estrutural (layout)
Even (estrutura BR) + Tegra (curadoria) + Oxford (sobriedade).
Cores e logo = identidade real da marca (abaixo).

Evitar: luxo flashy, marketplace lotado, parallax/WebGL pesado, CTAs agressivos, forms longos, stock sorridente, azul petróleo, UI “template genérico”.

## Identidade visual (oficial)

### Logo
- Lockup oficial: ícone casa + TOTAL (carvão) + INCORPORAÇÕES (vermelho); O de TOTAL em barra vermelha; tagline “Construindo seu Lar.” em script.
- Arquivo: PNG oficial em `/public/logo.png` (não recriar).
- Fonte: https://totalmg.com.br/wp-content/uploads/2026/04/logo_total_incorporacoes_2022_01-scaled.png

### Cores
- Accent / CTA: `#A83335` · hover `#8F2A2C`
- Texto: `#373435` · muted `#5C5C5C`
- Fundo: `#FFFFFF` / `#F7F6F3`
- Ignorar blues/greens Elementor do site atual.

### Tipografia
- UI / body: Montserrat ou Inter / DM Sans
- Display: sans condensada bold (Oswald / Barlow Condensed / Archivo Condensed)
- Script da tagline: só em 1 momento de “lar” (ex.: subtítulo do hero), nunca em nav/forms
- Escala tipográfica fechada (ex.: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64+). Um tamanho por papel. Tracking negativo leve só em display grande.

### Tom / território
- BH e região + Almenara-MG · WhatsApp-first · habitação acessível, sólida

## Craft de studio (obrigatório no demo)

Implementar estas skills. São o que separa site “ok” de site que parece R$10k:

### 1. Sistema, não improviso
- Spacing em múltiplos de 8 (8/16/24/32/48/64/96). Seções com respiro generoso (py-24 / py-32 desktop).
- Container max ~1200–1280px; hero e faixas full-bleed quando a foto pede.
- Grid consistente; cards alinhados na mesma baseline de título/preço/meta.

### 2. Tipografia de designer sênior
- Hierarquia óbvia: 1 headline dominante por viewport.
- Line-length de body ~45–70ch.
- Ótimo contraste (nunca cinza claro em branco).
- Títulos display com peso/tracking controlado; UI legível e quieta.

### 3. Header “produto”
- Sticky com backdrop-blur + borda sutil ao scroll.
- Altura compacta; logo com respiro; CTA sólido `#A83335`.
- Nav underline/indicator animado no item ativo (não só change de cor).

### 4. Hero editorial
- Full-bleed com overlay gradient sóbrio (legibilidade), não vinheta pesada.
- Headline curta + subtítulo + 2 CTAs (primário sólido / secundário ghost ou outline).
- Busca rápida no hero (cidade / status) com visual de produto, não form HTML cru.
- Entrada: stagger fade-up (headline → copy → CTAs → search) 400–700ms total.

### 5. Imagem premium
- Aspect ratios fixos nos cards (ex. 4:3 ou 3:2); object-cover; nunca esticar.
- `next/image` + blur placeholder / LQIP.
- Hover no card: scale da foto ~1.04 suave + elevação leve da sombra (não jump).
- Overlay de status (Lançamento / Em obras / Pronto) como chip tipográfico, não badge genérico.

### 6. Motion com propósito (framer-motion ou CSS + IO)
- Scroll reveal: fade + translateY(16–24px), once, easing suave (ease-out), 400–600ms.
- Stagger 40–80ms entre cards da mesma seção.
- Contadores de confiança só quando entrarem no viewport (números placeholder ok).
- Page transition leve entre rotas (opacity) — sem splash.
- Respeitar `prefers-reduced-motion: reduce` (desligar animações não essenciais).
- Proibido: parallax agressivo, WebGL, cursor custom, bounce no WhatsApp, loaders longos, autoplay com som.

### 7. Microinterações de CTA
- Botão primário: hover escurece + leve lift (1–2px) + shadow curta.
- Focus ring acessível (outline 2px accent ou offset).
- Links de texto: underline animado da esquerda (scaleX), não underline estático feio.
- WhatsApp FAB: aparece após ~400px de scroll, fade+slide; sem pulse infinito.

### 8. Catálogo “produto”
- Filtros sticky com blur; chips selecionáveis (estado ativo claro).
- Empty state desenhado (ícone outline de casa + copy + CTA limpar filtros).
- Skeleton shimmer nos cards no primeiro paint (demo pode simular breve).
- Transição de filtro: grid não “pula” layout (reserve altura).

### 9. Formulário de lead refinado
- Labels flutuantes ou acima, bem espaçados; inputs altos (44–48px tap target).
- Estados: default / focus (borda accent) / error / success.
- Validação client-side clara em PT-BR.
- Botão full-width no mobile; sucesso com mensagem humana (não alert()).

### 10. Detalhes que vendem polish
- Divider / regra tipográfica fina entre blocos (1px, cor muted baixa opacidade).
- Footer institucional limpo: logo mono ou full, nav, CRECI placeholder, LGPD, créditos discretos.
- Favicon + Open Graph básico (título/descrição PT-BR + imagem).
- Scroll suave (CSS `scroll-behavior` ou Lenis leve — se usar Lenis, manter sutil).
- Seção de números em faixa off-white ou carvão suave com tipografia grande.
- Um único “momento lar”: subtítulo em script OU linha da tagline — não espalhar script.

### Libs sugeridas (leve)
- `framer-motion` (reveal/stagger) **ou** CSS + Intersection Observer
- `next/font` para Montserrat + condensed display
- Sem GSAP ScrollTrigger pesado no demo, a menos que caiba sem atrapalhar performance

## Layout das páginas

### Home
1. Header sticky (blur)
2. Hero editorial + busca
3. Destaques (3–6 cards, stagger)
4. Números / confiança (count-up)
5. Por que a Total (3 pilares)
6. Depoimentos ou entregas (placeholder)
7. CTA final + footer

### Sobre
História → missão/valores → números → diferenciais → CTA

### Catálogo
Filtros sticky → grid → empty state → paginação simples

### Contato
Form refinado | canais (tel, WhatsApp, e-mail) | mapa placeholder | CRECI + LGPD

## Fotos reais dos empreendimentos (obrigatório)

As fotos já estão na pasta do projeto, **nomeadas e separadas por pasta** (uma pasta = um empreendimento).

### Como o Cursor deve usar
1. Descobrir automaticamente as pastas em `public/empreendimentos/` (ou `public/imoveis/`, `assets/empreendimentos/`, `empreendimentos/` — usar a que existir no repo).
2. **Nome da pasta = nome do empreendimento** (slugify só pra URL; exibir o nome limpo no UI).
3. Todas as imagens da pasta entram na galeria daquele empreendimento; a **primeira** (ordem alfabética do filename, ou `capa.*` / `cover.*` / `hero.*` se existir) é a capa do card e do hero de destaque.
4. **Proibido** Unsplash / Lorem Picsum / imagens inventadas enquanto houver pasta com fotos.
5. Gerar o catálogo a partir das pastas (não hardcodar lista fictícia que ignore as pastas). Specs (m², suítes, bairro, status, preço) podem ser placeholder PT-BR coerente até o cliente validar — mas **nome + fotos = reais**.
6. Home “Destaques”: 3–6 pastas (priorizar as que tiverem mais fotos / nomes principais).
7. `next/image` com paths locais; aspect ratio fixo; object-cover.

### Convenção recomendada (se ainda não estiver assim)
```
public/
  logo.png
  empreendimentos/
    Recanto das Arvores/
      capa.jpg
      01.jpg
      02.jpg
    Jardins/
      ...
```

## Conteúdo demo
PT-BR realista (não lorem). Empreendimentos = pastas reais de foto. Specs/números de confiança claramente placeholder até validação.

## Critério de pronto
- 4 rotas · logo oficial · `#A83335` · craft acima visível no primeiro scroll
- Catálogo e destaques alimentados pelas pastas de foto reais
- Form com validação · mobile sólido · preview Vercel
- Motion respeita reduced-motion · sem jank

## Assets no Cursor
1. `/public/logo.png` (oficial)
2. Pastas de fotos dos empreendimentos (já no projeto)
3. `@DIRECAO.md`
4. Opcional: `/refs` com prints Even / Tegra / Cyrela / Oxford

## Prompt pronto (Cloud Agent / Composer)

```
Build a demo institutional website for Total Incorporações (Brazilian real estate, MG/BH — management & sales). Audience: property buyers. Tone: trustworthy corporate, accessible regional housing — not luxury flash.

Quality bar: senior studio / ~R$10k agency polish — tight type hierarchy, 8pt spacing system, generous whitespace, purposeful motion. Not an Elementor template.

Stack: Next.js App Router, TypeScript, Tailwind, next/font, framer-motion (or CSS + Intersection Observer). Deploy-ready for Vercel.

Pages: /, /sobre, /empreendimentos, /contato

Brand (strict):
- Official logo in /public/logo.png only (do not recreate)
- accent/CTA #A83335 (hover #8F2A2C), text #373435, muted #5C5C5C, bg #FFFFFF / #F7F6F3
- No navy/petroleum blue; no Elementor default blues/greens
- Display: bold condensed sans; UI: Montserrat or Inter; script ONLY once for “lar” moment
- Structure: Even + Tegra + Oxford sobriety; WhatsApp-first

REAL PHOTOS (critical):
- Property photos are already in the repo, named and split by folder (one folder = one empreendimento).
- Discover folders under public/empreendimentos/ (or public/imoveis/, assets/empreendimentos/, empreendimentos/ — use whichever exists).
- Folder name = property display name (slug only for URLs).
- First image (or capa/cover/hero.*) = card cover; all images in folder = gallery.
- DO NOT use Unsplash/Lorem Picsum/fake stock if real folders exist.
- Build catalog + Home featured from those folders. Specs (m², suites, neighborhood, status, price) may be coherent PT-BR placeholders — names + photos must be real.

Must implement craft skills from DIRECAO.md:
1) 8pt spacing + consistent container/grid
2) Sticky header with backdrop-blur + active nav indicator
3) Editorial hero: full-bleed, gradient overlay, staggered entrance, product-like search (hero image can come from a featured property folder)
4) Cards: fixed aspect ratio, next/image + blur placeholder, subtle image scale on hover, status chip
5) Scroll reveals + card stagger; trust number count-up on viewport; respect prefers-reduced-motion
6) CTA microinteractions; WhatsApp FAB after scroll (no infinite pulse)
7) Catalog: sticky blurred filters, chip states, designed empty state, skeleton shimmer
8) Lead form: tall inputs, focus/error/success, PT-BR validation, no alert()
9) Clean institutional footer, favicon + basic OG tags
10) No aggressive parallax, WebGL, custom cursor, long loaders

Home: sticky header, hero+search, featured cards from real folders, trust numbers, 3 pillars, testimonials placeholder, final CTA, footer CRECI+LGPD.
PT-BR only. Label placeholder specs/CRECI clearly.
Ship a responsive demo that feels expensive on first scroll and shows the real empreendimento photos.
```
