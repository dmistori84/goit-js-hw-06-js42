function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bntChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

bntChangeColor.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor() { 
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
};





