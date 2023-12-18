import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animateDigits = () => {
      // Select all the specific digits you want to animate
      const integerDigits = document.querySelectorAll('.number .digit:not(.digit-float)');
      const floatDigit = document.querySelector('.digit-float');
  
      const animateValue = (element, start, end, duration) => {
          let startTimestamp = null;
          const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              element.textContent = (progress * (end - start) + start).toFixed(1);
              if (progress < 1) {
                  window.requestAnimationFrame(step);
              }
          };
          window.requestAnimationFrame(step);
      };
  
      // Start animation for the integer digits
      integerDigits.forEach((digit) => {
          const targetValue = parseInt(digit.textContent);
          animateValue(digit, 0, targetValue, 2000); // Duration in milliseconds
      });
  
      // Start animation for the float digit
      if (floatDigit) {
          const targetValue = parseFloat(floatDigit.textContent);
          animateValue(floatDigit, 0, targetValue, 2000); // Duration in milliseconds
      }
}


document.addEventListener('DOMContentLoaded', () => {
    const value2 = document.querySelector(".values-2");
    gsap.from(value2, {
        scrollTrigger: {
            trigger: value2,
            start: 'top center',
            end: 'bottom top',
            onEnter: () => animateDigits(),
            once: true // Ensures the animation runs only once
        },
    });
    
});


