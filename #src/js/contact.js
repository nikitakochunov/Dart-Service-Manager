
const checkboxNotСhecked = document.querySelector('.form__checkbox span.not-checked')
const checkboxСhecked = document.querySelector('.form__checkbox span.checked')
const checkbox = document.querySelector('.form__checkbox')

checkbox.addEventListener('click', (event) => {
  if (checkbox.classList.contains('active')) {
    checkboxNotСhecked.style.display = 'block'
    checkboxСhecked.style.display = 'none'
    checkbox.classList.remove('active')
  } else {
    checkboxNotСhecked.style.display = 'none'
    checkboxСhecked.style.display = 'block'
    checkbox.classList.add('active')
  }
})

