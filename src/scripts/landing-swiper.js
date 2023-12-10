// import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

 // import styles bundle
 import 'swiper/css/bundle';


 const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If you want navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If you want pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // If you want scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

 const brandImages = [
  { default: "/svg/bbc.svg", alt: "bbc", small: "/landing/brand-1.svg" },
  { default: "/svg/unilven.svg", alt: "unilven", small: "/landing/brand-2.svg" },
  { default: "/svg/unilven.svg", alt: "unilven", small: "/landing/brand-2.svg" },
  { default: "/svg/deloitee.svg", alt: "deloitee", small: "/landing/brand-3.svg" },
  { default: "/svg/unilven.svg", alt: "unilven", small: "/landing/brand-2.svg" },
  { default: "/svg/unilven.svg", alt: "unilven", small: "/landing/brand-2.svg" },
  { default: "/svg/deloitee.svg", alt: "deloitee", small: "/landing/brand-3.svg" },
  { default: "/svg/deloitee.svg", alt: "deloitee", small: "/landing/brand-3.svg" }
];

function createImageElement(image) {
  let img = document.createElement('img');
  img.src = window.innerWidth < 769 ? image.small : image.default;
  img.alt = image.alt;
  return img;
}

function createSwiperSlide(images) {
  let swiperSlide = document.createElement('div');
  swiperSlide.className = 'swiper-slide';
  images.forEach(image => swiperSlide.appendChild(createImageElement(image)));
  return swiperSlide;
}

function loadBrandImages() {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';

  if (window.innerWidth >= 769) {
    // Group by 4 images per slide for larger screens
    for (let i = 0; i < brandImages.length; i += 4) {
      swiperWrapper.appendChild(createSwiperSlide(brandImages.slice(i, i + 4)));
    }
  } else {
    // Split all brands into two slides for smaller screens
    const halfLength = Math.ceil(brandImages.length / 2);
    swiperWrapper.appendChild(createSwiperSlide(brandImages.slice(0, halfLength)));
    swiperWrapper.appendChild(createSwiperSlide(brandImages.slice(halfLength)));
  }
}

let mySwiper; // Declare Swiper instance outside so it can be accessed globally

function initializeSwiper() {
  if (window.innerWidth < 769) {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null; // Set to null after destruction
    }
  } else if (!mySwiper) {
    mySwiper = new Swiper('.swiper', {
      // Swiper parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 100,
      autoplay: {
        delay: false,
        disableOnInteraction: false,
      },
      speed: 50000
    });
  }
}

function handleResize() {
  loadBrandImages();
  initializeSwiper();
}

// Combined event listeners for load and resize
window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);
