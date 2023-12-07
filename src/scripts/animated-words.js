import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('text-container');
    var words = container.innerText.split(/\s+/);
    container.innerHTML = words.map(word => `<span style='opacity: 0.5'>${word}</span>`).join(' ');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#text-container span", {
        scrollTrigger: {
            trigger: "#text-container",
            start: "top-=100px bottom", // when the top of the trigger hits the bottom of the viewport
            end: "center+=200px center", // when the bottom of the trigger hits the top of the viewport
            scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false
        },
        opacity: 1,
        stagger: 0.5, // 0.1 seconds between each word's animation
        ease: "none",
    });
});