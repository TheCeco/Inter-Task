import { scrollHandler, progressEl } from "./navbar.js";

scrollHandler();

window.addEventListener("scroll", scrollHandler);

const home = document.getElementById('home')

home.style.height = `${window.innerHeight}px`
home.style.width = `${window.innerWidth}px`
