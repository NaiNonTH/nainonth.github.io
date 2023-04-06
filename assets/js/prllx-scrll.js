// Template by Cagri Kizilkan
const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function () {
var offset = window.scrollY;
parallax.style.backgroundPositionY = offset * -0.15 + "px";
});