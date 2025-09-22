const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

// Botão do menu
mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Função para rolagem suave e fechar menu
function handleLink(selector, targetSelector) {
    document.querySelector(selector).addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(targetSelector).scrollIntoView({ behavior: 'smooth' });
        nav.classList.remove('active'); 
    });
}

handleLink('.link-hero', '.hero');
handleLink('.link-conteudo', '.conteudo-section');
handleLink('.link-depoimentos', '.depoimentos-section');
handleLink('.link-contato', '.footer-section');
