//	Add the event listener to run when the page is loaded
//document.addEventListener("DOMContentLoaded", load);
const text = "I'm Rishitha Wickramasinghe";
const speed = 150; // typing speed in ms
const pause = 1100; // pause before backspace
const element = document.querySelector('#typer');

let i = 0;
let isDeleting = false;

function type() {
    const currentText = isDeleting ? text.substring(0, i--) : text.substring(0, i++);

    element.textContent = currentText;

    if (!isDeleting && i > text.length) {
        setTimeout(() => isDeleting = true, pause);
    } else if (isDeleting && i === 0) {
        isDeleting = false;
    }

    const delay = isDeleting ? speed / 2 : speed;
    setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    element.textContent = ""; // Clear initial text
    type();
});

const titles = ["Full Stack Developer", "UI/UX Designer", "Web Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeletingTitle = false;
const titleElement = document.querySelector('#title-typer');

function typeTitle() {
    let currentTitle = titles[titleIndex];
    titleElement.textContent = isDeletingTitle ? currentTitle.substring(0, charIndex--) : currentTitle.substring(0, charIndex++);

    if (!isDeletingTitle && charIndex === currentTitle.length + 1) {
        setTimeout(() => isDeletingTitle = true, 1000);
    } else if (isDeletingTitle && charIndex === 0) {
        isDeletingTitle = false;
        titleIndex = (titleIndex + 1) % titles.length;
    }

    const delay = isDeletingTitle ? 80 : 120;
    setTimeout(typeTitle, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    typeTitle();
});
