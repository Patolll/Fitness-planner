import "./style.css";
// Toggle mobile menu visibility when the hamburger icon is clicked

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-96");
  } else {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-96");
  }
});
