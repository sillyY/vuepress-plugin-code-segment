import { $ } from './parse'
function initEvent(node) {
  const footerNode = $(node, '.ibox-footer')
  const codeNode = $(node, '.ibox-code')
  const tipNode = $(codeNode, '.language-tip')
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
  tipNode && replaceTip(tipNode, node.dataset.tip)
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
    let height = 82;
    var likeArr = handler.querySelectorAll('div')
    for(let value of likeArr) {
      height += value.clientHeight
    }
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

// 更换tip
function replaceTip(self, tip) {
  self.innerHTML = tip
}

export default initEvent
