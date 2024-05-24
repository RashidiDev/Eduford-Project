let headerMain = document.querySelectorAll(".header-animate");
const navOpenBtnElem = document.querySelector(".nav-open");
const navCloseBtnElem = document.querySelector(".nav-close");
const navMenuElem = document.querySelector(".nav-links");

window.onload = () => {
  headerMain.forEach(element => {
    element.classList.add("show-animate");
  });
};

navOpenBtnElem.addEventListener("click", () => {
  navMenuElem.classList.add("nav-menu-show");
  navOpenBtnElem.setAttribute("display", "none");
});

navCloseBtnElem.addEventListener("click", () => {
  navMenuElem.classList.remove("nav-menu-show");
  navOpenBtnElem.setAttribute("display", "block");
});
