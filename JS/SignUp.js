document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = form.querySelector('input[name="username"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const passwordInput = form.querySelector('input[name="password"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let hasError = false;
        clearErrors();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!username) {
            showError(usernameInput, "Le nom d'utilisateur est requis");
            hasError = true;
        } else if (!validateUsername(username)) {
            showError(usernameInput, "Entrer un nom d'utilisateur valide");
            hasError = true;
        }

        if (!email) {
            showError(emailInput, "L'adresse email est requise.");
            hasError = true;
        } else if (!validateEmail(email)) {
            showError(emailInput, "Entrer une adresse email valide");
            hasError = true;
        }

        if (!phone) {
            showError(phoneInput, "Le numéro de téléphone est requis");
            hasError = true;
        } else if (!validatePhone(phone)) {
            showError(phoneInput, "Entrer un numéro de téléphone valide (10 chiffres)");
            hasError = true;
        }

        if (!password) {
            showError(passwordInput, "Le mot de passe est requis");
            hasError = true;
        } else if (!validatePassword(password)) {
            showError(passwordInput, "Entrer un mot de passe valide (8 caractères)");
            hasError = true;
        }

        if (!hasError) {
            const successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
            successMessage.textContent = "Inscription soumise avec succès";
            form.reset();
        }
    });

    function validateUsername(username) {
        const regex = /^[a-zA-Z0-9._-]{3,20}$/;
        return regex.test(username);
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    }

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
        return regex.test(password);
    }

    function showError(input, message) {
        const errorElement = input.parentElement.querySelector('.error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(function(error) {
            error.textContent = '';
        });
    }
});
