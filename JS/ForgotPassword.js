document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[name="email"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let hasError = false;
        clearErrors();

        const email = emailInput.value.trim();

        if (!email) {
            showError(emailInput, "L'adresse email est requise");
            hasError = true;
        } else if (!validateEmail(email)) {
            showError(emailInput, "Entrer une adresse email valide");
            hasError = true;
        }

        if (!hasError) {
            const successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
            successMessage.textContent = "Un email de réinitialisation a été envoyé";
            form.reset();
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
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
