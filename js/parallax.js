const htr = document.getElementById("parallax");
window.onscroll = function(){
const rect = htr.getBoundingClientRect();
const hei = rect.height;
const scr = window.scrollY;
if (window.innerWidth >= 850 && scr < hei) {
htr.style.transform = "translate3d(0, " + scr * 0.6 + "px, 0)";
}}