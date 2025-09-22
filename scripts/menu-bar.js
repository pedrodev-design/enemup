const menuLinks = document.querySelectorAll('.menu a');
const menu = document.querySelector('.menu');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
    });
});
