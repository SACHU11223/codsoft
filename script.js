document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        alert('Thank you for your interest in Codsoft! We will contact you shortly.');
    });
});
