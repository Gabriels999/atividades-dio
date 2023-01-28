const h1 = document.querySelector('#page-title')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]
const darkModeClass = 'dark-mode'

const botao = document.querySelector('#mode-selector')
botao.addEventListener('click', trocaModo)

function trocaModo() {
  trocaClasses()
  trocaTextos()
}

function trocaClasses() {
  h1.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  botao.classList.toggle(darkModeClass)
}

function trocaTextos() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'

  if (body.classList.contains('dark-mode')) {
    botao.innerHTML = lightMode
    h1.innerHTML = darkMode + ' ON'
    return
  } else {
    botao.innerHTML = darkMode
    h1.innerHTML = darkMode + ' OFF'
  }
}
