const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-nav-container .close-icon");
const mobileNavContainer = document.querySelector(".mobile-nav-container");

menuIcon.addEventListener("click", () => {
    mobileNavContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileNavContainer.classList.remove("active");
});