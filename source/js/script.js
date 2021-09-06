// Меню навигации

var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');
navMain.classList.remove('navigation--opened');
navMain.classList.add('navigation--closed');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

// Слайдер мобильной версии

var beforeToggle = document.querySelector('.slider-control__label--before');
var afterToggle = document.querySelector('.slider-control__label--after');
var sliderToggle = document.querySelector('.switch-button__checkbox');
var afterSlide = document.querySelector('.slider__image--after');
var beforeSlide = document.querySelector('.slider__image--before');

sliderToggle.addEventListener('change', function (event) {
  if (sliderToggle.checked) {
    afterSlide.classList.remove('slider__image--hidden');
    beforeSlide.classList.add('slider__image--hidden');
    beforeToggle.classList.remove('slider-control__label--deactivated');
    afterToggle.classList.add('slider-control__label--deactivated');
  } else {
    afterSlide.classList.add('slider__image--hidden');
    beforeSlide.classList.remove('slider__image--hidden');
    beforeToggle.classList.add('slider-control__label--deactivated');
    afterToggle.classList.remove('slider-control__label--deactivated');
  }
});


// Слайдер пл.  и дт версий

var slideBottom = document.querySelector('.slider__compare--bottom');

function slider1() {
  var rng = document.getElementById('range1');
  var inputval;
  inputval = rng.value;
  resultwidth = (707 / 100 * inputval) + "px";
  slideBottom.style.width = resultwidth;
};
