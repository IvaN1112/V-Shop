import get from './utils/getElement.js';
// setup nav
const navBtn = get('.nav-btn');
const navbar = get('.navbar');
const navClose = get('.nav-close');
// const databaseMenu = get('database-menu');
// const databaseSubMenu = get('database-sub-menu');

// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});
//setup date
const date = (get('#date').innerHTML = new Date().getFullYear());

//setup gallery
const galleryContainer = get('.gallery-container');
galleryContainer.addEventListener('click', (e) => {
  //in case we click the previous button
  const button = e.target.parentElement;
  if (button.classList.contains('next-btn')) {
    const active = get('.active');
    let next = active.nextElementSibling;
    const last = get('.last');
    const nextTag = next.tagName;
    if (nextTag === 'BUTTON') {
      next = galleryContainer.firstElementChild;
    }

    active.classList.remove('active');
    next.classList.remove('next');
    last.classList.remove('last');

    next.classList.add('active');
    active.classList.add('last');
    last.classList.add('next');
  }
  if (button.classList.contains('prev-btn')) {
    const active = get('.active');
    let last = get('.last');
    let newLast = last.previousElementSibling;

    if (!newLast) {
      newLast = document.querySelectorAll('.gallery img')[4];
    }
    if (!last) {
      last = document.querySelectorAll('.gallery img')[4];
    }

    active.classList.remove('active');
    last.classList.remove('last');
    newLast.classList.remove('next');

    last.classList.add('active');
    active.classList.add('next');
    newLast.classList.add('last');
  }
});
