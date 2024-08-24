export default {
  base: '/',
  title: 'Egor Gorev',
  description: 'Personal blog of Egor Gorev',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      {
        text: '2024',
        items: [
          { text: 'May 2024', link: '/2024/may-2024' }
        ]
      },
      {
        text: 'Posts',
        items: [
          { text: 'Article 1', link: '/posts/article-1' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/egorev' }
    ],
    search: {
      provider: 'local'
    }
  }
}
