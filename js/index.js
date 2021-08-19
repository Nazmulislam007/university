const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const span = document.querySelectorAll("span");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  span.forEach((e) => {
    e.classList.toggle("active");
  });
});
