const _once = {}

export const $ = function(parent, className, isFirst = true) {
  const node = parent.querySelectorAll(`${className}`)
  return isFirst ? node[0] : node
}


const getHtml = html => `<div id="app">
${html}
</div>`

const getVueJs = js => {
  const jsContent = js
    .replace(/export\s+default\s*?\{\n*/, '')
    .replace(/\n*\}\s*$/, '')
    .trim()
  return `new Vue({
  el: '#app',
  ${jsContent}
})`
}

const getVueScript = (js, html) => {
  const scripts = js.split(/export\s+default/)
  const scriptStrOrg = `(function() {${scripts[0]} ; return ${scripts[1]}})()`
  const scriptStr = window.Babel
    ? window.Babel.transform(scriptStrOrg, { presets: ['es2015'] }).code
    : scriptStrOrg
  const scriptObj = [eval][0](scriptStr)
  scriptObj.template = html
  return scriptObj
}

export const getVueDetail = (code) => {
  const cssSegment = code.match(/<style>([\s\S]+)<\/style>/)
  const htmlSegment = code.match(/<template>([\s\S]+)<\/template>/)
  const jsSegment = code.match(/<script>([\s\S]+)<\/script>/)
  const result = {
    css: cssSegment && cssSegment[1].replace(/^\n|\n$/g, ''),
    html: htmlSegment && htmlSegment[1].replace(/^\n|\n$/g, ''),
    js: jsSegment && jsSegment[1].replace(/^\n|\n$/g, ''),
  }
  result.htmlTpl = getHtml(result.html)
  result.jsTpl = getVueJs(result.js)
  result.script = getVueScript(result.js, result.html)
  return result
}
