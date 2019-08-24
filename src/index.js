module.exports = (options, ctx) => {
  name: 'vuepress-plugin-code-segment'
  extendMarkdown: md => {
    md.set({ breaks: true })
    // md.use(require('markdown-it-container'), 'demo', {
    //   validate: function(params) {
    //     return params.trim().match(/^spoiler\s+(.*)$/)
    //   },
    //   render: function(tokens, idx) {
    //     var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/)
    //     if (tokens[idx].nesting === 1) {
    //       // opening tag
    //       return '<details><summary>' + m[1] + '</summary>\n'
    //     } else {
    //       // closing tag
    //       return '</details>\n'
    //     }
    //   }
    // })
  }
}
