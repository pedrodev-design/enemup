   document.querySelector('.link-hero').addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('.link-conteudo').addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.conteudo-section').scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('.link-depoimentos').addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.depoimentos-section').scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('.link-contato').addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.footer-section').scrollIntoView({ behavior: 'smooth' });
        });