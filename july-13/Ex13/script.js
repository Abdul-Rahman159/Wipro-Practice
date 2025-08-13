const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const form = document.getElementById("loginForm");

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === "") {
        emailError.textContent = "Email is required";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value.trim();
    if (password === "") {
        passwordError.textContent = "Password is required";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

form.addEventListener("submit", function(event) {
    event.preventDefault();  
    
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        alert("Login successful!");
    }
});
