import { $ } from './parse'
function initEvent(node) {
  const footerNode = $(node, '.ibox-footer')
  const codeNode = $(node, '.ibox-code')
  const tipNode = $(codeNode, '.language-tip')
  const showNode = $(footerNode, '.show')
  const hideNode = $(footerNode, '.hide')

  initClick(showNode, codeNode, hideNode, footerNode)
  initFixed(codeNode, footerNode)
  tipNode && replaceTip(tipNode, node.dataset.tip)
}

function initClick(showNode, handler, hideNode, footerNode) {
  showNode.addEventListener('click', function() {
    let height = 82;
    var likeArr = handler.querySelectorAll('div')
    for(let value of likeArr) {
      height += value.clientHeight
    }
    handler.style.height = height + 'px'
    showNode.classList.remove('visible')
    hideNode.classList.add('visible')
    footerNode.classList.add('is-fixed')
  })
  hideNode.addEventListener('click', function() {
    handler.style.height = '0'
    showNode.classList.add('visible')
    hideNode.classList.remove('visible')
    footerNode.classList.remove('is-fixed')
  })
}

function initFixed(codeNode, footerNode) {
  const app = $(document, '#app')
  document.addEventListener('scroll', function() {
    const rect = codeNode.getBoundingClientRect(),
      height = window.innerHeight || document.documentElement.clientHeight;
    if(rect.height === 0) return
    if(rect.height + rect.y > height) {
      footerNode.classList.add('is-fixed')
    }
    if(rect.height + rect.y + 91 < height) {
      footerNode.classList.remove('is-fixed')
    }
  })
}

// 更换tip
function replaceTip(self, tip) {
  self.innerHTML = tip
}

export default initEvent
