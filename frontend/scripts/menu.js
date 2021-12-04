/*Posiciones*/
const home = document.getElementById("home").offsetTop;
const about = document.getElementById("about").offsetTop;
const posible = document.getElementById("posible").offsetTop;
const proyectos = document.getElementById("proyectos").offsetTop;
const contact = document.getElementById("contact").offsetTop;
const apoyar = document.getElementById("apoyar").offsetTop;
const screenBody = document.documentElement.scrollHeight;
/**************/
const menu = document.getElementById("menu");
const navegation = document.querySelector(".navegation");
const menuentry = document.getElementById("menu-entry");
const ul = document.querySelector("ul.menu-list").childNodes;

const clean = () => {
	ul.forEach((value) => {
		const sub = value.querySelector(".underline").classList;
		sub.remove("whites");
		sub.remove("whiteb");
		sub.remove("whitec");
	});
};

const start = () => {
	setTimeout(active, 400);
};

const active = () => {
	let ready = false;
	let y = window.scrollY;
	if (y >= proyectos) {
		if (ready === false) {
			ready = true;
			import("./recaptcha.js");
		}
	}
	if (y >= home && y < about) {
		if (ul[0].querySelector(".underline").classList.contains("whites")) return;
		clean();
		ul[0].querySelector(".underline").classList.add("whites");
		return;
	} else if (y >= about && y < proyectos) {
		if (ul[1].querySelector(".underline").classList.contains("whitec")) return;
		clean();
		ul[1].querySelector(".underline").classList.add("whitec");
		return;
	} else if (y >= proyectos && y < posible) {
		if (ul[2].querySelector(".underline").classList.contains("whitec")) return;
		clean();
		ul[2].querySelector(".underline").classList.add("whitec");
		return;
	} else if (y >= posible && y < contact) {
		if (ul[3].querySelector(".underline").classList.contains("whiteb")) return;
		clean();
		ul[3].querySelector(".underline").classList.add("whiteb");
		return;
	} else if (y >= contact && y < apoyar - 20) {
		if (ul[4].querySelector(".underline").classList.contains("whiteb")) return;
		clean();
		ul[4].querySelector(".underline").classList.add("whiteb");
		return;
	} else if (y >= apoyar) {
		if (ul[5].querySelector(".underline").classList.contains("whites")) return;
		clean();
		ul[5].querySelector(".underline").classList.add("whites");
	} else {
		clean();
	}
};

const scrollAnimate = (e) => {
	e.preventDefault();
	const link = e.target.closest(".menu-list a");
	const href = link.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;
	scroll({
		top: offsetTop,
		behavior: "smooth",
	});
	if (window.innerWidth < 600) {
		setTimeout(openMenu, 600);
	}
};

const openMenu = () => {
	navegation.classList.toggle("open-nav");
	menuentry.classList.toggle("menuentry");
	menu.classList.toggle("open");
	ul.forEach((value) => {
		value.childNodes[0].classList.toggle("not-active");
	});
	menuentry.addEventListener("click", scrollAnimate);
	active();
};

menu.addEventListener("click", openMenu);
window.addEventListener("scroll", start);
