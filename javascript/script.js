const urlOevelser = "https://traeningsoevelser-172f.restdb.io/rest/oevelser";
const option = {
  headers: {
    "x-apikey": "631f0ecefdc15b0265f17313",
  },
};
const template = document.querySelector("template").content;
const main = document.querySelector(".oevelser_grid");
const burger = document.querySelector("button");
const menu = document.querySelector(".navlinks");

window.addEventListener("load", sidenVises);
let oevelser;
let filter = "alle";

function sidenVises() {}

burger.addEventListener("click", activeteBurgerMenu);

function activeteBurgerMenu() {
  console.log("activeteBurgerMenu");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

async function hentData() {
  const respons = await fetch(urlOevelser, option);
  oevelser = await respons.json();
  console.log(oevelser);
  vis();
}

function vis() {
  main.textContent = "";
  oevelser.forEach((oevelse) => {
    const klon = template.cloneNode(true);
    klon.querySelector("img").src = "billeder/tester_oevelse.jpg";
    // console.log(oevelse.billednavn);
    klon.querySelector(".navn").textContent = oevelse.oevelse_navn;
    klon.querySelector(".muskelgruppe").textContent = "Muskelgruppe | " + oevelse.muskelgruppe;
    main.appendChild(klon);
  });
}

hentData();
