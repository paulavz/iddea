const initImg = document.getElementById("home-background");
const fondo1 = document.getElementById("about-background");
const fondo2 = document.getElementById("contact-background");

const lazyLoad = (container, urlImage, classImage) => {
	return fetch(urlImage)
		.then((resp) => resp.blob())
		.then((blob) => {
			const url = URL.createObjectURL(blob);
			container.style.background = `#f3f3f3 url(${url}) no-repeat`;
			container.style.backgroundPosition = "center";
			container.style.backgroundSize = "cover";
			container.classList.add(classImage);
		});
};

window.addEventListener("load", function (event) {
	lazyLoad(
		initImg,
		"https://iddea.herokuapp.com/images/rect853.png",
		"principal-height"
	).then(() => {
		lazyLoad(
			fondo1,
			"https://iddea.herokuapp.com/images/fondo2.png",
			"about-height"
		).then(() => {
			lazyLoad(
				fondo2,
				"https://iddea.herokuapp.com/images/fondo3.png",
				"contact-height"
			);
		});
	});
});
