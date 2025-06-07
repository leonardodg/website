console.log('Starting the application...');

const btnDarkMode = document.querySelector('#theme-toggle');
const btnMenu = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

// TODO: Mode Dark/Light
btnDarkMode.onclick = () => document.documentElement.classList.toggle('dark');

// TODO: Menu Toggle
btnMenu.onclick = () => menu.classList.toggle('hidden');

// TODO: Add a click event listener to the menu outside the menu
document.onclick = (e) => {
  if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
    menu.classList.add('hidden');
  }
};

// TODO: Back to the top of the page
const backToTop = document.querySelector('#back-to-top');

window.onscroll = () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// TODO: Dynamic Year in Footer
const dataYear = new Date().getFullYear();
const elementYear = document.querySelector('#current-year');
elementYear.textContent = dataYear;
