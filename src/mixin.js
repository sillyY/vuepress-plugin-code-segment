import './assets/style.css'
import compile from './compile'
import initEvent from './event'

export default {
    mounted () {
        window.$VUEPRESS_DEMO_BLOCK = SETTINGS
        compile()
        // initEvent()
    },
    updated () {
        compile()
    }
  }