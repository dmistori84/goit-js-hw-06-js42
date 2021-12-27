
const form = document.querySelector('.login-form');
const dataObject = {};

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(e) {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;
    if (email.value === '' || password.value === '') { 
        alert('Все поля должны быть заполнены!')
    }
    dataObject.email = email.value;
    dataObject.password = password.value;
    console.log('dataObject', dataObject);
    e.currentTarget.reset();
 };