const refs = {
    categories: document.getElementById('categories'),
    items: document.querySelectorAll('#categories .item'),
};

console.log('Number of categories:', refs.items.length);

refs.items.forEach(li => {
    li.querySelectorAll('h2')
    .forEach(categori => console.log(`Category: ${categori.textContent}`)),
    console.log(`Elements: ${li.querySelectorAll('li').length}`)
});

 