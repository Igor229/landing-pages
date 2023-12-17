const header = document.querySelector('.header__items')

window.addEventListener('scroll', function(event) {
  if(this.window.pageYOffset > 0) {
    console.log('as');
    header.classList.add('hide')
  } else {
    header.classList.remove('hide')
  }
})