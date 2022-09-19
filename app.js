const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementsByClassName('nav-list');
const header = document.getElementsByClassName('header');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
});