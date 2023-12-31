import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const animateDigits = () => {
      // Select all the specific digits you want to animate
      const integerDigits = document.querySelectorAll('.number .digit:not(.digit-float)');
      const floatDigit = document.querySelector('.digit-float');
  
      const animateValue = (element, end, size) => {
          let startTimestamp = null;
          const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
              element.textContent = (progress * end).toFixed(size);
              if (progress < 1) {
                  window.requestAnimationFrame(step);
              }
          };
          window.requestAnimationFrame(step);
      };
  
      // Start animation for the integer digits
      integerDigits.forEach((digit) => {
          const targetValue = parseInt(digit.textContent);
          animateValue(digit, targetValue, 0); // Duration in milliseconds
      });
  
      // Start animation for the float digit
      if (floatDigit) {
          const targetValue = parseFloat(floatDigit.textContent);
          animateValue(floatDigit, targetValue, 1); // Duration in milliseconds
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


