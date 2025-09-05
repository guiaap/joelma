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

const observerSections = document.querySelectorAll('#banner, #about, #services, #blog, #contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

observerSections.forEach(section => observer.observe(section));
