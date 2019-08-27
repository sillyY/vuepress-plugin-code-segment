import { $, getVueDetail } from './parse'
import init from './event'
export default function compile() {
  const nodes = $(document, '.ibox')
  if (!nodes || !nodes.length) return
  nodes.forEach(node => {
    node.style.display = 'block'

    const codeNode = $(node, '.ibox-code')
    const displayNode = $(node, '.ibox-content')
    const footerNode = $(node, '.ibox-footer')
    const appNode = $(displayNode[0], '.ibox-demo')

    const code = decodeURIComponent(node.dataset.code)

    const detail = getVueDetail(code)

    // footerNode[0].addEventListener('mouseover', function() {
    //   const footerNode = $(node, '.ibox-footer')
    //   const btnNode = $(footerNode[0], '.btn')
    //   const iconNode = $(btnNode[0], 'img')
    //   iconNode[0].setAttribute('src', '/icon-caret-bottom-blue.svg')
    // })
    init()

    const Comp = Vue.extend(detail.script)
    const app = new Comp().$mount()
    appNode[0].appendChild(app.$el)
  })
}

function initVue() {}
