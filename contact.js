function validate(e) {
    hideAllErrors();

    if (formHasErrors()) {
        e.preventDefault();
        return false;
    }

    return true;
}

function resetForm(e) {
    if (confirm('Clear form?')) {
        hideAllErrors();
        document.getElementById("name").focus();
        return true;
    }

    e.preventDefault();
    return false;
}

function formHasErrors() {
    let errorFlag = false;
    let requiredFields = ["name", "phone", "email"];

    for (let i = 0; i < requiredFields.length; i++) {
        let field = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(field)) {
            document.getElementById(requiredFields[i] + "-error").style.display = "block";
            if (!errorFlag) {
                field.focus();
                field.select();
            }
            errorFlag = true;
        }
    }

    // Phone validation (10-digit number)
    let phoneValue = document.getElementById("phone").value;
    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneValue)) {
        document.getElementById("phone-error").style.display = "block";
        if (!errorFlag) {
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }
        errorFlag = true;
    }

    // Email validation (simple regex)
    let emailValue = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        document.getElementById("email-error").style.display = "block";
        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }
        errorFlag = true;
    }

    return errorFlag;
}

function hideAllErrors() {
    document.getElementById("name-error").style.display = "none";
    document.getElementById("phone-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
}

function formFieldHasInput(fieldElement) {
    return fieldElement.value != null && fieldElement.value.trim() !== "";
}

function load() {
    document.getElementById("contact-form").addEventListener("submit", validate);
    document.getElementById("contact-form").reset();
    document.getElementById("contact-form").addEventListener("reset", resetForm);
}

document.addEventListener("DOMContentLoaded", load);