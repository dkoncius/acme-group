import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// 300s pauzė onload
document.body.style.overflow = "hidden"
setTimeout(()=> {
    document.body.style.overflow = "visible"
}, 300)



// Landing
document.addEventListener("DOMContentLoaded", function() {
gsap.from('.partners p', {
    x: 10,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "1"); 

  gsap.to('.swiper', {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  }, "1")
  

  gsap.utils.toArray('.active-areas .content').forEach((content, index) => {
    gsap.from(content, {
      scrollTrigger: {
        trigger: content,
        start: 'top 85%',
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out"
    });
  });


  gsap.from('.news .content', {
    scrollTrigger: {
      trigger: '.news .content', // Use the class selector directly
      start: 'top 85%',
      end: 'bottom top',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
  });
});