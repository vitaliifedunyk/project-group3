const menu = document.querySelector('[data-menu]');
const menuOpenBtn = document.querySelector('[data-menu-open]');
const menuCloseBtn = document.querySelector('[data-menu-close]');

if (menuOpenBtn) {
  menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
}

if (menuCloseBtn) {
  menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
}
