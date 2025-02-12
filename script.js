gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
});

gsap.to('.img-container', {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 1,
    start: "top top",
    end: "bottom+=3000", // Further increased scroll time
    pin: true
  }
});

// Add scroll effect to the first section
gsap.to('.text-content', {
  y: -100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.video-section',
    start: "top top",
    end: "bottom+=3000", // Further increased scroll time
    scrub: 1
  }
});

gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    start: 1,
    end: "bottom top"
  }
});

gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    start: 1,
    end: "bottom top"
  }
});

gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 3,
  scrollTrigger: {
    start: 2,
    end: "bottom top"
  }
});

const tl = gsap.timeline();

tl.from('.left-side div', {
  y: 150,
  opacity: 0,
  stagger: {
    amount: .4
  },
  delay: .5
}).from('.right-side', { opacity: 0, duration: 2 }, .5)
  .to('.wrapper', { x: -window.innerWidth });

ScrollTrigger.create({
  animation: tl,
  trigger: '.wrapper',
  start: "top top",
  end: "+=1500",
  scrub: 1,
  pin: true,
  ease: "ease"
});

gsap.utils.toArray('.col').forEach(image => {
  gsap.fromTo(image, {
    opacity: .3,
    x: 0
  }, {
    opacity: 1,
    x: -50,
    scrollTrigger: {
      trigger: image,
      start: "10%",
      end: "bottom top",
      stagger: {
        amount: .4
      }
    }
  });
});

// Remove pinning for the footer
ScrollTrigger.create({
  trigger: 'footer',
  start: 'top bottom',
  end: 'bottom bottom',
  pin: false, // Ensure footer is not pinned
  pinSpacing: false
});

const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,
  duration: 3
}).from('.txt-bottom', {
  letterSpacing: -10,
  opacity: 0,
  duration: 3
});