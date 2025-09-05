// CÓDIGO PARA MUDANÇA DE BACKGROUND DO HEADER, DE ACORDO COM A ROLAGEM

const header = document.getElementById('main-header');

function getScrollLimit() {
  return window.innerWidth < 730 ? 50 : 120;
}

window.addEventListener('scroll', () => {
  if (window.scrollY > getScrollLimit()) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

window.addEventListener('resize', () => {
  if (window.scrollY > getScrollLimit()) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// CÓDIGO DO MENU MOBILE

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });
});
