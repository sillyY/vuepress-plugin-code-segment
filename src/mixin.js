import './style.css'
import compile from './main'

export default {
    mounted () {
        window.$VUEPRESS_CODE_SEGMENT = SETTINGS
        compile()
    },
    updated () {
        compile()
    }
  }