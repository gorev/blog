export default {
  base: '/',
  title: 'Egor Gorev',
  description: 'Personal blog of Egor Gorev',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Now', link: '/now' },
      { text: 'Archive', link: '/archive' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Food',
        items: [
          { text: 'Quiche', link: '/posts/food/quiche' }
        ]
      },
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/egorev' }
    ],
    search: {
      provider: 'local'
    }
  }
}
