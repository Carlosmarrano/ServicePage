const btn3 = document.querySelector("#btn3");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

btn3.addEventListener('click', () => {
    window.location.href = "login&register.html"
})


const headerMenu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".menu-btn");
const headerMenuItems = headerMenu.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("show");
});

headerMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        headerMenu.classList.remove("show");
    });
});