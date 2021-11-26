module.exports = {
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: 'images/hero.jpg' }
    ]
  ],
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: '首页', link: '/' },
      { text: '基础学习', link: '' },
      { text: '进阶之路', link: '' }
    ],
    sidebar: 'auto' // 侧边栏配置
  },
  base: '/L-Blog/',
  title: 'L-BLOG',
  description: '个人技术博客'
}
