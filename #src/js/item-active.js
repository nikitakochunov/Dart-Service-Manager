const itemsList = document.querySelector('.menu__list')
const items = document.querySelectorAll('.menu__item')

itemsList.addEventListener('click', function (event) {
  event.preventDefault()
  if (event.target.tagName === 'A') {
    if (event.target.parentNode.classList.contains('menu__item--active') === false) {
      items.forEach(function (item) {
        if (item.classList.contains('menu__item--active')) {
          item.classList.remove('menu__item--active')
        }
      })
    }
    event.target.parentNode.classList.add('menu__item--active')
  }
})
