const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', onChangeSpan);
function onChangeSpan(e) { 
    if (e.currentTarget.value == '') { 
        span.textContent = 'Anonymous'
    }
    else span.textContent = e.currentTarget.value;
};
