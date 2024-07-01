var tl = gsap.timeline();

tl.from(".menuList", {
  y: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
const wrapper = document.querySelector(".sliderWrapper");
const items = document.querySelectorAll(".menuList");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
