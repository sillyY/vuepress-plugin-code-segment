module.exports = {
  title: 'vuepress-plugin-code-segment-demo',
  description: 'code segment',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', {src: 'https://unpkg.com/element-ui/lib/index.js'}],
  ],
  plugins: [
    [
      require('../../lib/index.js'),
      {
        settings: {
          showText: '展示代码',
          hideText: '隐藏代码',
          jsLib: ['https://unpkg.com/element-ui/lib/index.js'],
          cssLib: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css']
        }
      }
    ]
  ],
  extraWatchFiles: ['../src/index.js', '../src/compile.js', '../src/mixin.js']
}
