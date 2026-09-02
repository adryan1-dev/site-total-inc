import { mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const photosRoot = join(root, 'src', 'photos')
const outRoot = join(root, 'public', 'assets', 'recantos')

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })
}

function fileName(path) {
  return path.split(/[/\\]/).pop() ?? path
}

function findOne(files, test, label) {
  const hits = files.filter((path) => test(fileName(path), path))
  if (hits.length === 0) throw new Error(`No file matched: ${label}`)
  return hits[0]
}

const files = walk(photosRoot).filter((path) =>
  /\.(jpe?g|png|tiff?)$/i.test(path),
)

const jobs = [
  {
    key: 'horizonte.hero',
    out: 'horizonte/hero.webp',
    maxWidth: 1920,
    quality: 78,
    src: findOne(files, (name) => name.includes('Cena 01 - Fachada'), 'horizonte hero'),
  },
  {
    key: 'horizonte.about',
    out: 'horizonte/fachada-2.webp',
    maxWidth: 1600,
    quality: 78,
    src: findOne(files, (name) => name.includes('Cena 02 - Fachada'), 'horizonte about'),
  },
  {
    key: 'horizonte.lazer.0',
    out: 'horizonte/lazer-1.webp',
    maxWidth: 1600,
    quality: 78,
    src: findOne(files, (name) => name.startsWith('A. Lazer'), 'lazer 1'),
  },
  {
    key: 'horizonte.lazer.1',
    out: 'horizonte/lazer-2.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(
      files,
      (name) => /lazer 1/i.test(name) && !name.startsWith('A. Lazer'),
      'lazer 2',
    ),
  },
  {
    key: 'horizonte.lazer.2',
    out: 'horizonte/lazer-3.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => /lazer 2/i.test(name), 'lazer 3'),
  },
  {
    key: 'horizonte.interiores.0',
    out: 'horizonte/living-1.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name.startsWith('Living 1'), 'living 1'),
  },
  {
    key: 'horizonte.interiores.1',
    out: 'horizonte/living-2.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name.startsWith('Living 2'), 'living 2'),
  },
  {
    key: 'horizonte.interiores.2',
    out: 'horizonte/quarto-1.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name.startsWith('Quarto 1'), 'quarto 1'),
  },
  {
    key: 'horizonte.interiores.3',
    out: 'horizonte/quarto-2.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name.startsWith('Quarto 3'), 'quarto 3'),
  },
  {
    key: 'horizonte.interiores.4',
    out: 'horizonte/cozinha-1.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name.startsWith('Cozinha 1'), 'cozinha 1'),
  },
  {
    key: 'horizonte.interiores.5',
    out: 'horizonte/cozinha-2.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name.startsWith('Cozinha 2'), 'cozinha 2'),
  },
  {
    key: 'horizonte.interiores.6',
    out: 'horizonte/cena-03.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name === 'Cena 03.jpg', 'cena 03'),
  },
  {
    key: 'horizonte.interiores.7',
    out: 'horizonte/cena-04.webp',
    maxWidth: 1400,
    quality: 78,
    src: findOne(files, (name) => name === 'Cena 04.jpg', 'cena 04'),
  },
  {
    key: 'mata.cover',
    out: 'mata/fachada.webp',
    maxWidth: 1600,
    quality: 78,
    src: findOne(files, (name) => name.includes('Fachada Ensolarada'), 'mata cover'),
  },
  {
    key: 'mata.night',
    out: 'mata/fachada-noturna.webp',
    maxWidth: 1600,
    quality: 78,
    src: findOne(files, (name) => name.includes('Fachada Noturna'), 'mata night'),
  },
  {
    key: 'alpes.cover',
    out: 'alpes/hall.webp',
    maxWidth: 1600,
    quality: 78,
    src: findOne(files, (name) => /HALL\.tiff$/i.test(name), 'alpes hall'),
  },
]

const plantFiles = files
  .filter((path) => /^BL[12]/i.test(fileName(path)))
  .sort((a, b) => fileName(a).localeCompare(fileName(b), 'pt'))

let plantIndex = 0
for (const block of ['BL1', 'BL2']) {
  const group = plantFiles.filter((path) => fileName(path).startsWith(block))
  group.forEach((src, index) => {
    jobs.push({
      key: `horizonte.plantas.${plantIndex}`,
      out: `horizonte/planta-${block.toLowerCase()}-${index + 1}.webp`,
      maxWidth: 1600,
      quality: 82,
      src,
    })
    plantIndex += 1
  })
}

const results = []

for (const job of jobs) {
  const dest = join(outRoot, job.out)
  mkdirSync(dirname(dest), { recursive: true })
  const info = await sharp(job.src)
    .autoOrient()
    .resize({ width: job.maxWidth, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 4 })
    .toFile(dest)

  const from = relative(photosRoot, job.src)
  console.log(`${from} -> ${job.out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`)
  results.push({
    key: job.key,
    src: `/assets/recantos/${job.out.replaceAll('\\', '/')}`,
    width: info.width,
    height: info.height,
  })
}

writeFileSync(join(root, 'scripts', 'photo-manifest.json'), JSON.stringify(results, null, 2))
console.log(`\nWrote ${results.length} images`)
