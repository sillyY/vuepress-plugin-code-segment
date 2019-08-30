export const CLASS_WRAPPER = 'ibox'

export const CLASS_DISPLAY = 'ibox-header'

export const CLASS_APP = 'ibox-main'

export const CLASS_CODE = 'ibox-footer'

export const ICON_URL = '../assets/img/icon-caret-bottom.svg'

export const ICON_HOVER_URL = '../assets/img/icon-caret-bottom-blue.svg'

export const HIDE_ICON_URL = '../assets/img/icon-caret-top.svg'

export const HIDE_ICON_HOVER_URL = '../assets/img/icon-caret-top-blue.svg'

const SETTINGS = {
  showText: {
    icon: ICON_URL,
    text: '展示代码',
    hoverIcon: ICON_HOVER_URL
  },
  hideText: {
    icon: HIDE_ICON_URL,
    text: '隐藏代码',
    hoverIcon: HIDE_ICON_HOVER_URL
  },
  minHeight: 40,
  jsLibs: [
    'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
  ],
  cssLibs: []
}

export const getSettings = options => {
  let opts = {}

  for (let key in options) {
    switch (key) {
      case 'showText':
      case 'hideText':
        opts[key] = {
          icon: options[key].icon || SETTINGS[key].icon,
          text: options[key].text || SETTINGS[key].text,
          hoverIcon: options[key].hoverIcon || SETTINGS[key].hoverIcon
        }
        break
      case 'jsLibs':
      case 'cssLibs':
        opts[key] = [].concat(options[key], SETTINGS[key])
        break
      case 'minHeight':
        opts[key] = options[key]
        break
      default:
        break
    }
  }
  return opts
}
