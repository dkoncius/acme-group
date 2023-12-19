const iframe = document.querySelector(".video-section .video");
const videoIcon = document.querySelector(".video-section .video-play-icon");
let play = false;

function toggleVideoPlayback() {
  if (!play) {
    // Play the video by setting the iframe's "src" attribute
    iframe.src = iframe.getAttribute("src");
    videoIcon.classList.add("hidden");
    play = true;
  } else {
    // Pause the video by removing the iframe's "src" attribute
    iframe.removeAttribute("src");
    videoIcon.classList.remove("hidden");
    play = false;
  }
}

videoIcon.addEventListener("click", toggleVideoPlayback);


