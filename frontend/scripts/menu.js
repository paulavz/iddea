/*IDs*/
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
const ul = document.querySelectorAll("ul.menu-list")[0].childNodes;

const clean = () => {
	ul.forEach((value) => {
		value.childNodes[2].classList.remove("whites");
		value.childNodes[2].classList.remove("whiteb");
	});
};
const active = () => {
	let y = window.scrollY;
	if (y >= home && y < about) {
		if (ul[0].childNodes[2].classList.contains("whites")) return;
		clean();
		ul[0].childNodes[2].classList.add("whites");
		return;
	} else if (y >= about && y < posible) {
		if (ul[1].childNodes[2].classList.contains("whiteb")) return;
		clean();
		ul[1].childNodes[2].classList.add("whiteb");
		return;
	} else if (y >= proyectos && y < contact) {
		if (ul[2].childNodes[2].classList.contains("whiteb")) return;
		clean();
		ul[2].childNodes[2].classList.add("whiteb");
		return;
	} else if (y >= contact && y < apoyar - 20) {
		if (ul[4].childNodes[2].classList.contains("whiteb")) return;
		clean();
		ul[4].childNodes[2].classList.add("whiteb");
		return;
	} else if (y >= apoyar) {
		if (ul[5].childNodes[2].classList.contains("whites")) return;
		clean();
		ul[5].childNodes[2].classList.add("whites");
	} else {
		clean();
	}
};

const scrollAnimate = (e) => {
	e.preventDefault();
	const href = e.path[0].getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;
	scroll({
		top: offsetTop,
		behavior: "smooth",
	});
};

const addClick = (element) => {
	element.addEventListener("click", scrollAnimate);
};

const removeClick = (element) => {
	element.addEventListener("click", scrollAnimate);
};

const changeIcon = () => {
	menu.src = menu.src.endsWith("close.svg")
		? "images/menu.svg"
		: "images/close.svg";
};

const openMenu = () => {
	navegation.classList.toggle("open-nav");
	menuentry.classList.toggle("menuentry");
	menu.classList.toggle("open");
	setTimeout(changeIcon, 200);
	ul.forEach((value) => {
		value.childNodes[0].classList.toggle("not-active");
		addClick(value);
	});
	active();
};

menu.addEventListener("click", openMenu);
window.addEventListener("scroll", active);
