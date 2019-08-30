import { $ } from './parse'
function initEvent(node) {
  const footerNode = $(node, '.ibox-footer')
  const codeNode = $(node, '.ibox-code')
  const tipNode = $(codeNode, '.language-tip')
  const showNode = $(footerNode, '.show')
  const hideNode = $(footerNode, '.hide')

  initClick(showNode, codeNode, hideNode)
  tipNode && replaceTip(tipNode, node.dataset.tip)
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
