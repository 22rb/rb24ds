//about title
const animationAbout = {
  x: -100,
  opacity: 0,
  ease: Power2.out,
  delay: 0.8,
};

gsap.from(".about-side", {
  ...animationAbout,
  duration: 1,
});

gsap.from(".about-main", {
  ...animationAbout,
  duration: 1.5,
});
