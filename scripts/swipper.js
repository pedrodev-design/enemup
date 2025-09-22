  // Função para inicializar Swipers genéricos
        function initSwiper(swiperEl, options) {
            new Swiper(swiperEl, {
                ...options,
                pagination: {
                    el: swiperEl.querySelector('.swiper-pagination'),
                    clickable: true
                }
            });
        }

        // Função para criar Swiper elegante
        function createElegantSwiper(swiperEl, options = {}) {
            new Swiper(swiperEl, {
                slidesPerView: 'auto',   // mostra slides conforme tamanho do conteúdo
                spaceBetween: 20,
                loop: true,
                centeredSlides: true,
                grabCursor: true,
                speed: 800,               // velocidade da transição (ms)
                pagination: {
                    el: swiperEl.querySelector('.swiper-pagination'),
                    clickable: true
                },
                ...options
            });
        }

        // Swiper Depoimentos
        const depoimentosSwiperEl = document.querySelector('.depoimentos-swiper');
        if (depoimentosSwiperEl) {
            createElegantSwiper(depoimentosSwiperEl, {
                effect: 'coverflow', // efeito elegante
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                },
                initialSlide: 1
            });
        }

        // Swipers de Benefícios e Conteúdo Programático
        const swipersGrid = document.querySelectorAll('.beneficios-grid.swiper, .conteudo-grid.swiper');
        swipersGrid.forEach(swiperEl => {
            createElegantSwiper(swiperEl, {
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: false,
                        loop: false
                    }
                },
                initialSlide: 1
            });
        });