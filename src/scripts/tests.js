// TODO: TEST DARK MODE
// Check if dark mode is preferred
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
let darkMode = darkModeMediaQuery.matches;

const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

console.log('Default darkMode state:', darkMode);

// Set dark-mode class on body if darkMode is true and pick icon
if (darkMode) {
  document.body.classList.add('dark-mode-test');
  darkIcon.setAttribute('display', 'none');
} else {
  lightIcon.setAttribute('display', 'none');
}

const btnDarkMode = document.getElementById('dark-mode-toggle');

// Toggle dark mode on button click
function toggleDarkMode() {
  // Toggle darkMode variable

  console.log('Toggling dark mode');
  console.log('Current darkMode state:', darkMode);
  darkMode = !darkMode;
  console.log('Current darkMode state:', darkMode);

  // Toggle dark-mode class on body
  document.body.classList.toggle('dark-mode-test', darkMode);

  // Toggle light and dark icons
  if (darkMode) {
    lightIcon.setAttribute('display', 'block');
    darkIcon.setAttribute('display', 'none');
  } else {
    lightIcon.setAttribute('display', 'none');
    darkIcon.setAttribute('display', 'block');
  }
}

// Add event listener for dark mode toggle button
btnDarkMode.addEventListener('click', toggleDarkMode);

toggleDarkMode();
