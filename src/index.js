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

// const objednat = document.querySelector('.order-btn');
// objednat.addEventListener('click', (event) => {
//   console.log('Stisknuto');
// })
