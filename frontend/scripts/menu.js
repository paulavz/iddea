const menu = document.getElementById("menu");
const button = document.getElementById("menu-icon");
const image = button.querySelector("img");

const toggle = () => {
  menu.classList.toggle("open");
  button.classList.toggle("open");
};

const changeIcon = () => {
  image.src = image.src.endsWith("close.svg")
    ? "images/menu.svg"
    : "images/close.svg";
};

button.addEventListener("click", () => {
  toggle();
  setTimeout(changeIcon, 200);
});
