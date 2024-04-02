//page title
const animationPage = {
  x: -100,
  opacity: 0,
  ease: Power2.out,
  delay: 1,
};

gsap.from(".page-head-title", {
  ...animationPage,
  duration: 1,
});

gsap.from(".page-head-subTitle", {
  ...animationPage,
  duration: 1.5,
});
gsap.from(".page-imgMain", {
  y: 100,
  scale: 0.8,
  duration: 2,
});

//page-img
const pageImgContainers = document.querySelectorAll(".page-img");

pageImgContainers.forEach((container) => {
  const image = container.querySelector("img");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset",
      // markers: true,
    },
  });

  tl.from(image, {
    y: 100,
    scale: 0.8,
    duration: 0.8,
  });
});
