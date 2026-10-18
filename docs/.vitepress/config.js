const person = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Egor Gorev',
  jobTitle: 'Product designer',
  url: 'https://egorev.com/',
  homeLocation: { '@type': 'Place', name: 'Berlin' },
  sameAs: ['https://x.com/eg0rev', 'https://instagram.com/egorev'],
})

const themeBoot = `(function () {
  try {
    localStorage.removeItem('eg-theme');
  } catch (e) {}
  var root = document.documentElement;
  if (root.hasAttribute('data-theme')) root.removeAttribute('data-theme');
})();`

export default {
  lang: 'en',
  title: 'Egor Gorev',
  titleTemplate: false,
  description: "Product designer based in Berlin. I see details others don't.",
  cleanUrls: true,
  appearance: false,
  themeConfig: {
    externalLinkIcon: false,
  },
  head: [
    ['script', {}, themeBoot],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '32x32' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'canonical', href: 'https://egorev.com/' }],
    ['meta', { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#0a0a0a', media: '(prefers-color-scheme: dark)' }],
    ['meta', { name: 'author', content: 'Egor Gorev' }],
    ['meta', { property: 'og:title', content: 'Egor Gorev' }],
    ['meta', { property: 'og:description', content: "Product designer based in Berlin. I see details others don't." }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://egorev.com/' }],
    ['meta', { property: 'og:image', content: 'https://egorev.com/og.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Egor Gorev' }],
    ['meta', { name: 'twitter:description', content: "Product designer based in Berlin. I see details others don't." }],
    ['meta', { name: 'twitter:image', content: 'https://egorev.com/og.jpg' }],
    ['script', { type: 'application/ld+json' }, person],
  ],
}
