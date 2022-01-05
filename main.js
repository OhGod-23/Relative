'use strict';

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active'); //active가 없다면 넣고, 있으면 뺌.
    icons.classList.toggle('active');
});