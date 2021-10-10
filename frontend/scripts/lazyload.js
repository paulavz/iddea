const initImg = document.getElementById("home-background");
const fondo1 = document.getElementById("about");
const fondo2 = document.getElementById("contact");

window.addEventListener("load", function (event) {
	fetch(
		"https://res.cloudinary.com/mismangas/image/upload/v1633895412/rect853_xiondx.png"
	)
		.then((resp) => resp.blob())
		.then((blob) => {
			const url = URL.createObjectURL(blob);
			initImg.style.background = `#f3f3f3 url(${url}) no-repeat`;
			initImg.style.backgroundPosition = "center";
			initImg.style.backgroundSize = "cover";
			initImg.classList.add("principal-height");
		});
	fondo1.classList.add("aboutus-img");
	fondo2.classList.add("contact-img");
});
