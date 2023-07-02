const thm = document.getElementById("themes");
const sht = document.getElementById("themesheet");
const ico = document.getElementById("icon");
const html = document.querySelector("html");

let themeProfile = localStorage.getItem("theme");

function nightblueTheme() {
	sht.removeAttribute("href"); 
	thm.setAttribute("title", 'Cycle to "New Legacy" Theme');
	thm.classList.add("new-legacy");
	thm.classList.remove("nightblue");
}
function newLegacyTheme() {
	sht.setAttribute("href", "https://nainonth.github.io/css/new-legacy.css")
	thm.setAttribute("title", 'Cycle to "Legacy" Theme');
	thm.classList.add("legacy");
	thm.classList.remove("new-legacy");
}
function legacyTheme() {
	sht.setAttribute("href", "https://nainonth.github.io/css/legacy.css");
	thm.setAttribute("title", 'Cycle to "Night Blue" Theme');
	thm.classList.add("nightblue");
	thm.classList.remove("legacy");
}
function matchTheme() {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches){
		nightblueTheme();
	}
	else {
		newLegacyTheme();
	}
}
function findLocalTheme(){
	if (themeProfile == "nightblue") {
		nightblueTheme();
	}
	else if (themeProfile == "new-legacy") {
		newLegacyTheme();
	}
	else if (themeProfile == "legacy") {
		legacyTheme();
	}
	else {
		matchTheme();
	}
}
findLocalTheme();

thm.onclick = function(){
	if (thm.classList.contains("nightblue")) { 
		nightblueTheme();
		localStorage.setItem("theme", "nightblue")
	}
	else if (thm.classList.contains("new-legacy")) {
		newLegacyTheme();
		localStorage.setItem("theme", "new-legacy")
	}
	else if (thm.classList.contains("legacy")) {
		legacyTheme();
		localStorage.setItem("theme", "legacy")
	}
}

const head = document.querySelector("header");
const hid = document.querySelector(".nav-hid");
hid.onclick = function(){
	head.classList.toggle("hide");
	if (head.classList.contains("hide")) {
		hid.setAttribute("title", "Show Header");
	}
	else {
		hid.setAttribute("title", "Hide Header");
	}
}

const men = document.querySelector(".settings");
const ext = document.getElementById("extend");
ext.onclick = function(){
	if (men.classList.contains("active")) {
		men.classList.remove("active");
		ext.setAttribute("title", "Open Settings");
	}
	else {
		men.classList.add("active");
		ext.setAttribute("title", "Close Settings");
	}
}

const proj = document.getElementById("projects");
const clMen = document.getElementById("closeHeaderMenu");
proj.onclick = function(){
	head.classList.add("active");
}
clMen.onclick = function(){
	head.classList.remove("active");
}

function bdLoad(){
	body.className = "loaded";
}
const body = document.querySelector("body");
setTimeout(function(){
	body.classList.add("transparent");
}, 1)
body.onclick = bdLoad;
setTimeout(bdLoad, 1000);

const dmy = new Date();
const date = dmy.getDate();
const mnth = dmy.getMonth();
const year = dmy.getFullYear();
const hAvt = document.querySelector("header [avt]");
function avatar(){
	if (mnth == 5){
		hAvt.classList.add("pride");
	}
	else if (mnth == 9 && date == 31){
		hAvt.classList.add("halloween");
	}
	else if (mnth == 11 && 24 < date <= 31) {
		hAvt.classList.add("christmas");
	}
	else {
		hAvt.className = null;
	}
}
avatar();

const copyright = document.getElementById("copyrightYear");
copyright.innerText = "© " + year;

const copyBtn = document.querySelectorAll("#copyBtn");
copyBtn.forEach(e => {
	e.onclick = function(){
	const data = e.getAttribute("data-copyThis");
	const loct = document.getElementById(data);
	const txt = document.createElement("textarea");
	txt.value = loct.innerText;
	document.body.appendChild(txt);
	txt.select();
	navigator.clipboard.writeText(txt.value);
	document.body.removeChild(txt);
	alert("Copied to Clipboard!");
}})