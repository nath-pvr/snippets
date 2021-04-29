// Menu Burger

const burger = document.getElementById('burger');
const header = document.querySelector('header');
const ancres = document.querySelectorAll('.itemMenu');
const sections = document.querySelectorAll('section');

burger.addEventListener('click', e => {
    e.preventDefault();
    header.classList.toggle('with--sidebar');
});

ancres.forEach(ancre =>
    ancre.addEventListener('click', e => {
        header.classList.toggle('with--sidebar');
    })
);

sections.forEach(section =>
    section.addEventListener('click', e => {
        header.classList.remove('with--sidebar');
    })
);