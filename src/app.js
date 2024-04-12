// import { scrollHandler, progressEl } from "./navbar.js";
import { createCardsContext } from "./cards.js";

// scrollHandler();

// window.addEventListener("scroll", scrollHandler);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.style.height = `${window.innerHeight}px`;
  section.style.width = `${window.innerWidth}px`;
});

const main = document.querySelector('main');

main.style.height = `${window.innerHeight}px`;


createCardsContext();
