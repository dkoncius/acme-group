const video = document.querySelector(".video-section video");
const videoIcon = document.querySelector(".video-section .video-play-icon");
let play = false;

function toggleVideoPlayback() {
  if (!play) {
    video.play();
    videoIcon.classList.add("hidden");
    play = true;
  } else {
    video.pause();
    videoIcon.classList.remove("hidden");
    play = false;
  }
}

video.addEventListener("click", toggleVideoPlayback);
videoIcon.addEventListener("click", toggleVideoPlayback);


