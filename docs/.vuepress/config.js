module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuepress-Plugin-Code-Segment ',
      description: 'plugin for vuepress to display vue'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuepress-Plugin-Code-Segment',
      description: '用于编写Vue示例的vuepress插件'
    }
  },
  themeConfig: {
    repo: 'sillyY/vuepress-plugin-code-segment',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/': genSidebarConfig('Guide')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        sidebar: {
          '/zh/': genSidebarConfig('指南')
        }
      }
    }
  },
  base: '/vuepress-plugin-code-segment/',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://unpkg.com/element-ui/lib/index.js' }],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/ele-vue@0.2.8/lib/ele-vue.umd.min.js'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
      }
    ]
  ],
  plugins: [
    [
      require('../../lib/index.js'),
      {
        showText: '',
        hideText: '隐藏代码'
      }
    ]
  ]
}
function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', 'vue', 'settings']
    }
  ]
}
