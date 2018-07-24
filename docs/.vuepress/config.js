module.exports = {
  title: 'iiLsss测试页',
  description: '测试测试参考参考',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/home/': genSidebarConfig('Home')
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'one',
        'two',
        'three',
        'four'
      ]
    }
  ]
}