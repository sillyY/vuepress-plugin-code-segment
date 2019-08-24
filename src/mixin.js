import compile from './compile'

export default {
    mounted () {
        compile()
        this.ad = '212112'
    },
    updated () {
        compile()
        this.opp = '3456789'
    }
  }