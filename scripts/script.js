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

const menuMobileButton = document.querySelector(".menu-mobile-button");
const menuMobile = document.querySelector(".nav-list");

menuMobileButton.addEventListener('click', () => {

    if(menuMobile.classList.contains(".open")) {
        menuMobile.classList.remove(".open");
    } else {
        menuMobile.classList.add(".open");
    }
});


