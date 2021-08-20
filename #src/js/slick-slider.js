// Slick Slider=================================================================


$(document).ready(function () {
  $('.slider-customers').slick({
    // autoplay: true,
    dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 2,
    draggable: true,
    swipe: true,
    vertical: true,
    infinity: true,
    verticalSwiping: true,
    autoplaySpeed: 1500,
    speed: 700,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          verticalSwiping: false,
          vertical: false,
        }
      }
    ],
  })

  $('.people__slider--photo').slick({
    // autoplay: true,
    dots: false,
    arrows: false,
    accessibility: false,
    slidesToShow: 2,
    draggable: true,
    swipe: true,
    infinity: true,
    autoplaySpeed: 1500,
    speed: 700,
    initialSlide: 1,
    centerMode: true,
    variableWidth: true,
    asNavFor: ".people__slider--info"
  })

  $('.people__slider--info').slick({
    // autoplay: true,
    dots: false,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    draggable: true,
    swipe: true,
    infinity: true,
    autoplaySpeed: 1500,
    speed: 700,
    initialSlide: 1,
    fade: true,
    asNavFor: ".people__slider--photo"
  })
})

