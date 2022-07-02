function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');

const backroundColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', () => {
  let colorEl = getRandomHexColor();
  backroundColor.textContent = colorEl;
  document.body.setAttribute('style', `background-color: ${colorEl}`);
});
