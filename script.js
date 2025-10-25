// window.addEventListener("scroll", function () {
//   let header = document.querySelector("#header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

function textReveal(){

let elements = document.querySelectorAll(".text");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContent = document.createElement("div");
  textContent.classList.add("block");

  for(let letter of  innerText){
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContent.appendChild(span);
  }

  element.appendChild(textContent);
  element.appendChild(textContent.cloneNode(true));
});

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("play");
  });
});
}
textReveal()

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#header", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeIn,
  })
    .to(".boundingelem", {
      y: 0,
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.6,
    })
    .from(".herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      stagger: 0.3,
    });
}

function setupScrollReveal() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      pin: true,
    },
  });

  tl.fromTo(
    '.profile-img',
    { left: '-70%' },
    { left: '0%', ease: 'power2.out' },
    0
  );

  tl.fromTo(
    '.title-designer',
    { xPercent: 0 },
    { xPercent: -5, ease: 'power2.out' },
    0
  );

  tl.fromTo(
    '.title-devloper',
    { xPercent: 0 },
    { xPercent: 2, ease: 'power2.out' },
    0
  );
}

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  firstPageAnim();
  setupScrollReveal();
  AboutPageAnimation();
  scrollImageAnim();
});

const lenis = new Lenis();




function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function AboutPageAnimation() {
  // Split text into characters
  const split = new SplitType(".reveal-text", { types: "chars" });

  // Animate characters with GSAP + ScrollTrigger
  gsap.from(split.chars, {
    scrollTrigger: {
      trigger: ".reveal-text",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      // pin: true
    },
    stagger: 0.1,
    color:"#222020",
  });

}

function projectsPageAnimation() {
  document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".card");
    const stickySection = window.innerHeight * 5;

    const transforms = [
      [[10, 40, -10, 10], [20, -10, -45, 20]],
      [[0, 47.5, -10, 15], [-25, 15, -45, 30]],
      [[0, 29.5, -10, 5], [-15, -5, -40, 60]],
      [[0, 40, -5, 80], [20, -10, 60, 5]],
      [[10, 35, -15, 30], [25, -15, 60, 95]],
      [[0, 50, 30, 80], [20, -10, 60, 5]],
    ];

    ScrollTrigger.create({
      trigger: ".projects-section",
      start: "top top",
      end: `+=${stickySection}px`,
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Animate each card
        cards.forEach((card, index) => {
          const delay = index * 0.11258;
          const cardProgress = Math.max(
            0,
            Math.min((progress - delay) * 2, 1)
          );

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;
            const yPos = transforms[index][0];
            const rotations = transforms[index][1];

            const cardX = gsap.utils.interpolate(
              cardStartX,
              cardEndX,
              cardProgress
            );

            const yProgress = cardProgress * 3;
            const yIndex = Math.min(
              Math.floor(yProgress),
              yPos.length - 2
            );
            const yInterpolation = yProgress - yIndex;

            const cardY = gsap.utils.interpolate(
              yPos[yIndex],
              yPos[yIndex + 1],
              yInterpolation
            );

            const cardRotation = gsap.utils.interpolate(
              rotations[yIndex],
              rotations[yIndex + 1],
              yInterpolation
            );

            gsap.set(card, {
              xPercent: cardX,
              yPercent: cardY,
              rotation: cardRotation,
              opacity: 1,
            });
          } else {
            gsap.set(card, { opacity: 0 });
          }
        });

        // Animate heading AFTER all cards
        const heading = document.querySelector(".projects-section h1");
        if (heading) {
          // Trigger when 80% of animation done
          const headingThreshold = 0.8;
          if (progress > headingThreshold) {
            const headingProgress = gsap.utils.mapRange(
              headingThreshold,
              1,
              0,
              1,
              progress
            );
            gsap.set(heading, {
              yPercent: gsap.utils.interpolate(0, -20, headingProgress),
              opacity: gsap.utils.interpolate(1, 0, headingProgress),
            });
          }
        }
      },
    });
  });
}

projectsPageAnimation()

// services page animation

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.matchMedia({
    // mobile and small tablets
    "(max-width: 767px)": function() {
      gsap.to(".services__content", {
        xPercent: -90, // mobile: shift to 90%
        ease: "none",
        scrollTrigger: {
          trigger: ".services-section",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=2000", 
          // markers: true
        }
      });
    },

    // desktop and larger
    "(min-width: 768px)": function() {
      gsap.to(".services__content", {
        xPercent: -64, // desktop: shift to 64%
        ease: "none",
        scrollTrigger: {
          trigger: ".services-section",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=2000",
          // markers: true
        }
      });
    }
  });
})


// Get In Touch form validation

// Floating label support for contact inputs/textarea
(function () {
  function updateFilled(el) {
    if (!el) return;
    if (el.value && el.value.trim() !== "") {
      el.classList.add('filled');
    } else {
      el.classList.remove('filled');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.contacts-form .contact-input');
    inputs.forEach((input) => {
      // initialize state
      updateFilled(input);

      // on input update
      input.addEventListener('input', function () {
        updateFilled(input);
      });

      // keep label up on focus (optional visual cue)
      input.addEventListener('focus', function () {
        input.classList.add('focused');
      });
      input.addEventListener('blur', function () {
        input.classList.remove('focused');
        updateFilled(input);
      });
    });

    // Clear inputs after form submission
    const contactForm = document.querySelector('.contacts-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        // Allow normal submit to proceed; if you use AJAX, preventDefault here
        // e.preventDefault();

        // Clear each input/textarea and reset visual classes
        const nameInput = contactForm.querySelector('#name');
        const companyInput = contactForm.querySelector('#company');
        const emailInput = contactForm.querySelector('#email');
        const phoneInput = contactForm.querySelector('#phone');
        const messageInput = contactForm.querySelector('#message');

        [nameInput, companyInput, emailInput, phoneInput, messageInput].forEach((input) => {
          if (input) {
            input.value === '' ? null : input.value = '';
          }
        });

        // If there's any success message or reset focus, handle it here
        // Example: focus first input after submit
        const first = contactForm.querySelector('.contact-input');
        if (first) first.focus();
      });
    }
  });
})();