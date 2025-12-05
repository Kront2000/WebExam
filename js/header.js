const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("burgerMenu");
const overlay = document.getElementById("overlay");

burger.onclick = () => {
  burgerMenu.classList.toggle("active");
  overlay.classList.toggle("active");
};

overlay.onclick = () => {
  burgerMenu.classList.remove("active");
  overlay.classList.remove("active");
};