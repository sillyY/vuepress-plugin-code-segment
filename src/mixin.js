import './style.css'
import compile from './compile'

export default {
    mounted () {
        window.$VUEPRESS_DEMO_BLOCK = SETTINGS
        compile()
    },
    updated () {
        compile()
    }
  }