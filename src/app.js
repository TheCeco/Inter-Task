// import { scrollHandler, progressEl } from "./navbar.js";
import { createCardsContext } from "./cards.js";

// scrollHandler();

// window.addEventListener("scroll", scrollHandler);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.style.height = `${window.innerHeight - 100}px`;
  section.style.width = `${window.innerWidth}px`;
});

const container = document.getElementsByClassName('container')[0];

container.style.height = `${window.innerHeight}px`;


createCardsContext();
