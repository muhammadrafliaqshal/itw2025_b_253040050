const menuToggle = document.querySelector(".menu-toggle input");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  // Fungsi ini akan dijalankan ketika input (checkbox) diklik.
  navUl.classList.toggle("slide");
});
