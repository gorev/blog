export default {
  base: '/blog/',
  title: 'My VitePress Blog',
  description: 'A simple blog created with VitePress',
  ignoreDeadLinks: true,  // Add this line
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
    ],
    sidebar: [
      {
        text: 'Posts',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Article 1', link: '/posts/article-1' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/egorev' }
    ]
  }
}
