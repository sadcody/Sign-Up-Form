const passwordInput = document.getElementById("pass");
const confirmPasswordInput = document.getElementById("confPass");

confirmPasswordInput.addEventListener('input', function() {

    if (confirmPasswordInput.value !== passwordInput.value) {
        
        passwordInput.setCustomValidity("Passwords don't match");
        confirmPasswordInput.setCustomValidity("Passwords don't match");
    } else {
        passwordInput.setCustomValidity("");
        confirmPasswordInput.setCustomValidity("");
    }
});