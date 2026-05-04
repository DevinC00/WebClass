const burger = document.getElementById('.burger');
const nav = document.getElementById('.navi-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});