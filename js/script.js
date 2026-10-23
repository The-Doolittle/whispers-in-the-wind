// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

function setNavOpen(open){
  siteNav.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
}

navToggle.addEventListener('click', () => {
  setNavOpen(!siteNav.classList.contains('open'));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && siteNav.classList.contains('open')){
    setNavOpen(false);
    navToggle.focus();
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
