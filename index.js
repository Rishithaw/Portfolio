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
