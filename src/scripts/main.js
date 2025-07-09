console.log('Starting the application...');

const btnDarkMode = document.querySelector('#theme-toggle');
const btnMenu = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

// TODO: GET - DARK MODE
// Check if dark mode is preferred
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
let darkMode = darkModeMediaQuery.matches;

console.log('Default darkMode state:', darkMode);

// Set dark-mode class on body if darkMode is true and pick icon
if (darkMode) {
  darkIcon.setAttribute('display', 'none');
} else {
  lightIcon.setAttribute('display', 'none');
}

// TODO: CLICK - Mode Dark/Light
btnDarkMode.onclick = () => {
  document.documentElement.classList.toggle('dark');

  // Toggle darkMode variable
  darkMode = !darkMode;

  // Toggle light and dark icons
  if (darkMode) {
    lightIcon.classList.toggle('hidden');
    darkIcon.classList.toggle('hidden');
  } else {
    lightIcon.classList.toggle('hidden');
    darkIcon.classList.toggle('hidden');
  }
};

// TODO: CLICK - Menu Toggle
function clickMenuToggle(e) {
  menu.classList.toggle('hidden');

  if (menuIcon.contains(e.target)) {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  } else if (closeIcon.contains(e.target)) {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }
}
btnMenu.onclick = (e) => clickMenuToggle(e);

// TODO: ADD EVENT CLICK - Listener to the menu outside the menu
document.onclick = (e) => {
  if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
    menu.classList.add('hidden');
  }
};

// TODO: CLICK - Back to the top of the page
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

// TODO: SET - Dynamic Year in Footer
const dataYear = new Date().getFullYear();
const elementYear = document.querySelector('#current-year');
elementYear.textContent = dataYear;

// TODO: typeWriter

document.addEventListener('DOMContentLoaded', function (event) {
  // Array with texts to type in typewriter
  var dataText = [
    'Fullstack Developer.',
    'Web Developer.',
    'Product Manager.',
    'DevOps Engineer.',
    'Specialized Moodle.',
  ];
  const typedOut = document.getElementById('typed-out');

  // Type one text in the typwriter
  // Keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // Chekc if text isn't finished yet
    if (i < text.length) {
      // Add next character to h1
      typedOut.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // Wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // Text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // Call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // Start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 10000);
    }
    // Check if dataText[i] exists
    if (i < dataText[i].length) {
      // Text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // After callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // Start the text animation
  StartTextAnimation(0);
});
