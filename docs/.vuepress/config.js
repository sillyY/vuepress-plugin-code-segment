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
      require('../../src/index.js'),
      {
        settings: {
          showText: {
            icon: '/icon-caret-bottom.svg',
            hoverIcon: '/icon-caret-bottom-blue.svg',
            text: 'show code'
          },
          hideText: {
            icon: '/icon-caret-top.svg',
            hoverIcon: '/icon-caret-top-blue.svg',
            text: 'hide code'
          }
        }
      }
    ]
  ],
  extraWatchFiles: ['../src/index.js', '../src/compile.js', '../src/mixin.js']
}
