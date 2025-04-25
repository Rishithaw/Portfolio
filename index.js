document.addEventListener('DOMContentLoaded', () => {

    // Typing animation for main heading
    let nameText = "I'm Rishitha Wickramasinghe"; // The sentence that is to be typed
    let nameElement = document.querySelector('#typer'); // Retrieving the element where the text will show
    let nameIndex = 0; // Tracker to find whixh index it's on
    let deletingName = false; // Boolean flag

    // Function for typing an deleting
    function typeName() {

        // Sets the text content based on typing or deleting
        nameElement.textContent = deletingName ? nameText.substring(0, nameIndex--) : nameText.substring(0, nameIndex++);

        // If typing is done, start deleting after a pause
        if (!deletingName && nameIndex > nameText.length) {
            setTimeout(() => deletingName = true, 1100);
        }
        // If deleting is done, start typing again
        else if (deletingName && nameIndex === 0) {
            deletingName = false;
        }

        // Calling the function repeatedly
        setTimeout(typeName, deletingName ? 75 : 150);
    }

    // Typing animation for rotating titles
    let titles = ["Full Stack Developer", "UI/UX Designer", "Web Developer"]; // Array of titles to rotate through
    
    // Retrieving the element where the text will show
    let titleElement = document.querySelector('#title-typer');
    
    // Trackers
    let titleIndex = 0;
    let charIndex = 0;

    // Boolean flag
    let deletingTitle = false;

    // Function to type and delete characters for rotating titles
    function typeTitle() {
        let current = titles[titleIndex]; // Current title to display

        // Set the text content depending on typing or deleting
        titleElement.textContent = deletingTitle
            ? current.substring(0, charIndex--)
            : current.substring(0, charIndex++);

        // Pause and then delete after title is fully typed
        if (!deletingTitle && charIndex > current.length) {
            setTimeout(() => deletingTitle = true, 1000);
        }
        // After deleting, switch to the next title
        else if (deletingTitle && charIndex === 0) {
            deletingTitle = false;
            titleIndex = (titleIndex + 1) % titles.length; // Loop through titles
        }

        // Call function again with a delay
        setTimeout(typeTitle, deletingTitle ? 80 : 120);
    }

    // ------------------ Start the animations ------------------

    // Ensure the typer starts with an empty string
    nameElement.textContent = '';

    // Start both typing animations
    typeName();
    typeTitle();
});
