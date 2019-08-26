import { $, getVueDetail } from './parse'
export default function compile() {
  const nodes = $(document, 'ibox')
  if (!nodes || !nodes.length) return
  nodes.forEach(node => {
    node.style.display = 'block'

    const codeNode = $(node, 'ibox-code')
    const displayNode = $(node, 'ibox-content')
    const footerNode = $(node, 'ibox-footer')
    const appNode = $(displayNode[0], 'ibox-demo')

    // let config = decodeURIComponent(window['$VUEPRESS_CODE_SEGMENT']);
    // config = config ? JSON.parse(config) : {};
    console.log(window.$VUEPRESS_DEMO_BLOCK)
    const code = decodeURIComponent(node.dataset.code)

    const detail = getVueDetail(code)

    const Comp = Vue.extend(detail.script);
    const app = new Comp().$mount();
    appNode[0].appendChild(app.$el);
  })
}

function initVue() {}
