/* eslint-disable no-console */
// Simple image optimization script using sharp.
// Usage: `npm run optimize:images`
// Places converted images under public/images/<basename>/<basename>-<width>.<ext>

import fs from 'fs'
import path from 'path'
import { sync } from 'glob'
import sharp from 'sharp'

const RAW_DIR = path.join(process.cwd(), 'public', 'raw-images')
const OUT_DIR = path.join(process.cwd(), 'public', 'images')
const WIDTHS = [400, 800, 1200]
const FORMATS = ['avif', 'webp', 'jpeg']

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true })
}

async function processFile(file) {
  const ext = path.extname(file)
  const base = path.basename(file, ext)
  const outDir = path.join(OUT_DIR, base)
  await ensureDir(outDir)

  const input = path.join(RAW_DIR, file)
  const image = sharp(input)

  for (const width of WIDTHS) {
    for (const fmt of FORMATS) {
      const outPath = path.join(outDir, `${base}-${width}.${fmt}`)
      await image
        .clone()
        .resize(width)
        .toFormat(fmt, fmt === 'jpeg' ? { quality: 80 } : { quality: 60 })
        .toFile(outPath)
      console.log(`Written ${outPath}`)
    }
  }
}

async function main() {
  if (!fs.existsSync(RAW_DIR)) {
    console.error('No raw images found. Drop your source images in public/raw-images and re-run this script.')
    process.exit(1)
  }

  const files = sync('*.{jpg,jpeg,png,svg}', { cwd: RAW_DIR })
  if (!files.length) {
    console.error('No jpg/png/svg files found in public/raw-images')
    process.exit(1)
  }

  for (const f of files) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await processFile(f)
    } catch (err) {
      console.error('Error processing', f, err)
    }
  }

  console.log('Image optimization complete. Optimized images are in public/images')
}

main()
