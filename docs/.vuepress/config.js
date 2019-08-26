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
          showText: 'show code'
        }
      }
    ]
  ],
  extraWatchFiles: ['../src/index.js', '../src/compile.js', '../src/mixin.js']
}
