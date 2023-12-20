import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Elements
const swiperExit = document.querySelector(".swiper-exit");
const gallerySwiper = document.querySelector(".gallery-swiper");
const galleryItems = document.querySelectorAll(".gallery img, .gallery video"); // Select gallery items
const swiperVideos = document.querySelectorAll(".swiper video"); // Select gallery items

let scrollPosition = 0;

// Function to disable scrolling and add overlay
function disableScrollAndAddOverlay() {
    scrollPosition = window.pageYOffset; // Save the current scroll position
    const body = document.body;
    body.classList.add("body-overlay");
    body.style.top = `-${scrollPosition}px`; // Set top to the negative scroll position
}

// Function to enable scrolling and remove overlay
function enableScrollAndRemoveOverlay() {
    const body = document.body;
    body.classList.remove("body-overlay");
    body.style.top = '';
    window.scrollTo(0, scrollPosition); // Restore the scroll position
}


// Event listener to close the swiper and remove overlay
swiperExit.addEventListener("click", () => {
    gallerySwiper.classList.remove("show");
    enableScrollAndRemoveOverlay();
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
    // Event to pause video on slide change
    on: {
        init: function () {
            updateSlideCounter(this);
        },
        slideChange: function () {
            const previousSlide = this.slides[this.previousIndex];
            if (previousSlide) {
                const video = previousSlide.querySelector('video');
                if (video) {
                    video.pause();
                }
            }
            updateSlideCounter(this);
        }
    }
});

// Slides counter
function updateSlideCounter(swiper) {
    const currentIndex = swiper.realIndex + 1; // +1 because index starts at 0
    const totalSlides = swiper.slides.length;
    const counterElement = document.querySelector('.swiper-slide-counter');
    counterElement.textContent = `${currentIndex} / ${totalSlides}`;
}

// Event listeners for gallery items
galleryItems.forEach((item, index) => {
    // Create and append an icon to each item
    const icon = createIcon(item);
    item.parentNode.insertBefore(icon, item.nextSibling);

    // Event listener for opening the swiper on click
    item.addEventListener("click", () => {
        gallerySwiper.classList.add("show");
        disableScrollAndAddOverlay();
        swiper.slideToLoop(index, 0);
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

// Video play function
let play = false;
swiperVideos.forEach(video => {
    const icon = document.createElement("div")
    icon.classList.add("video-play-icon")
    video.parentNode.append(icon)

    video.addEventListener("click", () => {
        toggleVideoPlayback(video, icon)
    })

    icon.addEventListener("click", () => {
        toggleVideoPlayback(video, icon)
    })
})


function toggleVideoPlayback(video, icon) {
    if (!play) {
      video.play();
      video.controls = true
      video.autoplay = true
      icon.classList.add("hidden");
      play = true;
    } else {
      video.pause();
      play = false;
    }
  }