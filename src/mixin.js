import compile from './compile'

export default {
    mounted () {
        compile()
    },
    updated () {
        compile()
    }
  }