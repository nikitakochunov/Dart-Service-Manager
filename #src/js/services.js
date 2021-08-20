const servicesList = document.querySelector('.services__list')
const servicesItems = document.querySelectorAll('.item-services')
const buttonServices = document.querySelector('.item-services__button')

servicesList.addEventListener('click', function (event) {
  console.log(1);
  console.log(event.target)
  console.log(event.target.closest('.item-services__header'));
  if (event.target.closest('.item-services__header')) {
    if (event.target.closest('li').classList.contains('item-services--active') === false) {
      servicesItems.forEach(function (item) {
        if (item.classList.contains('item-services--active')) {
          item.classList.remove('item-services--active')
        }
      })
    }
    event.target.closest('li').classList.toggle('item-services--active')
  }
})
