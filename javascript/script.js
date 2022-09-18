const burger = document.querySelector("button");
const menu = document.querySelector(".nav_menu");

window.addEventListener("load", sidenVises);

function sidenVises() {}

burger.addEventListener("click", activeteBurgerMenu);

function activeteBurgerMenu() {
  console.log("activeteBurgerMenu");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
