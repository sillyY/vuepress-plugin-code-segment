
module.exports = {
    title: 'vuepress-plugin-code-segment-demo',
    description: 'code segment',
    plugins: [
      require('../../src/index.js')
    ],
    extraWatchFiles: [
      '../src/index.js',
      '../src/compile.js',
      '../src/mixin.js'
    ]
  }
  