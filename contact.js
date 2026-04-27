// Validates the form on submission
function validate(e) {
    // Hide all error messages before validating
    hideAllErrors();
    clearFormStatus();

    // Check for any input errors
    if (formHasErrors()) {
        // Prevent the form from submitting if errors exist
        e.preventDefault();
        return false;
    }

    e.preventDefault();
    showFormStatus("Thanks for reaching out. Your details are ready to send, and I will follow up as soon as possible.");
    e.target.reset();
    document.getElementById("name").focus();
    return false;
}

// Handles form reset action
function resetForm(e) {
    // Confirm if the user really wants to reset the form
    if (confirm('Made a typo?')) {
        hideAllErrors(); // Clear any error messages
        clearFormStatus();
        document.getElementById("name").focus(); // Set focus back to the first field
        return true;
    }

    // If user cancels the reset
    e.preventDefault();
    return false;
}

// Checks for missing or invalid inputs in the form
function formHasErrors() {
    let errorFlag = false; // Boolean flag
    let requiredFields = ["name", "phone", "email"]; // Fields that are required

    // Loop through each required field
    for (let i = 0; i < requiredFields.length; i++) {
        let field = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(field)) {

            // Shows error message if field is empty
            showError(requiredFields[i]);
            if (!errorFlag) {
                field.focus();
                field.select();
            }
            errorFlag = true;
        }
    }

    // ---------------------- Name validation ----------------------
    let nameValue = document.getElementById("name").value;
    let nameRegex = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s.'-]{1,}$/; // Allows common name characters

    if (!nameRegex.test(nameValue)) {

        // Shows error message if true
        showError("name");
        if (!errorFlag) {
            document.getElementById("name").focus();
            document.getElementById("name").select();
        }
        errorFlag = true;
    }

    // ---------------------- Phone validation ----------------------
    let phoneValue = document.getElementById("phone").value;
    let phoneDigits = phoneValue.replace(/\D/g, "");
    let phoneRegex = /^\d{10}$/; // Allows formatted input after removing punctuation

    if (!phoneRegex.test(phoneDigits)) {

        // Shows error message if true
        showError("phone");
        if (!errorFlag) {
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }
        errorFlag = true;
    }

    // ---------------------- Email validation ----------------------
    let emailValue = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    if (!emailRegex.test(emailValue)) {

        // Shows error message if ture
        showError("email");
        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }
        errorFlag = true;
    }

    return errorFlag; // Return true if any error was found
}

// Hides all error messages on the form
function hideAllErrors() {
    let fields = ["name", "phone", "email"];

    for (let i = 0; i < fields.length; i++) {
        hideError(fields[i]);
    }
}

// Checks if a form field has non-empty input
function formFieldHasInput(fieldElement) {
    return fieldElement.value != null && fieldElement.value.trim() !== "";
}

// Shows an error and marks the related field for assistive technology
function showError(fieldId) {
    document.getElementById(fieldId + "-error").style.display = "block";
    document.getElementById(fieldId).setAttribute("aria-invalid", "true");
}

// Hides an error and clears invalid state
function hideError(fieldId) {
    document.getElementById(fieldId + "-error").style.display = "none";
    document.getElementById(fieldId).setAttribute("aria-invalid", "false");
}

// Shows a confirmation message after successful validation
function showFormStatus(message) {
    let statusMessage = document.getElementById("form-status");
    statusMessage.textContent = message;
    statusMessage.classList.add("success");
}

// Clears any previous form status message
function clearFormStatus() {
    let statusMessage = document.getElementById("form-status");

    if (!statusMessage) {
        return;
    }

    statusMessage.textContent = "";
    statusMessage.classList.remove("success");
}

// Load event listener to attach form handlers once the page is ready
function load() {
    let contactForm = document.getElementById("contact-form");

    if (!contactForm) {
        return;
    }

    // Add validation on form submission
    contactForm.addEventListener("submit", validate);

    // Reset form fields on load (optional UX enhancement)
    contactForm.reset();

    // Add confirmation dialog when resetting the form
    contactForm.addEventListener("reset", resetForm);
}

// Run load function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", load);
