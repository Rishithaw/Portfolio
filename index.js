document.addEventListener('DOMContentLoaded', () => {
    // Typing animation for main heading
    let nameText = "I'm Rishitha Wickramasinghe";
    let nameElement = document.querySelector('#typer');
    let nameIndex = 0;
    let deletingName = false;

    function typeName() {
        nameElement.textContent = deletingName ? nameText.substring(0, nameIndex--) : nameText.substring(0, nameIndex++);

        if (!deletingName && nameIndex > nameText.length) {
            setTimeout(() => deletingName = true, 1100);
        } else if (deletingName && nameIndex === 0) {
            deletingName = false;
        }

        setTimeout(typeName, deletingName ? 75 : 150);
    }

    // Typing animation for rotating titles
    let titles = ["Full Stack Developer", "UI/UX Designer", "Web Developer"];
    let titleElement = document.querySelector('#title-typer');
    let titleIndex = 0;
    let charIndex = 0;
    let deletingTitle = false;

    function typeTitle() {
        let current = titles[titleIndex];
        titleElement.textContent = deletingTitle
            ? current.substring(0, charIndex--)
            : current.substring(0, charIndex++);

        if (!deletingTitle && charIndex > current.length) {
            setTimeout(() => deletingTitle = true, 1000);
        } else if (deletingTitle && charIndex === 0) {
            deletingTitle = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }

        setTimeout(typeTitle, deletingTitle ? 80 : 120);
    }

    // Auto-update year in footer
    let yearTag = document.getElementById("year");
    if (yearTag) yearTag.textContent = new Date().getFullYear();

    // Start animations
    nameElement.textContent = "";
    typeName();
    typeTitle();
});
