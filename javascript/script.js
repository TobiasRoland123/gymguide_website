const burger = document.querySelector("button");
const menu = document.querySelector(".navlinks");

window.addEventListener("load", sidenVises);

function sidenVises() {}

burger.addEventListener("click", activeteBurgerMenu);

function activeteBurgerMenu() {
  console.log("activeteBurgerMenu");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
