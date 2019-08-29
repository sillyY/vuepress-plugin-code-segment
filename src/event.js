import { $ } from './parse'
function initEvent(node) {
  const footerNode = $(node, '.ibox-footer')
  const codeNode = $(node, '.ibox-code')
  const showNode = $(footerNode, '.show')
  const hideNode = $(footerNode, '.hide')
  const iconNode = $(showNode, 'img')
  const hideIconNode = $(hideNode, 'img')

  const iconUrl = window.$VUEPRESS_DEMO_BLOCK.showText.icon,
    hoverIconUrl = window.$VUEPRESS_DEMO_BLOCK.showText.hoverIcon,
    HideIconUrl = window.$VUEPRESS_DEMO_BLOCK.hideText.icon,
    hideHoverIconUrl = window.$VUEPRESS_DEMO_BLOCK.hideText.hoverIcon

  initHover(showNode, iconNode, iconUrl, hoverIconUrl)
  initHover(hideNode, hideIconNode, HideIconUrl, hideHoverIconUrl)
  initClick(showNode, codeNode, hideNode)
}

function initHover(node, iconNode, iconUrl, hoverIconUrl) {
  node.addEventListener('mouseover', function() {
    iconNode.setAttribute('src', hoverIconUrl)
  })
  node.addEventListener('mouseout', function() {
    iconNode.setAttribute('src', iconUrl)
  })
}

function initClick(showNode, handler, hideNode) {
  showNode.addEventListener('click', function() {
    const height = handler.querySelector('div').clientHeight;
    handler.style.height = height + 'px'
    showNode.classList.remove('visible')
    hideNode.classList.add('visible')
  })
  hideNode.addEventListener('click', function() {
    handler.style.height = '0'
    showNode.classList.add('visible')
    hideNode.classList.remove('visible')
  })
}

export default initEvent
