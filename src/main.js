import { $, getVueDetail } from './util'
import initEvent from './event'
export default function compile() {
  const nodes = $(document, '.ibox', false)
  if (!nodes || !nodes.length) return
  nodes.forEach(node => {
    node.style.display = 'block'
    
    const displayNode = $(node, '.ibox-content')
    const appNode = $(displayNode, '.ibox-demo')

    const code = decodeURIComponent(node.dataset.code)
    let config = decodeURIComponent(node.dataset.config)

    config = config ? JSON.parse(config) : {}
  
    const detail = getVueDetail(code, config)

    
    const Comp = Vue.extend(detail.script)
    const app = new Comp().$mount()
    appNode.appendChild(app.$el)
    
    // 传递node，确保事件注册在指定的node节点上
    initEvent(node)
  })
}

// function initVue() {}
