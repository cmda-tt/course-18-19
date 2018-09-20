/* eslint-env browser */
var doc = document

setTimeout(init, 4)

doc.querySelectorAll('[data-background-src]').forEach(load)

function load(node) {
  var src = node.dataset.backgroundSrc
  var bg = doc.createElement('div')
  var img = doc.createElement('img')

  bg.className = 'lazy'

  img.addEventListener('load', onload)
  img.src = src
  node.insertBefore(bg, node.firstChild)

  function onload() {
    bg.style.backgroundImage = 'url(' + src + ')'
    node.className = 'loaded'
    img.removeEventListener('load', onload)
  }
}

function init() {
  doc.body.className += ' init'
}
