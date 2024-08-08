document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const cardOwnerInput = form.querySelector('input[name="cardOwner"]');
    const cvvInput = form.querySelector('input[name="cvv"]');
    const cardNumberInput = form.querySelector('input[name="cardNumber"]');
    const monthInput = form.querySelector('select[name="months"]');
    const yearInput = form.querySelector('select[name="years"]');

    const cardOwnerError = document.getElementById('cardOwnerError');
    const cvvError = document.getElementById('cvvError');
    const cardNumberError = document.getElementById('cardNumberError');
    const expirationDateError = document.getElementById('expirationDateError');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let hasError = false;

        cardOwnerError.textContent = '';
        cvvError.textContent = '';
        cardNumberError.textContent = '';
        expirationDateError.textContent = '';
        successMessage.style.display = 'none';

        const cardOwner = cardOwnerInput.value.trim();
        const cvv = cvvInput.value.trim();
        const cardNumber = cardNumberInput.value.trim();
        const month = monthInput.value;
        const year = yearInput.value;

        if (!cardOwner) {
            cardOwnerError.textContent = 'Le nom du titulaire est requis.';
            hasError = true;
        }

        if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
            cvvError.textContent = 'Veuillez entrer un CVV valide (3 chiffres).';
            hasError = true;
        }

        if (!cardNumber || cardNumber.length !== 16 || isNaN(cardNumber)) {
            cardNumberError.textContent = 'Veuillez entrer un numéro de carte valide (16 chiffres).';
            hasError = true;
        }

        if (!month || !year) {
            expirationDateError.textContent = 'Veuillez sélectionner une date d\'expiration valide.';
            hasError = true;
        } else {
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;

            if (parseInt(year) < currentYear || (parseInt(year) === currentYear && month < currentMonth)) {
                expirationDateError.textContent = 'La date d\'expiration n\'est pas valide.';
                hasError = true;
            }
        }

        if (!hasError) {
            successMessage.style.display = 'block';
            form.reset();
        }
    });
});