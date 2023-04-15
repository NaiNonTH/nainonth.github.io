var trg = document.getElementById("nav-cllps--projects");
var cllps = document.querySelector(".menu[type=projects]");
trg.onclick = function(){
cllps.classList.toggle("active");
}