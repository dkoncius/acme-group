import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper;

const initializeSwiper = () => {
  swiper = new Swiper('.soc-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 100,
    slidesPerView: 4,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    // Navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 50000,
  });
};

const checkAndInitializeSwiper = () => {
  if (window.innerWidth > 769 && !swiper) {
    initializeSwiper();
  } else if (window.innerWidth <= 769 && swiper) { 
    swiper.destroy();
    swiper = null;
  }
};

// Listen for DOMContentLoaded to initialize Swiper
document.addEventListener('DOMContentLoaded', checkAndInitializeSwiper);

// Resize event listener to handle window resize
window.addEventListener('resize', checkAndInitializeSwiper);
