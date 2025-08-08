import "./root.css";
import "./critical.css";
import "./local.css";

const header = document.querySelector("header");
const hamburger = document.querySelector("button.hamburger");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});
