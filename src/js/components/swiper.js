// Подключение свайпера
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".mySwiper2", {
  // Optional parameters
  direction: 'horizontal',
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
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper3 = new Swiper(".mySwiper4", {
  spaceBetween: 1,
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper4 = new Swiper(".mySwiper5", {
  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,

  // Navigation arrows
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },

});


