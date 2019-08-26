const path = require('path')
module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-code-segment',
    define() {
      console.log('options为: ', options)
      return {
        SETTINGS: options.settings || {}
      }
    },
    clientRootMixin: path.resolve(__dirname, './mixin.js'),
    extendMarkdown: md => {
      // console.log('options 为: ',options)
      md.use(require('markdown-it-container'), 'demo', {
        render: function(tokens, idx) {
          const { nesting, info } = tokens[idx]
          if (nesting === -1) {
            return `
            </div>
              <div class="ibox-footer"></div>
              </div>
            `
          }

          let code = ''
          let i = 0,
            len = tokens.length

          for (; i < len; i++) {
            const { type, content } = tokens[i]
            if (type === 'container_demo_close') break
            if (!content) continue
            if (type === 'fence') {
              codeStr = encodeURIComponent(content)
            }
          }
          return `
          <div
            class="ibox"
            
            data-code="${codeStr}">
              <div class="ibox-content">
                <div class="ibox-demo"></div>
              </div>
              <div class="ibox-code">
        `
        }
      })
    }
  }
}
