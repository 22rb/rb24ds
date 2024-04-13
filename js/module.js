//wrapperTop & contentMinHeight
$(function () {
  function wrapperTop() {
    const headerHeight = $(".nav").outerHeight();
    $(".wrapper").attr("style", "padding-top:" + headerHeight + "px");
  }
  wrapperTop();

  function contentHeight() {
    const headerHeight = $(".nav").outerHeight();
    const footerHeight = $(".footer").outerHeight(true);
    const contentHeight = $(window).height() - headerHeight - footerHeight;
    $(".content").attr("style", "min-height:" + contentHeight + "px");
  }
  contentHeight();

  $(window).on("resize", function () {
    wrapperTop();
    contentHeight();
  });
});

//cursor
gsap.set(".cursor", {
  force3D: true,
  opacity: 0,
});
gsap.to(".cursor", {
  opacity: 1,
});
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  gsap.to(".cursor", {
    x: x - 30,
    y: y - 30,
    ease: "power3",
  });
});

document.body.addEventListener("mouseleave", () => {
  gsap.to(".cursor", {
    scale: 0,
    duration: 0.1,
    delay: 1.5,
    ease: "none",
  });
});

document.body.addEventListener("mouseenter", () => {
  gsap.to(".cursor", {
    scale: 0.3,
    duration: 0.1,
    delay: 1.5,
    ease: "none",
  });
});

const hoverCursors = document.querySelectorAll('[data-cursor="hover"]');
const moreCaseImg = document.querySelectorAll(".moreCase-item");
const cursor = document.querySelector(".cursor");

hoverCursors.forEach(function (element) {
  element.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 1,
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 0.3,
    });
  });
});

const caseBox = document.querySelectorAll(".case-Box");

caseBox.forEach(function (element) {
  const caseImg = element.querySelector(".case-img");
  const caseMain = element.querySelector(".case-main");
  const caseImgLink = element.querySelector(".case-imgLink");

  caseImg.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      onUpdate: function () {
        cursor.classList.add("view");
      },
    });
    gsap.to(caseMain.children, {
      x: 20,
      ease: Power2.out,
      delay: 0.05,
    });
    gsap.to(caseImgLink, {
      xPercent: -5,
      ease: Power2.out,
    });
  });

  caseImg.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      onUpdate: function () {
        cursor.classList.remove("view");
      },
    });
    gsap.to(caseMain.children, {
      x: 0,
      ease: Power2.out,
      delay: 0.05,
    });
    gsap.to(caseImgLink, {
      xPercent: 0,
      ease: Power2.out,
    });
  });
});

moreCaseImg.forEach(function (element) {
  element.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      onUpdate: function () {
        cursor.classList.add("view");
      },
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      onUpdate: function () {
        cursor.classList.remove("view");
      },
    });
  });
});

//openAn
const tl = gsap.timeline({
  defaults: {
    top: "0",
    duration: 0.3,
    stagger: 0.1,
  },
});

tl.to(".openAnItem", {
  zIndex: -1,
});

tl.from(".js-wrapper", {
  top: "100vh",
  backgroundColor: "#EBEAE8",
  opacity: 0,
});
const openAn = document.querySelector(".openAn");
tl.to(".openAn", {
  onComplete: function () {
    openAn.classList.add("hidden");
  },
});

const mainKVtitle = gsap.utils.toArray(".mainKV-main p");
mainKVtitle.forEach(function (element) {
  tl.to(element, {
    duration: 0,
    onComplete: function () {
      element.classList.add("show");
    },
  });
});
tl.from(".nav", { opacity: 0 });
tl.from(".mainKV-info p", { opacity: 0 }, "+=1");
tl.from(".case", { opacity: 0 });
