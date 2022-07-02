const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

let counterValue = 0;

buttonIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

buttonDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
