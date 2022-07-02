const categoriesUl = document.querySelector("#categories");
const categoriesLi = categoriesUl.querySelectorAll("li.item");

console.log('Numbers of categories: ', categoriesLi.length);

categoriesLi.forEach(item => {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements: ', item.querySelectorAll('li').length);
});
