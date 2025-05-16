// Select the eye icon and password input elements
let eyeIcon = document.getElementById("eye-icon");
let passwordInput = document.getElementById("passwordInput");

// Initially hide the eye icon
eyeIcon.style.opacity = "0";

function updateEyeIcon() {


    // Show/hide the eye icon based on input length
    eyeIcon.style.opacity = passwordInput.value.length > 0 ? "1" : "0";
    eyeIcon.addEventListener("click", function () {
        // Toggle password visibility
        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // Show password
            this.classList.add("ri-eye-off-line");
            this.classList.remove("ri-eye-line");
        } else {
            passwordInput.type = "password"; // Hide password
            this.classList.remove("ri-eye-off-line");
            this.classList.add("ri-eye-line");
        }
    });
}

passwordInput.addEventListener("input", updateEyeIcon);


window.addEventListener("DOMContentLoaded", updateEyeIcon);