import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Elements
const swiperExit = document.querySelector(".swiper-exit");
const gallerySwiper = document.querySelector(".gallery-swiper");
const galleryItems = document.querySelectorAll(".gallery img, .gallery video"); // Add a class to your gallery items

// Event listener to close the swiper
swiperExit.addEventListener("click", () => {
    gallerySwiper.classList.remove("show");
});

// Initialize the swiper
const swiper = new Swiper(gallerySwiper, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // Pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    on: {
      slideChange: function () {
          const previousSlide = this.slides[this.previousIndex];
          const video = previousSlide.querySelector('video');
          if (video) {
              video.pause();
          }
      }
  }
});


// Event listeners for gallery items
galleryItems.forEach((item, index) => {
  // Create and append an icon to each item
  const icon = createIcon(item);
  item.parentNode.insertBefore(icon, item.nextSibling);

  // Event listener for opening the swiper on click
  item.addEventListener("click", () => {
      gallerySwiper.classList.add("show");
      swiper.slideToLoop(index);
  });

  // Show the icon on mouse enter
  item.addEventListener("mouseenter", () => {
      icon.style.display = 'block';
  });

  // Hide the icon on mouse leave
  item.addEventListener("mouseleave", () => {
      icon.style.display = 'none';
  });
});

function createIcon(item) {
  const icon = document.createElement("img");
  icon.src = item.tagName.toLowerCase() === 'img' ? "/tvarumas/image-icon.svg" : "/tvarumas/video-icon.svg";
  icon.classList.add("icon-overlay");
  icon.style.display = 'none'; // Initially hide the icon
  return icon;
}