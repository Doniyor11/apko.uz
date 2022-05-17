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
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
});


swiper.on('slideChange', function () {
  console.log('slide changed');
});

// const slider = document.querySelector('.swiper-wrapper')


// slider.addEventListener('change', function (realIndex) {
//   console.log('ok')
//   if (document.querySelector('.swiper-slide.swiper-slide-active').classList.contains('dark')) {
//     document.querySelector('.swiper__info-boxes').classList.add('active')
//   } else {
//     document.querySelector('.swiper__info-boxes').removeClass('active');
//   }
// });




