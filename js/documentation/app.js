logueado()

import { tareas } from './tareas.js';
import { general } from './general.js';
import { aventura } from './aventura.js';
import { arena } from './arena.js';
import { energia } from './energia.js';
import { teams } from './teams.js';
import { axies } from './axies.js';

const main = document.querySelector('main');
const btnGeneral = document.getElementById('btn-general');
const btnTareas = document.getElementById('btn-tareas');
const btnAventura = document.getElementById('btn-aventura');
const btnArena = document.getElementById('btn-arena');
const btnEnergia = document.getElementById('btn-energia');
const btnTeams = document.getElementById('btn-teams');
const btnAxies = document.getElementById('btn-axies');

const btnMenu = document.querySelector('.btn-menu');

function logueado() {
    if (localStorage.getItem('nfLogueado') !== 'true') {
        location.href = 'index.html'
    }
}

listeners()
function listeners() {
    btnMenu.addEventListener('click', () => {
        desplegarMenu()
    })


    btnGeneral.addEventListener('click', e => {
        general(main)
        reiniciarClicked(e.target)
    })

    btnTareas.addEventListener('click', e => {
        tareas(main)
        reiniciarClicked(e.target)
    })

    btnAventura.addEventListener('click', e => {
        aventura(main)
        reiniciarClicked(e.target)
    })

    btnArena.addEventListener('click', e => {
        arena(main)
        reiniciarClicked(e.target)
    })

    btnEnergia.addEventListener('click', e => {
        energia(main);
        reiniciarClicked(e.target)
    })

    btnTeams.addEventListener('click', e => {
        teams(main);
        reiniciarClicked(e.target)
    })

    btnAxies.addEventListener('click', e => {
        axies(main);
        reiniciarClicked(e.target)
    })
}


    


function reiniciarClicked(target) {
    btnGeneral.classList.remove('btn-clicked');
    btnTareas.classList.remove('btn-clicked');
    btnAventura.classList.remove('btn-clicked');
    btnArena.classList.remove('btn-clicked');
    btnEnergia.classList.remove('btn-clicked');
    btnTeams.classList.remove('btn-clicked');
    btnAxies.classList.remove('btn-clicked');

    target.classList.add('btn-clicked')
}

function desplegarMenu() {
    const menuDesplegable = document.querySelector('.box-btn-nav-responsive');

    if ( menuDesplegable.classList.contains('menu-desplegado') ) {
        menuDesplegable.classList.remove('menu-desplegado');
    } else {
        menuDesplegable.classList.add('menu-desplegado')
    }
}
