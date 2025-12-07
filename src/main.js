// Menu toggle functionality
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

// Close menu when clicking outside
if (menu) {
  menu.addEventListener('click', e => {
    if (e.target === menu) {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

// Close menu when pressing Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

// Close menu when clicking on navigation links
const menuNavLinks = document.querySelectorAll('.menu-nav-link');
menuNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
});
