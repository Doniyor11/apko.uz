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

Swiper.use([Navigation, Pagination]);
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



