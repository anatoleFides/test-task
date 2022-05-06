// button close
const buttonClose = document.querySelector('.warning__close')
buttonClose.onclick = (event) => {
  document.querySelector('.warning')
    .classList.add('close')
}

// burger-menu
document.getElementById('burger-menu').onclick = (event) => {
  document.getElementById('burger-menu').classList.toggle('open')
  document.getElementById('menu-header').classList.toggle('active')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
}