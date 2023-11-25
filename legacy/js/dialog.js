const id = document.querySelectorAll("#showDialog");
id.forEach(e => {
e.onclick = function(){
const data = e.getAttribute("data-locate");
const loct = document.getElementById(data);
loct.showModal();
if (loct.open) {
loct.onclick = function(){
loct.close();
}}}})