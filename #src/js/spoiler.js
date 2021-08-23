// Spoiler ===================================================================================================

$(document).ready(function () {

  const sliderSpeed = 500

  $('.item-services').click(function (event) {
    if (event.target.closest('.item-services__header')) {
      $('.item-services').not($(this)).removeClass('item-services--active')
      $('.item-services__content').not($(this).find('.item-services__content')).slideUp(sliderSpeed)

      $(this).toggleClass('item-services--active')
      $(this).find('.item-services__content').slideToggle(sliderSpeed)
    }

  })
})

