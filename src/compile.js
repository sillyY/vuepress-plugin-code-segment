import { $, getVueDetail } from './parse'
import initEvent from './event'
export default function compile() {
  const nodes = $(document, '.ibox', false)
  if (!nodes || !nodes.length) return
  nodes.forEach(node => {
    node.style.display = 'block'

    const codeNode = $(node, '.ibox-main')
    const displayNode = $(node, '.ibox-content')
    const footerNode = $(node, '.ibox-footer')
    const appNode = $(displayNode, '.ibox-demo')

    const code = decodeURIComponent(node.dataset.code)

    const detail = getVueDetail(code)
    // 传递node，确保事件注册在指定的node节点上
    initEvent(node)

    const Comp = Vue.extend(detail.script)
    const app = new Comp().$mount()
    appNode.appendChild(app.$el)
  })
}

function initVue() {}
