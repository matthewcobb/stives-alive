// Mobile Nav

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenuEl = document.querySelector('.nav-top .nav-trigger');
  const navMobileEl = document.querySelector('.nav-mobile');
  const navCloseEl = navMobileEl.querySelector('.nav-close');

  if (!burgerMenuEl || !navMobileEl) {
    return;
  }

  burgerMenuEl.addEventListener('click', () => {
    navMobileEl.classList.add('nav-active');
  });

  navCloseEl.addEventListener('click', () => {
    navMobileEl.classList.remove('nav-active');
  });
});
