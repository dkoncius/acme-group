import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Landing
document.addEventListener("DOMContentLoaded", function() {
  gsap.utils.toArray('section').forEach((content, index) => {
    gsap.from(content, {
      scrollTrigger: {
        trigger: content,
        start: 'top 85%',
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  });


  gsap.utils.toArray('.acme-human .content').forEach((content, index) => {
    gsap.from(content, {
      scrollTrigger: {
        trigger: content,
        start: 'top 85%',
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  gsap.utils.toArray('.acme-human .acme-shape').forEach((content, index) => {
    gsap.from(content, {
      scrollTrigger: {
        trigger: content,
        start: 'top 85%',
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
      clipPath: "inset(0 100% 0 0)",
      duration: 1,
      ease: "power3.out"
    });
  });
});