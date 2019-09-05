import './style.css'
import compile from './compile'

export default {
    mounted () {
        window.$VUEPRESS_CODE_SEGMENT = SETTINGS
        compile()
    },
    updated () {
        compile()
    }
  }