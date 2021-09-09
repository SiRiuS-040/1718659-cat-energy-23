// Меню навигации

let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

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

let beforeToggle = document.querySelector('.slider-control__label--before');
let afterToggle = document.querySelector('.slider-control__label--after');
let sliderToggle = document.querySelector('.switch-button__checkbox');
let afterSlide = document.querySelector('.slider__image--after');
let beforeSlide = document.querySelector('.slider__image--before');

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

let slideBottom = document.querySelector('.slider__compare--bottom');

function slider1() {
  let rng = document.getElementById('range1');
  let inputval = rng.value;
  slideBottom.style.width = (707 / 100 * inputval) + "px";
};
