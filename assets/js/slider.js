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
  //conteiner-slider-feedback
  const swiper2 = new Swiper(".conteiner-slider-feedback", {
    // Optional parameters

    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      1260: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      620: {
        slidesPerView: 0.5,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: ".btn__right__slider__feedback",
      prevEl: ".btn__left__slider__feedback",
    },
  });
  //conteiner-slider-my-course
  const swiper3 = new Swiper(".conteiner-slider-my-course", {
    // Optional parameters

    loop: true,
    //spaceBetween: -65,
    slidesPerView: 4,

    breakpoints: {
      1260: {
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 65,
        slidesPerView: 2,
      },
      620: {
        slidesPerView: 0.5,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".btn__right__slider__course",
      prevEl: ".btn__left__slider__course",
    },
  });
  //conteiner-slider-center
  const swiper4 = new Swiper(".conteiner-slider-center", {
    // Optional parameters

    loop: true,
    //spaceBetween: -65,
    slidesPerView: 3,

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
      nextEl: ".btn__right__slider__center",
      prevEl: ".btn__left__slider__center",
    },
  });
  swiper2.autoplay.start();
});