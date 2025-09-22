function createNormalSwiper(swiperEl) {
    new Swiper(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        centeredSlides: false,
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
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
}

const allSwipers = document.querySelectorAll('.depoimentos-swiper, .beneficios-grid.swiper, .conteudo-grid.swiper');
allSwipers.forEach(swiperEl => createNormalSwiper(swiperEl));
