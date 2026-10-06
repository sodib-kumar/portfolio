const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("menu-open");
    menuToggle.classList.toggle("active");
});