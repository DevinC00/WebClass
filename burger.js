const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});