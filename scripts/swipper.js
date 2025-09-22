// Swiper de Depoimentos (igual aos outros)
const depoimentosSwiperEl = document.querySelector('.depoimentos-swiper');
if (depoimentosSwiperEl) {
    new Swiper(depoimentosSwiperEl, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,          // sem loop
        grabCursor: true,
        speed: 800,
        pagination: {
            el: depoimentosSwiperEl.querySelector('.swiper-pagination'),
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
}

// Swipers de Benefícios e Conteúdo Programático
const swipersGrid = document.querySelectorAll('.beneficios-grid.swiper, .conteudo-grid.swiper');
swipersGrid.forEach(swiperEl => {
    new Swiper(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        grabCursor: true,
        speed: 800,
        pagination: {
            el: swiperEl.querySelector('.swiper-pagination'),
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});
