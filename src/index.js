import path from 'path'
import { getSettings } from './config'

module.exports = (options, ctx) => {
  return {
    name: 'vuepress-plugin-code-segment',
    define: {
      SETTINGS:  getSettings(options)
    },
    clientRootMixin: path.resolve(__dirname, './mixin.js'),
    extendMarkdown: md => {
      md.use(require('markdown-it-container'), 'code', {
        render: function(tokens, idx) {
          const { nesting } = tokens[idx]
          const config = getSettings(options)
          if (nesting === -1) {
            return `
            </div>
              <div class="ibox-footer">
                <div class="btn show visible">
                  <span>${config.showText}</span>
                </div>
                <div class="btn hide">
                  <span>${config.hideText}</span>
                </div>
              </div>
              </div>
            `
          }

          let codeStr = '',
            tipStr = ''
          let i = idx,
            len = tokens.length

          for (; i < len; i++) {
            const { type, content, info, map } = tokens[i]
            if (type === 'container_code_close') break
            if (!content) continue
            if (type === 'fence') {
              if (info.trim() === 'tip') {
                tipStr = require('markdown-it')().render(content)
              }
              codeStr = encodeURIComponent(content)
            }
          }
          return `
          <div
            class="ibox"
            data-code="${codeStr}"
            data-config="${encodeURIComponent(JSON.stringify(config))}"
            data-tip="${tipStr}">
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
