//Hamburger Menu
const hamburgerBtn = document.getElementById("hamburger");
const hamburgerContent = document.querySelectorAll(".main-list li");

let isOpen = false;
hamburgerBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    hamburgerContent.forEach((li) => {
        li.classList.toggle("hamburger-content");
    });
})