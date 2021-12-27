const input = document.getElementById('font-size-control');
const span = document.getElementById('text');

input.addEventListener('input', onResizes);

function onResizes(e) { 
    span.style.fontSize = `${Number(e.target.value)}px`;
};