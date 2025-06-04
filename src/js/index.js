const btn = document.getElementById('user-menu-button');
const menu = document.getElementById('user-menu-dropdown');

const hello = 'Hello, World!';

btn.addEventListener('click', function (e) {
  e.stopPropagation();
  menu.classList.toggle('hidden');
});

document.addEventListener('click', function () {
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
});

console.log(hello);
