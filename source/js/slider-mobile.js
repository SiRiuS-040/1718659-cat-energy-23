var beforeToggle = document.querySelector('.slider-control__label--before');
var afterToggle = document.querySelector('.slider-control__label--after');

var sliderToggle = document.querySelector('.switch-button__checkbox');

var afterSlide = document.querySelector('.slider__image--after');
var beforeSlide = document.querySelector('.slider__image--before');

// navMain.classList.remove('navigation--nojs');
// navMain.classList.remove('navigation--opened');
// navMain.classList.add('navigation--closed');


sliderToggle.addEventListener('change', function (event) {
  if (sliderToggle.checked) {
    afterSlide.classList.remove('slider__image--hidden');
    beforeSlide.classList.add('slider__image--hidden');

    //

    beforeToggle.classList.remove('slider-control__label--deactivated');
    afterToggle.classList.add('slider-control__label--deactivated');

  } else {
    afterSlide.classList.add('slider__image--hidden');
    beforeSlide.classList.remove('slider__image--hidden');

    //

    beforeToggle.classList.add('slider-control__label--deactivated');
    afterToggle.classList.remove('slider-control__label--deactivated');


  }



  // alert(event.target.checked);



  // if (navMain.classList.contains('navigation--closed')) {
  //   navMain.classList.remove('navigation--closed');
  //   navMain.classList.add('navigation--opened');
  // } else {
  //   navMain.classList.add('navigation--closed');
  //   navMain.classList.remove('navigation--opened');
  // }
});
