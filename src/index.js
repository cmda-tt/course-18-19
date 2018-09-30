/* eslint-env browser */
var doc = document

setTimeout(init, 4)

doc.querySelectorAll('[data-background-src]').forEach(load)

function load(node) {
  var defaultSrc = node.dataset.backgroundSrc
  var src = defaultSrc.replace(/\.(jpg|png)/, '.webp')
  var bg = doc.createElement('div')
  var img = doc.createElement('img')

  bg.className = 'lazy'

  img.addEventListener('load', onload)
  img.addEventListener('error', onerror)
  img.src = src
  node.insertBefore(bg, node.firstChild)

  function onerror() {
    src = defaultSrc
    img.addEventListener('error', onerror)
    img.src = src
  }

  function onload() {
    bg.style.backgroundImage = 'url(' + src + ')'
    node.className = 'loaded'
    img.removeEventListener('load', onload)
  }
}

function init() {
  doc.body.className += ' init'
}
