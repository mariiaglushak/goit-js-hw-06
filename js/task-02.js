const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayIngredients = ingredients.map(element => {
  const createList = document.createElement('li')
  createList.classList.toggle('item')
  createList.textContent = element
  
  return createList
  
});
const arIngredientsId = document.querySelector('#ingredients')
  arIngredientsId.append(...arrayIngredients)
console.log(arrayIngredients)




// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.