const menu = document.querySelector('[data-menu]');
const menuOpenBtn = document.querySelector('[data-menu-open]');
const menuCloseBtn = document.querySelector('[data-menu-close]');
const menuNavLinks = document.querySelectorAll('.menu-nav-link');

// Обробка кліку на логотип для перезавантаження сторінки
const logoLinks = document.querySelectorAll(
  '.header-logo, .footer-logo, .menu-logo'
);
logoLinks.forEach(logo => {
  logo.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = '/';
  });
});

// Функція для закриття меню
const closeMenu = () => {
  if (menu) {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
};

if (menuOpenBtn && menu) {
  menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
}

if (menuCloseBtn && menu) {
  menuCloseBtn.addEventListener('click', closeMenu);
}

// Обробка кліків на якірні посилання в меню
menuNavLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // Перевіряємо, чи це якірне посилання (починається з #)
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Закриваємо меню
        closeMenu();

        // Виконуємо плавний скрол до цільового елемента
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100); // Невелика затримка для закриття меню перед скролом
      }
    }
  });
});
