const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

navIconEl.addEventListener('click', () => {
  navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'height: 100vh; width:100vw; overflow:hidden;';
});

navCloseEl.addEventListener('click', () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'height: initial; width: 100%; overflow-x: hidden;';
});
