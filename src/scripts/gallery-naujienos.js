import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Elements
const swiperExit = document.querySelector(".swiper-exit");
const gallerySwiper = document.querySelector(".gallery-swiper");
const galleryItems = document.querySelectorAll(".gallery img, .gallery video"); // Select gallery items

let scrollPosition = 0;

// Function to disable scrolling and add overlay
function disableScrollAndAddOverlay() {
    scrollPosition = window.pageYOffset; // Save the current scroll position
    const body = document.body;
    body.classList.add("freeze-page", "body-overlay"); // Add both freeze-page and body-overlay classes
    body.style.top = `-${scrollPosition}px`; // Set top to the negative scroll position
}

// Function to enable scrolling and remove overlay
function enableScrollAndRemoveOverlay() {
    const body = document.body;
    body.classList.remove("freeze-page", "body-overlay"); // Remove both freeze-page and body-overlay classes
    body.style.top = '';
    window.scrollTo(0, scrollPosition); // Restore the scroll position
}


// Event listener to close the swiper and remove overlay
swiperExit.addEventListener("click", () => {
    gallerySwiper.classList.remove("show");
    enableScrollAndRemoveOverlay();
    swiper.slideTo(0);
});

// Initialize the swiper
const swiper = new Swiper(gallerySwiper, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30, // Adjust the space between slides
    loop: true,
    centeredSlides: true,

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

    // Event to pause video on slide change
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
        disableScrollAndAddOverlay();
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
    icon.src = item.tagName.toLowerCase() === 'img' ? "/naujienos/image-icon.svg" : "/naujienos/video-icon.svg";
    icon.classList.add("icon-overlay");
    icon.style.display = 'none'; // Initially hide the icon
    return icon;
}
