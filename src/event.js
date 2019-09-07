import { $ } from './util'
import { getSettings } from './config'
function initEvent(node) {
  const footerNode = $(node, '.ibox-footer')
  const codeNode = $(node, '.ibox-code')
  const contentNode = $(node, '.ibox-content')
  const tipNode = $(codeNode, '.language-tip')
  const showNode = $(footerNode, '.show')
  const hideNode = $(footerNode, '.hide')

  initClick(showNode, codeNode, hideNode, footerNode)
  initFixed(codeNode, footerNode, contentNode)
  initHeight(contentNode)
  tipNode && replaceTip(tipNode, node.dataset.tip)
}

function initClick(showNode, handler, hideNode, footerNode) {
  showNode.addEventListener('click', function() {
    let height = 82
    var likeArr = handler.querySelectorAll('div')
    for (let value of likeArr) {
      height += value.clientHeight
    }
    handler.style.height = height + 'px'
    showNode.classList.remove('visible')
    hideNode.classList.add('visible')
    footerNode.classList.add('is-fixed')

    const style = getComputedStyle(handler, null)
    footerNode.style.width = style.width

    // code下拉存在0.5s动画，会导致位置获取不准确
    setTimeout(() => {
      resetStatus()
    }, 500)
  })
  hideNode.addEventListener('click', function() {
    handler.style.height = '0'
    showNode.classList.add('visible')
    hideNode.classList.remove('visible')
    footerNode.classList.remove('is-fixed')
  })
}
function resetStatus() {
  const nodes = $(document, '.ibox', false),
    height = window.innerHeight || document.documentElement.clientHeight
  nodes.forEach(node => {
    const contentNode = $(node, '.ibox-content'),
      footerNode = $(node, '.ibox-footer'),
      codeNode = $(node, '.ibox-code')

    const h1 = contentNode.getBoundingClientRect(),
      rect = codeNode.getBoundingClientRect()
    // h1.y + h1.height + 80 > height 表示footer上拉超过code部分则取消fixed
    if (
      h1.y + h1.height + 80 > height ||
      rect.y + codeNode.scrollHeight < height
    ) {
      footerNode.classList.remove('is-fixed')
    }
  })
}
function initFixed(codeNode, footerNode, contentNode) {
  document.addEventListener('scroll', function() {
    const rect = codeNode.getBoundingClientRect(),
      height = window.innerHeight || document.documentElement.clientHeight
    if (rect.height === 0) return
    if (rect.height + rect.y > height) {
      footerNode.classList.add('is-fixed')

      const style = getComputedStyle(codeNode, null)
      footerNode.style.width = style.width
    }
    const h1 = contentNode.getBoundingClientRect()

    if (
      rect.height + rect.y + 91 < height ||
      rect.y > height ||
      h1.y + h1.height + 80 > height
    ) {
      footerNode.classList.remove('is-fixed')
    }
  })
}
function initHeight(node) {
  const options = getSettings(window.$VUEPRESS_CODE_SEGMENT),
    minHeight = options.minHeight
  if (minHeight <= 40) return
  node.style.paddingTop = (minHeight - 40) / 2 + 'px'
  node.style.paddingBottom = (minHeight - 40) / 2 + 'px'
}

// 更换tip
function replaceTip(self, tip) {
  self.innerHTML = tip
}

export default initEvent
