import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function() {
    gsap.from('.partners p', {
        x: 10,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "1"); 

      gsap.from('.swiper', {
        x: 10,
        opacity: 0,
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
          ease: 'back.in',
          stagger: 0.1,
        });
      });
      
      
      
});
