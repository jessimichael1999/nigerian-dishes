"use strict";

const main_Menu = document.querySelector(".mainmenu");
const menuItem = document.querySelectorAll(".menu-item");

const closeMenu = document.querySelector(".closemenu");
const openMenu = document.querySelector(".openmenu");
const nav = document.querySelector(".nav");
const sections = document.querySelector(".sec1");
openMenu.addEventListener("click", function () {
  main_Menu.style.display = "flex";
  main_Menu.style.top = "0";

  openMenu.classList.add("hidden");
});
closeMenu.addEventListener("click", function () {
  main_Menu.style.top = "-100%";

  openMenu.classList.remove("hidden");
});

// ADDING HOVER ANMATION

const fadeOut = function (e) {
  if (e.target.classList.contains("menu-item")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".menu-item");

    const logo = link.closest(".nav").querySelector(".new-logo");

    sibling.forEach((elements) => {
      if (elements !== link) {
        elements.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", fadeOut.bind(0.2));
nav.addEventListener("mouseout", fadeOut.bind(1));
