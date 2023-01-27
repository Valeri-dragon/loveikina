document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".conteiner-slider-prewie", {
    // Optional parameters

    loop: true,
    slidesPerView: 1,

    breakpoints: {
      1560: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".btn__right__slider__prewie",
      prevEl: ".btn__left__slider__prewie",
    },
  });
});