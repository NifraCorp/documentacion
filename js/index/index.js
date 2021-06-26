import { password } from './password.js';

const btnLogin = document.getElementById('btn-login');
const inputPassword = document.getElementById('input');

function inputInvalid() {
    inputPassword.classList.add('input-error')

    setTimeout( () => {
        inputPassword.classList.remove('input-error')
    }, 1000)
}



btnLogin.addEventListener('click', () => {

    if (inputPassword.value === password) {
        logueado()
        location.href = 'documentation.html'
    } else {
        inputInvalid()
    }
})

function logueado() {
    localStorage.setItem('nfLogueado', 'true')
}




