const navButton = document.querySelector('.mobile-nav-button');
const hamburger = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavItems = document.querySelectorAll('.mobile-nav-list li');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

mobileNavItems.forEach(item => item.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}));
