module.exports = {
  title: 'vuepress-plugin-code-segment-demo',
  description: 'code segment',
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }
    ]
  ],
  plugins: [
    [
      require('../../lib/index.js'),
      {
        settings: {
          showText: {
            icon: '/icon-caret-bottom.svg',
            hoverIcon: '/icon-caret-bottom-blue.svg',
            text: '展示代码'
          },
          hideText: {
            icon: '/icon-caret-top.svg',
            hoverIcon: '/icon-caret-top-blue.svg',
            text: '隐藏代码'
          }
        }
      }
    ]
  ],
  extraWatchFiles: ['../src/index.js', '../src/compile.js', '../src/mixin.js']
}
