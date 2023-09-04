import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");
const swiper = new Swiper(".swiper", {
  // slide 間距

  //   slidesPerView: 1,
  slidesPerGroup: 4,
  //斷點
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 3,
    },
  },
  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  // 使 swiper 可以使用滑鼠滾輪捲動
  mousewheel: true,
});
