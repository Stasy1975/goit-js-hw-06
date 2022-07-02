const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const inrgedientesList = document.querySelector('#ingredients');

const ingredientLi = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  return ingredientItem;
});

inrgedientesList.append(...ingredientLi);
