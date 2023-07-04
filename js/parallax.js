const htr = document.querySelectorAll("#parallax");
htr.forEach(e => {
window.onscroll = function(){
const rect = e.getBoundingClientRect();
const hei = rect.height;
const scr = window.scrollY;
const ofs = parseFloat(e.getAttribute("data-offset"));
if (window.innerWidth >= 850 && scr < hei) {
e.style.transform = "translate3d(0, " + scr * ofs + "px, 0)";
}}
})