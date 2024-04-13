//Splitting
Splitting();

//mainKVtitle
const mainKVtitleChar = gsap.utils.toArray(".mainKV-main p");
mainKVtitleChar.forEach(function (element) {
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
