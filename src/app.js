import { scrollHandler } from "./navbar.js";
import { createCardsContext } from "./cards.js";

window.addEventListener("scroll", scrollHandler);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.style.height = `${window.innerHeight - 200}px`;
});

const main = document.querySelector("main");

main.style.height = `${window.innerHeight}px`;

createCardsContext();

const footer = document.getElementById("footer");

footer.style.top = `${sections[0].offsetHeight * 3}px`;
