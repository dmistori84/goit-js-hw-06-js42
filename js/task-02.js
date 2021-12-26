const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');

const createLi = ingredients.map(elem => { 
  const li = document.createElement('li');
  li.textContent = elem;
  li.className = 'item';
  return li;
});

list.append(...createLi);


