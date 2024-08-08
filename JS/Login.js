document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let hasError = false;
        clearErrors();

        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        

        if (!email) {
            showError(emailInput, "L'adresse email est requise");
            hasError = true;
        } else if (!validateEmail(email)) {
            showError(emailInput, "Entrer une adresse email valide");
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
            successMessage.textContent = "Connexion réussie";
            form.reset();
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
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
