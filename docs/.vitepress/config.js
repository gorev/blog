export default {
  base: '/blog/',
  title: 'Egor's Blog',
  description: 'A simple blog created with VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
    ],
    
    sidebar: [
      {
        text: 'Posts'
        collapsible: true,
        link: '/posts/', // Link to the posts page
        items: [
          {  text: 'Article 1' link: "/posts/article-1'}
        ]
      }
],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/egorev'
    ],
    search: {
      provider: 'local'
      }
    }
  })
