const body = document.querySelector("body");
const maxWidth = document.body.offsetWidth;
const goldenRatio = maxWidth / 2;
const maxRotate = 15;
const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger-menu");
const inputForm = document.querySelector(".banner__input");
const popupOpen = document.querySelector(".header__cart-button");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const popupBg = document.querySelector(".bg-popup");
document.body.addEventListener("mousemove", function (event) {
  let position = event.screenX;
  const allFigure = document.querySelectorAll(".information__figure");
  for (let i = 0; i < allFigure.length; i++) {
    if (i % 2 == 0) {
      allFigure[i].style.transform =
        `rotateY(${((goldenRatio + position) * maxRotate) / goldenRatio}deg)` +
        `rotateX(${((goldenRatio - position) * maxRotate) / goldenRatio}deg)`;
    } else {
      allFigure[i].style.transform =
        `rotateY(${(-(goldenRatio + position) * maxRotate) / goldenRatio}deg)` +
        `rotateX(${((goldenRatio - position) * maxRotate) / goldenRatio}deg)`;
    }
  }
});
if (window.outerWidth > 320) {
  let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.5,
  };
  let callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("el-animation");
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  let targets = document.querySelectorAll(".select");
  targets.forEach((target) => {
    observer.observe(target);
  });
} else {
  let targets = document.querySelectorAll(".select");
  targets.forEach((target) => {
    target.style.opacity = "1";
  });
}
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("burger-menu--active");
});
popupOpen.addEventListener("click", () => {
  body.style.overflow = "hidden";
  popupBg.classList.add("bg-popup--active");
});
popupClose.addEventListener("click", () => {
  body.style.overflow = "auto";
  popupBg.classList.remove("bg-popup--active");
});
