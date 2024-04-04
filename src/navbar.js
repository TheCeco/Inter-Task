const progressEl = document.getElementById('progress')
progressEl.style.background = '#f1f1f1'
const html = document.querySelector('html')
const links = document.querySelectorAll('nav a');


function scrollHandler() {
    const screenHeight = window.innerHeight
    const scrollY = Math.round(window.scrollY)
    const maxScreenHeight = html.scrollHeight

    const howMuchScroll = screenHeight + scrollY
    const progress = (howMuchScroll / maxScreenHeight) * 100

    progressEl.style.setProperty('--nav-before', `${progress}%`)

    progressBarColorHandler(progress)
}

function progressBarColorHandler(progress) {
    const red = Math.round(168 - (progress * (168 - 51)) / 100);
    const green = Math.round(28 - (progress * (28 - 51)) / 100);
    const blue = Math.round(254 - (progress * (254 - 51)) / 100);
    const color = `rgb(${red}, ${green}, ${blue})`;

    // progressEl.style.setProperty('--nav-before-bgc', color)
}

export {scrollHandler, progressBarColorHandler, progressEl}
