function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesDiv: document.getElementById('boxes'),
};
const { input, btnCreate, btnDestroy, boxesDiv } = refs;

let widthBox = 30;
let heightBox = 30;
let inputUserValue = 0;

input.addEventListener('input', takesValueUser);

function takesValueUser(e) {
  inputUserValue = e.currentTarget.value;
  console.log('inputUserValue = ', inputUserValue);
};

btnCreate.addEventListener('click', createBoxes);

function createBoxes() { 
  for (let i = 1; i <= inputUserValue; i += 1) { 
    boxesDiv.insertAdjacentHTML('beforeend', `<div style="width: ${widthBox}px; height: ${heightBox}px; background-color: ${getRandomHexColor()};"></div>`);
    widthBox += 10;
    heightBox += 10;
   }
};

btnDestroy.addEventListener('click', onDestroyBoxes);

function onDestroyBoxes() { 
  widthBox = 30;
  heightBox = 30;
  boxesDiv.innerHTML = '';
};




