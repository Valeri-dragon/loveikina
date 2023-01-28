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
  //conteiner-slider-interest
   const swiper1 = new Swiper(".conteiner-slider-interest", {
     // Optional parameters

     loop: true,
     slidesPerView: 2,
    

     /* breakpoints: {
       1560: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 1,
       },
     },*/

     // Navigation arrows
     navigation: {
       nextEl: ".btn__right__slider__interest",
       prevEl: ".btn__left__slider__interest",
     },
   });
});