import { $ } from './parse'
function initEvent(node) {
  const footerNode = $(node, '.ibox-footer')
  const codeNode = $(node, '.ibox-code')
  const iconNode = $(footerNode[0], 'img')
  initHover(footerNode[0], iconNode[0])

  initClick(footerNode[0], codeNode[0])
}

function initHover(node, icon) {
  const iconUrl = window.$VUEPRESS_DEMO_BLOCK.showText.icon,
    hoverIconUrl = window.$VUEPRESS_DEMO_BLOCK.showText.hoverIcon
  node.addEventListener('mouseover', function() {
    icon.setAttribute('src', hoverIconUrl)
  })
  node.addEventListener('mouseout', function() {
    icon.setAttribute('src', iconUrl)
  })
}

function initClick(node, handler) {
  node.addEventListener('click',function(){
    handler.classList.add('show')
  })
}

export default initEvent
