const fontSizeControlEl = document.querySelector('#font-size-control');
// console.log(fontSizeControlEl);
const textEl = document.querySelector('#text');
// console.log(textEl);
fontSizeControlEl.addEventListener('input', event => {
  textEl.setAttribute('style', `font-size: ${event.currentTarget.value}px`);
});
