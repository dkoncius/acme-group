import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Word spliting animation and video fade in animation
document.addEventListener("DOMContentLoaded", function() {
  const tl = gsap.timeline();

  // Animate the video
  tl.from('.bg-video', {
      duration: 2,
      opacity: 0,
      x: -40,
      scale: 1.1,
      ease: 'power2.out'
  });

 // Animate h1 .fill element
 tl.from('h1 .fill', {
  y: 200,
  clipPath: "inset(0 0 100% 0)",
  duration: 1,
  ease: "power3.out"
}, "1"); 

  // Animate scroll-down text
  tl.from('.scroll-down p', {
    duration: 0.8,
    opacity: 0,
    y: -20,
    ease: 'power3.out'
});

// Animate each dot sequentially
tl.from('.scroll-down .dot-1', {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    ease: 'back.out'
})
.from('.scroll-down .dot-2', {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    ease: 'back.out'
}, '-=0.3') // Overlap with the previous animation for smooth transition
.from('.scroll-down .dot-3', {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    ease: 'back.out'
}, '-=0.3'); // Overlap with the previous animation


});




// Animation to fade out the '.scroll-down' element
let tl = gsap.timeline({ 
  scrollTrigger: { 
      trigger: '.loading-section', 
      scrub: 0.3, 
      start: "top+=200", 
      end: "+=1500",
      markers: false,
      onEnter: () => gsap.set(".scroll-down", { opacity: 0, immediateRender: false }) // Instantly hides the element when scrolling starts
  },
  onComplete: function() {
    // Kill the timeline to prevent further animations
    tl.kill();

    // Redirect after a slight delay
    setTimeout(() => {
        window.location.href = '/src/pages/landing.html';
    });
  }
})
  .to(".form-1", { scale: 1, duration: 1, ease: "sine.out" })
  .to(".scroll-down", { opacity: 0, duration: 1, ease: "sine.out" }, "-=0.5")
  .to("h1 .outline", { clipPath: "circle(110% at 46% 53%)", duration: 1, ease: "sine.out" }, "-=1.5")
  .to(".form-1", { borderRadius: "47% 25% 44% 25% / 40% 25% 40% 25%", duration: 1, ease: "sine.out" }, "-=1.5")
  .to(".form-1", { borderRadius: "0% 0% 32% 0% / 33% 34% 29% 27%", duration: 1, ease: "sine.out" }, "1")
  .to(".form-1", { width: "120%", duration: 1, ease: "sine.out" }, "1")
  .to(".form-2", { x: "0", y: "0", duration: 1, ease: "sine.out" }, "0")
  .to(".form-1 .fill", {clipPath: () => getClipPath(), duration: 1, ease: "sine.out" }, "-=1.8")
  .to(".logo" , { y: 0, clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power3.out", delay: 2 }, "-=2.5")
  .to(".right", { y: 0, clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power3.out" }, "-=2")
  .to(".iniciatives", {  y: 50, clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power3.out" }, "<")
  .to(".circle-in", { borderWidth: "120dvw", duration: 1, ease: "sine.out" }, "0")


//   Scroll to top after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Mobile
function getClipPath() {
return window.innerWidth < 769 ? "inset(2.36% 0% 22% 16.4% round 74px 0)" : "inset(2.1% 0% 22% 16.4% round 228px 0)";
}