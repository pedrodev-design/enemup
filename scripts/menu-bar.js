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


const cards = document.querySelectorAll('.desafio-card');
const finalBtn = document.querySelector('.btn-desafio-final');
const progressBar = document.querySelector('.progress-bar');
let currentCard = 0;

cards.forEach(card => {
    const options = card.querySelectorAll('.desafio-options li');
    const feedback = card.querySelector('.desafio-feedback');
    const retryBtn = card.querySelector('.btn-retry');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const correct = option.getAttribute('data-correct') === 'true';

            if (correct) {
                feedback.innerHTML = '<i class="fas fa-check-circle"></i> Acertou!';
                feedback.style.color = '#4CAF50';
                retryBtn.style.display = 'none';

                setTimeout(() => {
                    if (currentCard < cards.length - 1) {
                        cards[currentCard].style.display = 'none';
                        currentCard++;
                        cards[currentCard].style.display = 'flex';
                        progressBar.style.width = `${(currentCard / cards.length) * 100}%`;
                    } else {
                        cards[currentCard].style.display = 'none';
                        finalBtn.style.display = 'inline-block';
                        progressBar.style.width = '100%';
                    }
                }, 800);

            } else {
                feedback.innerHTML = '<i class="fas fa-times-circle"></i> Ops! Tente novamente.';
                feedback.style.color = '#FF4C4C';
                retryBtn.style.display = 'inline-block';
            }
        });
    });

    retryBtn.addEventListener('click', () => {
        feedback.textContent = '';
        retryBtn.style.display = 'none';
    });
});
