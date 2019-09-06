const CLASS_WRAPPER = 'ibox'

const CLASS_DISPLAY = 'ibox-header'

const CLASS_APP = 'ibox-main'

const CLASS_CODE = 'ibox-footer'

const SETTINGS = {
  showText: '展示代码',
  hideText: '隐藏代码',
  minHeight: 40
}

export const getSettings = options => {
  let opts = SETTINGS

  for (let key in options) {
    switch (key) {
      case 'showText':
      case 'hideText':
      case 'minHeight':
        opts[key] = options[key] ?  options[key] : opts[key]
        break
      default:
        break
    }
  }
  return opts
}