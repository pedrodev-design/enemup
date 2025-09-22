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


// Hero fade in e slide
gsap.from(".hero-text h1, .hero-text p, .hero-text", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

// Hero image fade in
gsap.from(".hero-image img", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.5
});

// Benefícios e Conteúdo Programático (ScrollTrigger)
gsap.utils.toArray(".beneficio-item, .conteudo-item").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Depoimentos
gsap.from(".depoimento-item", {
    scrollTrigger: {
        trigger: ".depoimentos-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3
});

// CTA
gsap.from(".cta-box, .urgencia", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2
});

// Footer
gsap.from(".footer-section", {
    scrollTrigger: {
        trigger: ".footer-section",
        start: "top 90%",
    },
    opacity: 0,
    y: 50,
    duration: 1
});
