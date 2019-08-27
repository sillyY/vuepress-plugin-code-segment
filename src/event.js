import { $ } from './parse'
function init(node) {
  initHover(node)
}

function initHover(node) {
  const footerNode = $(document, '.ibox-footer')
  const btnNode = $(footerNode[0], '.btn')
  const iconNode = $(btnNode[0], 'img')
  footerNode[0].addEventListener('mouseover', function() {
    iconNode[0].setAttribute('src', '/icon-caret-bottom-blue.svg')
  })
  footerNode[0].addEventListener('mouseout', function() {
    iconNode[0].setAttribute('src', '/icon-caret-bottom.svg')
  })
}

export default init
