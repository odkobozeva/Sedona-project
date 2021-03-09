const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".page-header__toggle");
const pageHeader = document.querySelector(".page-header");

pageHeader.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("page-header__toggle--opened");
  navMain.classList.toggle("main-nav--closed");
});
