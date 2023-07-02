const fix = document.getElementById("fixed");
window.addEventListener("scroll", function(){
const rect = fix.getBoundingClientRect();
const hei = rect.height;
const ofs = window.scrollY;
if (window.innerWidth >= 850 && ofs < hei) {
fix.style.transform = "translate3d(0, " + ofs + "px, 0)";
}});