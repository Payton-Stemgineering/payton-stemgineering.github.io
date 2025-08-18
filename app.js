const hamburger = document.getElementById("hamburger");
const overlayNav = document.getElementById("overlayNav");
const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
    overlayNav.classList.add("active");
});

close.addEventListener("click", () => {
    overlayNav.classList.remove("active");
})