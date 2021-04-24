import './style.css';

console.log('funguju!');

const menu = document.querySelector('#nav-btn');

menu.addEventListener('click', (event) => {
  const navigace = document.querySelector('nav');
  navigace.classList.toggle('nav-closed');
});

const polozkyMenu = document.querySelectorAll('.navigation a');

polozkyMenu.forEach((element) => {
  element.addEventListener('click', (event) => {
    console.log('Element', element);
    const navigace = document.querySelector('nav');
    navigace.classList.toggle('nav-closed');
  });
});

const objednat = document.querySelector('.order-btn');
const vybranyDrink = document.querySelector('.drink__cup');
const tlacitkoObjednat = document.querySelector('.order-btn');

let ordered = true;

objednat.addEventListener('click', (event) => {
  if (ordered) {
    ordered = false;
    tlacitkoObjednat.innerHTML = 'Zrušit';
    vybranyDrink.classList.add('drink__cup--selected');
  } else {
    ordered = true;
    tlacitkoObjednat.innerHTML = 'Objednat';
    vybranyDrink.classList.remove('drink__cup--selected');
  }
});
