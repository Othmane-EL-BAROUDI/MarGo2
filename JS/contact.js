document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const subjectInput = form.querySelector('input[name="subject"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let hasError = false;

        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        successMessage.classList.add('hidden');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        if (!name) {
            nameError.textContent = 'Le nom est requis.';
            hasError = true;
        }

        if (!email) {  
            emailError.textContent = 'L\'adresse email est requise.';
            hasError = true;
        } else if (!validateEmail(email)) {
            emailError.textContent = 'Veuillez entrer une adresse email valide.';
            hasError = true;
        }

        if (!phone) {
            phoneError.textContent = 'Le téléphone est requis.';
            hasError = true;
        } else if (!validatePhone(phone)) {
            phoneError.textContent = 'Veuillez entrer un numéro de téléphone valide (10 chiffres, sans espaces).';
            hasError = true;
        }

        if (!subject) {
            subjectError.textContent = 'Le sujet est requis.';
            hasError = true;
        }

        if (!message) {
            messageError.textContent = 'Le message est requis.';
            hasError = true;
        }

        if (!hasError) {
            successMessage.textContent = 'SUCCESS!';
            successMessage.classList.remove('hidden');
            successMessage.classList.add('success');
            form.reset();
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    }
});
