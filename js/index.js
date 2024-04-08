//Splitting
Splitting();

//case-main
// const caseMain = gsap.utils.toArray(".case-main");
// caseMain.forEach((container) => {
//   const caseTitle = container.querySelector(".case-title");
//   const caseSubTitle = container.querySelector(".case-subTitle");
//   const caseType = container.querySelector(".case-type");
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: container,
//       // markers: true,
//       scrub: 1,
//       start: "top 90%",
//       end: "center 60%",
//       toggleActions: "restart none none reset",
//     },
//   });
//   tl.from(caseTitle, {
//     opacity: 0,
//     yPercent: 50,
//     duration: 1.5,
//     ease: "power2.inOut",
//   });
//   tl.from(
//     caseSubTitle,
//     {
//       opacity: 0,
//       delay: 1,
//       ease: "power2.inOut",
//     },
//     "<"
//   );
//   tl.from(
//     caseType,
//     {
//       opacity: 0,
//       // delay: -1.5,
//       ease: "power2.inOut",
//     },
//     "<"
//   );
// });

//mainKVtitle
const mainKVtitleChar = gsap.utils.toArray(".mainKV-main p");
mainKVtitleChar.forEach(function (element) {
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: element,
  //     toggleActions: "restart none none reset",
  //     // markers: true,
  //   },
  // });
  // tl.from(element, {
  //   // xPercent: -100,
  //   duration: 0.5,
  //   ease: Power2.out,
  // });
  gsap.from(element, {
    duration: 0.5,
    ease: Power2.out,
  });
});

//preCaseBox mask
window.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".case");
  const windowHeight = window.innerHeight;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    const preBox = index > 0 ? boxes[index - 1] : null;

    if (boxTop <= windowHeight / 2 - 100) {
      gsap.to(box, {
        // scale: 1,
        duration: 1,
        ease: Power2.out,
      });
      if (preBox) {
        gsap.to(preBox, {
          duration: 1,
          onStart: function () {
            preBox.classList.add("mask");
          },
        });
      }
    } else {
      gsap.to(box, {
        // scale: 1,
        duration: 1,
        ease: Power2.out,
      });
      if (preBox) {
        gsap.to(preBox, {
          duration: 1,
          onStart: function () {
            preBox.classList.remove("mask");
          },
        });
      }
    }
  });
});

//reveal img
// const revealContainers = document.querySelectorAll(".reveal");

// revealContainers.forEach((container) => {
//   const image = container.querySelector("img");
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: container,
//       toggleActions: "restart none none reset",
//       // markers: true,
//     },
//   });

//   tl.set(container, { autoAlpha: 1 });
//   tl.from(container, {
//     xPercent: -100,
//     duration: 1.5,
//     ease: Power2.out,
//   });
//   tl.from(image, {
//     xPercent: 100,
//     scale: 1.3,
//     duration: 1.5,
//     delay: -1.5,
//     ease: Power2.out,
//   });
// });

//nav change color
window.addEventListener("scroll", function () {
  const darkCase = document.querySelector(".case.dark");
  const nav = document.querySelector(".nav");
  const darkCaseTop = darkCase.getBoundingClientRect().top;
  const navHeight = nav.offsetHeight;
  const img = document.querySelector(".logo img");

  if (darkCaseTop < navHeight) {
    nav.classList.add("light");
    img.setAttribute("src", "images/logo_w.png");
  } else {
    nav.classList.remove("light");
    img.setAttribute("src", "images/logo_b.png");
  }
});
