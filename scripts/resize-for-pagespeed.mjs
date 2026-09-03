import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

async function variants(rel, widths, quality = 68) {
  const src = join(root, rel)
  const meta = await sharp(src).metadata()
  for (const width of widths) {
    if ((meta.width ?? 0) <= width) continue
    const out = rel.replace(/(\.\w+)$/, `-${width}$1`)
    const dest = join(root, out)
    mkdirSync(dirname(dest), { recursive: true })
    const info = await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(dest)
    console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`)
  }
}

await variants('public/assets/recantos/horizonte/hero.webp', [480, 640, 960, 1280], 64)
await variants('public/assets/recantos/horizonte/fachada-2.webp', [480, 640, 960], 68)
await variants('public/assets/recantos/mata/fachada.webp', [480, 640, 960], 68)
await variants('public/assets/recantos/alpes/hall.webp', [480, 640, 960], 68)

const logoPng = join(root, 'public/assets/logo/logo-total-incorporacoes.png')
const logoWebp = join(root, 'public/assets/logo/logo-total-incorporacoes.webp')
const logo = await sharp(logoPng)
  .resize({ height: 80, withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(logoWebp)
console.log(
  `public/assets/logo/logo-total-incorporacoes.webp  ${logo.width}x${logo.height}  ${(logo.size / 1024).toFixed(0)}KB`,
)
