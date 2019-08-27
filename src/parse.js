export const $ = function(parent, className) {
    return parent.querySelectorAll(`${className}`)
}

export const toArray = function(obj) {
    return Array.prototype.slice.call(null, obj)
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
// export const getSettings = key =>
//   window[SETTINGS_KEY] && window[SETTINGS_KEY][key] !== undefined
//     ? window[SETTINGS_KEY][key]
//     : DEFAULT_SETTINGS[key]

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
    const cssBlock = code.match(/<style>([\s\S]+)<\/style>/)
    const htmlBlock = code.match(/<template>([\s\S]+)<\/template>/)
    const jsBlock = code.match(/<script>([\s\S]+)<\/script>/)
    const result = {
      css: cssBlock && cssBlock[1].replace(/^\n|\n$/g, ''),
      html: htmlBlock && htmlBlock[1].replace(/^\n|\n$/g, ''),
      js: jsBlock && jsBlock[1].replace(/^\n|\n$/g, ''),
      jsLib: ['https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'],
    //   cssLib: config.cssLib || []
    }
    result.htmlTpl = getHtmlTpl(result.html)
    result.jsTpl = getVueJsTpl(result.js)
    result.script = getVueScript(result.js, result.html)
    // const vueResource = getSettings('vue')
    // result.jsLib.unshift(vueResource)
    return result
  }

  const getVanillaScript = js => {
    return window.Babel
      ? window.Babel.transform(js, { presets: ['es2015'] }).code
      : js
  }