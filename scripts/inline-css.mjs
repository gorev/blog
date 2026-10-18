import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'docs/.vitepress/dist')
const assets = join(dist, 'assets')
const cssFile = readdirSync(assets).find((name) => /^style\.[A-Za-z0-9_-]+\.css$/.test(name))

if (!cssFile) {
  console.error('Could not find the site stylesheet to inline.')
  process.exit(1)
}

const css = readFileSync(join(assets, cssFile), 'utf8')
const style = `<style>${css}</style>`
const link = new RegExp(`<link[^>]*href="/assets/${cssFile}"[^>]*>`)
let replaced = 0

for (const htmlName of ['index.html', '404.html']) {
  const htmlPath = join(dist, htmlName)
  if (!existsSync(htmlPath)) continue
  const html = readFileSync(htmlPath, 'utf8')
  if (!link.test(html)) {
    console.error(`Stylesheet link for ${cssFile} was not found in ${htmlName}.`)
    process.exit(1)
  }
  writeFileSync(htmlPath, html.replace(link, () => style))
  replaced += 1
}

unlinkSync(join(assets, cssFile))
console.log(`Inlined ${cssFile} into ${replaced} page${replaced === 1 ? '' : 's'}.`)
