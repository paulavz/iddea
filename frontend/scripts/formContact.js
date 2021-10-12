const form = document.querySelector(".form");
const error = document.getElementById("error-message");
const success = document.getElementById("error-success");
const chase = document.querySelector(".sk-chase");
let name = document.getElementById("user-name");
let email = document.getElementById("user-email");
let message = document.getElementById("user-mesage");
let button = document.getElementById("button-submit");

form.addEventListener("submit", (e) => {
	button.disabled = true;
	chase.classList.add("block");
	e.preventDefault();
	let response = grecaptcha.getResponse();
	if (response.length == 0) {
		chase.classList.remove("block");
		error.classList.add("block");
		setTimeout(function () {
			error.classList.remove("block");
		}, 2500);
		return;
	}
	let formData = {
		name: name.value,
		email: email.value,
		message: message.value,
	};
	fetch("http://localhost:4200", {
		method: "POST",
		body: JSON.stringify(formData),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((resp) => {
			if (resp.status === 200) {
				chase.classList.remove("block");
				success.classList.add("block");
				reset();
				grecaptcha.reset();
				setTimeout(function () {
					success.classList.remove("block");
				}, 4000);
			}
		})
		.catch((error) => {
			chase.classList.remove("block");
			console.log("Error:", error);
		});
});

const reset = () => {
	name.value = "";
	email.value = "";
	message.value = "";
};
