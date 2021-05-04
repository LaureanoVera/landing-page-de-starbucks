const imgSlider = (anything) => {
  document.querySelector('.content__img').src = anything;
}

const changeCircleColor = (color) => {
  const circle = document.querySelector('.circle');
  circle.style.backgroundColor = color;
}