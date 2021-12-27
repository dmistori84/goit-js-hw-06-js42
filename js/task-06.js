const input = document.getElementById('validation-input');

input.addEventListener('blur', onChangeColorBorder);

function onChangeColorBorder(e) {  
    if (Number(input.dataset.length) === e.target.value.length) {
        input.classList = 'valid'
    }
    else input.classList = 'invalid';
};


