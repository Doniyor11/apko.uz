// Подключение свайпера
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".mySwiper2", {
  // Optional parameters
  direction: 'horizontal',
  autoplay: 2500,
  mousewheel:
    {
      invert: true,
    },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const slider = document.querySelector('.swiper-wrapper')


slider.addEventListener('slideChange', function (realIndex) {
  if (document.querySelector('.swiper-slide.swiper-slide-active').classList.contains('dark')) {
    document.querySelector('.swiper__info-boxes').classList.add('active')
  } else {
    document.querySelector('.swiper__info-boxes').removeClass('active');
  }
});

//

const swiper2 = new Swiper(".mySwiper3", {
  // Optional parameters
  direction: 'horizontal',
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper3 = new Swiper(".mySwiper4", {
  spaceBetween: 1,
  slidesPerView: 6,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  breakpoints: {
    1440: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    414: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  }
});

const swiper4 = new Swiper(".mySwiper5", {
  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,

  // Navigation arrows
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },

});

const swiper5 = new Swiper(".mySwiper6", {
  // Optional parameters
  spaceBetween: 4,
  slidesPerView: 1,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 1
    }
  }
});

const swiper6 = new Swiper(".mySwiper7", {
  // Optional parameters
  spaceBetween: 4,
  slidesPerView: 1,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 1
    }
  }
});

const swiper7 = new Swiper(".mySwiper8", {
  // Optional parameters
  spaceBetween: 8,
  slidesPerView: 1,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 1
    }
  }
});

const swiper8 = new Swiper(".mySwiper9", {
  // Optional parameters
  spaceBetween: 4,
  slidesPerView: 1,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 1
    }
  }
});

const swiper9 = new Swiper(".mySwiper10", {
  // Optional parameters
  spaceBetween: 3,
  slidesPerView: 3,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 2
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 2
    }
  }
});

const swiper10 = new Swiper(".mySwiper11", {
  // Optional parameters
  spaceBetween: 3,
  slidesPerView: 3,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 2
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 2
    }
  }
});

const swiper11 = new Swiper(".mySwiper12", {
  // Optional parameters
  spaceBetween: 3,
  slidesPerView: 3,
  mousewheel:
    {
      invert: true,
    },
  autoplay:
    {
      delay: 2000,
    },
  loop: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 2
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 2
    }
  }
});
