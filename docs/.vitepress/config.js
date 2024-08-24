export default {
  base: '/blog/',
  title: 'My VitePress Blog',
  description: 'A simple blog created with VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
    ],
    sidebar: [
      {
        text: 'Posts',
        collapsible: true,
        link: '/posts/',
        items: [
          { text: 'Article 1', link: '/posts/article-1' }
          // Add more articles here as you create them
        ]
      }
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/egorev' }
      // Add more social links here if needed
    ]
  }
}
