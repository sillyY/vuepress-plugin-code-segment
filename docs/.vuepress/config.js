module.exports = {
  title: 'vuepress-plugin-code-segment-demo',
  description: 'code segment',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://unpkg.com/element-ui/lib/index.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/ele-vue/lib/ele-vue.umd.min.js'}],
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
        settings: {
          showText: '展示代码',
          hideText: '隐藏代码'
        }
      }
    ]
  ],
  extraWatchFiles: ['../src/index.js', '../src/compile.js', '../src/mixin.js']
}
