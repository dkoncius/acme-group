// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  // Your Swiper initialization code here
  const swiper = new Swiper('.soc-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 100,
    slidesPerView: 4,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  
    // If you want navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    speed: 50000
  });
})