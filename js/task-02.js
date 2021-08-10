const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsElems = ingredients.map(ingredient => {

  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  return ingredientEl;

});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsElems)
