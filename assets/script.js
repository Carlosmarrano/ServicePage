const forms = document.querySelector(".forms");
const links = document.querySelectorAll(".link");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})

btn1.addEventListener('click', () => {
    window.location.href = "index.html"
})

btn2.addEventListener('click', () => {
    window.location.href = "login&register.html"
})

function myFunction() {
    document.getElementById("myForm").action = "/index.html";
}