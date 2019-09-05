const CLASS_WRAPPER = 'ibox'

const CLASS_DISPLAY = 'ibox-header'

const CLASS_APP = 'ibox-main'

const CLASS_CODE = 'ibox-footer'

const SETTINGS = {
  showText: '展示代码',
  hideText: '隐藏代码',
  minHeight: 40,
  jsLib: ['https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'],
  cssLib: []
}

const getSettings = options => {
  let opts = {}

  for (let key in options) {
    switch (key) {
      case 'showText':
      case 'hideText':
      case 'minHeight':
        opts[key] = options[key]
        break
      case 'jsLib':
      case 'cssLib':
        opts[key] = [].concat(options[key], SETTINGS[key])
        break
      default:
        break
    }
  }
  return opts
}

module.exports = {
  getSettings
}