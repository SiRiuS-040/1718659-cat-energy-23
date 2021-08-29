slideBottom = document.querySelector('.slider__compare--bottom');

function slider1() {
  var rng = document.getElementById('range1');
  let inputval;
  inputval = rng.value;
  resultwidth = (707 / 100 * inputval) + "px";
  slideBottom.style.width = resultwidth;
};
