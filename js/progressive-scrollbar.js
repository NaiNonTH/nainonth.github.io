const main = document.querySelector(".scrollbar");
const prgs = document.getElementById("progress");
const curs = document.querySelector(".scrollbar .cursor");
window.onscroll = function(){
	const scr = window.scrollY;
	const hei = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	prgs.style.height = scr / hei * 100 + "%";
	if (prgs.style.height === 100 + "%"){
		prgs.style.borderRadius = 0;
	}
	else if (prgs.style.height != 100 + "%") {
		prgs.style.borderBottomLeftRadius = 6 + "px";
		prgs.style.borderBottomRightRadius = 6 + "px";
	}
}
main.onmousedown = function(e){
	const cur = e.clientY;
	const hei = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	const scn = window.innerHeight;
	const pos = cur / scn * hei;
	window.scrollTo(0, pos);
}
main.onmousemove = function(e){
	const cur = e.clientY;
	curs.style.transform = "translate3d(-50%, " + cur + "px, 0)";
}
main.onmouseenter = function(){
	html.style.scrollBehavior = "auto";
	prgs.style.transition = "height .15s";
}
main.onmouseleave = function(){
	html.style.scrollBehavior = null;
	prgs.style.transition = null;
}