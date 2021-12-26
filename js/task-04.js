const refs = {
    decBtn: document.querySelector('[data-action="decrement"]'),
    incBtn: document.querySelector('[data-action="increment"]'),
    span: document.getElementById('value'),  
};

const { decBtn, incBtn, span } = refs;
let counterValue = 0;

decBtn.addEventListener('click', onDecValue);
incBtn.addEventListener('click', onIncValue);

function onIncValue() { 
    counterValue += 1;
    span.textContent = counterValue;
};

function onDecValue() { 
    counterValue -= 1;
    span.textContent = counterValue;
};
