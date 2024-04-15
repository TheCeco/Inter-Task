const html = document.querySelector("html");
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a");
const footer = document.getElementById("footer");
let maxSectionHeight = window.innerHeight * 4;

function scrollHandler() {
  const navTags = document.querySelectorAll("nav a");
  let currentSection;

  sections.forEach((section) => {
    if (html.scrollTop === section.offsetTop) {
      currentSection = section.id;
    }
  });

  navTags.forEach((tag) => {
    if (tag.textContent.toLocaleLowerCase() === currentSection) {
      tag.style.fontWeight = 800;
    } else {
      tag.style.fontWeight = 600;
    }
  });
}

function progressBarColorHandler() {
  let progress = (window.scrollY / maxSectionHeight) * 100;

  nav.style.background = `linear-gradient(90deg, ${progressColor(
    progress
  )} ${progress}%, #F1F1F1 ${progress}%)`;

  console.log(progress);
  changeFontColor(progress);
}

function progressColor(progress) {
  if (progress <= 25) {
    return "#A81CFE";
  } else if (25 < progress && progress <= 50) {
    return "#7825AA";
  } else if (50 < progress && progress <= 75) {
    return "#552C6F";
  } else {
    return "#333333";
  }
}

function changeFontColor(progress) {
  links.forEach((link) => {
    const linkLocationPerc =
      ((link.offsetLeft + link.offsetWidth) / window.innerWidth) * 100;
    if (progress >= linkLocationPerc) {
      link.style.color = "#f1f1f1";
    } else {
      link.style.color = "#333333";
    }
  });
}

window.addEventListener("scroll", scrollHandler);
window.addEventListener("scroll", progressBarColorHandler);

export { scrollHandler, progressBarColorHandler, maxSectionHeight };
