// script.js
// Add any interactive JS here (e.g., form validation, menu highlight, etc.)
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active menu based on current page
    const links = document.querySelectorAll('.sidebar ul li a');
    const path = window.location.pathname.split('/').pop();
    links.forEach(link => {
        if(link.getAttribute('href') === path) {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });

    // Simple contact form validation
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out! I will get back to you soon.');
            form.reset();
        });
    }
});
