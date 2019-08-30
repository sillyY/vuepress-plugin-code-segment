const _once = {}

export const $ = function(parent, className, isFirst = true) {
  const node = parent.querySelectorAll(`${className}`)
  return isFirst ? node[0] : node
}

export const toArray = function(obj) {
  return Array.prototype.slice.call(null, obj)
}
export const h = (tag, attrs, children) => {
  const node = document.createElement(tag)
  attrs &&
    Object.keys(attrs).forEach(key => {
      if (!key.indexOf('data')) {
        const k = key.replace('data', '')
        node.dataset[k] = attrs[key]
      } else {
        node[key] = attrs[key]
      }
    })
  children &&
    children.forEach(({ tag, attrs, children }) => {
      node.appendChild(h(tag, attrs, children))
    })
  return node
}

const getHtmlTpl = html => `<div id="app">
${html}
</div>`

const getVueJsTpl = js => {
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

export const getVueDetail = (code, config) => {
  const cssBlock = code.match(/<style>([\s\S]+)<\/style>/)
  const htmlBlock = code.match(/<template>([\s\S]+)<\/template>/)
  const jsBlock = code.match(/<script>([\s\S]+)<\/script>/)
  const result = {
    css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
    html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
    js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
    jsLib: config.jsLib || [],
    cssLib: config.cssLib || []
  }
  result.htmlTpl = getHtmlTpl(result.html)
  result.jsTpl = getVueJsTpl(result.js)
  result.script = getVueScript(result.js, result.html)
  return result
}

const getVanillaScript = js => {
  return window.Babel
    ? window.Babel.transform(js, { presets: ['es2015'] }).code
    : js
}

export const injectCss = css => {
  if (_once[css]) return
  const style = h('style', { innerHTML: css })
  document.body.appendChild(style)
  _once[css] = true
}
export const injectScript = lib => {
  if (_once[lib]) return
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = lib
  head.appendChild(script)
  _once[lib] = true
}
export const injectCssLib = lib => {
  if (_once[lib]) return
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('link')
  script.type = 'text/css'
  script.src = lib
  head.appendChild(script)
  _once[lib] = true
}
